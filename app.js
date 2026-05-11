import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const songs = [
    {
        id: 1,
        title: "Singari",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491328/Singari_oacgtu.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778493194/singari_z8iyj9.jpg"
    },
    {
        id: 2,
        title: "Thean Kudika",
        artist: "Teejay",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491326/Thean_Kudika_jaolwq.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492933/thean_kudika_vqpvw2.jpg"
    },
    {
        id: 3,
        title: "Poraney Poraney",
        artist: "Ghibran",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491308/Poraney-Poraney_kcvfii.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492929/poranaey_poranaey_qm4ejq.jpg"
    },
    {
        id: 4,
        title: "Nallaru Po",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491231/Nallaru_Po_ozdecu.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492923/nallaru_po_lhvvgp.jpg"
    },
    {
        id: 5,
        title: "Mannipaaya",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491226/Mannipaaya_tcqxdj.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492935/vtv_dvcusx.avif"
    },
    {
        id: 6,
        title: "Orasaadha Usurathan",
        artist: "Vivek-Mervin",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491224/Orasaadha-Usurathan-MassTamilan.com_banpui.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492924/orasadha_svu0oe.jpg"
    },
    {
        id: 7,
        title: "Make Way For The King",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491217/Make-Way-For-The-King-Sai-Abhyankkar-NaaSongs_uqsbvo.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492922/make_way_for_king_cmdipr.jpg"
    },
    {
        id: 8,
        title: "Aaya Sher",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491187/Aaya_Sher_htrhia.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492923/ayya_sher_swyhbw.jpg"
    },
    {
        id: 9,
        title: "Aaoromale",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491186/Aaoromale_axoaty.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492935/vtv_dvcusx.avif"
    },
    {
        id: 10,
        title: "Hosanna",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491651/Hosanna_urkrmy.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492935/vtv_dvcusx.avif"
    },
    {
        id: 11,
        title: "Karuppa Kooda Va",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317837/Karuppa-Kooda-Va-MassTamilan.dev_biagew.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778493092/karrupu_kooda_va_pq84if.jpg"
    },
    {
        id: 12,
        title: "Verappa",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317834/Verappa-MassTamilan.dev_m59tph.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492934/verrappa_tnsnqq.jpg"
    },
    {
        id: 13,
        title: "Raavana Mavandaa",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317832/Raavana-Mavandaa-MassTamilan.dev_bn4zpg.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492930/ravana_mavanda_s1vkbr.jpg"
    },
    {
        id: 14,
        title: "Pavazha Malli Unplugged",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317829/Pavazha_Malli_Unplugged_vij0l0.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492926/pavazha_malli_unplugged_kvl0ty.jpg"
    },
    {
        id: 15,
        title: "Pavazha Malli",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317829/Pavazha_Malli_wjhur6.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492927/pavazha_malli_x8nej4.jpg"
    }
];

let currentSongIndex = localStorage.getItem('lastSongIndex') ? parseInt(localStorage.getItem('lastSongIndex')) : 0;
let isPlaying = false;
let isDragging = false;
let isShuffle = localStorage.getItem('isShuffle') === 'true';
let repeatMode = localStorage.getItem('repeatMode') || 'none'; // none, one, all
let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
let playlists = JSON.parse(localStorage.getItem('playlists')) || ["Rock Classics"];
const audio = new Audio();
audio.volume = localStorage.getItem('volume') ? parseFloat(localStorage.getItem('volume')) : 0.8;

