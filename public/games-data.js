const gamesData = {
    // featured: [
    //     {
    //         title: "1v1.LOL",
    //         image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    //         link: "game_detail_play.html?game=1v1lol",
    //         plays: "125k",
    //         rating: 4
    //     },
    //     {
    //         title: "Subway Surfers",
    //         image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         link: "game_detail_play.html?game=subwaysurferssingapore",
    //         plays: "82k",
    //         rating: 5
    //     },
    //     {
    //         title: "Fruit Ninja",
    //         image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    //         link: "game_detail_play.html?game=fruitninja",
    //         plays: "157k",
    //         rating: 4
    //     }
    // ],
    // recent: [
    //     {
    //         title: "2048",
    //         image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         link: "/games/2048/index.html",
    //         lastPlayed: "2h ago"
    //     },
    //     {
    //         title: "Cookie Clicker",
    //         image: "https://images.pixabay.com/photo/2017/12/10/17/40/planet-3010906_1280.jpg",
    //         link: "/games/cookieclicker/index.html",
    //         lastPlayed: "1d ago"
    //     },
    //     {
    //         title: "Pacman",
    //         image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    //         link: "/games/pacman/index.html",
    //         lastPlayed: "3d ago"
    //     },
    //     {
    //         title: "1v1.LOL",
    //         image: "https://images.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_1280.jpg",
    //         link: "/games/1v1lol/index.html",
    //         lastPlayed: "2 hours ago"
    //     },
    //     {
    //         title: "Drift Hunters",
    //         image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         link: "/games/drifthunters/index.html",
    //         lastPlayed: "5 hours ago"
    //     }
    // ],
    // popular: [
    //     {
    //         title: "Drift Hunters",
    //         image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         link: "game_detail_play.html?game=drifthunters",
    //         plays: "253k",
    //         rating: 4
    //     },
    //     {
    //         title: "Geometry Dash",
    //         image: "https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    //         link: "game_detail_play.html?game=geometrydash",
    //         plays: "189k",
    //         rating: 5
    //     }
    // ],
    'cookieclicker': {
        id: 'cookieclicker',
        title: 'Cookie Clicker',
        description: 'Click cookies, buy upgrades, and become a cookie tycoon! Start your cookie empire and watch your production grow exponentially.',
        longDescription: 'Cookie Clicker is an idle game where players click on a cookie to produce more cookies. As you accumulate cookies, you can purchase buildings and upgrades that automatically generate cookies for you. The game features a wide variety of buildings, upgrades, and achievements to unlock, making it an addictive and engaging experience.',
        thumbnail: '../public/images/banners/CookieClicker.jpg',
        logo: '../public/images/banners/CookieClicker.jpg',
        categories: ['Idle', 'Clicker', 'Strategy', 'Simulation'],
        stats: {
            players: '500K+',
            rating: '4.8',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/ccss1.webp',
            '../public/images/banners/ccss2.webp',
            '../public/images/banners/ccss3.webp'
        ],
        relatedGames: ['adventure-capitalist', 'clicker-heroes', 'idle-miner']
    },
    '2048': {
        id: '2048',
        title: '2048',
        description: 'Join the numbers to get to the 2048 tile! A challenging puzzle game that tests your strategic thinking.',
        longDescription: '2048 is a single-player sliding block puzzle game. The game\'s objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048. The game requires strategic thinking and planning to achieve the highest possible score.',
        thumbnail: '../public/images/banners/2048 1.avif',
        logo: '../public/images/banners/2048 1.avif',
        categories: ['Puzzle', 'Strategy', 'Brain Games'],
        stats: {
            players: '2M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/2048ss1.jpg',
            '../public/images/banners/2048_OG-logo.jpg',
        ],
        relatedGames: ['threes', 'sudoku', 'tetris']
    },
    'subwaysurferssingapore': {
        id: 'subwaysurferssingapore',
        title: 'Subway Surfers',
        description: 'Run, jump, and dash through the subway in this endless runner game! Collect coins and power-ups while avoiding obstacles.',
        longDescription: 'Subway Surfers is an endless runner game where players control a character running through subway tunnels, dodging trains and obstacles. The game features various power-ups, characters to unlock, and missions to complete. With its fast-paced gameplay and colorful graphics, it\'s one of the most popular mobile games.',
        thumbnail: '../public/images/banners/ssbaner.webp',
        logo: '../public/images/banners/ssbaner.webp',
        categories: ['Action', 'Runner', 'Arcade', 'Adventure'],
        stats: {
            players: '5M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/suss1.webp',
            '../public/images/banners/suss2.jpg',
            '../public/images/banners/suss3.webp'
        ],
        relatedGames: ['temple-run', 'jetpack-joyride', 'minion-rush']
    },
    'pacman': {
        id: 'pacman',
        title: 'Pacman',
        description: 'Navigate through the maze, eat dots, and avoid ghosts in this classic arcade game!',
        longDescription: 'Pacman is a classic arcade game where you control a yellow circular character through a maze. Your goal is to eat all the dots while avoiding the ghosts. Collect power pellets to turn the tables and eat the ghosts for bonus points. This timeless game combines strategy and quick reflexes in a race against time.',
        thumbnail: '../public/images/banners/pmbanner.jpg',
        logo: '../public/images/banners/pmbanner.jpg',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/pmss1.png',
            '../public/images/banners/pmss2.png',
            '../public/images/banners/pmss3.jpg'
        ],
        relatedGames: ['2048', 'cookieclicker']
    },
    'minefun': {
        id: 'minefun',
        title: 'Mine fun',
        description: 'MineFun is a creative sandbox game where you mine blocks, craft tools, and build anything you imagine.',
        longDescription: 'MineFun is an exciting sandbox-style game that lets you unleash your creativity in a blocky, pixelated world. Explore vast landscapes, gather resources, and craft tools to help you survive and thrive. Whether you want to build towering structures, dig deep into mysterious caverns, or simply explore the endless terrain, MineFun offers endless hours of fun and discovery for players of all ages.',
        thumbnail: '../public/images/banners/mfbannner.webp',
        logo: '../public/images/banners/mfbannner.webp',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/mfss1.jpg',
            '../public/images/banners/mfss2.jpg',
            '../public/images/banners/mfss3.webp'
        ],
        relatedGames: ['2048', 'cookieclicker']
    },
    'cryzen': {
        id: 'cryzen',
        title: 'Cryzen',
        description: 'Cryzen is a fast-paced cyberpunk shooter where you battle enemies in a high-tech dystopian world.',
        longDescription: 'Cryzen drops you into a futuristic cyberpunk world full of danger, action, and intense battles. Armed with high-tech weapons and quick reflexes, you must fight through waves of enemies in neon-lit arenas. With sleek visuals, fast gameplay, and an electrifying atmosphere, Cryzen delivers a thrilling experience for fans of sci-fi shooters and futuristic combat. Get ready to test your skills and survive the chaos!',
        thumbnail: '../public/images/banners/cryzenbanner.jpg',
        logo: '../public/images/banners/cryzenbanner.jpg',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/czss1.png',
            '../public/images/banners/czss2.png',
            '../public/images/banners/czss3.png'
        ],
        relatedGames: ['2048', 'cookieclicker']
    },
    'poper': {
        id: 'poper',
        title: 'Poper',
        description: 'Paper.io 2 is a fast-paced territory game where you draw and expand your area while avoiding enemies.',
        longDescription: 'Paper.io 2 is an addictive and competitive multiplayer game where your goal is to claim as much territory as possible. Glide across the screen, draw your zone, and connect it back to your base to expand your land. But watch out—other players are doing the same, and one wrong move can wipe you out! With smooth controls and colorful gameplay, Paper.io 2 offers a fun and strategic experience thats easy to pick up but hard to master.',
        thumbnail: '../public/images/banners/popbanner.jpg',
        logo: '../public/images/banners/popbanner.jpg',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/popss1.webp',
            '../public/images/banners/popss2.avif'
        ],
        relatedGames: ['2048', 'cookieclicker']
    },
    'zombr': {
        id: 'zombr',
        title: 'Zombs Royale',
        description: 'Zombs Royale is a fast-paced battle royale game where you fight against players in a top-down, last-one-standing showdown.',
        longDescription: 'Zombs Royale is an action-packed multiplayer battle royale game that throws you into a chaotic arena with dozens of other players. Parachute in, loot powerful weapons, and fight to be the last one standing in this top-down shooter. With quick matches, colorful graphics, and intense PvP action, Zombs Royale delivers nonstop fun whether you are playing solo, with a duo, or as part of a squad. Can you outlast the competition and claim victory?',
        thumbnail: '../public/images/banners/zrbanner.jpg',
        logo: '../public/images/banners/zrbanner.jpg',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/zrss1.webp',
            '../public/images/banners/zrss2.jpg',
            '../public/images/banners/zrss3.jpg'
        ],
        relatedGames: ['2048', 'cookieclicker']
    },
    'smashkarts': {
        id: 'smashkarts',
        title: 'Smash Karts',
        description: 'Smash Karts is a wild multiplayer kart game where you collect weapons and blast opponents in fast-paced arenas',
        longDescription: 'Smash Karts is an action-packed multiplayer kart battle game that combines high-speed racing with explosive combat. Jump into colorful arenas, collect crazy power-ups like rockets and machine guns, and outlast your opponents in chaotic matches. With smooth controls, fun characters, and non-stop action, Smash Karts is perfect for players who love racing and a bit of mayhem. The more you play, the more you unlock—so get ready to roll and rule the arena!',
        thumbnail: '../public/images/banners/skbanner.jpeg',
        logo: '../public/images/banners/skbanner.jpeg',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/skss1.webp',
            '../public/images/banners/skss2.png'
        ],
        relatedGames: ['2048', 'cookieclicker']
    },
    'battled': {
        id: 'battled',
        title: 'Battle Dudes',
        description: 'Slither is a fun and competitive snake game where you eat orbs, grow longer, and try to trap other players',
        longDescription: 'Slither is a massively multiplayer snake game where your goal is to become the longest and strongest on the field. Slither around the map, eat glowing orbs to grow, and dodge other players—or trap them to make them crash! It’s simple to learn but takes skill and strategy to master. With smooth gameplay, colorful visuals, and fast-paced action, Slither is perfect for casual fun or intense leaderboard climbing',
        thumbnail: '../public/images/banners/bdbannr.jpg',
        logo: '../public/images/banners/bdbannr.jpg',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/bdss1.webp',
            '../public/images/banners/bdss1.webp'
        ],
        relatedGames: ['2048', 'cookieclicker']
    },
    'tribles': {
        id: 'tribles',
        title: 'Tribles',
        description: 'Tribals.io is a survival multiplayer game where you gather resources, craft tools, and build your own tribe.',
        longDescription: 'Tribals.io is an immersive survival experience set on a remote island where danger and opportunity are everywhere. Work solo or with others to gather resources, craft weapons, build shelters, and defend against threats. Whether you choose to explore peacefully or dominate the land, Tribals.io offers a mix of crafting, strategy, and action in a vibrant open world. Can you build your tribe and survive the wild?',
        thumbnail: '../public/images/banners/tribalsbanner.jpg',
        logo: '../public/images/banners/tribalsbanner.jpg',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/triblesss1.jpg',
            '../public/images/banners/triblesss2.jpg',
            '../public/images/banners/triblesss3.webp'
        ],
        relatedGames: ['2048', 'cookieclicker']
    },
    'hextris': {
        id: 'hextris',
        title: 'Hextris',
        description: 'Hextris is a colorful arcade puzzle game where you rotate a hexagon to match and clear falling blocks',
        longDescription: 'Hextris is a fast-paced and addictive puzzle game inspired by classic stacking mechanics with a modern twist. Rotate the central hexagon to align colored blocks as they fall—match three or more of the same color to clear them and score points. The challenge ramps up as the speed increases, testing your reflexes and strategy. With clean visuals and endless gameplay, Hextris is perfect for quick sessions or long-lasting high score hunts!',
        thumbnail: '../public/images/banners/hextrisbanner.jpg',
        logo: '../public/images/banners/hextrisbanner.jpg',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/hextris1.png',
            '../public/images/banners/hextris.2.png'
        ],
        relatedGames: ['2048', 'cookieclicker']
    },
    'buildr': {
        id: 'buildr',
        title: 'Build Royale',
        description: 'BuildRoyale.io is a unique battle royale game where you fight enemies while building walls for defense on the fly.',
        longDescription: 'BuildRoyale.io combines the intense action of battle royale with real-time building mechanics. Drop into the arena, gather resources, craft walls, and face off against other players in a shrinking battlefield. You all need quick reflexes to shoot and smart strategies to build your way to victory. Whether you are defending yourself with a last- second wall or going on the offensive, BuildRoyale.io offers fast, competitive gameplay perfect for fans of shooters and builders alike',
        thumbnail: '../public/images/banners/buildrbanner.png',
        logo: '../public/images/banners/buildrbanner.png',
        categories: ['Arcade', 'Classic', 'Puzzle', 'Action'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../public/images/banners/buildrss1.webp',
            '../public/images/banners/buildrss2.jpg',
            '../public/images/banners/buildrss3.jpg'
        ],
        relatedGames: ['2048', 'cookieclicker']
    }

}; 