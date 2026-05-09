const songs = [
    {
        id: 1,
        title: "Karuppa Kooda Va",
        artist: "MassTamilan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317837/Karuppa-Kooda-Va-MassTamilan.dev_biagew.mp3",
        cover: "assets/cover1.png"
    },
    {
        id: 2,
        title: "Verappa",
        artist: "MassTamilan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317834/Verappa-MassTamilan.dev_m59tph.mp3",
        cover: "assets/cover2.png"
    },
    {
        id: 3,
        title: "Raavana Mavandaa",
        artist: "MassTamilan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317832/Raavana-Mavandaa-MassTamilan.dev_bn4zpg.mp3",
        cover: "assets/cover3.png"
    },
    {
        id: 4,
        title: "Pavazha Malli Unplugged",
        artist: "MassTamilan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317829/Pavazha_Malli_Unplugged_vij0l0.mp3",
        cover: "assets/cover4.png"
    },
    {
        id: 5,
        title: "Pavazha Malli",
        artist: "MassTamilan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317829/Pavazha_Malli_wjhur6.mp3",
        cover: "assets/cover5.png"
    }
];

let currentSongIndex = localStorage.getItem('lastSongIndex') ? parseInt(localStorage.getItem('lastSongIndex')) : 0;
let isPlaying = false;
let isDragging = false;
let isShuffle = localStorage.getItem('isShuffle') === 'true';
let repeatMode = localStorage.getItem('repeatMode') || 'none'; // none, one, all
let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
let playlists = JSON.parse(localStorage.getItem('playlists')) || ["Deep Focus", "Instrumental Study", "Chill Vibes"];
let isOnline = navigator.onLine;
let offlineSongs = [];
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
const offlineGrid = document.getElementById('offline-grid');
const offlineSection = document.getElementById('offline-section');
const statusIndicator = document.getElementById('connection-status');
const loginBtn = document.querySelector('.login-btn');
const navLinks = document.querySelectorAll('.nav-links a');
const views = {
    home: document.getElementById('home-view'),
    library: document.getElementById('library-view'),
    queue: document.getElementById('queue-view')
};
const queueToggle = document.getElementById('queue-toggle');
const queueList = document.getElementById('queue-list');
const likedGrid = document.getElementById('liked-grid');
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
const googleBtn = document.querySelector('.google-btn');

// Advanced Controls
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const heartBtn = document.querySelector('.current-song i');

// Initialize
function init() {
    initDB().then(() => {
        loadOfflineSongs();
    });
    switchView('home');
    renderPlaylists();
    loadSong(songs[currentSongIndex], false);
    updateSliderBackground(volumeBar, audio.volume * 100);
    volumeBar.value = audio.volume * 100;
    updateControlUI();
    updateConnectionUI();
    
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
    
    queueToggle.onclick = () => {
        const isQueue = views.queue.style.display === 'flex' || views.queue.style.display === 'block';
        switchView(isQueue ? 'home' : 'queue');
    };
}

