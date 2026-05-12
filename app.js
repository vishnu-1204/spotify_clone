let supabase = null;

let currentUser = null;
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
let playlists = []; // Will be loaded from Supabase database

let currentQueue = songs;
let activePlaylistId = null;
let currentViewingPlaylistId = null;
let contextSongId = null;
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
const views = {
    home: document.getElementById('home-view'),
    library: document.getElementById('library-view'),
    search: document.getElementById('search-view'),
    queue: document.getElementById('queue-view'),
    playlistDetail: document.getElementById('playlist-detail-view')
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
const userAvatarLetter = document.getElementById('user-avatar-letter');
const logoutBtn = document.getElementById('logout-btn');

// Create Playlist Elements
const createPlaylistModal = document.getElementById('create-playlist-modal');
const closePlaylistModal = document.getElementById('close-playlist-modal');
const createPlaylistForm = document.getElementById('create-playlist-form');
const playlistNameInput = document.getElementById('playlist-name');
const playlistSubmit = document.getElementById('playlist-submit');

// Search Elements
let searchViewInput, clearSearch, searchDefaultContent, searchResultsContent, topResultContainer, songsResultsContainer, artistsResultsGrid, browseGrid;



function initSearchElements() {
    searchViewInput = document.getElementById('search-view-input');
    clearSearch = document.getElementById('clear-search');
    searchDefaultContent = document.getElementById('search-default-content');
    searchResultsContent = document.getElementById('search-results-content');
    topResultContainer = document.getElementById('top-result-container');
    songsResultsContainer = document.getElementById('songs-results-container');
    artistsResultsGrid = document.getElementById('artists-results-grid');
    browseGrid = document.getElementById('browse-grid');
}

// Advanced Controls
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const heartBtn = document.querySelector('.current-song i');

// Initialize
async function init() {
    initSearchElements();
    setupSearchListeners();

    // Sidebar Nav listeners
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.getAttribute('data-view');
            if (view) {
                switchView(view);
                updateNavActiveStates(view);
            }
        });
    });

    // Mobile Nav listeners
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.getAttribute('data-view');
            if (view) {
                switchView(view);
                updateNavActiveStates(view);
                
                // Focus search if Search is clicked
                if (view === 'search' && searchViewInput) {
                    setTimeout(() => searchViewInput.focus(), 100);
                }
            } else if (link.id === 'mobile-login') {
                openModal(false);
            }
        });
    });

    // Initial render
    renderSongs(songs.slice(0, 5), trendingGrid, true);
    renderSongs(songs.slice(5), recommendedGrid, true);

    try {
        const configResponse = await fetch('/api/config');
        const config = await configResponse.json();
        if (config.supabaseUrl && config.supabaseKey) {
            supabase = window.supabase.createClient(config.supabaseUrl, config.supabaseKey);
        }
    } catch (e) {
        console.warn('Could not fetch Supabase config from API:', e);
    }

    checkAuthState();
    switchView('home');
    renderPlaylists();
    loadSong(songs[currentSongIndex], false);
    updateSliderBackground(volumeBar, audio.volume * 100);
    volumeBar.value = audio.volume * 100;
    updateControlUI();
    updateModalUI();
    


    queueToggle.onclick = () => {
        const isQueue = views.queue.style.display === 'flex' || views.queue.style.display === 'block';
        switchView(isQueue ? 'home' : 'queue');
    };
}

// Global Search Logic
function handleSearchInput(e) {
    const query = e.target.value.trim();
    
    // Sync both inputs
    if (e.target === searchInput) {
        if (searchViewInput) searchViewInput.value = query;
    } else {
        if (searchInput) searchInput.value = query;
    }

    // Toggle view if not already on search
    if (query && views.search && views.search.style.display !== 'block') {
        switchView('search');
        updateNavActiveStates('search');
    }

    if (clearSearch) clearSearch.style.display = query ? 'block' : 'none';
    
    if (query) {
        if (searchDefaultContent) searchDefaultContent.style.display = 'none';
        if (searchResultsContent) {
            searchResultsContent.style.display = 'block';
            performSearch(query);
        }
    } else {
        if (searchDefaultContent) searchDefaultContent.style.display = 'block';
        if (searchResultsContent) searchResultsContent.style.display = 'none';
    }
}