// DOM Elements
const songGrid = document.getElementById('song-grid');
const searchInput = document.getElementById('search-input');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeBar = document.getElementById('volume-bar');
const playerImg = document.getElementById('player-img');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const trendingGrid = document.getElementById('trending-grid');
const recommendedGrid = document.getElementById('recommended-grid');
const likedGrid = document.getElementById('liked-grid');
const loginBtn = document.querySelector('.login-btn');
const navLinks = document.querySelectorAll('.nav-links a');
const views = {
    home: document.getElementById('home-view'),
    library: document.getElementById('library-view'),
    queue: document.getElementById('queue-view')
};
const queueToggle = document.getElementById('queue-toggle');
const queueList = document.getElementById('queue-list');
const playlistsGrid = document.getElementById('playlists-grid');
const signupBtnHeader = document.querySelector('.signup-btn');
const loginModal = document.getElementById('login-modal');
const closeLogin = document.getElementById('close-login');
const loginSubmit = document.getElementById('login-submit');
const authButtons = document.querySelector('.auth-buttons');
const userProfile = document.querySelector('.user-profile');
const modalTitle = document.getElementById('modal-title');
const toggleAuth = document.getElementById('toggle-auth');
const toggleAuthText = document.getElementById('toggle-auth-text');
const authForm = document.getElementById('auth-form');
const authEmail = document.getElementById('auth-email');
const authPassword = document.getElementById('auth-password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const rememberContainer = document.getElementById('remember-container');
const termsContainer = document.getElementById('terms-container');
const btnText = document.querySelector('.btn-text');
const btnLoader = document.querySelector('.btn-loader');
const userDisplayName = document.getElementById('user-display-name');
const userAvatar = document.getElementById('user-avatar');
const logoutBtn = document.getElementById('logout-btn');

const API_URL = ''; // Proxy handled by Vite

// Advanced Controls
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const heartBtn = document.querySelector('.current-song i');

// Initialize
function init() {
    checkAuthState();
    switchView('home');
    renderPlaylists();
    loadSong(songs[currentSongIndex], false);
    updateSliderBackground(volumeBar, audio.volume * 100);
    volumeBar.value = audio.volume * 100;
    updateControlUI();
    updateModalUI();
    
    // Nav listeners
    navLinks.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            const view = link.innerText.toLowerCase().includes('library') ? 'library' : 'home';
            switchView(view);
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        };
    });

    // Mobile Nav listeners
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            const view = link.getAttribute('data-view');
            if (view) {
                switchView(view);
                mobileNavLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Focus search if Search is clicked
                if (link.innerText.toLowerCase().includes('search')) {
                    searchInput.focus();
                }

                // Update sidebar active state to match
                navLinks.forEach(l => {
                    const isLibrary = l.innerText.toLowerCase().includes('library');
                    if ((view === 'library' && isLibrary) || (view === 'home' && !isLibrary)) {
                        l.classList.add('active');
                    } else {
                        l.classList.remove('active');
                    }
                });
            }
        };
    });

    document.getElementById('mobile-login').onclick = (e) => {
        e.preventDefault();
        openModal(false);
    };
    
    queueToggle.onclick = () => {
        const isQueue = views.queue.style.display === 'flex' || views.queue.style.display === 'block';
        switchView(isQueue ? 'home' : 'queue');
    };
}

