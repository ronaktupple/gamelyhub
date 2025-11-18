// Casino Games Loader
// Dynamically loads and displays casino games from the casino games folder

const casinoGames = [
    {
        id: '21twentyone',
        name: '21 Twenty One',
        folder: '21twentyone',
        path: '../casino games/21twentyone/index.html',
        logo: '../casino game screenshots/21twentyone/logo.jpg',
        category: 'Card Game'
    },
    {
        id: '3dblackjack',
        name: '3D Blackjack',
        folder: '3dblackjack',
        path: '../casino games/3dblackjack/index.html',
        logo: '../casino game screenshots/3dblackjack/logo.jpg',
        category: 'Blackjack'
    },
    {
        id: 'americanrouletteroyale',
        name: 'American Roulette Royale',
        folder: 'americanrouletteroyale',
        path: '../casino games/americanrouletteroyale/index.html',
        logo: '../casino game screenshots/americanrouletteroyale/logo.jpg',
        category: 'Roulette'
    },
    {
        id: 'baccarat',
        name: 'Baccarat',
        folder: 'baccarat',
        path: '../casino games/baccarat/index.html',
        logo: '../casino game screenshots/baccarat/logo.jpg',
        category: 'Card Game'
    },
    {
        id: 'blackjack',
        name: 'Blackjack',
        folder: 'blackjack',
        path: '../casino games/blackjack/index.html',
        logo: '../casino game screenshots/blackjack/logo.png',
        category: 'Blackjack'
    },
    {
        id: 'blackjack21',
        name: 'Blackjack 21',
        folder: 'blackjack21',
        path: '../casino games/blackjack21/index.html',
        logo: '../casino game screenshots/blackjack21/logo.png',
        category: 'Blackjack'
    },
    {
        id: 'casinocardsmemory',
        name: 'Casino Cards Memory',
        folder: 'casinocardsmemory',
        path: '../casino games/casinocardsmemory/index.html',
        logo: '../casino game screenshots/casinocardsmemory/logo.png',
        category: 'Card Game'
    },
    {
        id: 'casinospinandwin',
        name: 'Casino Spin and Win',
        folder: 'casinospinandwin',
        path: '../casino games/casinospinandwin/index.html',
        logo: '../casino game screenshots/casinospinandwin/logo.jpg',
        category: 'Slots'
    },
    {
        id: 'championsslot',
        name: 'Champions Slot',
        folder: 'championsslot',
        path: '../casino games/championsslot/index.html',
        logo: '../casino game screenshots/championsslot/logo.jpg',
        category: 'Slots'
    },
    {
        id: 'christmassurprise',
        name: 'Christmas Surprise',
        folder: 'christmassurprise',
        path: '../casino games/christmassurprise/index.html',
        logo: '../casino game screenshots/christmassurprise/logo.png',
        category: 'Slots'
    },
    {
        id: 'craps',
        name: 'Craps',
        folder: 'craps',
        path: '../casino games/craps/index.html',
        logo: '../casino game screenshots/craps/logo.jpg',
        category: 'Dice Game'
    },
    {
        id: 'halloweenslot',
        name: 'Halloween Slot',
        folder: 'halloweenslot',
        path: '../casino games/halloweenslot/index.html',
        logo: '../casino game screenshots/halloweenslot/logo.png',
        category: 'Slots'
    },
    {
        id: 'happyeasterslotmachine',
        name: 'Happy Easter Slot Machine',
        folder: 'happyeasterslotmachine',
        path: '../casino games/happyeasterslotmachine/index.html',
        logo: '../casino game screenshots/happyeasterslotmachine/logo.png',
        category: 'Slots'
    },
    {
        id: 'highorlow',
        name: 'High or Low',
        folder: 'highorlow',
        path: '../casino games/highorlow/index.html',
        logo: '../casino game screenshots/highorlow/logo.png',
        category: 'Card Game'
    },
    {
        id: 'jokerpoker',
        name: 'Joker Poker',
        folder: 'jokerpoker',
        path: '../casino games/jokerpoker/index.html',
        logo: '../casino game screenshots/jokerpoker/logo.png',
        category: 'Poker'
    },
    {
        id: 'nekopachinko',
        name: 'Neko Pachinko',
        folder: 'nekopachinko',
        path: '../casino games/nekopachinko/index.html',
        logo: '../casino game screenshots/nekopachinko/logo.jpg',
        category: 'Slots'
    },
    {
        id: 'realisticslotmachine',
        name: 'Realistic Slot Machine',
        folder: 'realisticslotmachine',
        path: '../casino games/realisticslotmachine/index.html',
        logo: '../casino game screenshots/realisticslotmachine/logo.jpg',
        category: 'Slots'
    },
    {
        id: 'reddog',
        name: 'Red Dog',
        folder: 'reddog',
        path: '../casino games/reddog/index.html',
        logo: '../casino game screenshots/reddog/logo.jpg',
        category: 'Card Game'
    },
    {
        id: 'slotarabian',
        name: 'Slot Arabian',
        folder: 'slotarabian',
        path: '../casino games/slotarabian/index.html',
        logo: '../casino game screenshots/slotarabian/logo.jpg',
        category: 'Slots'
    },
    {
        id: 'slotluckychristmas',
        name: 'Slot Lucky Christmas',
        folder: 'slotluckychristmas',
        path: '../casino games/slotluckychristmas/index.html',
        logo: '../casino game screenshots/slotluckychristmas/logo.png',
        category: 'Slots'
    },
    {
        id: 'slotmachinemrchicken',
        name: 'Slot Machine Mr Chicken',
        folder: 'slotmachinemrchicken',
        path: '../casino games/slotmachinemrchicken/game/index.html',
        logo: '../casino game screenshots/slotmachinemrchicken/logo.png',
        category: 'Slots'
    },
    {
        id: 'slotmachinespaceadventure',
        name: 'Slot Machine Space Adventure',
        folder: 'slotmachinespaceadventure',
        path: '../casino games/slotmachinespaceadventure/index.html',
        logo: '../casino game screenshots/slotmachinespaceadventure/logo.png',
        category: 'Slots'
    },
    {
        id: 'slotmachineultimatesoccer',
        name: 'Slot Machine Ultimate Soccer',
        folder: 'slotmachineultimatesoccer',
        path: '../casino games/slotmachineultimatesoccer/index.html',
        logo: '../casino game screenshots/slotmachineultimatesoccer/logo.png',
        category: 'Slots'
    },
    {
        id: 'threecardpoker',
        name: 'Three Card Poker',
        folder: 'threecardpoker',
        path: '../casino games/threecardpoker/index.html',
        logo: '../casino game screenshots/threecardpoker/logo.jpg',
        category: 'Poker'
    }
];