function updateNavActiveStates(viewName) {
    document.querySelectorAll('.nav-links a').forEach(l => {
        l.classList.toggle('active', l.getAttribute('data-view') === viewName);
    });
    document.querySelectorAll('.mobile-nav-link').forEach(ml => {
        ml.classList.toggle('active', ml.getAttribute('data-view') === viewName);
    });
}

function setupSearchListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('focus', () => {
            if (views.search.style.display !== 'block') {
                switchView('search');
                updateNavActiveStates('search');
            }
        });
    }

    if (searchViewInput) {
        searchViewInput.addEventListener('input', handleSearchInput);
    }

    if (clearSearch) {
        clearSearch.onclick = () => {
            if (searchViewInput) searchViewInput.value = '';
            if (searchInput) searchInput.value = '';
            handleSearchInput({ target: searchViewInput });
            searchViewInput.focus();
        };
    }
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
            <div class="play-hover" onclick="event.stopPropagation(); selectSong(${originalIndex})">
                <i class="fas ${originalIndex === currentSongIndex && isPlaying && activePlaylistId === null ? 'fa-pause' : 'fa-play'}"></i>
            </div>
            <div class="song-card-options" onclick="event.stopPropagation(); openContextMenu(event, ${song.id})">
                <i class="fas fa-ellipsis-h"></i>
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
        card.classList.toggle('active', activePlaylistId === null && idx === currentSongIndex && isPlaying);
        const icon = card.querySelector('.play-hover i');
        if (icon) {
            icon.className = `fas ${activePlaylistId === null && idx === currentSongIndex && isPlaying ? 'fa-pause' : 'fa-play'}`;
        }
    });
    
    updateActiveRowStates();

    if (shouldPlay && isPlaying) {
        audio.play();
    }
}

function isUserLoggedIn() {
    return !!currentUser;
}

function selectSong(index, contextPlaylistId = null) {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }
    
    if (contextPlaylistId !== activePlaylistId) {
        // Switching context
        activePlaylistId = contextPlaylistId;
        if (activePlaylistId) {
            const playlist = playlists.find(p => p.id === activePlaylistId);
            currentQueue = playlist.songs.map(id => songs.find(s => s.id === id)).filter(Boolean);
        } else {
            currentQueue = songs;
        }
    }
    
    if (currentSongIndex === index && isPlaying) {
        togglePlay();
    } else {
        currentSongIndex = index;
        isPlaying = true;
        loadSong(currentQueue[currentSongIndex], true);
        audio.play();
        updatePlayPauseIcon();
    }
}

function togglePlay() {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.querySelectorAll('.song-card').forEach(card => card.classList.remove('active'));
    } else {
        audio.play();
        isPlaying = true;
        document.querySelectorAll('.song-card').forEach((card, idx) => {
            if (activePlaylistId === null && idx === currentSongIndex) card.classList.add('active');
        });
    }
    updatePlayPauseIcon();
    
    // Update icons in cards without re-rendering everything
    document.querySelectorAll('.song-card').forEach((card, idx) => {
        const icon = card.querySelector('.play-hover i');
        if (icon) {
            const originalIndex = songs.findIndex(s => s.title === card.querySelector('h3').innerText);
            if (activePlaylistId === null && originalIndex === currentSongIndex) {
                card.classList.toggle('active', isPlaying);
                icon.className = `fas ${isPlaying ? 'fa-pause' : 'fa-play'}`;
            } else {
                card.classList.remove('active');
                icon.className = 'fas fa-play';
            }
        }
    });
    
    updateActiveRowStates();
}

function updateActiveRowStates() {
    document.querySelectorAll('.playlist-track-row').forEach((row, idx) => {
        if (activePlaylistId && activePlaylistId === currentViewingPlaylistId && views.playlistDetail.style.display === 'block') {
            const isRowPlaying = (idx === currentSongIndex);
            row.classList.toggle('playing', isRowPlaying);
        } else {
            row.classList.remove('playing');
        }
    });
}

function updatePlayPauseIcon() {
    playPauseBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    playerTitle.style.color = isPlaying ? 'var(--accent-purple)' : 'var(--text-white)';
}

