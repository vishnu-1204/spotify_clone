require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.SUPABASE_JWT_SECRET || process.env.JWT_SECRET || 'spotify_clone_secret_key_123';

// Supabase Initialization
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('BACKEND ERROR: Supabase environment variables are missing!');
}

const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

// Middleware
app.use(cors());
app.use(express.json());
 
app.use((req, res, next) => {
    console.log(`[DEBUG] ${req.method} ${req.url}`);
    next();
});
 
// Serve static files from the root directory
const staticPath = path.join(__dirname, '..');
console.log('Serving static files from:', staticPath);
app.use(express.static(staticPath));

// Explicit route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});
 
// Basic root route for the API function
app.get('/api', (req, res) => {
    res.json({ message: 'Spotify Clone API is active' });
});


// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// --- CONFIG ROUTE ---
app.get('/api/config', (req, res) => {
    res.json({
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || process.env.VITE_SUPABASE_ANON_KEY
    });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

// --- AUTH ROUTES ---

app.post('/api/auth/signup', async (req, res) => {
    console.log('Signup route called with:', req.body.email);
    const { email, password, name } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const { data, error } = await supabase
            .from('users')
            .insert([{ email, password: hashedPassword, fullname: name }])
            .select();

        if (error) {
            console.error('Supabase signup error:', error);
            if (error.code === '23505') {
                return res.status(400).json({ error: 'Email already exists' });
            }
            return res.status(500).json({ error: 'Supabase error', detail: error.message });
        }

        if (!data || data.length === 0) {
            return res.status(201).json({ message: 'User created successfully (but could not retrieve ID - check RLS)' });
        }

        res.status(201).json({ message: 'User created successfully', userId: data[0].id });
    } catch (error) {
        console.error('Signup error detail:', error);
        res.status(500).json({ error: 'Server error', detail: error.message || error });
    }
});

app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (error || !user) return res.status(400).json({ error: 'User not found' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
        res.json({ 
            token, 
            user: { 
                id: user.id, 
                name: user.fullname, 
                email: user.email,
                photo: user.photo_url 
            } 
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// --- PROFILE ROUTES ---

app.get('/api/profile', authenticateToken, async (req, res) => {
    try {
        const { data: user, error } = await supabase
            .from('users')
            .select('id, email, fullname, username, age, dob, gender, phone, address, country, bio, photo_url')
            .eq('id', req.user.id)
            .single();

        if (error || !user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.put('/api/profile', authenticateToken, async (req, res) => {
    const updateData = req.body;
    try {
        const { data, error } = await supabase
            .from('users')
            .update(updateData)
            .eq('id', req.user.id)
            .select();

        if (error) throw error;
        res.json({ message: 'Profile updated successfully', user: data[0] });
    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});


// Only listen if not on Vercel (Vercel handles the listener)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`SPOTIFY CLONE SERVER: http://localhost:${PORT}`);
    });
}

// Global Error Handler for JSON responses
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// --- EXPORT FOR VERCEL ---
module.exports = app;