function renderSongs(songsToRender, container = trendingGrid, isSkeleton = false) {
    if (isSkeleton) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 4; i++) {
            const card = document.createElement('div');
            card.className = 'song-card skeleton-card';
            card.innerHTML = `
                <div class="skeleton skeleton-img"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text-short"></div>
            `;
            fragment.appendChild(card);
        }
        container.innerHTML = '';
        container.appendChild(fragment);
        return;
    }

    const fragment = document.createDocumentFragment();
    songsToRender.forEach((song) => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const card = document.createElement('div');
        
        card.className = `song-card ${originalIndex === currentSongIndex && isPlaying ? 'active' : ''}`;
        card.style.animationDelay = `${Math.random() * 0.3}s`;
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}" loading="lazy" decoding="async">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <div class="play-hover">
                <i class="fas ${originalIndex === currentSongIndex && isPlaying ? 'fa-pause' : 'fa-play'}"></i>
            </div>
        `;
        
        card.onclick = () => selectSong(originalIndex);
        fragment.appendChild(card);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
}

function loadSong(song, shouldPlay = true) {
    const currentSongInfo = document.querySelector('.current-song');
    if (currentSongInfo) {
        currentSongInfo.style.opacity = '1';
        currentSongInfo.style.visibility = 'visible';
    }
    
    playerTitle.innerText = song.title;
    playerArtist.innerText = song.artist;
    if (playerImg) playerImg.src = song.cover;
    
    audio.src = song.url;
    
    localStorage.setItem('lastSongIndex', currentSongIndex);
    updateHeartIcon();
    addToRecentlyPlayed(song.id);

    // Update active state in grid
    document.querySelectorAll('.song-card').forEach((card, idx) => {
        card.classList.toggle('active', idx === currentSongIndex && isPlaying);
        const icon = card.querySelector('.play-hover i');
        if (icon) {
            icon.className = `fas ${idx === currentSongIndex && isPlaying ? 'fa-pause' : 'fa-play'}`;
        }
    });

    if (shouldPlay && isPlaying) {
        audio.play();
    }
}

function selectSong(index) {
    if (currentSongIndex === index) {
        togglePlay();
    } else {
        currentSongIndex = index;
        isPlaying = true;
        loadSong(songs[currentSongIndex], true);
        audio.play();
        updatePlayPauseIcon();
    }
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.querySelectorAll('.song-card').forEach(card => card.classList.remove('active'));
    } else {
        audio.play();
        isPlaying = true;
        document.querySelectorAll('.song-card').forEach((card, idx) => {
            if (idx === currentSongIndex) card.classList.add('active');
        });
    }
    updatePlayPauseIcon();
    
    // Update icons in cards without re-rendering everything
    document.querySelectorAll('.song-card').forEach((card, idx) => {
        const icon = card.querySelector('.play-hover i');
        if (icon) {
            const originalIndex = songs.findIndex(s => s.title === card.querySelector('h3').innerText);
            if (originalIndex === currentSongIndex) {
                card.classList.toggle('active', isPlaying);
                icon.className = `fas ${isPlaying ? 'fa-pause' : 'fa-play'}`;
            } else {
                card.classList.remove('active');
                icon.className = 'fas fa-play';
            }
        }
    });
}

function updatePlayPauseIcon() {
    playPauseBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    playerTitle.style.color = isPlaying ? 'var(--accent-purple)' : 'var(--text-white)';
}

function nextSong() {
    if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
        return;
    }

    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    
    isPlaying = true;
    loadSong(songs[currentSongIndex]);
    audio.play();
    updatePlayPauseIcon();
}

function prevSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    isPlaying = true;
    loadSong(songs[currentSongIndex]);
    audio.play();
    updatePlayPauseIcon();
}

function updateProgress() {
    if (isDragging) return;
    const { duration, currentTime } = audio;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        updateSliderBackground(progressBar, progressPercent);
        
        currentTimeEl.innerText = formatTime(currentTime);
        durationEl.innerText = formatTime(duration);
    }
}

function updateControlUI() {
    shuffleBtn.style.color = isShuffle ? 'var(--accent-purple)' : 'var(--text-grey)';
    
    if (repeatMode === 'none') {
        repeatBtn.style.color = 'var(--text-grey)';
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
    } else if (repeatMode === 'all') {
        repeatBtn.style.color = 'var(--accent-purple)';
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
    } else if (repeatMode === 'one') {
        repeatBtn.style.color = 'var(--accent-purple)';
        repeatBtn.innerHTML = '<i class="fas fa-redo-alt"></i><span style="font-size: 8px; position: absolute; margin-top: 8px;">1</span>';
    }
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    localStorage.setItem('isShuffle', isShuffle);
    updateControlUI();
}

function toggleRepeat() {
    if (repeatMode === 'none') repeatMode = 'all';
    else if (repeatMode === 'all') repeatMode = 'one';
    else repeatMode = 'none';
    
    localStorage.setItem('repeatMode', repeatMode);
    updateControlUI();
}

function toggleLike() {
    const songId = songs[currentSongIndex].id;
    const index = likedSongs.indexOf(songId);
    if (index === -1) {
        likedSongs.push(songId);
    } else {
        likedSongs.splice(index, 1);
    }
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    updateHeartIcon();
}

function updateHeartIcon() {
    const songId = songs[currentSongIndex].id;
    if (likedSongs.includes(songId)) {
        heartBtn.className = 'fas fa-heart';
        heartBtn.style.color = 'var(--accent-purple)';
    } else {
        heartBtn.className = 'far fa-heart';
        heartBtn.style.color = 'var(--text-grey)';
    }
}

function addToRecentlyPlayed(songId) {
    recentlyPlayed = recentlyPlayed.filter(id => id !== songId);
    recentlyPlayed.unshift(songId);
    if (recentlyPlayed.length > 10) recentlyPlayed.pop();
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
}

function renderPlaylists() {
    const playlistList = document.querySelector('.playlist-list');
    playlistList.innerHTML = '';
    playlists.forEach(name => {
        const a = document.createElement('a');
        a.href = '#';
        a.innerText = name;
        playlistList.appendChild(a);
    });
}

function createPlaylist() {
    const name = prompt("Enter playlist name:");
    if (name) {
        playlists.push(name);
        localStorage.setItem('playlists', JSON.stringify(playlists));
        renderPlaylists();
    }
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (progressBar.value / 100) * duration;
}

function updateSliderBackground(slider, value) {
    slider.style.background = `linear-gradient(to right, var(--accent-purple) ${value}%, #4d4d4d ${value}%)`;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function getFilteredSongs() {
    const searchTerm = searchInput.value.toLowerCase();
    return songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );
}

