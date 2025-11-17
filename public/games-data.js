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
    },
    '8ballbilliards': {
        id: '8ballbilliards',
        title: '8 Ball Billiards',
        description: 'Play classic 8-ball billiards! Master the art of pool and challenge yourself in this realistic billiards game.',
        longDescription: '8 Ball Billiards brings the classic pool hall experience to your screen. Aim, shoot, and sink all your balls before your opponent. With realistic physics and smooth controls, this game captures the essence of billiards. Practice your shots, learn the angles, and become a pool master. Perfect for both casual players and billiards enthusiasts!',
        thumbnail: '../public/images/thumbnails/imgi_9_ballbilliards.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Sports', 'Simulation', 'Classic'],
        stats: {
            players: '1M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['foosball', 'foosballfrenzy']
    },
    'alienlinkup': {
        id: 'alienlinkup',
        title: 'Alien Link Up',
        description: 'Connect matching aliens in this fun puzzle game! Link them up and clear the board.',
        longDescription: 'Alien Link Up is an engaging puzzle game where you connect matching alien characters to clear the board. Use your strategic thinking to plan your moves and create chain reactions. With colorful graphics and addictive gameplay, this game will keep you entertained for hours. Can you clear all the levels?',
        thumbnail: '../public/images/thumbnails/imgi_23_alien_linkup.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Match-3', 'Strategy'],
        stats: {
            players: '800K+',
            rating: '4.5',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['candycrushcraze', 'gemcandycrush']
    },
    'alienrun': {
        id: 'alienrun',
        title: 'Alien Run',
        description: 'Run through alien worlds in this fast-paced endless runner! Dodge obstacles and collect power-ups.',
        longDescription: 'Alien Run is an exciting endless runner set in a futuristic alien world. Jump, slide, and dash through challenging obstacles while collecting power-ups and coins. With multiple characters to unlock and endless levels, this game offers non-stop action. How far can you run?',
        thumbnail: '../public/images/thumbnails/imgi_90_alien_run.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Action', 'Runner', 'Arcade'],
        stats: {
            players: '1.2M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['subwaysurferssingapore', 'cuberun']
    },
    'angrybolls': {
        id: 'angrybolls',
        title: 'Angry Balls',
        description: 'Launch balls and destroy structures in this physics-based puzzle game!',
        longDescription: 'Angry Balls is a physics-based puzzle game where you launch balls to destroy structures and defeat enemies. Use strategy and precision to aim your shots and clear each level. With realistic physics and challenging puzzles, this game will test your skills and keep you coming back for more.',
        thumbnail: '../public/images/thumbnails/imgi_91_angry_bolls.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Physics', 'Strategy'],
        stats: {
            players: '900K+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['angrybolls', 'tilefusion2048']
    },
    'animaldash': {
        id: 'animaldash',
        title: 'Animal Dash',
        description: 'Dash through the jungle with cute animals! Collect coins and avoid obstacles in this fun runner game.',
        longDescription: 'Animal Dash is a delightful endless runner featuring adorable animals. Choose your favorite animal character and dash through vibrant jungle environments. Collect coins, power-ups, and unlock new animals as you progress. With charming graphics and smooth gameplay, Animal Dash is perfect for players of all ages.',
        thumbnail: '../public/images/thumbnails/imgi_26_animal_dash.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Runner', 'Arcade', 'Casual'],
        stats: {
            players: '1.5M+',
            rating: '4.8',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['alienrun', 'subwaysurferssingapore']
    },
    'animalfusion': {
        id: 'animalfusion',
        title: 'Animal Fusion',
        description: 'Merge animals to create new species! Combine and evolve in this addictive merge game.',
        longDescription: 'Animal Fusion is a captivating merge game where you combine animals to create new and unique species. Start with basic animals and merge them to unlock rare and powerful creatures. With beautiful graphics and strategic gameplay, Animal Fusion offers hours of entertainment. Build your ultimate animal collection!',
        thumbnail: '../public/images/thumbnails/imgi_11_animalfusion.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Merge', 'Strategy'],
        stats: {
            players: '2M+',
            rating: '4.7',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['fruitmerge', 'animalfusion']
    },
    'animalspuzzle': {
        id: 'animalspuzzle',
        title: 'Animals Puzzle',
        description: 'Solve jigsaw puzzles featuring cute animals! Piece together beautiful animal pictures.',
        longDescription: 'Animals Puzzle is a relaxing jigsaw puzzle game featuring adorable animals. Choose from various difficulty levels and piece together stunning animal photographs. With hundreds of puzzles and beautiful artwork, this game is perfect for puzzle enthusiasts and animal lovers alike.',
        thumbnail: '../public/images/thumbnails/imgi_80_animals_puzzle.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Jigsaw', 'Casual'],
        stats: {
            players: '1.8M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['gangsterjigsaw', 'animalspuzzle']
    },
    'animatedslots': {
        id: 'animatedslots',
        title: 'Animated Slots',
        description: 'Spin the reels and win big in this animated slot machine game!',
        longDescription: 'Animated Slots brings the excitement of casino slot machines to your screen. Spin the reels, match symbols, and trigger exciting bonus rounds. With vibrant animations and multiple slot themes, this game offers endless entertainment. Try your luck and see if you can hit the jackpot!',
        thumbnail: '../public/images/thumbnails/imgi_70_animated_slots.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Casino', 'Slots', 'Arcade'],
        stats: {
            players: '1.3M+',
            rating: '4.5',
            difficulty: 'Easy',
            ageRating: '13+'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['animatedslots', 'candycascade']
    },
    'aztecpuzzlequest': {
        id: 'aztecpuzzlequest',
        title: 'Aztec Puzzle Quest',
        description: 'Embark on an adventure through ancient Aztec temples! Solve puzzles and discover treasures.',
        longDescription: 'Aztec Puzzle Quest takes you on an epic journey through ancient Aztec civilization. Solve challenging puzzles, match gems, and unlock the secrets of the temples. With stunning visuals and engaging gameplay, this game combines adventure and puzzle-solving in one exciting experience.',
        thumbnail: '../public/images/thumbnails/imgi_14_aztecpuzzleques.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Adventure', 'Match-3'],
        stats: {
            players: '1.1M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['candycrushcraze', 'gemcandycrush']
    },
    'birdnestquest': {
        id: 'birdnestquest',
        title: 'Bird Nest Quest',
        description: 'Help birds build their nests! Collect materials and complete quests in this charming adventure.',
        longDescription: 'Bird Nest Quest is a delightful adventure game where you help birds build their nests. Collect twigs, leaves, and other materials while completing quests and exploring beautiful environments. With cute characters and engaging gameplay, this game is perfect for nature lovers and casual gamers.',
        thumbnail: '../public/images/thumbnails/imgi_56_bird_nest_quest.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Adventure', 'Casual', 'Quest'],
        stats: {
            players: '950K+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['kittenquestchronicles', 'birdnestquest']
    },
    'boatrush': {
        id: 'boatrush',
        title: 'Boat Rush',
        description: 'Race through waterways in fast boats! Compete in thrilling boat racing action.',
        longDescription: 'Boat Rush is an exhilarating boat racing game where you speed through challenging waterways. Navigate obstacles, perform stunts, and compete against other racers. With multiple boats to unlock and various race tracks, this game offers endless racing excitement.',
        thumbnail: '../public/images/thumbnails/imgi_79_boat_rush.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Racing', 'Action', 'Sports'],
        stats: {
            players: '1.4M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['formuladrage', 'turbotrucksoccer']
    },
    'bouncyflap': {
        id: 'bouncyflap',
        title: 'Bouncy Flap',
        description: 'Flap and bounce through obstacles! Control your character in this fun arcade game.',
        longDescription: 'Bouncy Flap is a fun and addictive arcade game where you control a bouncy character. Tap to flap and navigate through obstacles while collecting power-ups. With simple controls and challenging gameplay, this game is easy to learn but hard to master.',
        thumbnail: '../public/images/thumbnails/imgi_42_bouncy_flap.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Arcade', 'Casual', 'Action'],
        stats: {
            players: '1.6M+',
            rating: '4.8',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['flapcathalloween', 'flyghost']
    },
    'buildyourrobot': {
        id: 'buildyourrobot',
        title: 'Build Your Robot',
        description: 'Design and build your own robot! Customize parts and create the ultimate machine.',
        longDescription: 'Build Your Robot is a creative game where you design and build your own robot. Choose from various parts, customize colors, and create unique robots. Test your creations in challenges and battles. With endless customization options, this game lets your creativity run wild!',
        thumbnail: '../public/images/thumbnails/imgi_78_build_your_robot.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Simulation', 'Creative', 'Strategy'],
        stats: {
            players: '1.2M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['buildr', 'buildyourrobot']
    },
    'candycascade': {
        id: 'candycascade',
        title: 'Candy Cascade',
        description: 'Match candies and create cascades! Clear the board in this sweet puzzle game.',
        longDescription: 'Candy Cascade is a delightful match-3 puzzle game filled with colorful candies. Match three or more candies to create cascading combos and clear the board. With hundreds of levels and special candies, this game offers sweet entertainment for puzzle lovers.',
        thumbnail: '../public/images/thumbnails/imgi_30_candy_cascade.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Match-3', 'Casual'],
        stats: {
            players: '2.3M+',
            rating: '4.8',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['candycrushcraze', 'gemcandycrush']
    },
    'candycrushcraze': {
        id: 'candycrushcraze',
        title: 'Candy Crush Craze',
        description: 'Match candies and crush levels! Enjoy this addictive match-3 puzzle game.',
        longDescription: 'Candy Crush Craze is an addictive match-3 puzzle game where you match colorful candies to clear levels. With hundreds of challenging levels, special candies, and boosters, this game will keep you entertained for hours. Can you crush all the levels?',
        thumbnail: '../public/images/thumbnails/imgi_35_candy_crush_craze.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Match-3', 'Casual'],
        stats: {
            players: '3M+',
            rating: '4.9',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['candycascade', 'gemcandycrush']
    },
    'celestialwar': {
        id: 'celestialwar',
        title: 'Celestial War',
        description: 'Battle in space! Command your fleet and conquer the galaxy in this strategic war game.',
        longDescription: 'Celestial War is an epic space strategy game where you command fleets and battle across the galaxy. Build your empire, research technologies, and engage in tactical combat. With deep strategy and stunning space visuals, this game offers an immersive galactic warfare experience.',
        thumbnail: '../public/images/thumbnails/imgi_54_celestial_war.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Strategy', 'War', 'Space'],
        stats: {
            players: '1.7M+',
            rating: '4.7',
            difficulty: 'Hard',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['galacticbattlefront', 'galaxyquest']
    },
    'citydefender': {
        id: 'citydefender',
        title: 'City Defender',
        description: 'Defend your city from invaders! Build defenses and protect your citizens.',
        longDescription: 'City Defender is an exciting tower defense game where you protect your city from waves of enemies. Build and upgrade towers, place traps, and use special abilities to defend your city. With multiple levels and enemy types, this game offers strategic challenges and intense action.',
        thumbnail: '../public/images/thumbnails/imgi_53_city_hero.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Strategy', 'Tower Defense', 'Action'],
        stats: {
            players: '2.1M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['rangersvsundead', 'killzombies']
    },
    'colorcascadesort': {
        id: 'colorcascadesort',
        title: 'Color Cascade Sort',
        description: 'Sort colors and create cascades! Organize colored balls in this satisfying puzzle game.',
        longDescription: 'Color Cascade Sort is a relaxing puzzle game where you sort colored balls into matching tubes. Create cascades by strategically moving balls and organizing them by color. With simple mechanics and satisfying gameplay, this game is perfect for unwinding.',
        thumbnail: '../public/images/thumbnails/imgi_20_color_cascade_sort.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Sorting', 'Casual'],
        stats: {
            players: '1.9M+',
            rating: '4.7',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['colorcascadesort', 'tilefusion2048']
    },
    'colorcrafthomemakeover': {
        id: 'colorcrafthomemakeover',
        title: 'Color Craft Home Makeover',
        description: 'Design and decorate homes! Use colors and creativity to transform spaces.',
        longDescription: 'Color Craft Home Makeover is a creative design game where you decorate and transform homes. Choose colors, furniture, and decorations to create beautiful living spaces. With endless customization options and design challenges, this game lets you unleash your inner interior designer.',
        thumbnail: '../public/images/thumbnails/imgi_19_color_craft_home_makeover.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Creative', 'Simulation', 'Design'],
        stats: {
            players: '1.5M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['colorcrafthomemakeover', 'buildyourrobot']
    },
    'cuberun': {
        id: 'cuberun',
        title: 'Cube Run',
        description: 'Run through cube-filled worlds! Jump and dash in this 3D endless runner.',
        longDescription: 'Cube Run is a 3D endless runner where you navigate through colorful cube-filled worlds. Jump over obstacles, collect power-ups, and run as far as you can. With smooth controls and vibrant graphics, this game offers an exciting running experience.',
        thumbnail: '../public/images/thumbnails/imgi_64_cube_run.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Runner', '3D', 'Arcade'],
        stats: {
            players: '1.8M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['alienrun', 'subwaysurferssingapore']
    },
    'dogeadventure': {
        id: 'dogeadventure',
        title: 'Doge Adventure',
        description: 'Join Doge on an epic adventure! Explore worlds and collect treasures.',
        longDescription: 'Doge Adventure is a fun platformer featuring the beloved Doge character. Jump, run, and explore colorful worlds while collecting coins and power-ups. With charming graphics and engaging gameplay, this game is perfect for fans of classic platformers.',
        thumbnail: '../public/images/thumbnails/imgi_13_dogeadventure.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Platformer', 'Adventure', 'Casual'],
        stats: {
            players: '1.3M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['kittenquestchronicles', 'donkeysavior']
    },
    'donkeysavior': {
        id: 'donkeysavior',
        title: 'Donkey Savior',
        description: 'Save the day as a heroic donkey! Rescue others in this action-packed adventure.',
        longDescription: 'Donkey Savior is an action-adventure game where you play as a heroic donkey on a mission to save others. Jump, run, and use special abilities to rescue characters and defeat enemies. With fun gameplay and charming characters, this game offers an entertaining adventure.',
        thumbnail: '../public/images/thumbnails/imgi_51_donkey_savior.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Adventure', 'Action', 'Platformer'],
        stats: {
            players: '1.1M+',
            rating: '4.5',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['dogeadventure', 'kittenquestchronicles']
    },
    'feedthefarm': {
        id: 'feedthefarm',
        title: 'Feed The Farm',
        description: 'Manage your farm and feed the animals! Build the perfect farm in this simulation game.',
        longDescription: 'Feed The Farm is a delightful farm management game where you care for animals, grow crops, and build your dream farm. Feed animals, collect resources, and expand your farm. With cute graphics and engaging gameplay, this game is perfect for farming enthusiasts.',
        thumbnail: '../public/images/thumbnails/imgi_77_feed_the_farm.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Simulation', 'Farm', 'Management'],
        stats: {
            players: '1.6M+',
            rating: '4.7',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['feedthefarm', 'animalfusion']
    },
    'flapcathalloween': {
        id: 'flapcathalloween',
        title: 'Flap Cat Halloween',
        description: 'Flap through spooky Halloween scenes! Control a cat in this Halloween-themed flapper game.',
        longDescription: 'Flap Cat Halloween is a festive flapper game with a Halloween twist. Control a cute cat as you flap through spooky Halloween environments. Avoid obstacles, collect treats, and enjoy the Halloween atmosphere. Perfect for the spooky season!',
        thumbnail: '../public/images/thumbnails/imgi_98_flapcat_halloween.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Arcade', 'Flapper', 'Halloween'],
        stats: {
            players: '1.4M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['bouncyflap', 'flyghost']
    },
    'flyghost': {
        id: 'flyghost',
        title: 'Fly Ghost',
        description: 'Fly as a ghost through haunted worlds! Navigate spooky environments in this flying game.',
        longDescription: 'Fly Ghost is a spooky flying game where you control a ghost through haunted worlds. Fly through obstacles, collect items, and explore eerie environments. With atmospheric graphics and smooth controls, this game offers a ghostly flying experience.',
        thumbnail: '../public/images/thumbnails/imgi_97_fly_ghost.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Flying', 'Arcade', 'Halloween'],
        stats: {
            players: '1.2M+',
            rating: '4.5',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['flapcathalloween', 'spookytrails']
    },
    'foosball': {
        id: 'foosball',
        title: 'Foosball',
        description: 'Play classic foosball! Control your team and score goals in this table soccer game.',
        longDescription: 'Foosball brings the classic table soccer game to your screen. Control your team, pass the ball, and score goals against your opponent. With realistic physics and smooth controls, this game captures the excitement of foosball. Challenge yourself and become a foosball champion!',
        thumbnail: '../public/images/thumbnails/imgi_44_foosball.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Sports', 'Soccer', 'Arcade'],
        stats: {
            players: '1.5M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['foosballfrenzy', '8ballbilliards']
    },
    'foosballfrenzy': {
        id: 'foosballfrenzy',
        title: 'Foosball Frenzy',
        description: 'Experience foosball madness! Fast-paced table soccer action with power-ups and special moves.',
        longDescription: 'Foosball Frenzy is an action-packed foosball game with exciting power-ups and special moves. Play fast-paced matches, unlock new teams, and master advanced techniques. With multiple game modes and competitive gameplay, this game takes foosball to the next level.',
        thumbnail: '../public/images/thumbnails/imgi_59_foosball_frenzy.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Sports', 'Soccer', 'Action'],
        stats: {
            players: '1.3M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['foosball', 'penaltyshootout']
    },
    'formuladrage': {
        id: 'formuladrage',
        title: 'Formula Drag',
        description: 'Race in high-speed drag races! Compete in intense Formula-style drag racing.',
        longDescription: 'Formula Drag is an adrenaline-pumping drag racing game featuring Formula-style cars. Race against opponents in high-speed drag races, upgrade your car, and become the ultimate drag racing champion. With realistic physics and customization options, this game delivers thrilling racing action.',
        thumbnail: '../public/images/thumbnails/imgi_89_formula_drage.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Racing', 'Sports', 'Action'],
        stats: {
            players: '1.7M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['boatrush', 'turbotrucksoccer']
    },
    'fruitmerge': {
        id: 'fruitmerge',
        title: 'Fruit Merge',
        description: 'Merge fruits to create new ones! Combine and evolve fruits in this merge puzzle game.',
        longDescription: 'Fruit Merge is a delightful merge game where you combine fruits to create new and exotic varieties. Start with basic fruits and merge them to unlock rare and delicious combinations. With colorful graphics and satisfying merge mechanics, this game offers fruity fun for everyone.',
        thumbnail: '../public/images/thumbnails/imgi_92_fruit_merge.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Merge', 'Casual'],
        stats: {
            players: '2.2M+',
            rating: '4.8',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['animalfusion', 'fruitmerge']
    },
    'fruitninjamaster': {
        id: 'fruitninjamaster',
        title: 'Fruit Ninja Master',
        description: 'Slice fruits like a ninja master! Cut fruits and avoid bombs in this action-packed game.',
        longDescription: 'Fruit Ninja Master is an action-packed fruit slicing game where you slash fruits with ninja precision. Swipe to slice fruits, avoid bombs, and create combos for high scores. With multiple game modes and power-ups, this game offers endless fruit-slicing fun.',
        thumbnail: '../public/images/thumbnails/imgi_7_fruitninjamaster.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Action', 'Arcade', 'Slicing'],
        stats: {
            players: '2.5M+',
            rating: '4.8',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['fruitninjamaster', 'punchmaster']
    },
    'galacticbattlefront': {
        id: 'galacticbattlefront',
        title: 'Galactic Battlefront',
        description: 'Battle across the galaxy! Command your forces in epic space battles.',
        longDescription: 'Galactic Battlefront is an epic space strategy game where you command fleets in massive galactic battles. Build your empire, research technologies, and engage in tactical warfare. With stunning visuals and deep strategy, this game offers an immersive space combat experience.',
        thumbnail: '../public/images/thumbnails/imgi_5_galacticbattlefront.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Strategy', 'Space', 'War'],
        stats: {
            players: '1.9M+',
            rating: '4.7',
            difficulty: 'Hard',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['celestialwar', 'galaxyquest']
    },
    'galaxyquest': {
        id: 'galaxyquest',
        title: 'Galaxy Quest',
        description: 'Embark on a quest across the galaxy! Explore planets and complete missions.',
        longDescription: 'Galaxy Quest is an adventure game set in space where you explore planets, complete missions, and discover the secrets of the galaxy. With multiple planets to visit and quests to complete, this game offers an exciting space exploration experience.',
        thumbnail: '../public/images/thumbnails/imgi_34_galaxy_quest.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Adventure', 'Space', 'Quest'],
        stats: {
            players: '1.6M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['celestialwar', 'galacticbattlefront']
    },
    'gangsterjigsaw': {
        id: 'gangsterjigsaw',
        title: 'Gangster Jigsaw',
        description: 'Solve jigsaw puzzles with a gangster theme! Piece together crime scene puzzles.',
        longDescription: 'Gangster Jigsaw is a unique jigsaw puzzle game with a gangster theme. Piece together puzzles featuring crime scenes, vintage cars, and classic gangster imagery. With multiple difficulty levels and hundreds of puzzles, this game offers a twist on classic jigsaw puzzles.',
        thumbnail: '../public/images/thumbnails/imgi_87_gangster_jigsaw.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Jigsaw', 'Casual'],
        stats: {
            players: '1.4M+',
            rating: '4.5',
            difficulty: 'Easy',
            ageRating: '13+'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['animalspuzzle', 'gangsterjigsaw']
    },
    'gemcandycrush': {
        id: 'gemcandycrush',
        title: 'Gem Candy Crush',
        description: 'Match gems and candies! Crush levels in this gem-filled match-3 puzzle game.',
        longDescription: 'Gem Candy Crush combines the best of gem matching and candy crushing. Match colorful gems and candies to clear levels and unlock special powers. With hundreds of levels and beautiful graphics, this game offers sweet gem-matching fun.',
        thumbnail: '../public/images/thumbnails/imgi_6_gemcandycrush.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Match-3', 'Casual'],
        stats: {
            players: '2.4M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['candycrushcraze', 'candycascade']
    },
    'icecreamcraze': {
        id: 'icecreamcraze',
        title: 'Ice Cream Craze',
        description: 'Serve delicious ice cream! Run your ice cream shop in this fun management game.',
        longDescription: 'Ice Cream Craze is a fun management game where you run your own ice cream shop. Serve customers, create new flavors, and expand your business. With cute graphics and engaging gameplay, this game is perfect for ice cream lovers and management game fans.',
        thumbnail: '../public/images/thumbnails/imgi_33_ice_cream_craze.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Simulation', 'Management', 'Casual'],
        stats: {
            players: '1.8M+',
            rating: '4.7',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['icecreamcraze', 'feedthefarm']
    },
    'icehockeyhero': {
        id: 'icehockeyhero',
        title: 'Ice Hockey Hero',
        description: 'Become an ice hockey hero! Score goals and win matches in this sports game.',
        longDescription: 'Ice Hockey Hero is an exciting ice hockey game where you control your team and compete in matches. Score goals, make saves, and lead your team to victory. With realistic gameplay and multiple game modes, this game delivers thrilling hockey action.',
        thumbnail: '../public/images/thumbnails/imgi_60_ice_hockey_hero.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Sports', 'Hockey', 'Action'],
        stats: {
            players: '1.5M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['penaltyshootout', 'foosball']
    },
    'killzombies': {
        id: 'killzombies',
        title: 'Kill Zombies',
        description: 'Survive the zombie apocalypse! Fight hordes of zombies in this action shooter.',
        longDescription: 'Kill Zombies is an intense action shooter where you fight against hordes of zombies. Use various weapons, upgrade your arsenal, and survive wave after wave of undead enemies. With fast-paced action and multiple weapons, this game offers thrilling zombie survival gameplay.',
        thumbnail: '../public/images/thumbnails/imgi_4_killzombies.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Action', 'Shooter', 'Zombie'],
        stats: {
            players: '2.3M+',
            rating: '4.7',
            difficulty: 'Hard',
            ageRating: '13+'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['rangersvsundead']
    },
    'kingblox': {
        id: 'kingblox',
        title: 'King Blox',
        description: 'Stack blocks and become the king! Build towers and reach new heights.',
        longDescription: 'King Blox is a stacking puzzle game where you build towers by stacking blocks. Balance blocks carefully, create combos, and reach new heights. With simple mechanics and challenging gameplay, this game tests your precision and timing.',
        thumbnail: '../public/images/thumbnails/imgi_82_king_blox.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Stacking', 'Arcade'],
        stats: {
            players: '1.7M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['tilefusion2048', 'kingblox']
    },
    'kittenquestchronicles': {
        id: 'kittenquestchronicles',
        title: 'Kitten Quest Chronicles',
        description: 'Join kittens on epic quests! Explore worlds and complete adventures.',
        longDescription: 'Kitten Quest Chronicles is an adorable adventure game featuring cute kittens on epic quests. Explore colorful worlds, solve puzzles, and help kittens complete their missions. With charming graphics and engaging gameplay, this game is perfect for cat lovers and adventure fans.',
        thumbnail: '../public/images/thumbnails/imgi_27_kitten_quest_Chronicles.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Adventure', 'Quest', 'Casual'],
        stats: {
            players: '1.9M+',
            rating: '4.8',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['dogeadventure', 'birdnestquest']
    },
    'kobyjumpescape': {
        id: 'kobyjumpescape',
        title: 'Koby Jump Escape',
        description: 'Jump and escape through challenging levels! Master platforming in this action game.',
        longDescription: 'Koby Jump Escape is an action platformer where you jump and escape through challenging levels. Time your jumps perfectly, avoid obstacles, and reach the exit. With precise controls and increasing difficulty, this game tests your platforming skills.',
        thumbnail: '../public/images/thumbnails/imgi_85_koby_jump_escape.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Platformer', 'Action', 'Arcade'],
        stats: {
            players: '1.6M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['cuberun', 'mountainrush']
    },
    'ludorivals': {
        id: 'ludorivals',
        title: 'Ludo Rivals',
        description: 'Play classic Ludo with friends! Roll dice and race to victory in this board game.',
        longDescription: 'Ludo Rivals brings the classic board game Ludo to your screen. Roll dice, move your pieces, and race to get all your pieces home first. Play against friends or AI opponents in this timeless board game. With smooth gameplay and classic rules, this game captures the fun of Ludo.',
        thumbnail: '../public/images/thumbnails/imgi_48_ludo_rivals.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Board Game', 'Strategy', 'Classic'],
        stats: {
            players: '1.8M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['trztictactoe', 'ludorivals']
    },
    'machinecarnage': {
        id: 'machinecarnage',
        title: 'Machine Carnage',
        description: 'Destroy machines in epic battles! Fight robotic enemies in this action shooter.',
        longDescription: 'Machine Carnage is an intense action shooter where you battle against robotic enemies. Use powerful weapons, upgrade your arsenal, and destroy machines in epic combat. With fast-paced action and multiple enemy types, this game offers thrilling robotic warfare.',
        thumbnail: '../public/images/thumbnails/imgi_72_machine_carnage.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Action', 'Shooter', 'Sci-Fi'],
        stats: {
            players: '2.1M+',
            rating: '4.7',
            difficulty: 'Hard',
            ageRating: '13+'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['tinycrashfighter', 'cryzen']
    },
    'madrunner': {
        id: 'madrunner',
        title: 'Mad Runner',
        description: 'Run like crazy through obstacles! Dash through challenging courses in this runner game.',
        longDescription: 'Mad Runner is an intense endless runner where you dash through challenging obstacle courses. Jump, slide, and dodge obstacles while running at high speeds. With fast-paced action and increasing difficulty, this game tests your reflexes and timing.',
        thumbnail: '../public/images/thumbnails/imgi_39_mad_runner.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Runner', 'Action', 'Arcade'],
        stats: {
            players: '1.9M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['alienrun', 'subwaysurferssingapore']
    },
    'mountainrush': {
        id: 'mountainrush',
        title: 'Mountain Rush',
        description: 'Race down mountains! Speed through challenging mountain courses in this racing game.',
        longDescription: 'Mountain Rush is an exhilarating racing game where you speed down challenging mountain courses. Navigate sharp turns, avoid obstacles, and race to the finish. With multiple vehicles and courses, this game offers thrilling mountain racing action.',
        thumbnail: '../public/images/thumbnails/imgi_58_mountain_rush.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Racing', 'Sports', 'Action'],
        stats: {
            players: '1.4M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['formuladrage', 'boatrush']
    },
    'ninjablock': {
        id: 'ninjablock',
        title: 'Ninja Block',
        description: 'Play as a ninja and break blocks! Use ninja skills to clear levels in this puzzle game.',
        longDescription: 'Ninja Block is a puzzle game where you play as a ninja breaking blocks. Use your ninja skills to strategically break blocks and clear levels. With multiple levels and ninja powers, this game combines puzzle-solving with ninja action.',
        thumbnail: '../public/images/thumbnails/imgi_75_ninja_block.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Action', 'Arcade'],
        stats: {
            players: '1.6M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['ninjapumpkin', 'kingblox']
    },
    'ninjapumpkin': {
        id: 'ninjapumpkin',
        title: 'Ninja Pumpkin',
        description: 'Play as a ninja pumpkin! Use ninja skills in this Halloween-themed action game.',
        longDescription: 'Ninja Pumpkin is a fun action game featuring a ninja pumpkin character. Use ninja skills to defeat enemies and complete levels. With Halloween-themed graphics and engaging gameplay, this game offers seasonal ninja fun.',
        thumbnail: '../public/images/thumbnails/imgi_74_ninja_pumpkin.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Action', 'Halloween', 'Arcade'],
        stats: {
            players: '1.3M+',
            rating: '4.5',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['ninjablock', 'flapcathalloween']
    },
    'olympicchampion': {
        id: 'olympicchampion',
        title: 'Olympic Champion',
        description: 'Compete in Olympic events! Win gold medals in various sports competitions.',
        longDescription: 'Olympic Champion lets you compete in various Olympic events. Participate in track and field, swimming, gymnastics, and more. Win gold medals and become an Olympic champion. With multiple events and realistic gameplay, this game offers Olympic excitement.',
        thumbnail: '../public/images/thumbnails/imgi_17_olympicchampion.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Sports', 'Olympics', 'Action'],
        stats: {
            players: '1.7M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['olympicchampion', 'penaltyshootout']
    },
    'penaltyshootout': {
        id: 'penaltyshootout',
        title: 'Penalty Shootout',
        description: 'Score penalty kicks! Test your accuracy in this soccer penalty shootout game.',
        longDescription: 'Penalty Shootout is an exciting soccer game focused on penalty kicks. Aim carefully, choose your shot direction, and score goals. With realistic physics and challenging goalkeepers, this game tests your penalty-taking skills.',
        thumbnail: '../public/images/thumbnails/imgi_55_penalty_shootout.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Sports', 'Soccer', 'Arcade'],
        stats: {
            players: '1.5M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['foosball', 'icehockeyhero']
    },
    'punchmaster': {
        id: 'punchmaster',
        title: 'Punch Master',
        description: 'Master the art of punching! Fight opponents in this action-packed boxing game.',
        longDescription: 'Punch Master is an action-packed boxing game where you master the art of punching. Fight opponents, learn combos, and become a boxing champion. With multiple fighters and challenging opponents, this game offers intense boxing action.',
        thumbnail: '../public/images/thumbnails/imgi_45_punch_master.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Sports', 'Boxing', 'Action'],
        stats: {
            players: '1.8M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['punchmaster', 'fruitninjamaster']
    },
    'racketchampions': {
        id: 'racketchampions',
        title: 'Racket Champions',
        description: 'Become a racket sports champion! Play tennis and other racket sports.',
        longDescription: 'Racket Champions is a sports game featuring various racket sports. Play tennis, badminton, and other racket games. Master different techniques and become a racket sports champion. With realistic gameplay and multiple sports, this game offers racket sports excitement.',
        thumbnail: '../public/images/gam-thumb.png',
        logo: '../public/images/gam-thumb.png',
        categories: ['Sports', 'Tennis', 'Action'],
        stats: {
            players: '1.4M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['penaltyshootout', 'foosball']
    },
    'rangersvsundead': {
        id: 'rangersvsundead',
        title: 'Rangers vs Undead',
        description: 'Fight undead enemies as rangers! Defend against zombie hordes in this action game.',
        longDescription: 'Rangers vs Undead is an action game where you play as rangers fighting against undead enemies. Use weapons and special abilities to defend against zombie hordes. With multiple rangers to choose from and various enemies, this game offers intense zombie-fighting action.',
        thumbnail: '../public/images/thumbnails/imgi_37_rangers_vs_undead.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Action', 'Zombie', 'Shooter'],
        stats: {
            players: '2.2M+',
            rating: '4.7',
            difficulty: 'Hard',
            ageRating: '13+'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['killzombies']
    },
    'robberhunter': {
        id: 'robberhunter',
        title: 'Robber Hunter',
        description: 'Hunt down robbers! Catch criminals in this action-packed police game.',
        longDescription: 'Robber Hunter is an action game where you play as a police officer hunting down robbers. Chase criminals, use weapons, and bring them to justice. With multiple missions and challenging criminals, this game offers exciting police action.',
        thumbnail: '../public/images/thumbnails/imgi_36_robber_hunter.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Action', 'Police', 'Shooter'],
        stats: {
            players: '1.6M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: '13+'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['robberhunter', 'citydefender']
    },
    'runwayrush': {
        id: 'runwayrush',
        title: 'Runway Rush',
        description: 'Race on airport runways! Speed through runways in this unique racing game.',
        longDescription: 'Runway Rush is a unique racing game set on airport runways. Race against opponents, avoid obstacles, and speed through challenging runway courses. With multiple vehicles and exciting races, this game offers thrilling runway racing action.',
        thumbnail: '../public/images/thumbnails/imgi_67_runway_rush.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Racing', 'Action', 'Arcade'],
        stats: {
            players: '1.5M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['formuladrage', 'boatrush']
    },
    'savethesanta': {
        id: 'savethesanta',
        title: 'Save The Santa',
        description: 'Help save Santa! Rescue Santa Claus in this Christmas-themed adventure game.',
        longDescription: 'Save The Santa is a Christmas-themed adventure game where you help rescue Santa Claus. Navigate through winter landscapes, solve puzzles, and save Christmas. With festive graphics and engaging gameplay, this game is perfect for the holiday season.',
        thumbnail: '../public/images/thumbnails/imgi_76_save_the_santa.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Adventure', 'Christmas', 'Puzzle'],
        stats: {
            players: '1.4M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['snowballchristmas', 'savethesanta']
    },
    'searaiders': {
        id: 'searaiders',
        title: 'Sea Raiders',
        description: 'Command your pirate ship! Raid the seas and become a pirate legend.',
        longDescription: 'Sea Raiders is an adventure game where you command a pirate ship and raid the seas. Battle enemy ships, collect treasure, and become a legendary pirate. With naval combat and exploration, this game offers exciting pirate adventures.',
        thumbnail: '../public/images/thumbnails/imgi_10_seariders.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Adventure', 'Pirate', 'Action'],
        stats: {
            players: '1.3M+',
            rating: '4.5',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['searaiders', 'vikingway']
    },
    'skycombatfury': {
        id: 'skycombatfury',
        title: 'Sky Combat Fury',
        description: 'Engage in aerial combat! Dogfight in the skies in this flight combat game.',
        longDescription: 'Sky Combat Fury is an intense flight combat game where you engage in aerial dogfights. Pilot fighter jets, use weapons, and defeat enemy aircraft. With realistic flight physics and multiple aircraft, this game offers thrilling sky combat action.',
        thumbnail: '../public/images/thumbnails/imgi_40_sky_combat_fury.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Action', 'Flight', 'Combat'],
        stats: {
            players: '1.8M+',
            rating: '4.7',
            difficulty: 'Hard',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['skycombatfury', 'galacticbattlefront']
    },
    'snowballchristmas': {
        id: 'snowballchristmas',
        title: 'Snowball Christmas',
        description: 'Throw snowballs in this Christmas game! Have fun in winter wonderland.',
        longDescription: 'Snowball Christmas is a fun Christmas game where you throw snowballs at targets. Enjoy winter wonderland settings and festive gameplay. With multiple levels and Christmas themes, this game is perfect for holiday fun.',
        thumbnail: '../public/images/thumbnails/imgi_99_snowball_christmas.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Arcade', 'Christmas', 'Casual'],
        stats: {
            players: '1.5M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['savethesanta', 'snowballchristmas']
    },
    'soldierpath': {
        id: 'soldierpath',
        title: 'Soldier Path',
        description: 'Follow the path of a soldier! Complete missions in this military action game.',
        longDescription: 'Soldier Path is a military action game where you play as a soldier completing missions. Use weapons, tactics, and strategy to overcome enemies. With multiple missions and challenging combat, this game offers intense military action.',
        thumbnail: '../public/images/thumbnails/imgi_69_soldier_path.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Action', 'Military', 'Shooter'],
        stats: {
            players: '1.7M+',
            rating: '4.6',
            difficulty: 'Hard',
            ageRating: '13+'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['rangersvsundead', 'killzombies']
    },
    'spookytrails': {
        id: 'spookytrails',
        title: 'Spooky Trails',
        description: 'Navigate spooky trails! Explore haunted paths in this Halloween adventure game.',
        longDescription: 'Spooky Trails is a Halloween adventure game where you navigate through spooky trails. Explore haunted paths, solve puzzles, and discover secrets. With atmospheric graphics and Halloween themes, this game offers spooky fun.',
        thumbnail: '../public/images/thumbnails/imgi_66_spooky_trails.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Adventure', 'Halloween', 'Puzzle'],
        stats: {
            players: '1.3M+',
            rating: '4.5',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['flapcathalloween', 'flyghost']
    },
    'strikethepinball': {
        id: 'strikethepinball',
        title: 'Strike The Pinball',
        description: 'Play classic pinball! Strike the ball and score points in this pinball game.',
        longDescription: 'Strike The Pinball is a classic pinball game where you strike the ball and score points. Use flippers to keep the ball in play and hit targets for high scores. With realistic physics and multiple tables, this game captures the excitement of pinball.',
        thumbnail: '../public/images/thumbnails/imgi_3_strikethepin_ball.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Arcade', 'Pinball', 'Classic'],
        stats: {
            players: '1.4M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['strikethepinball', '8ballbilliards']
    },
    'tilefusion2048': {
        id: 'tilefusion2048',
        title: 'Tile Fusion 2048',
        description: 'Fuse tiles to reach 2048! Combine numbers in this fusion puzzle game.',
        longDescription: 'Tile Fusion 2048 is a fusion puzzle game where you combine numbered tiles to reach 2048. Slide tiles, create matches, and fuse them to higher numbers. With strategic gameplay and increasing difficulty, this game offers addictive puzzle fun.',
        thumbnail: '../public/images/gam-thumb.png',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Fusion', 'Strategy'],
        stats: {
            players: '2M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['2048', 'tilefusion2048']
    },
    'tinycrashfighter': {
        id: 'tinycrashfighter',
        title: 'Tiny Crash Fighter',
        description: 'Fight in tiny arenas! Battle opponents in this compact fighting game.',
        longDescription: 'Tiny Crash Fighter is a fighting game featuring tiny characters in compact arenas. Use combos, special moves, and strategy to defeat opponents. With multiple fighters and fast-paced combat, this game offers exciting fighting action.',
        thumbnail: '../public/images/thumbnails/imgi_104_tiny_crash_fighter.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Fighting', 'Action', 'Arcade'],
        stats: {
            players: '2.4M+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['punchmaster', 'machinecarnage']
    },
    'trztictactoe': {
        id: 'trztictactoe',
        title: 'Tic Tac Toe',
        description: 'Play classic Tic Tac Toe! Challenge friends in this timeless board game.',
        longDescription: 'Tic Tac Toe is the classic board game where you try to get three in a row. Play against friends or AI opponents in this timeless game. With simple rules and strategic gameplay, this game is perfect for quick gaming sessions.',
        thumbnail: '../public/images/thumbnails/imgi_81_trz_tic_tac_toe.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Board Game', 'Strategy', 'Classic'],
        stats: {
            players: '1.2M+',
            rating: '4.5',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['ludorivals', 'trztictactoe']
    },
    'tumblebeans': {
        id: 'tumblebeans',
        title: 'Tumble Beans',
        description: 'Tumble and match beans! Clear the board in this bean-matching puzzle game.',
        longDescription: 'Tumble Beans is a puzzle game where you tumble and match colorful beans. Clear the board by matching beans of the same color. With satisfying physics and colorful graphics, this game offers bean-tumbling fun.',
        thumbnail: '../public/images/thumbnails/imgi_12_thumble_beans.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Puzzle', 'Match-3', 'Casual'],
        stats: {
            players: '1.6M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['candycrushcraze', 'tumblebeans']
    },
    'turbotrucksoccer': {
        id: 'turbotrucksoccer',
        title: 'Turbo Truck Soccer',
        description: 'Play soccer with trucks! Score goals in this unique truck soccer game.',
        longDescription: 'Turbo Truck Soccer is a unique soccer game where you play with trucks instead of players. Drive trucks, score goals, and compete in matches. With fun physics and exciting gameplay, this game offers a twist on classic soccer.',
        thumbnail: '../public/images/thumbnails/imgi_16_turbotrucksoccer.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Sports', 'Soccer', 'Racing'],
        stats: {
            players: '1.7M+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['formuladrage', 'boatrush']
    },
    'turboturtletrek': {
        id: 'turboturtletrek',
        title: 'Turbo Turtle Trek',
        description: 'Race as a turbo turtle! Speed through courses in this racing game.',
        longDescription: 'Turbo Turtle Trek is a fun racing game where you play as a turbo turtle. Race through courses, collect power-ups, and compete against other turtles. With cute graphics and exciting races, this game offers turtle racing fun.',
        thumbnail: '../public/images/thumbnails/imgi_31_turbo_turtle_trek_icon.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Racing', 'Arcade', 'Casual'],
        stats: {
            players: '1.4M+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['turbotrucksoccer', 'boatrush']
    },
    'valentineshooter': {
        id: 'valentineshooter',
        title: 'Valentine Shooter',
        description: 'Shoot hearts and love! Celebrate Valentine\'s Day in this themed shooter game.',
        longDescription: 'Valentine Shooter is a themed shooter game perfect for Valentine\'s Day. Shoot hearts, collect love items, and enjoy romantic gameplay. With Valentine-themed graphics and fun mechanics, this game offers seasonal shooting fun.',
        thumbnail: '../public/images/thumbnails/imgi_101_valentine_shooter.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Shooter', 'Valentine', 'Arcade'],
        stats: {
            players: '1.2M+',
            rating: '4.5',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['valentineshooter', 'fruitninjamaster']
    },
    'vikingway': {
        id: 'vikingway',
        title: 'Viking Way',
        description: 'Embark on a Viking adventure! Explore and conquer in this Viking-themed game.',
        longDescription: 'Viking Way is an adventure game where you play as a Viking exploring and conquering. Battle enemies, collect resources, and build your Viking empire. With Viking-themed graphics and engaging gameplay, this game offers epic Viking adventures.',
        thumbnail: '../public/images/thumbnails/imgi_84_viking_way.webp',
        logo: '../public/images/gam-thumb.png',
        categories: ['Adventure', 'Viking', 'Action'],
        stats: {
            players: '1.5M+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: 'All Ages'
        },
        screenshots: ['../public/images/gam-thumb.png'],
        relatedGames: ['searaiders', 'vikingway']
    }

}; 