function nextSong() {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }

    if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
        return;
    }

    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * currentQueue.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % currentQueue.length;
    }
    
    isPlaying = true;
    loadSong(currentQueue[currentSongIndex]);
    audio.play();
    updatePlayPauseIcon();
}

function prevSong() {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }

    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * currentQueue.length);
    } else {
        currentSongIndex = (currentSongIndex - 1 + currentQueue.length) % currentQueue.length;
    }
    isPlaying = true;
    loadSong(currentQueue[currentSongIndex]);
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
    const songId = currentQueue[currentSongIndex].id;
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
    const songId = currentQueue[currentSongIndex].id;
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

async function loadUserPlaylists() {
    if (!currentUser || !supabase) return;
    try {
        const { data, error } = await supabase
            .from('playlists')
            .select('*')
            .order('created_at', { ascending: false });
            
        if (!error && data) {
            playlists = data;
            renderPlaylists();
            if (views.library && views.library.style.display === 'block') {
                renderLibrary();
            }
        }
    } catch (e) {
        console.error("Failed to load playlists:", e);
    }
}

function renderPlaylists() {
    const playlistList = document.querySelector('.playlist-list');
    if (!playlistList) return;
    playlistList.innerHTML = '';
    playlists.forEach(playlist => {
        const a = document.createElement('a');
        a.href = '#';
        a.innerHTML = `<i class="fas fa-music"></i> ${playlist.name}`;
        a.onclick = (e) => {
            e.preventDefault();
            renderPlaylistDetail(playlist.id);
        };
        playlistList.appendChild(a);
    });
}

function openCreatePlaylistModal() {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }
    playlistNameInput.value = '';
    createPlaylistModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    playlistNameInput.focus();
}

function closeCreatePlaylistModal() {
    createPlaylistModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (closePlaylistModal) {
    closePlaylistModal.onclick = closeCreatePlaylistModal;
}

if (createPlaylistForm) {
    createPlaylistForm.onsubmit = async (e) => {
        e.preventDefault();
        const name = playlistNameInput.value.trim();
        if (name && currentUser) {
            const newPlaylist = {
                user_id: currentUser.id,
                name: name,
                songs: []
            };
            
            const { data, error } = await supabase
                .from('playlists')
                .insert([newPlaylist])
                .select();
                
            if (error) {
                alert("Error creating playlist: " + error.message);
                return;
            }
            
            if (data && data.length > 0) {
                playlists.unshift(data[0]);
                renderPlaylists();
                if (views.library && views.library.style.display === 'block') {
                    renderLibrary();
                }
            }
            closeCreatePlaylistModal();
        }
    };
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



function performSearch(query) {
    const searchTerm = query.toLowerCase();
    const filtered = songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );

    if (filtered.length === 0) {
        searchResultsContent.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h2>No results found for "${query}"</h2>
                <p>Please check your spelling or try another search term.</p>
            </div>`;
        return;
    }

    // Restore structure if it was overwritten by no-results
    if (!document.getElementById('top-result-container')) {
        searchResultsContent.innerHTML = `
            <div class="search-results-layout">
                <div class="top-result-section">
                    <h3>Top result</h3>
                    <div id="top-result-container"></div>
                </div>
                <div class="songs-result-section">
                    <div class="section-header">
                        <h3>Songs</h3>
                    </div>
                    <div id="songs-results-container"></div>
                </div>
            </div>
            <section class="content-section">
                <div class="section-header">
                    <h2>Artists</h2>
                </div>
                <div class="song-grid" id="artists-results-grid"></div>
            </section>`;
    }

    renderSearchUI(filtered);
}

function renderSearchUI(results) {
    const topResultCont = document.getElementById('top-result-container');
    const songsCont = document.getElementById('songs-results-container');
    const artistsCont = document.getElementById('artists-results-grid');

    if (!topResultCont || !songsCont || !artistsCont) return;

    // 1. Top Result
    const topResult = results[0];
    topResultCont.innerHTML = `
        <div class="top-result-card" onclick="selectSong(${songs.indexOf(topResult)})">
            <img src="${topResult.cover}" alt="${topResult.title}">
            <h2>${topResult.title}</h2>
            <div class="result-type">Song • ${topResult.artist}</div>
            <div class="play-btn-large">
                <i class="fas fa-play"></i>
            </div>
        </div>
    `;

    // 2. Songs
    songsCont.innerHTML = '';
    results.slice(0, 4).forEach(song => {
        const item = document.createElement('div');
        item.className = 'song-result-item';
        item.onclick = () => selectSong(songs.indexOf(song));
        item.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="song-result-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <span class="song-result-duration">3:45</span>
        `;
        songsCont.appendChild(item);
    });

    // 3. Artists
    const uniqueArtists = [...new Set(results.map(s => s.artist))];
    artistsCont.innerHTML = '';
    uniqueArtists.slice(0, 5).forEach(artistName => {
        const artistSongs = songs.filter(s => s.artist === artistName);
        const card = document.createElement('div');
        card.className = 'song-card artist-card';
        card.innerHTML = `
            <img src="${artistSongs[0].cover}" alt="${artistName}" style="border-radius: 50%;">
            <h3>${artistName}</h3>
            <p>Artist</p>
        `;
        artistsCont.appendChild(card);
    });
}

