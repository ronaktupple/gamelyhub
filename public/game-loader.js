// Game Loader with Lazy Loading
(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        gamesPerPage: 20,
        lazyLoadOffset: 100 // pixels before image enters viewport
    };

    // Helper function to get game thumbnail
    function getGameThumbnail(game) {
        if (!game.thumbnail || game.thumbnail.trim() === "") {
            // Detect if we're in pages/ directory or root
            const isInPages = window.location.pathname.includes('/pages/');
            return isInPages ? '../public/images/gam-thumb.png' : 'public/images/gam-thumb.png';
        }
        
        // Detect if we're in pages/ directory or root
        const isInPages = window.location.pathname.includes('/pages/');
        
        // Normalize paths
        let path = game.thumbnail;
        
        // If path starts with '../public/', handle based on current location
        if (path.startsWith('../public/')) {
            return isInPages ? path : path.replace('../public/', 'public/');
        }
        
        // If path starts with 'public/', ensure correct relative path
        if (path.startsWith('public/')) {
            return isInPages ? '../' + path : path;
        }
        
        // Default: assume it needs public/ prefix
        if (!path.includes('public/')) {
            path = (isInPages ? '../' : '') + 'public/' + path;
        } else if (isInPages && !path.startsWith('../')) {
            path = '../' + path;
        }
        
        return path;
    }

    // Generate game card HTML with lazy loading
    function generateGameCard(game, isPopular = false) {
        // Ensure game has a valid ID
        if (!game || !game.id) {
            console.error('Invalid game object or missing ID:', game);
            return ''; // Return empty string for invalid games
        }
        
        const thumbnail = getGameThumbnail(game);
        // Detect if we're in pages/ directory or root
        const isInPages = window.location.pathname.includes('/pages/');
        const gameUrl = isInPages ? `game_detail_play.html?game=${encodeURIComponent(game.id)}` : `pages/game_detail_play.html?game=${encodeURIComponent(game.id)}`;
        
        if (isPopular) {
            // Popular games style
            return `
                <div class="col-6 col-md-3 col-lg-3">
                    <div class="card-interactive bg-surface rounded-lg p-4">
                        <div class="relative game-thumbnail rounded-lg overflow-hidden mb-3">
                            <img data-src="${thumbnail}" alt="${game.title}" 
                                class="w-full h-32 object-cover lazy-load" 
                                loading="lazy"
                                onerror="this.src='${getGameThumbnail({thumbnail: ''})}'; this.onerror=null;" />
                            <a href="${gameUrl}"
                                class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </a>
                        </div>
                        <h3 class="font-semibold mb-2">${game.title}</h3>
                        <div class="flex items-center justify-between">
                            <div class="flex text-accent text-sm">
                                ${generateStarRating(parseFloat(game.stats.rating) || 4.5)}
                            </div>
                            <span class="text-xs text-text-secondary">${game.stats.players || '1M+'}</span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Featured games style
            return `
                <div class="col-6 col-md-3 col-lg-3">
                    <div class="game-card position-relative h-100">
                        <a href="${gameUrl}" class="stretched-link text-decoration-none" aria-label="Open ${game.title}">
                            <img data-src="${thumbnail}" alt="${game.title}" 
                                class="card-img-top lazy-load" 
                                loading="lazy"
                                onerror="this.src='${getGameThumbnail({thumbnail: ''})}'; this.onerror=null;" />
                            <div class="card-body">
                                <h5 class="card-title">${game.title}</h5>
                            </div>
                        </a>
                    </div>
                </div>
            `;
        }
    }

    // Generate star rating HTML
    function generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars += '<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars += '<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
            } else {
                stars += '<svg class="w-4 h-4 text-text-muted" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
            }
        }
        return stars;
    }

    // Lazy load images using Intersection Observer
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            img.classList.remove('lazy-load');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: `${CONFIG.lazyLoadOffset}px`
            });

            // Observe all lazy-load images
            document.querySelectorAll('img.lazy-load').forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            document.querySelectorAll('img.lazy-load').forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('lazy-load');
                }
            });
        }
    }

    // Get all games from gamesData
    function getAllGames() {
        if (typeof gamesData === 'undefined') {
            console.error('gamesData is not defined. Make sure games-data.js is loaded before game-loader.js');
            return [];
        }
        
        const games = [];
        // Use Object.keys() to get all keys, including numeric ones like '2048'
        const keys = Object.keys(gamesData);
        let totalKeys = keys.length;
        
        keys.forEach(key => {
            const game = gamesData[key];
            // Check if it's a game object (has id or title property)
            if (game && typeof game === 'object' && !Array.isArray(game) && (game.id || game.title)) {
                // Ensure game has an id - use key if id is missing or empty
                if (!game.id || game.id === '') {
                    game.id = key;
                }
                // Validate that id is a non-empty string
                if (game.id && typeof game.id === 'string' && game.id.trim() !== '') {
                    games.push(game);
                } else {
                    console.warn(`Game with key "${key}" has invalid ID:`, game.id);
                }
            }
        });
        
        return games;
    }

    // Cache for shuffled games to maintain consistent order
    let cachedShuffledGames = null;

    // Shuffle array
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Get shuffled games (cached for consistency)
    function getShuffledGames() {
        if (!cachedShuffledGames) {
            const allGames = getAllGames();
            cachedShuffledGames = shuffleArray(allGames);
        }
        return cachedShuffledGames;
    }

    // Load games with pagination
    function loadGames(containerId, isPopular = false, startIndex = 0, count = CONFIG.gamesPerPage) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container ${containerId} not found`);
            return { loaded: 0, total: 0, hasMore: false };
        }

        const shuffledGames = getShuffledGames();
        if (shuffledGames.length === 0) {
            console.warn('No shuffled games available');
            return { loaded: 0, total: 0, hasMore: false };
        }

        const gamesToLoad = shuffledGames.slice(startIndex, startIndex + count);
        
        let validCards = 0;
        gamesToLoad.forEach(game => {
            // Validate game before generating card
            if (!game || !game.id) {
                console.warn(`Skipping invalid game:`, game);
                return;
            }
            
            const cardHTML = generateGameCard(game, isPopular);
            if (cardHTML) {
                container.insertAdjacentHTML('beforeend', cardHTML);
                validCards++;
            }
        });

        // Initialize lazy loading for new images
        setTimeout(() => {
            initLazyLoading();
        }, 100);

        const newIndex = startIndex + gamesToLoad.length;
        const result = {
            loaded: newIndex,
            total: shuffledGames.length,
            hasMore: newIndex < shuffledGames.length
        };
        
        return result;
    }

    // Infinite scroll implementation
    function setupInfiniteScroll(containerId, loadingIndicatorId) {
        let currentIndex = CONFIG.gamesPerPage;
        let isLoading = false;
        let hasMore = true;
        const container = document.getElementById(containerId);
        const loadingIndicator = document.getElementById(loadingIndicatorId);

        if (!container) return;

        // Function to observe the last card
        const observeLastCard = () => {
            const lastCard = container.lastElementChild;
            if (lastCard && hasMore && !isLoading) {
                observer.observe(lastCard);
            }
        };

        // Intersection Observer for infinite scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && hasMore && !isLoading) {
                    isLoading = true;
                    if (loadingIndicator) {
                        loadingIndicator.style.display = 'block';
                    }

                    // Unobserve current element
                    observer.unobserve(entry.target);

                    // Load more games
                    setTimeout(() => {
                        const result = loadGames(containerId, false, currentIndex, CONFIG.gamesPerPage);
                        currentIndex = result.loaded;
                        hasMore = result.hasMore;
                        isLoading = false;

                        if (loadingIndicator) {
                            loadingIndicator.style.display = 'none';
                        }

                        // Re-observe the new last element for next load
                        if (hasMore) {
                            setTimeout(observeLastCard, 100);
                        }
                    }, 300); // Small delay for smooth loading
                }
            });
        }, {
            rootMargin: '200px' // Start loading 200px before reaching the bottom
        });

        // Initial observation after first load
        setTimeout(observeLastCard, 500);
    }

    // Initialize game loading on page load with retry mechanism
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Retry mechanism to ensure gamesData is fully loaded
        let retryCount = 0;
        const maxRetries = 10;
        const retryDelay = 200;

        function tryInit() {
            // Check if gamesData exists and has more than just a few games
            if (typeof gamesData === 'undefined') {
                console.warn(`gamesData not defined, retry ${retryCount + 1}/${maxRetries}`);
                retryCount++;
                if (retryCount < maxRetries) {
                    setTimeout(tryInit, retryDelay);
                } else {
                    console.error('gamesData failed to load after multiple retries');
                }
                return;
            }

            const keys = Object.keys(gamesData);

            // If we have very few keys, it might not be fully loaded yet
            if (keys.length < 20 && retryCount < maxRetries) {
                retryCount++;
                setTimeout(tryInit, retryDelay);
                return;
            }

            // Only auto-load if containers exist (for homepage)
            const featuredContainer = document.getElementById('featuredGamesContainer');
            
            if (featuredContainer) {
                // Get all games first to verify
                const allGames = getAllGames();
                
                // Load initial 20 games
                const featuredResult = loadGames('featuredGamesContainer', false, 0, CONFIG.gamesPerPage);
                
                // Setup infinite scroll if there are more games
                if (featuredResult.hasMore) {
                    setupInfiniteScroll('featuredGamesContainer', 'loadingIndicator');
                }
            }

            // Initialize lazy loading
            initLazyLoading();
        }

        // Start with initial delay
        setTimeout(tryInit, 100);
    }

    // Export functions for use in other scripts
    window.GameLoader = {
        loadGames,
        initLazyLoading,
        getAllGames,
        generateGameCard,
        setupInfiniteScroll,
        getGameThumbnail,
        init
    };

    // Auto-initialize
    init();
})();

