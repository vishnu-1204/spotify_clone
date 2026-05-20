const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
    try {
        console.log("Attempting to insert a dummy playlist to see what error or success occurs...");
        // Let's use a random uuid or a real user id from public.users table or a dummy auth user id
        const dummyUserId = "5cae78b6-8e39-4a37-83a8-4d715cce7e92"; // exists in the playlists table we saw earlier
        
        console.log("1. Trying insert with existing user_id from playlists table:", dummyUserId);
        const res1 = await supabase
            .from('playlists')
            .insert([{
                user_id: dummyUserId,
                name: "Test Playlist 1",
                songs: []
            }])
            .select();
            
        if (res1.error) {
            console.error("Insert 1 failed:", res1.error);
        } else {
            console.log("Insert 1 succeeded:", res1.data);
            // Clean up
            await supabase.from('playlists').delete().eq('id', res1.data[0].id);
        }
        
        const randomUuid = "00000000-0000-0000-0000-000000000000";
        console.log("\n2. Trying insert with non-existent random UUID:", randomUuid);
        const res2 = await supabase
            .from('playlists')
            .insert([{
                user_id: randomUuid,
                name: "Test Playlist 2",
                songs: []
            }])
            .select();
            
        if (res2.error) {
            console.error("Insert 2 failed:", res2.error);
        } else {
            console.log("Insert 2 succeeded:", res2.data);
            await supabase.from('playlists').delete().eq('id', res2.data[0].id);
        }
        
        // Let's query information_schema.table_constraints for playlists
        console.log("\n3. Querying constraints...");
        // Since supabase JS might not allow raw sql easily without RPC, let's fetch a list of column names by selecting 1 row
        const { data: cols, error: colsErr } = await supabase
            .from('playlists')
            .select('*')
            .limit(1);
        if (colsErr) {
            console.error("Failed to fetch columns:", colsErr);
        } else {
            console.log("Columns of playlists:", Object.keys(cols[0] || {}));
        }
    } catch (e) {
        console.error("Uncaught error:", e);
    }
}

checkSchema();