function renderBrowseGrid() {
    const categories = [
        { name: 'Podcasts', color: '#27856a', img: 'https://t.scdn.co/images/7262179da46543358f756041e8d9fd77.png' },
        { name: 'Made For You', color: '#1e3264', img: 'https://t.scdn.co/images/ea016fe182974c05879796790b9687e3.png' },
        { name: 'New Releases', color: '#e8115b', img: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b8de1f72c5112' },
        { name: 'Tamil', color: '#af2896', img: 'https://i.scdn.co/image/ab67fb8200005caf2964529f79e8557d1904a0cb' },
        { name: 'Pop', color: '#148a08', img: 'https://i.scdn.co/image/ab67fb8200005caff22d3f7457715746b40e7914' },
        { name: 'Hip-Hop', color: '#bc5900', img: 'https://i.scdn.co/image/ab67fb8200005caf37042f497f1f4562c15383f9' }
    ];

    browseGrid.innerHTML = '';
    categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.backgroundColor = cat.color;
        card.innerHTML = `
            <h3>${cat.name}</h3>
            <img src="${cat.img}" alt="${cat.name}">
        `;
        browseGrid.appendChild(card);
    });
}

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

async function checkAuthState() {
    if (!supabase) {
        console.warn("Supabase not initialized, bypassing auth check.");
        setLoggedOutUI();
        return;
    }
    try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            currentUser = session.user;
            const name = session.user.user_metadata?.name || session.user.email.split('@')[0];
            setLoggedInUI(name);
            await loadUserPlaylists();
        } else {
            currentUser = null;
            setLoggedOutUI();
        }
        
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_IN') {
                currentUser = session.user;
                const name = session.user.user_metadata?.name || session.user.email.split('@')[0];
                setLoggedInUI(name);
                await loadUserPlaylists();
            } else if (event === 'SIGNED_OUT') {
                currentUser = null;
                playlists = [];
                renderPlaylists();
                renderLibrary();
                setLoggedOutUI();
            }
        });
    } catch (err) {
        console.error("Auth state check failed:", err);
    }
}