// Event Listeners
playPauseBtn.onclick = togglePlay;
nextBtn.onclick = nextSong;
prevBtn.onclick = prevSong;

audio.addEventListener('loadedmetadata', () => {
    durationEl.innerText = formatTime(audio.duration);
});

audio.ontimeupdate = updateProgress;
audio.onended = nextSong;

progressBar.addEventListener('input', () => {
    isDragging = true;
    updateSliderBackground(progressBar, progressBar.value);
    if (audio.duration) {
        const seekTime = (progressBar.value / 100) * audio.duration;
        currentTimeEl.innerText = formatTime(seekTime);
    }
});

progressBar.addEventListener('change', () => {
    isDragging = false;
    updateSliderBackground(progressBar, progressBar.value);
    if (audio.duration) {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
});

volumeBar.oninput = () => {
    audio.volume = volumeBar.value / 100;
    localStorage.setItem('volume', audio.volume);
    updateSliderBackground(volumeBar, volumeBar.value);
};

searchInput.oninput = () => {
    const filtered = getFilteredSongs();
    const isSearching = searchInput.value.trim() !== '';
    
    // Toggle headers based on search state
    document.querySelectorAll('.content-section .section-header').forEach(header => {
        header.style.display = isSearching ? 'none' : 'flex';
    });

    if (filtered.length === 0 && isSearching) {
        trendingGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search-minus"></i>
                <p>No results found for "${searchInput.value}"</p>
                <span>Please check your spelling or try another search term.</span>
            </div>`;
        recommendedGrid.innerHTML = '';
    } else {
        renderSongs(filtered.slice(0, 5), trendingGrid);
        renderSongs(filtered.slice(5), recommendedGrid);
    }
};

shuffleBtn.onclick = toggleShuffle;
repeatBtn.onclick = toggleRepeat;
heartBtn.onclick = toggleLike;

// Keyboard Shortcuts
window.onkeydown = (e) => {
    if (e.target.tagName === 'INPUT') return;
    
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    } else if (e.code === 'ArrowRight') {
        nextSong();
    } else if (e.code === 'ArrowLeft') {
        prevSong();
    } else if (e.code === 'KeyM') {
        audio.muted = !audio.muted;
        volumeBar.value = audio.muted ? 0 : audio.volume * 100;
        updateSliderBackground(volumeBar, volumeBar.value);
    }
};

// Auth Logic Enhanced
let isSignUpMode = false;

function checkAuthState() {
    const user = JSON.parse(localStorage.getItem('spotify_user'));
    if (user && user.isLoggedIn) {
        setLoggedInUI(user.name);
    } else {
        setLoggedOutUI();
    }
}

function setLoggedInUI(name) {
    const user = JSON.parse(localStorage.getItem('spotify_user'));
    authButtons.style.display = 'none';
    userProfile.style.display = 'flex';
    userProfile.title = name || 'Premium User';
    if (userAvatar) {
        userAvatar.src = user?.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}&background=random&color=fff`;
    }
}

function setLoggedOutUI() {
    if (authButtons) authButtons.style.display = 'flex';
    if (userProfile) userProfile.style.display = 'none';
    localStorage.removeItem('spotify_user');
    localStorage.removeItem('spotify_token');
}

function openModal(signup = false) {
    isSignUpMode = signup;
    clearErrors();
    updateModalUI();
    loginModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function clearErrors() {
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    authEmail.style.borderColor = '#727272';
    authPassword.style.borderColor = '#727272';
}

function updateModalUI() {
    if (isSignUpMode) {
        modalTitle.innerText = 'Sign up to start listening';
        btnText.innerText = 'Sign Up';
        rememberContainer.style.display = 'none';
        termsContainer.style.display = 'flex';
        toggleAuthText.innerHTML = 'Already have an account? <span id="toggle-auth">Log in</span>';
    } else {
        modalTitle.innerText = 'Log in to Spotify';
        btnText.innerText = 'Log In';
        rememberContainer.style.display = 'flex';
        termsContainer.style.display = 'none';
        toggleAuthText.innerHTML = 'Don\'t have an account? <span id="toggle-auth">Sign up</span>';
    }
    
    // Re-attach toggle listener
    document.getElementById('toggle-auth').onclick = () => {
        isSignUpMode = !isSignUpMode;
        clearErrors();
        updateModalUI();
    };
}

function validateForm() {
    let isValid = true;
    clearErrors();

    if (!authEmail.value || !authEmail.value.includes('@')) {
        showError(authEmail, emailError, 'Please enter a valid email address.');
        isValid = false;
    }

    if (!authPassword.value || authPassword.value.length < 6) {
        showError(authPassword, passwordError, 'Password must be at least 6 characters.');
        isValid = false;
    }

    if (isSignUpMode && !document.getElementById('terms-check').checked) {
        alert("Please agree to the Terms & Conditions.");
        isValid = false;
    }

    return isValid;
}

function showError(input, errorEl, message) {
    input.style.borderColor = '#f15e6c';
    errorEl.innerText = message;
    errorEl.style.display = 'block';
}

loginBtn.onclick = () => openModal(false);
signupBtnHeader.onclick = () => openModal(true);

closeLogin.onclick = () => {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target === loginModal) {
        closeLogin.click();
    }
};

authForm.onsubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    btnText.style.display = 'none';
    btnLoader.style.display = 'block';
    loginSubmit.disabled = true;

    const endpoint = isSignUpMode ? '/api/auth/signup' : '/api/auth/login';
    const payload = {
        email: authEmail.value,
        password: authPassword.value,
        name: authEmail.value.split('@')[0]
    };

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Authentication failed');
        }

        if (isSignUpMode) {
            // After signup, automatically login or just tell them to login
            alert("Account created successfully! Please log in.");
            isSignUpMode = false;
            updateModalUI();
        } else {
            // Login success
            localStorage.setItem('spotify_token', data.token);
            localStorage.setItem('spotify_user', JSON.stringify({
                ...data.user,
                isLoggedIn: true
            }));
            setLoggedInUI(data.user.name);
            closeLogin.click();
        }
    } catch (error) {
        alert(error.message);
    } finally {
        btnText.style.display = 'block';
        btnLoader.style.display = 'none';
        loginSubmit.disabled = false;
    }
};