function renderSongs(songsToRender, container = trendingGrid, isSkeleton = false) {
    container.innerHTML = '';
    
    if (isSkeleton) {
        for (let i = 0; i < 4; i++) {
            const card = document.createElement('div');
            card.className = 'song-card skeleton-card';
            card.innerHTML = `
                <div class="skeleton skeleton-img"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text-short"></div>
            `;
            container.appendChild(card);
        }
        return;
    }

    songsToRender.forEach((song) => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const card = document.createElement('div');
        const isDownloaded = offlineSongs.some(s => s.id === song.id);
        
        card.className = `song-card ${originalIndex === currentSongIndex ? 'active' : ''}`;
        card.style.animationDelay = `${Math.random() * 0.3}s`;
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <div class="download-btn ${isDownloaded ? 'downloaded' : ''}" title="Download for offline">
                <i class="fas ${isDownloaded ? 'fa-check-circle' : 'fa-arrow-alt-circle-down'}"></i>
            </div>
            <div class="play-hover">
                <i class="fas ${originalIndex === currentSongIndex && isPlaying ? 'fa-pause' : 'fa-play'}"></i>
            </div>
        `;
        
        const dlBtn = card.querySelector('.download-btn');
        dlBtn.onclick = (e) => {
            e.stopPropagation();
            if (!isDownloaded) downloadSong(song, dlBtn);
        };
        
        card.onclick = () => selectSong(originalIndex);
        container.appendChild(card);
    });
}

function loadSong(song, shouldPlay = true) {
    playerTitle.innerText = song.title;
    playerArtist.innerText = song.artist;
    playerImg.src = song.cover;
    
    // Check if we have an offline version
    const offlineSong = offlineSongs.find(s => s.id === song.id);
    if (!isOnline && offlineSong) {
        audio.src = URL.createObjectURL(offlineSong.blob);
    } else {
        audio.src = song.url;
    }
    
    localStorage.setItem('lastSongIndex', currentSongIndex);
    updateHeartIcon();
    addToRecentlyPlayed(song.id);

    // Update active state in grid
    document.querySelectorAll('.song-card').forEach((card, idx) => {
        card.classList.toggle('active', idx === currentSongIndex);
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
        loadSong(songs[currentSongIndex]);
        audio.play();
        updatePlayPauseIcon();
    }
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
    updatePlayPauseIcon();
    renderSongs(getFilteredSongs()); // Update icons in cards
}

function updatePlayPauseIcon() {
    playPauseBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    playerTitle.style.color = isPlaying ? 'var(--spotify-green)' : 'var(--text-white)';
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
    shuffleBtn.style.color = isShuffle ? 'var(--spotify-green)' : 'var(--text-grey)';
    
    if (repeatMode === 'none') {
        repeatBtn.style.color = 'var(--text-grey)';
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
    } else if (repeatMode === 'all') {
        repeatBtn.style.color = 'var(--spotify-green)';
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
    } else if (repeatMode === 'one') {
        repeatBtn.style.color = 'var(--spotify-green)';
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
        heartBtn.style.color = 'var(--spotify-green)';
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

// IndexedDB Helper
let db;
function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("SpotifyOffline", 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            db.createObjectStore("songs", { keyPath: "id" });
        };
        request.onsuccess = (e) => {
            db = e.target.result;
            resolve();
        };
        request.onerror = (e) => reject(e);
    });
}

async function downloadSong(song, btn) {
    if (!isOnline) {
        alert("Must be online to download songs.");
        return;
    }
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    try {
        const response = await fetch(song.url);
        const blob = await response.blob();
        
        const tx = db.transaction("songs", "readwrite");
        const store = tx.objectStore("songs");
        await store.put({ ...song, blob });
        
        btn.innerHTML = '<i class="fas fa-check-circle"></i>';
        btn.classList.add('downloaded');
        loadOfflineSongs();
    } catch (err) {
        console.error("Download failed", err);
        btn.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>';
    }
}

function loadOfflineSongs() {
    const tx = db.transaction("songs", "readonly");
    const store = tx.objectStore("songs");
    const request = store.getAll();
    request.onsuccess = () => {
        offlineSongs = request.result;
        if (offlineSongs.length > 0) {
            offlineSection.style.display = 'block';
            renderSongs(offlineSongs, offlineGrid);
        } else {
            offlineSection.style.display = 'none';
        }
    };
}

function updateConnectionUI() {
    isOnline = navigator.onLine;
    statusIndicator.className = `status-indicator ${isOnline ? 'online' : 'offline'}`;
    statusIndicator.querySelector('span').innerText = isOnline ? 'Online' : 'Offline';
    
    if (!isOnline) {
        // Switch current song to offline if available
        const currentSong = songs[currentSongIndex];
        const offline = offlineSongs.find(s => s.id === currentSong.id);
        if (offline && audio.src.startsWith('http')) {
            const currentTime = audio.currentTime;
            audio.src = URL.createObjectURL(offline.blob);
            audio.currentTime = currentTime;
            if (isPlaying) audio.play();
        }
    }
}

window.addEventListener('online', updateConnectionUI);
window.addEventListener('offline', updateConnectionUI);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (progressBar.value / 100) * duration;
}

function updateSliderBackground(slider, value) {
    slider.style.background = `linear-gradient(to right, var(--spotify-green) ${value}%, #4d4d4d ${value}%)`;
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
    renderSongs(filtered.slice(0, 3), trendingGrid);
    renderSongs(filtered.slice(3), recommendedGrid);
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

// Auth Logic
let isSignUpMode = false;

function openModal(signup = false) {
    isSignUpMode = signup;
    updateModalUI();
    loginModal.style.display = 'flex';
}

function updateModalUI() {
    if (isSignUpMode) {
        modalTitle.innerText = 'Sign up to start listening';
        loginSubmit.innerText = 'Sign Up';
        googleBtn.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo"> Sign up with Google';
        toggleAuthText.innerHTML = 'Already have an account? <span style="color: white; cursor: pointer; text-decoration: underline;" id="toggle-auth">Log in</span>';
    } else {
        modalTitle.innerText = 'Log in to Spotify';
        loginSubmit.innerText = 'Log In';
        googleBtn.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo"> Continue with Google';
        toggleAuthText.innerHTML = 'Don\'t have an account? <span style="color: white; cursor: pointer; text-decoration: underline;" id="toggle-auth">Sign up</span>';
    }
    
    // Re-attach toggle listener since we're replacing innerHTML
    document.getElementById('toggle-auth').onclick = () => {
        isSignUpMode = !isSignUpMode;
        updateModalUI();
    };
}

loginBtn.onclick = () => openModal(false);
signupBtnHeader.onclick = () => openModal(true);

closeLogin.onclick = () => {
    loginModal.style.display = 'none';
};

window.onclick = (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
};

loginSubmit.onclick = () => {
    loginModal.style.display = 'none';
    authButtons.style.display = 'none';
    userProfile.style.display = 'flex';
};

googleBtn.onclick = () => {
    alert("Google integration would go here!");
    loginSubmit.click(); // Dummy login
};

function switchView(viewName) {
    Object.keys(views).forEach(key => {
        if (views[key]) views[key].style.display = 'none';
    });
    
    if (views[viewName]) views[viewName].style.display = 'block';
    
    if (viewName === 'home') {
        renderSongs([], trendingGrid, true);
        renderSongs([], recommendedGrid, true);
        setTimeout(() => {
            renderSongs(songs.slice(0, 3), trendingGrid);
            renderSongs(songs.slice(3), recommendedGrid);
            loadOfflineSongs();
        }, 500);
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

const createPlaylistBtn = document.querySelector('.sidebar-section a');
if (createPlaylistBtn) {
    createPlaylistBtn.onclick = (e) => {
        e.preventDefault();
        createPlaylist();
    };
}