function getAvatarColor(name) {
    const colors = ['#1DB954', '#5e72e4', '#2dce89', '#11cdef', '#fb6340', '#f5365c', '#8965e0', '#f15e6c'];
    let hash = 0;
    for (let i = 0; i < (name || '').length; i++) {
        hash = (name || '').charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
}

function setLoggedInUI(name) {
    const user = JSON.parse(localStorage.getItem('spotify_user'));
    authButtons.style.display = 'none';
    userProfile.style.display = 'flex';
    userProfile.title = name || 'Premium User';
    if (userAvatarLetter) {
        const initial = (name || 'U').charAt(0).toUpperCase();
        userAvatarLetter.innerText = initial;
        userAvatarLetter.style.backgroundColor = getAvatarColor(name);
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
    if (e.target === createPlaylistModal) {
        closeCreatePlaylistModal();
    }
};

authForm.onsubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    btnText.style.display = 'none';
    btnLoader.style.display = 'block';
    loginSubmit.disabled = true;

    try {
        if (!supabase) throw new Error("Supabase is not configured. Please add your URL and Key to app.js.");
        
        if (isSignUpMode) {
            const { data, error } = await supabase.auth.signUp({
                email: authEmail.value,
                password: authPassword.value,
                options: {
                    data: {
                        name: authEmail.value.split('@')[0]
                    }
                }
            });
            if (error) throw error;
            alert("Account created successfully! Please log in.");
            isSignUpMode = false;
            updateModalUI();
        } else {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: authEmail.value,
                password: authPassword.value
            });
            if (error) throw error;
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

logoutBtn && (logoutBtn.onclick = async (e) => {
    e.preventDefault();
    if (supabase) {
        await supabase.auth.signOut();
    }
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
    } else if (viewName === 'search') {
        renderBrowseGrid();
    }
}

function renderLibrary() {
    const liked = songs.filter(s => likedSongs.includes(s.id));
    renderSongs(liked, likedGrid);
    
    playlistsGrid.innerHTML = '';
    playlists.forEach(playlist => {
        const card = document.createElement('div');
        card.className = 'song-card playlist-card';
        card.onclick = () => renderPlaylistDetail(playlist.id);
        card.innerHTML = `
            <div class="playlist-icon"><i class="fas fa-music"></i></div>
            <h3>${playlist.name}</h3>
            <p>Playlist • ${playlist.songs ? playlist.songs.length : 0} songs</p>
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

const createPlaylistBtn = document.getElementById('create-playlist-btn');
if (createPlaylistBtn) {
    createPlaylistBtn.onclick = (e) => {
        e.preventDefault();
        openCreatePlaylistModal();
    };
}

// Context Menu Logic
const contextMenu = document.getElementById('song-context-menu');
const contextPlaylistsSubmenu = document.getElementById('context-playlists-submenu');

window.openContextMenu = function(e, songId) {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }
    e.preventDefault();
    contextSongId = songId;
    
    // Position menu
    contextMenu.style.display = 'block';
    const x = Math.min(e.clientX, window.innerWidth - contextMenu.offsetWidth);
    const y = Math.min(e.clientY, window.innerHeight - contextMenu.offsetHeight);
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    
    // Populate submenu
    contextPlaylistsSubmenu.innerHTML = '';
    if (playlists.length === 0) {
        contextPlaylistsSubmenu.innerHTML = '<div class="context-menu-item" style="color:#757575;cursor:default;">No playlists</div>';
    } else {
        playlists.forEach(p => {
            const item = document.createElement('div');
            item.className = 'context-menu-item';
            item.innerText = p.name;
            item.onclick = (event) => {
                event.stopPropagation();
                addSongToPlaylist(contextSongId, p.id);
                closeContextMenu();
            };
            contextPlaylistsSubmenu.appendChild(item);
        });
    }
}

function closeContextMenu() {
    if (contextMenu) contextMenu.style.display = 'none';
}

async function addSongToPlaylist(songId, playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (playlist && !playlist.songs.includes(songId)) {
        const updatedSongs = [...playlist.songs, songId];
        const { error } = await supabase
            .from('playlists')
            .update({ songs: updatedSongs })
            .eq('id', playlistId);
            
        if (!error) {
            playlist.songs = updatedSongs;
            alert('Added to ' + playlist.name);
            
            if (views.playlistDetail && views.playlistDetail.style.display === 'block' && currentViewingPlaylistId === playlistId) {
                renderPlaylistDetail(playlistId);
            }
        } else {
            alert("Error adding song: " + error.message);
        }
    } else if (playlist) {
        alert('Song is already in ' + playlist.name);
    }
}
window.renderPlaylistDetail = function(playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    switchView('playlistDetail');
    currentViewingPlaylistId = playlistId;
    
    // Reset inline search
    const inlineSearch = document.getElementById('playlist-inline-search');
    const inlineResults = document.getElementById('playlist-add-results');
    const inlineClear = document.getElementById('clear-inline-search');
    if (inlineSearch) inlineSearch.value = '';
    if (inlineResults) inlineResults.innerHTML = '';
    if (inlineClear) inlineClear.style.display = 'none';
    
    document.getElementById('detail-playlist-title').innerText = playlist.name;
    document.getElementById('detail-playlist-count').innerText = playlist.songs.length + ' songs';
    
    const container = document.getElementById('playlist-tracks-container');
    container.innerHTML = '';
    
    playlist.songs.forEach((songId, idx) => {
        const song = songs.find(s => s.id === songId);
        if (!song) return;
        
        const row = document.createElement('div');
        row.className = 'playlist-track-row';
        row.draggable = true;
        row.dataset.index = idx;
        
        if (activePlaylistId === playlistId && currentSongIndex === idx) {
            row.classList.add('playing');
        }

        row.innerHTML = `
            <div class="col-index">
                <span class="index-num">${idx + 1}</span>
                <i class="fas fa-play play-row-icon" style="display:none; cursor:pointer;" onclick="selectSong(${idx}, '${playlist.id}')"></i>
            </div>
            <div class="col-title track-info-col">
                <img src="${song.cover}" alt="${song.title}">
                <div>
                    <div class="track-title">${song.title}</div>
                    <div class="track-artist">${song.artist}</div>
                </div>
            </div>
            <div class="col-album">${song.artist}</div>
            <div class="col-duration" style="display:flex; align-items:center; justify-content:space-between;">
                <span class="track-duration-text">--:--</span>
                <i class="fas fa-trash track-options" onclick="removeFromPlaylist(${idx}, '${playlist.id}')" title="Remove"></i>
            </div>
        `;

        const durationSpan = row.querySelector('.track-duration-text');
        if (song.duration) {
             durationSpan.innerText = song.duration;
        } else {
             const tempAudio = new Audio(song.url);
             tempAudio.addEventListener('loadedmetadata', () => {
                 const formatted = formatTime(tempAudio.duration);
                 song.duration = formatted;
                 if (durationSpan) durationSpan.innerText = formatted;
             });
        }

        row.onmouseenter = () => {
            row.querySelector('.index-num').style.display = 'none';
            row.querySelector('.play-row-icon').style.display = 'block';
        };
        row.onmouseleave = () => {
            row.querySelector('.index-num').style.display = 'block';
            row.querySelector('.play-row-icon').style.display = 'none';
        };
        
        row.ondblclick = () => selectSong(idx, playlist.id);

        row.ondragstart = (e) => {
            e.dataTransfer.setData('text/plain', idx);
            row.classList.add('dragging');
        };
        row.ondragend = () => {
            row.classList.remove('dragging');
            document.querySelectorAll('.playlist-track-row').forEach(r => r.classList.remove('drag-over'));
        };
        row.ondragover = (e) => {
            e.preventDefault();
            row.classList.add('drag-over');
        };
        row.ondragleave = () => {
            row.classList.remove('drag-over');
        };
        row.ondrop = async (e) => {
            e.preventDefault();
            row.classList.remove('drag-over');
            const draggedIdx = parseInt(e.dataTransfer.getData('text/plain'));
            const targetIdx = idx;
            
            if (draggedIdx !== targetIdx) {
                const updatedSongs = [...playlist.songs];
                const item = updatedSongs.splice(draggedIdx, 1)[0];
                updatedSongs.splice(targetIdx, 0, item);
                
                const { error } = await supabase
                    .from('playlists')
                    .update({ songs: updatedSongs })
                    .eq('id', playlistId);
                    
                if (!error) {
                    playlist.songs = updatedSongs;
                    renderPlaylistDetail(playlistId);
                    if (activePlaylistId === playlistId) {
                       currentQueue = playlist.songs.map(id => songs.find(s => s.id === id)).filter(Boolean);
                    }
                } else {
                    alert("Error reordering songs: " + error.message);
                }
            }
        };

        container.appendChild(row);
    });
    
    const playBtn = document.getElementById('play-playlist-btn');
    if (playBtn) {
        playBtn.onclick = () => {
            if (playlist.songs.length > 0) {
                selectSong(0, playlist.id);
            }
        };
    }
}

window.removeFromPlaylist = async function(index, playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (playlist) {
        const updatedSongs = [...playlist.songs];
        updatedSongs.splice(index, 1);
        
        const { error } = await supabase
            .from('playlists')
            .update({ songs: updatedSongs })
            .eq('id', playlistId);
            
        if (!error) {
            playlist.songs = updatedSongs;
            renderPlaylistDetail(playlistId);
            
            if (activePlaylistId === playlistId) {
                currentQueue = playlist.songs.map(id => songs.find(s => s.id === id)).filter(Boolean);
            }
        } else {
            alert("Error removing song: " + error.message);
        }
    }
}
document.addEventListener('click', () => {
    closeContextMenu();
});

// Inline Playlist Search Logic
const playlistInlineSearch = document.getElementById('playlist-inline-search');
const clearInlineSearch = document.getElementById('clear-inline-search');
const playlistAddResults = document.getElementById('playlist-add-results');

if (playlistInlineSearch) {
    playlistInlineSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        if (clearInlineSearch) {
            clearInlineSearch.style.display = query ? 'block' : 'none';
        }
        
        if (!query) {
            playlistAddResults.innerHTML = '';
            return;
        }
        
        const playlist = playlists.find(p => p.id === currentViewingPlaylistId);
        if (!playlist) return;

        // Find songs matching query but NOT already in the playlist
        const results = songs.filter(song => 
            !playlist.songs.includes(song.id) && 
            (song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query))
        ).slice(0, 5); // show top 5

        playlistAddResults.innerHTML = '';
        
        if (results.length === 0) {
            playlistAddResults.innerHTML = '<p style="color:var(--text-grey); padding: 10px;">No matching songs found.</p>';
            return;
        }

        results.forEach(song => {
            const row = document.createElement('div');
            row.className = 'add-result-row';
            row.innerHTML = `
                <div class="add-result-info">
                    <img src="${song.cover}" alt="${song.title}">
                    <div>
                        <div class="track-title">${song.title}</div>
                        <div class="track-artist">${song.artist}</div>
                    </div>
                </div>
                <button class="add-btn">Add</button>
            `;
            
            row.querySelector('.add-btn').onclick = () => {
                addSongToPlaylist(song.id, currentViewingPlaylistId);
                row.style.display = 'none';
            };
            
            playlistAddResults.appendChild(row);
        });
    });
}

if (clearInlineSearch) {
    clearInlineSearch.onclick = () => {
        if (playlistInlineSearch) playlistInlineSearch.value = '';
        if (playlistAddResults) playlistAddResults.innerHTML = '';
        clearInlineSearch.style.display = 'none';
    };
}

// Mobile Bottom Navigation Logic
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
mobileNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        mobileNavItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const id = item.id;
        if (id === 'mobile-nav-home') switchView('home');
        else if (id === 'mobile-nav-search') switchView('search');
        else if (id === 'mobile-nav-library') switchView('library');
    });
});

// Playlist Rename and Delete Logic
const renameBtn = document.getElementById('rename-playlist-btn');
const deleteBtn = document.getElementById('delete-playlist-btn');

if (renameBtn) {
    renameBtn.onclick = async () => {
        if (!currentViewingPlaylistId) return;
        const playlist = playlists.find(p => p.id === currentViewingPlaylistId);
        if (!playlist) return;
        
        const newName = prompt("Enter new name for playlist:", playlist.name);
        if (newName && newName.trim() !== "" && newName !== playlist.name) {
            const { error } = await supabase
                .from('playlists')
                .update({ name: newName.trim() })
                .eq('id', playlist.id);
                
            if (!error) {
                playlist.name = newName.trim();
                document.getElementById('detail-playlist-title').innerText = playlist.name;
                renderPlaylists();
                if (views.library && views.library.style.display === 'block') {
                    renderLibrary();
                }
            } else {
                alert("Error renaming playlist: " + error.message);
            }
        }
    };
}

if (deleteBtn) {
    deleteBtn.onclick = async () => {
        if (!currentViewingPlaylistId) return;
        const playlist = playlists.find(p => p.id === currentViewingPlaylistId);
        if (!playlist) return;
        
        const confirmDelete = confirm(`Are you sure you want to delete "${playlist.name}"?`);
        if (confirmDelete) {
            const { error } = await supabase
                .from('playlists')
                .delete()
                .eq('id', playlist.id);
                
            if (!error) {
                playlists = playlists.filter(p => p.id !== playlist.id);
                renderPlaylists();
                if (views.library && views.library.style.display === 'block') {
                    renderLibrary();
                }
                switchView('home'); // Redirect to home after delete
            } else {
                alert("Error deleting playlist: " + error.message);
            }
        }
    };
}