logoutBtn && (logoutBtn.onclick = (e) => {
    e.preventDefault();
    setLoggedOutUI();
    location.reload(); 
});

function switchView(viewName) {
    Object.keys(views).forEach(key => {
        if (views[key]) views[key].style.display = 'none';
    });
    
    if (views[viewName]) views[viewName].style.display = 'block';
    
    if (viewName === 'home') {
        renderSongs(songs.slice(0, 5), trendingGrid);
        renderSongs(songs.slice(5), recommendedGrid);
    } else if (viewName === 'library') {
        renderLibrary();
    } else if (viewName === 'queue') {
        renderQueue();
    }
}

function renderLibrary() {
    const liked = songs.filter(s => likedSongs.includes(s.id));
    renderSongs(liked, likedGrid);
    
    playlistsGrid.innerHTML = '';
    playlists.forEach(name => {
        const card = document.createElement('div');
        card.className = 'song-card playlist-card';
        card.innerHTML = `
            <div class="playlist-icon"><i class="fas fa-music"></i></div>
            <h3>${name}</h3>
            <p>Playlist</p>
        `;
        playlistsGrid.appendChild(card);
    });
}

function renderQueue() {
    queueList.innerHTML = '';
    // Next 5 songs as queue
    const queueItems = [];
    for (let i = 1; i <= 5; i++) {
        queueItems.push(songs[(currentSongIndex + i) % songs.length]);
    }
    
    queueItems.forEach((song, idx) => {
        const item = document.createElement('div');
        item.className = 'queue-item';
        item.innerHTML = `
            <span class="queue-index">${idx + 1}</span>
            <img src="${song.cover}" alt="${song.title}">
            <div class="queue-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
        `;
        queueList.appendChild(item);
    });
}

// Start the app
init();

// Profile Navigation Helper
const profileClickZone = document.getElementById('profile-click-zone');
if (profileClickZone) {
    profileClickZone.onclick = () => window.location.href = 'profile.html';
}

const createPlaylistBtn = document.querySelector('.sidebar-section a');
if (createPlaylistBtn) {
    createPlaylistBtn.onclick = (e) => {
        e.preventDefault();
        createPlaylist();
    };
}