// Function to format game name for display
function formatGameName(name) {
    return name
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
}

// Function to get category icon
function getCategoryIcon(category) {
    const icons = {
        'Blackjack': 'fa-club',
        'Poker': 'fa-spade',
        'Roulette': 'fa-circle',
        'Slots': 'fa-coins',
        'Card Game': 'fa-cards',
        'Dice Game': 'fa-dice'
    };
    return icons[category] || 'fa-dice';
}

// Function to create game card HTML - Simplified (thumbnail and title only)
function createGameCard(game) {
    const formattedName = formatGameName(game.name);
    
    return `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div class="casino-game-card">
                <a href="casino-game-detail.html?game=${game.id}" class="casino-game-card-link">
                    <img src="${game.logo}" 
                         alt="${formattedName}" 
                         loading="lazy"
                         onerror="this.src='../public/images/gam-thumb.png'; this.onerror=null;" />
                    <div class="casino-game-card-body">
                        <h3 class="casino-game-card-title">${formattedName}</h3>
                    </div>
                </a>
            </div>
        </div>
    `;
}

// Function to display casino games
function displayCasinoGames() {
    const container = document.getElementById('casinoGamesContainer');
    if (!container) {
        console.error('Casino games container not found');
        return;
    }

    if (casinoGames.length === 0) {
        container.innerHTML = '<p class="text-center">No casino games available at the moment.</p>';
        return;
    }

    // Sort games by name
    const sortedGames = [...casinoGames].sort((a, b) => a.name.localeCompare(b.name));

    // Create grid container
    container.innerHTML = `
        <div class="row g-4" id="casinoGamesGrid">
            ${sortedGames.map(game => createGameCard(game)).join('')}
        </div>
    `;

    // Add lazy loading for images
    const images = container.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy-load');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCasinoGames();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayCasinoGames);
} else {
    displayCasinoGames();
}

