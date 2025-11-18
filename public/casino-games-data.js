// Casino Games Data
// Detailed information for each casino game

const casinoGamesData = {
    '21twentyone': {
        id: '21twentyone',
        title: '21 Twenty One',
        description: 'A classic card game where you try to get as close to 21 as possible without going over. Test your luck and strategy!',
        longDescription: '21 Twenty One is a classic card game that combines luck and strategy. The goal is simple: get as close to 21 as possible without going over. Face cards are worth 10, aces can be 1 or 11, and numbered cards are worth their face value. Make strategic decisions on when to hit, stand, or double down.',
        fullContent: '<h2>About 21 Twenty One</h2>\n<p>21 Twenty One is a classic card game that brings the excitement of the casino to your browser. This timeless game combines luck and strategy, making every hand an exciting challenge. Whether you\'re a seasoned player or new to the game, 21 Twenty One offers endless entertainment.</p>\n\n<h3>How to Play</h3>\n<p>The objective is simple: get as close to 21 as possible without exceeding it. Face cards (Jack, Queen, King) are worth 10 points, Aces can be worth 1 or 11 (your choice), and numbered cards are worth their face value. You\'ll make decisions on each hand: hit to take another card, stand to keep your current total, or double down to double your bet and take one more card.</p>\n\n<h3>Gameplay Strategy</h3>\n<p>Success in 21 Twenty One requires a balance of strategy and risk management. Knowing when to hit and when to stand is crucial. Generally, you should stand on 17 or higher, but the decision depends on what cards you\'ve seen and your current total. The game rewards both careful planning and bold moves.</p>\n\n<h3>Key Features</h3>\n<p>Experience smooth gameplay with intuitive controls and beautiful card graphics. The game features realistic casino sounds and animations that create an immersive gaming experience. Play at your own pace and enjoy the thrill of each hand.</p>',
        thumbnail: '../casino game screenshots/21twentyone/logo.jpg',
        logo: '../casino game screenshots/21twentyone/logo.jpg',
        path: '../casino games/21twentyone/index.html',
        categories: ['Card Game', 'Strategy', 'Classic'],
        stats: {
            players: '50K+',
            rating: '4.5',
            difficulty: 'Medium',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/21twentyone/ss1.png',
            '../casino game screenshots/21twentyone/ss2.png',
            '../casino game screenshots/21twentyone/ss3.png'
        ]
    },
    '3dblackjack': {
        id: '3dblackjack',
        title: '3D Blackjack',
        description: 'Experience blackjack in stunning 3D! Play this classic casino game with beautiful graphics and smooth animations.',
        longDescription: '3D Blackjack brings the classic casino game to life with stunning 3D graphics and immersive gameplay. Play against the dealer and try to get closer to 21 without going over. The game features realistic card dealing, smooth animations, and authentic casino atmosphere.',
        fullContent: '<h2>About 3D Blackjack</h2>\n<p>3D Blackjack is a visually stunning take on the classic casino card game. With its impressive 3D graphics and smooth animations, this game brings the excitement of a real casino to your screen. Experience the thrill of each hand as you play against the dealer in this immersive blackjack experience.</p>\n\n<h3>Gameplay</h3>\n<p>In 3D Blackjack, your goal is to beat the dealer by getting a hand value closer to 21 without exceeding it. You\'ll receive two cards initially and can choose to hit (take another card), stand (keep your current hand), double down (double your bet and take one more card), or split (if you have a pair).</p>\n\n<h3>3D Experience</h3>\n<p>The game features beautiful 3D graphics that make every card deal feel realistic. Watch as cards are dealt smoothly, chips are placed, and the game unfolds in an immersive 3D environment. The attention to detail creates an authentic casino atmosphere.</p>\n\n<h3>Features</h3>\n<p>Enjoy smooth gameplay with intuitive controls, realistic sound effects, and stunning visual effects. The game includes multiple betting options and allows you to play at your own pace. Whether you\'re a beginner or experienced player, 3D Blackjack offers an engaging experience.</p>',
        thumbnail: '../casino game screenshots/3dblackjack/logo.jpg',
        logo: '../casino game screenshots/3dblackjack/logo.jpg',
        path: '../casino games/3dblackjack/index.html',
        categories: ['Blackjack', '3D', 'Classic'],
        stats: {
            players: '75K+',
            rating: '4.7',
            difficulty: 'Medium',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/3dblackjack/1.jpg',
            '../casino game screenshots/3dblackjack/2.jpg',
            '../casino game screenshots/3dblackjack/3.jpg'
        ]
    },
    'americanrouletteroyale': {
        id: 'americanrouletteroyale',
        title: 'American Roulette Royale',
        description: 'Spin the wheel and place your bets in this classic American roulette game. Experience the excitement of the casino!',
        longDescription: 'American Roulette Royale brings the classic casino roulette experience to your browser. Place your bets on numbers, colors, or sections, then watch as the ball spins around the wheel. The game features authentic American roulette rules with the double zero pocket.',
        fullContent: '<h2>About American Roulette Royale</h2>\n<p>American Roulette Royale is the classic casino game where luck meets strategy. Spin the wheel and place your bets on numbers, colors, or sections. With its authentic American roulette layout featuring both single and double zero pockets, this game offers the true casino roulette experience.</p>\n\n<h3>How to Play</h3>\n<p>Place your bets on the roulette table by selecting numbers, colors (red or black), odd or even, or various sections. Once bets are placed, the wheel spins and the ball lands on a number. If your bet matches the winning number or category, you win according to the payout odds.</p>\n\n<h3>Betting Options</h3>\n<p>The game offers various betting options including straight bets (single number), split bets (two numbers), street bets (three numbers), corner bets (four numbers), and outside bets like red/black, odd/even, or high/low. Each bet type offers different payout odds.</p>\n\n<h3>Features</h3>\n<p>Experience smooth wheel spinning animations, realistic ball physics, and authentic casino sounds. The game features clear betting interface and easy-to-understand payouts. Enjoy the thrill of roulette from the comfort of your browser.</p>',
        thumbnail: '../casino game screenshots/americanrouletteroyale/logo.jpg',
        logo: '../casino game screenshots/americanrouletteroyale/logo.jpg',
        path: '../casino games/americanrouletteroyale/index.html',
        categories: ['Roulette', 'Classic', 'Casino'],
        stats: {
            players: '60K+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/americanrouletteroyale/1.jpg',
            '../casino game screenshots/americanrouletteroyale/2.jpg',
            '../casino game screenshots/americanrouletteroyale/3.jpg'
        ]
    },
    'baccarat': {
        id: 'baccarat',
        title: 'Baccarat',
        description: 'Play the elegant game of Baccarat. Bet on Player, Banker, or Tie in this classic casino card game.',
        longDescription: 'Baccarat is an elegant card game where you bet on whether the Player or Banker hand will win, or if it will be a Tie. The game features simple rules and exciting gameplay, making it one of the most popular casino games.',
        fullContent: '<h2>About Baccarat</h2>\n<p>Baccarat is an elegant and sophisticated card game that has been a casino favorite for centuries. Known for its simplicity and excitement, Baccarat offers three betting options: Player, Banker, or Tie. The game is easy to learn but offers thrilling gameplay with each hand.</p>\n\n<h3>Gameplay</h3>\n<p>In Baccarat, two hands are dealt: the Player hand and the Banker hand. You bet on which hand will have a total closest to 9, or if they will tie. Cards are worth their face value, with face cards and tens worth 0, and aces worth 1. If a hand totals more than 9, only the last digit counts (e.g., 15 becomes 5).</p>\n\n<h3>Betting Options</h3>\n<p>Place your bet on Player, Banker, or Tie. Player and Banker bets typically pay 1:1, while Tie bets offer higher payouts (usually 8:1 or 9:1) but are less likely to win. The game follows standard baccarat rules for drawing additional cards.</p>\n\n<h3>Features</h3>\n<p>Experience the elegance of Baccarat with smooth card dealing, beautiful graphics, and authentic casino atmosphere. The game features clear betting interface and easy-to-understand rules. Enjoy this classic casino game in a modern, accessible format.</p>',
        thumbnail: '../casino game screenshots/baccarat/logo.jpg',
        logo: '../casino game screenshots/baccarat/logo.jpg',
        path: '../casino games/baccarat/index.html',
        categories: ['Card Game', 'Classic', 'Casino'],
        stats: {
            players: '45K+',
            rating: '4.5',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/baccarat/1.jpg',
            '../casino game screenshots/baccarat/2.jpg',
            '../casino game screenshots/baccarat/3.jpg'
        ]
    },
    'blackjack': {
        id: 'blackjack',
        title: 'Blackjack',
        description: 'Play the classic game of Blackjack. Beat the dealer by getting closer to 21 without going over.',
        longDescription: 'Blackjack is the classic casino card game where you compete against the dealer. Get as close to 21 as possible without exceeding it. Use strategy and luck to beat the dealer and win big!',
        fullContent: '<h2>About Blackjack</h2>\n<p>Blackjack is one of the most popular casino card games in the world. The goal is simple: beat the dealer by getting a hand value closer to 21 without going over. With its perfect blend of skill and luck, Blackjack offers exciting gameplay that keeps players coming back.</p>\n\n<h3>How to Play</h3>\n<p>You and the dealer each receive two cards. Face cards are worth 10, aces can be 1 or 11, and numbered cards are worth their face value. You can hit (take another card), stand (keep your hand), double down (double your bet and take one card), or split (if you have a pair). The dealer must hit on 16 or less and stand on 17 or more.</p>\n\n<h3>Strategy</h3>\n<p>Blackjack strategy involves knowing when to hit, stand, double down, or split based on your hand and the dealer\'s up card. Basic strategy can significantly improve your odds, but the game still involves an element of luck that makes each hand exciting.</p>\n\n<h3>Features</h3>\n<p>Enjoy smooth gameplay with intuitive controls and clear graphics. The game features realistic card dealing and authentic casino atmosphere. Play at your own pace and experience the thrill of Blackjack.</p>',
        thumbnail: '../casino game screenshots/blackjack/logo.png',
        logo: '../casino game screenshots/blackjack/logo.png',
        path: '../casino games/blackjack/index.html',
        categories: ['Blackjack', 'Card Game', 'Classic'],
        stats: {
            players: '100K+',
            rating: '4.8',
            difficulty: 'Medium',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/blackjack/ss1.png',
            '../casino game screenshots/blackjack/ss2.png',
            '../casino game screenshots/blackjack/ss3.png'
        ]
    },
    'blackjack21': {
        id: 'blackjack21',
        title: 'Blackjack 21',
        description: 'Experience the classic game of 21 in this exciting Blackjack variant. Play against the dealer and test your skills!',
        longDescription: 'Blackjack 21 is a classic variant of the popular casino card game. Play against the dealer and try to get as close to 21 as possible. The game features smooth gameplay and authentic casino experience.',
        fullContent: '<h2>About Blackjack 21</h2>\n<p>Blackjack 21 brings the classic casino card game to your browser with smooth gameplay and authentic experience. Play against the dealer and use strategy to get closer to 21 without busting. This variant offers all the excitement of traditional blackjack with modern gameplay.</p>\n\n<h3>Gameplay</h3>\n<p>The objective is to beat the dealer by having a hand value closer to 21. You\'ll make decisions on each hand: hit to take another card, stand to keep your current total, or use special options like doubling down or splitting pairs. The dealer follows standard rules, hitting on 16 or less and standing on 17 or more.</p>\n\n<h3>Features</h3>\n<p>Enjoy intuitive controls, clear graphics, and smooth card dealing animations. The game features realistic casino atmosphere and authentic gameplay. Whether you\'re a beginner or experienced player, Blackjack 21 offers an engaging experience.</p>',
        thumbnail: '../casino game screenshots/blackjack21/logo.png',
        logo: '../casino game screenshots/blackjack21/logo.png',
        path: '../casino games/blackjack21/index.html',
        categories: ['Blackjack', 'Card Game', 'Classic'],
        stats: {
            players: '80K+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/blackjack21/s1.png',
            '../casino game screenshots/blackjack21/s2.png',
            '../casino game screenshots/blackjack21/s3.png'
        ]
    },
    'casinocardsmemory': {
        id: 'casinocardsmemory',
        title: 'Casino Cards Memory',
        description: 'Test your memory with this exciting card matching game. Find pairs and improve your memory skills!',
        longDescription: 'Casino Cards Memory is a fun and challenging memory game where you match pairs of cards. Flip cards to find matching pairs and test your memory skills. The game features casino-themed cards and increasing difficulty levels.',
        fullContent: '<h2>About Casino Cards Memory</h2>\n<p>Casino Cards Memory is an engaging memory game that combines the excitement of casino cards with the challenge of memory matching. Flip cards to find matching pairs and test your memory skills. With increasing difficulty levels, this game offers hours of entertainment.</p>\n\n<h3>How to Play</h3>\n<p>Cards are laid face down on the board. Click on cards to flip them and reveal their faces. Find two matching cards to make a pair and remove them from the board. The goal is to match all pairs with as few moves as possible. Remember the positions of cards you\'ve seen to improve your performance.</p>\n\n<h3>Features</h3>\n<p>The game features beautiful casino-themed cards, smooth animations, and multiple difficulty levels. As you progress, the number of cards increases, making the challenge more difficult. Track your best scores and try to improve with each game.</p>',
        thumbnail: '../casino game screenshots/casinocardsmemory/logo.png',
        logo: '../casino game screenshots/casinocardsmemory/logo.png',
        path: '../casino games/casinocardsmemory/index.html',
        categories: ['Card Game', 'Memory', 'Puzzle'],
        stats: {
            players: '35K+',
            rating: '4.4',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../casino game screenshots/casinocardsmemory/1.png',
            '../casino game screenshots/casinocardsmemory/2.png',
            '../casino game screenshots/casinocardsmemory/3.png'
        ]
    },
    'casinospinandwin': {
        id: 'casinospinandwin',
        title: 'Casino Spin and Win',
        description: 'Spin the reels and win big in this exciting slot machine game. Experience the thrill of casino slots!',
        longDescription: 'Casino Spin and Win is an exciting slot machine game where you spin the reels and try to match symbols for big wins. The game features multiple paylines, bonus features, and the classic slot machine experience.',
        fullContent: '<h2>About Casino Spin and Win</h2>\n<p>Casino Spin and Win brings the excitement of slot machines to your browser. Spin the reels and watch as symbols align to create winning combinations. With multiple paylines and bonus features, this game offers the classic casino slot experience.</p>\n\n<h3>Gameplay</h3>\n<p>Place your bet and spin the reels. When matching symbols align on active paylines, you win according to the payout table. The game features various symbols with different values, and special symbols can trigger bonus features or free spins.</p>\n\n<h3>Features</h3>\n<p>Enjoy smooth reel spinning animations, exciting sound effects, and multiple betting options. The game features clear paytables and easy-to-understand rules. Experience the thrill of casino slots with every spin.</p>',
        thumbnail: '../casino game screenshots/casinospinandwin/logo.jpg',
        logo: '../casino game screenshots/casinospinandwin/logo.jpg',
        path: '../casino games/casinospinandwin/index.html',
        categories: ['Slots', 'Casino', 'Arcade'],
        stats: {
            players: '55K+',
            rating: '4.5',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/casinospinandwin/thumb1.jpg',
            '../casino game screenshots/casinospinandwin/thumb2.jpg',
            '../casino game screenshots/casinospinandwin/thumb3.jpg'
        ]
    },
    'championsslot': {
        id: 'championsslot',
        title: 'Champions Slot',
        description: 'Become a champion in this exciting slot machine game. Spin the reels and claim your victory!',
        longDescription: 'Champions Slot is an exciting slot machine game with a sports theme. Spin the reels and match symbols to win big. The game features championship-themed symbols and exciting bonus features.',
        fullContent: '<h2>About Champions Slot</h2>\n<p>Champions Slot combines the excitement of slot machines with a thrilling sports theme. Spin the reels and match symbols to win big prizes. With its championship-themed design and exciting gameplay, this game offers an engaging slot experience.</p>\n\n<h3>Gameplay</h3>\n<p>Place your bet and spin the reels. Match symbols across paylines to win prizes. The game features special symbols and bonus features that can increase your winnings. Experience the thrill of victory with every spin.</p>\n\n<h3>Features</h3>\n<p>Enjoy sports-themed graphics, smooth animations, and exciting sound effects. The game features multiple paylines and bonus rounds. Feel like a champion as you spin and win!</p>',
        thumbnail: '../casino game screenshots/championsslot/logo.jpg',
        logo: '../casino game screenshots/championsslot/logo.jpg',
        path: '../casino games/championsslot/index.html',
        categories: ['Slots', 'Sports', 'Casino'],
        stats: {
            players: '40K+',
            rating: '4.4',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/championsslot/thumb1.jpg',
            '../casino game screenshots/championsslot/thumb2.jpg',
            '../casino game screenshots/championsslot/thumb3.jpg'
        ]
    },
    'christmassurprise': {
        id: 'christmassurprise',
        title: 'Christmas Surprise',
        description: 'Celebrate the holidays with this festive slot machine game. Spin for Christmas surprises and big wins!',
        longDescription: 'Christmas Surprise is a holiday-themed slot machine game filled with festive symbols and Christmas cheer. Spin the reels and discover holiday surprises with every win.',
        fullContent: '<h2>About Christmas Surprise</h2>\n<p>Christmas Surprise brings holiday cheer to slot machine gaming. This festive slot game features Christmas-themed symbols, holiday music, and exciting bonus features. Spin the reels and discover surprises with every win.</p>\n\n<h3>Gameplay</h3>\n<p>Enjoy the festive atmosphere as you spin the reels. Match Christmas symbols across paylines to win prizes. The game features special holiday symbols and bonus features that add to the excitement.</p>\n\n<h3>Features</h3>\n<p>Experience beautiful holiday graphics, festive sound effects, and smooth gameplay. The game captures the spirit of Christmas with its themed design and exciting features. Celebrate the season with every spin!</p>',
        thumbnail: '../casino game screenshots/christmassurprise/logo.png',
        logo: '../casino game screenshots/christmassurprise/logo.png',
        path: '../casino games/christmassurprise/index.html',
        categories: ['Slots', 'Holiday', 'Casino'],
        stats: {
            players: '30K+',
            rating: '4.3',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/christmassurprise/1.jpg',
            '../casino game screenshots/christmassurprise/2.jpg',
            '../casino game screenshots/christmassurprise/3.jpg'
        ]
    },
    'craps': {
        id: 'craps',
        title: 'Craps',
        description: 'Roll the dice in this classic casino dice game. Place your bets and test your luck!',
        longDescription: 'Craps is the exciting dice game where you bet on the outcome of dice rolls. Place various bets and watch as the dice determine your fate. Experience the fast-paced action of this classic casino game.',
        fullContent: '<h2>About Craps</h2>\n<p>Craps is one of the most exciting and fast-paced casino games. Roll the dice and place your bets on various outcomes. With its multiple betting options and exciting gameplay, Craps offers non-stop action and excitement.</p>\n\n<h3>How to Play</h3>\n<p>The game begins with a "come-out roll." If you roll 7 or 11, you win on a "pass line" bet. If you roll 2, 3, or 12, you lose. Any other number becomes the "point," and you must roll that number again before rolling a 7 to win. Various other bets are available with different odds and payouts.</p>\n\n<h3>Betting Options</h3>\n<p>Craps offers numerous betting options including pass line, don\'t pass, come, don\'t come, and various proposition bets. Each bet has different odds and payouts, allowing for strategic play.</p>\n\n<h3>Features</h3>\n<p>Experience realistic dice rolling animations, authentic casino sounds, and fast-paced gameplay. The game features clear betting interface and easy-to-understand rules. Feel the excitement of the casino with every roll!</p>',
        thumbnail: '../casino game screenshots/craps/logo.jpg',
        logo: '../casino game screenshots/craps/logo.jpg',
        path: '../casino games/craps/index.html',
        categories: ['Dice Game', 'Casino', 'Classic'],
        stats: {
            players: '25K+',
            rating: '4.2',
            difficulty: 'Medium',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/craps/1.jpg',
            '../casino game screenshots/craps/2.jpg',
            '../casino game screenshots/craps/3.jpg'
        ]
    },
    'halloweenslot': {
        id: 'halloweenslot',
        title: 'Halloween Slot',
        description: 'Get spooky with this Halloween-themed slot machine. Spin for treats and scary wins!',
        longDescription: 'Halloween Slot is a spooky slot machine game with Halloween-themed symbols and festive atmosphere. Spin the reels and enjoy the Halloween spirit with every win.',
        fullContent: '<h2>About Halloween Slot</h2>\n<p>Halloween Slot brings spooky fun to slot machine gaming. This Halloween-themed game features festive symbols, eerie sound effects, and exciting bonus features. Spin the reels and enjoy the Halloween spirit!</p>\n\n<h3>Gameplay</h3>\n<p>Experience the spooky atmosphere as you spin the reels. Match Halloween symbols across paylines to win prizes. The game features special spooky symbols and bonus features that add to the excitement.</p>\n\n<h3>Features</h3>\n<p>Enjoy Halloween-themed graphics, festive sound effects, and smooth gameplay. The game captures the spirit of Halloween with its themed design and exciting features. Get ready for some spooky fun!</p>',
        thumbnail: '../casino game screenshots/halloweenslot/logo.png',
        logo: '../casino game screenshots/halloweenslot/logo.png',
        path: '../casino games/halloweenslot/index.html',
        categories: ['Slots', 'Holiday', 'Casino'],
        stats: {
            players: '28K+',
            rating: '4.3',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/halloweenslot/01_MENU.png',
            '../casino game screenshots/halloweenslot/02_GAME.png',
            '../casino game screenshots/halloweenslot/03_GAME.png'
        ]
    },
    'happyeasterslotmachine': {
        id: 'happyeasterslotmachine',
        title: 'Happy Easter Slot Machine',
        description: 'Celebrate Easter with this festive slot machine game. Spin for eggs and Easter surprises!',
        longDescription: 'Happy Easter Slot Machine is a holiday-themed slot game with Easter symbols and festive atmosphere. Spin the reels and discover Easter surprises.',
        fullContent: '<h2>About Happy Easter Slot Machine</h2>\n<p>Happy Easter Slot Machine brings Easter cheer to slot gaming. This festive game features Easter-themed symbols, holiday music, and exciting bonus features. Spin the reels and discover Easter surprises!</p>\n\n<h3>Gameplay</h3>\n<p>Enjoy the festive atmosphere as you spin the reels. Match Easter symbols across paylines to win prizes. The game features special holiday symbols and bonus features.</p>\n\n<h3>Features</h3>\n<p>Experience beautiful Easter graphics, festive sound effects, and smooth gameplay. The game captures the spirit of Easter with its themed design. Celebrate the holiday with every spin!</p>',
        thumbnail: '../casino game screenshots/happyeasterslotmachine/logo.png',
        logo: '../casino game screenshots/happyeasterslotmachine/logo.png',
        path: '../casino games/happyeasterslotmachine/index.html',
        categories: ['Slots', 'Holiday', 'Casino'],
        stats: {
            players: '22K+',
            rating: '4.2',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/happyeasterslotmachine/001.png',
            '../casino game screenshots/happyeasterslotmachine/002.jpg',
            '../casino game screenshots/happyeasterslotmachine/003.jpg'
        ]
    },
    'highorlow': {
        id: 'highorlow',
        title: 'High or Low',
        description: 'Guess if the next card will be higher or lower in this simple and exciting card game.',
        longDescription: 'High or Low is a simple card game where you predict whether the next card will be higher or lower than the current card. It\'s easy to learn but offers exciting gameplay with each prediction.',
        fullContent: '<h2>About High or Low</h2>\n<p>High or Low is a simple yet exciting card game that tests your prediction skills. Guess whether the next card will be higher or lower than the current card. With its straightforward rules and exciting gameplay, this game offers quick and fun entertainment.</p>\n\n<h3>How to Play</h3>\n<p>A card is revealed, and you predict whether the next card will be higher or lower in value. Face cards follow standard hierarchy (Jack, Queen, King), and you can also bet on whether the next card will be the same value. Make correct predictions to win!</p>\n\n<h3>Features</h3>\n<p>Enjoy simple gameplay with clear rules and fast-paced action. The game features smooth card dealing and easy-to-understand mechanics. Perfect for quick gaming sessions!</p>',
        thumbnail: '../casino game screenshots/highorlow/logo.png',
        logo: '../casino game screenshots/highorlow/logo.png',
        path: '../casino games/highorlow/index.html',
        categories: ['Card Game', 'Simple', 'Casino'],
        stats: {
            players: '20K+',
            rating: '4.1',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/highorlow/1.jpg',
            '../casino game screenshots/highorlow/2.jpg',
            '../casino game screenshots/highorlow/3.jpg'
        ]
    },
    'jokerpoker': {
        id: 'jokerpoker',
        title: 'Joker Poker',
        description: 'Play poker with a joker twist! This exciting poker variant adds wild cards for more winning opportunities.',
        longDescription: 'Joker Poker is an exciting poker variant that includes jokers as wild cards. Create winning poker hands with the help of jokers and enjoy this unique twist on classic poker.',
        fullContent: '<h2>About Joker Poker</h2>\n<p>Joker Poker adds an exciting twist to classic poker by including jokers as wild cards. This variation increases your chances of creating winning hands and adds an extra element of strategy to the game.</p>\n\n<h3>Gameplay</h3>\n<p>Play poker with jokers that can substitute for any card to complete winning hands. The game follows standard poker hand rankings, but jokers can help you create stronger combinations. Make the best possible hand to win!</p>\n\n<h3>Features</h3>\n<p>Enjoy the classic poker experience with the added excitement of wild cards. The game features smooth gameplay, clear graphics, and authentic poker atmosphere. Experience poker with a joker twist!</p>',
        thumbnail: '../casino game screenshots/jokerpoker/logo.png',
        logo: '../casino game screenshots/jokerpoker/logo.png',
        path: '../casino games/jokerpoker/index.html',
        categories: ['Poker', 'Card Game', 'Casino'],
        stats: {
            players: '38K+',
            rating: '4.4',
            difficulty: 'Medium',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/jokerpoker/1.jpg',
            '../casino game screenshots/jokerpoker/2.jpg',
            '../casino game screenshots/jokerpoker/3.jpg'
        ]
    },
    'nekopachinko': {
        id: 'nekopachinko',
        title: 'Neko Pachinko',
        description: 'Experience the Japanese pachinko game with cute cat characters. Drop balls and win prizes!',
        longDescription: 'Neko Pachinko is a Japanese-style pachinko game with adorable cat characters. Drop balls into the machine and watch as they bounce through pins to land in winning slots.',
        fullContent: '<h2>About Neko Pachinko</h2>\n<p>Neko Pachinko brings the excitement of Japanese pachinko to your browser with adorable cat characters. Drop balls into the machine and watch as they bounce through pins to land in winning slots. This unique game combines skill and luck for an engaging experience.</p>\n\n<h3>Gameplay</h3>\n<p>Launch balls into the pachinko machine and watch as they bounce through pins. Balls that land in winning slots award prizes. The game features cute cat characters and Japanese-style pachinko mechanics.</p>\n\n<h3>Features</h3>\n<p>Enjoy adorable cat-themed graphics, smooth ball physics, and authentic pachinko gameplay. The game features multiple levels and exciting bonus features. Experience the fun of pachinko with a cute twist!</p>',
        thumbnail: '../casino game screenshots/nekopachinko/logo.jpg',
        logo: '../casino game screenshots/nekopachinko/logo.jpg',
        path: '../casino games/nekopachinko/index.html',
        categories: ['Slots', 'Arcade', 'Casino'],
        stats: {
            players: '32K+',
            rating: '4.3',
            difficulty: 'Easy',
            ageRating: 'All Ages'
        },
        screenshots: [
            '../casino game screenshots/nekopachinko/thumb1.png',
            '../casino game screenshots/nekopachinko/thumb2.png',
            '../casino game screenshots/nekopachinko/thumb3.png'
        ]
    },
    'realisticslotmachine': {
        id: 'realisticslotmachine',
        title: 'Realistic Slot Machine',
        description: 'Experience the most realistic slot machine game. Spin the reels and enjoy authentic casino slot action!',
        longDescription: 'Realistic Slot Machine offers the most authentic slot machine experience with realistic graphics, smooth animations, and classic slot gameplay. Spin the reels and enjoy the true casino slot experience.',
        fullContent: '<h2>About Realistic Slot Machine</h2>\n<p>Realistic Slot Machine offers the most authentic slot machine experience available. With its realistic graphics, smooth animations, and classic slot mechanics, this game brings the casino slot experience directly to your browser.</p>\n\n<h3>Gameplay</h3>\n<p>Spin the reels and watch as symbols align to create winning combinations. The game features classic slot symbols, multiple paylines, and authentic slot machine mechanics. Experience the thrill of real casino slots!</p>\n\n<h3>Features</h3>\n<p>Enjoy realistic graphics, smooth reel spinning animations, and authentic casino sounds. The game features multiple betting options and clear paytables. Experience the most realistic slot machine gameplay available!</p>',
        thumbnail: '../casino game screenshots/realisticslotmachine/logo.jpg',
        logo: '../casino game screenshots/realisticslotmachine/logo.jpg',
        path: '../casino games/realisticslotmachine/index.html',
        categories: ['Slots', 'Casino', 'Classic'],
        stats: {
            players: '65K+',
            rating: '4.6',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/realisticslotmachine/Screenshot 1.jpg',
            '../casino game screenshots/realisticslotmachine/Screenshot 2.jpg',
            '../casino game screenshots/realisticslotmachine/Screenshot 3.jpg'
        ]
    },
    'reddog': {
        id: 'reddog',
        title: 'Red Dog',
        description: 'Play the exciting Red Dog card game. Bet on whether the next card will be between two dealt cards.',
        longDescription: 'Red Dog is a simple card game where you bet on whether a third card will fall between two dealt cards in value. It\'s easy to learn and offers exciting gameplay.',
        fullContent: '<h2>About Red Dog</h2>\n<p>Red Dog is a simple and exciting card game that\'s easy to learn but offers thrilling gameplay. The game involves betting on whether a third card will fall between two dealt cards in value.</p>\n\n<h3>How to Play</h3>\n<p>Two cards are dealt face up. You bet on whether a third card will have a value between the two dealt cards. If the cards are consecutive (like 5 and 6), it\'s a push. If the cards are the same, a third card is dealt and if it matches, you win. Otherwise, the outcome depends on whether the third card falls between the two initial cards.</p>\n\n<h3>Features</h3>\n<p>Enjoy simple rules, fast-paced gameplay, and exciting betting mechanics. The game features clear graphics and easy-to-understand gameplay. Perfect for quick gaming sessions!</p>',
        thumbnail: '../casino game screenshots/reddog/logo.jpg',
        logo: '../casino game screenshots/reddog/logo.jpg',
        path: '../casino games/reddog/index.html',
        categories: ['Card Game', 'Simple', 'Casino'],
        stats: {
            players: '18K+',
            rating: '4.0',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/reddog/1.jpg',
            '../casino game screenshots/reddog/2.jpg',
            '../casino game screenshots/reddog/3.jpg'
        ]
    },
    'slotarabian': {
        id: 'slotarabian',
        title: 'Slot Arabian',
        description: 'Experience the magic of the Middle East in this Arabian-themed slot machine game.',
        longDescription: 'Slot Arabian is an exotic slot machine game with Middle Eastern theme. Spin the reels and discover treasures in this beautifully themed slot game.',
        fullContent: '<h2>About Slot Arabian</h2>\n<p>Slot Arabian takes you on an exotic journey to the Middle East with its beautifully themed slot machine. Spin the reels and discover treasures in this Arabian-themed adventure.</p>\n\n<h3>Gameplay</h3>\n<p>Experience the magic of Arabia as you spin the reels. Match Arabian-themed symbols across paylines to win prizes. The game features exotic symbols and exciting bonus features.</p>\n\n<h3>Features</h3>\n<p>Enjoy beautiful Arabian-themed graphics, exotic sound effects, and smooth gameplay. The game captures the mystique of the Middle East with its themed design. Discover treasures with every spin!</p>',
        thumbnail: '../casino game screenshots/slotarabian/logo.jpg',
        logo: '../casino game screenshots/slotarabian/logo.jpg',
        path: '../casino games/slotarabian/index.html',
        categories: ['Slots', 'Themed', 'Casino'],
        stats: {
            players: '42K+',
            rating: '4.4',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/slotarabian/1.jpg',
            '../casino game screenshots/slotarabian/2.jpg',
            '../casino game screenshots/slotarabian/3.jpg'
        ]
    },
    'slotluckychristmas': {
        id: 'slotluckychristmas',
        title: 'Slot Lucky Christmas',
        description: 'Celebrate Christmas with this lucky slot machine. Spin for holiday wins and Christmas cheer!',
        longDescription: 'Slot Lucky Christmas is a festive slot machine game with Christmas theme. Spin the reels and enjoy holiday wins with this cheerful slot game.',
        fullContent: '<h2>About Slot Lucky Christmas</h2>\n<p>Slot Lucky Christmas brings holiday cheer to slot gaming with its festive Christmas theme. Spin the reels and enjoy holiday wins with this cheerful slot machine game.</p>\n\n<h3>Gameplay</h3>\n<p>Experience the joy of Christmas as you spin the reels. Match Christmas symbols across paylines to win prizes. The game features festive symbols and holiday bonus features.</p>\n\n<h3>Features</h3>\n<p>Enjoy festive Christmas graphics, holiday music, and smooth gameplay. The game captures the spirit of Christmas with its themed design. Celebrate the season with every spin!</p>',
        thumbnail: '../casino game screenshots/slotluckychristmas/logo.png',
        logo: '../casino game screenshots/slotluckychristmas/logo.png',
        path: '../casino games/slotluckychristmas/index.html',
        categories: ['Slots', 'Holiday', 'Casino'],
        stats: {
            players: '26K+',
            rating: '4.2',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/slotluckychristmas/1.jpg',
            '../casino game screenshots/slotluckychristmas/2.jpg',
            '../casino game screenshots/slotluckychristmas/3.jpg'
        ]
    },
    'slotmachinemrchicken': {
        id: 'slotmachinemrchicken',
        title: 'Slot Machine Mr Chicken',
        description: 'Join Mr. Chicken in this fun and quirky slot machine game. Spin for clucky wins!',
        longDescription: 'Slot Machine Mr Chicken is a fun and quirky slot machine game featuring a chicken theme. Spin the reels and enjoy this unique and entertaining slot experience.',
        fullContent: '<h2>About Slot Machine Mr Chicken</h2>\n<p>Slot Machine Mr Chicken is a fun and quirky slot machine game featuring an entertaining chicken theme. Spin the reels and join Mr. Chicken for a clucky good time!</p>\n\n<h3>Gameplay</h3>\n<p>Experience the fun as you spin the reels with Mr. Chicken. Match chicken-themed symbols across paylines to win prizes. The game features unique symbols and entertaining bonus features.</p>\n\n<h3>Features</h3>\n<p>Enjoy quirky chicken-themed graphics, fun sound effects, and smooth gameplay. The game offers a unique and entertaining slot experience. Get ready for some clucky fun!</p>',
        thumbnail: '../casino game screenshots/slotmachinemrchicken/logo.png',
        logo: '../casino game screenshots/slotmachinemrchicken/logo.png',
        path: '../casino games/slotmachinemrchicken/game/index.html',
        categories: ['Slots', 'Fun', 'Casino'],
        stats: {
            players: '33K+',
            rating: '4.3',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/slotmachinemrchicken/1.jpg',
            '../casino game screenshots/slotmachinemrchicken/2.jpg',
            '../casino game screenshots/slotmachinemrchicken/3.jpg'
        ]
    },
    'slotmachinespaceadventure': {
        id: 'slotmachinespaceadventure',
        title: 'Slot Machine Space Adventure',
        description: 'Blast off into space with this exciting space-themed slot machine. Spin for cosmic wins!',
        longDescription: 'Slot Machine Space Adventure is an exciting slot game with a space theme. Spin the reels and explore the cosmos while winning prizes.',
        fullContent: '<h2>About Slot Machine Space Adventure</h2>\n<p>Slot Machine Space Adventure takes you on an exciting journey through space with its cosmic-themed slot machine. Spin the reels and explore the universe while winning prizes!</p>\n\n<h3>Gameplay</h3>\n<p>Blast off into space as you spin the reels. Match space-themed symbols across paylines to win cosmic prizes. The game features stellar symbols and exciting bonus features.</p>\n\n<h3>Features</h3>\n<p>Enjoy space-themed graphics, cosmic sound effects, and smooth gameplay. The game captures the wonder of space exploration with its themed design. Explore the cosmos with every spin!</p>',
        thumbnail: '../casino game screenshots/slotmachinespaceadventure/logo.png',
        logo: '../casino game screenshots/slotmachinespaceadventure/logo.png',
        path: '../casino games/slotmachinespaceadventure/index.html',
        categories: ['Slots', 'Space', 'Casino'],
        stats: {
            players: '37K+',
            rating: '4.4',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/slotmachinespaceadventure/0.jpg',
            '../casino game screenshots/slotmachinespaceadventure/1.jpg',
            '../casino game screenshots/slotmachinespaceadventure/2.jpg'
        ]
    },
    'slotmachineultimatesoccer': {
        id: 'slotmachineultimatesoccer',
        title: 'Slot Machine Ultimate Soccer',
        description: 'Score big wins in this soccer-themed slot machine game. Spin for goals and victories!',
        longDescription: 'Slot Machine Ultimate Soccer is a sports-themed slot game featuring soccer symbols and exciting gameplay. Spin the reels and score big wins!',
        fullContent: '<h2>About Slot Machine Ultimate Soccer</h2>\n<p>Slot Machine Ultimate Soccer combines the excitement of soccer with slot machine gaming. Spin the reels and score big wins in this sports-themed slot game!</p>\n\n<h3>Gameplay</h3>\n<p>Experience the thrill of soccer as you spin the reels. Match soccer-themed symbols across paylines to win prizes. The game features sports symbols and exciting bonus features.</p>\n\n<h3>Features</h3>\n<p>Enjoy soccer-themed graphics, sports sound effects, and smooth gameplay. The game captures the excitement of soccer with its themed design. Score goals and win big with every spin!</p>',
        thumbnail: '../casino game screenshots/slotmachineultimatesoccer/logo.png',
        logo: '../casino game screenshots/slotmachineultimatesoccer/logo.png',
        path: '../casino games/slotmachineultimatesoccer/index.html',
        categories: ['Slots', 'Sports', 'Casino'],
        stats: {
            players: '48K+',
            rating: '4.5',
            difficulty: 'Easy',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/slotmachineultimatesoccer/1.jpg',
            '../casino game screenshots/slotmachineultimatesoccer/2.jpg',
            '../casino game screenshots/slotmachineultimatesoccer/3.jpg'
        ]
    },
    'threecardpoker': {
        id: 'threecardpoker',
        title: 'Three Card Poker',
        description: 'Play fast-paced poker with just three cards. Quick rounds and exciting gameplay!',
        longDescription: 'Three Card Poker is a fast-paced poker variant where you play with just three cards. It offers quick rounds and exciting gameplay, perfect for those who want fast poker action.',
        fullContent: '<h2>About Three Card Poker</h2>\n<p>Three Card Poker is a fast-paced poker variant that\'s perfect for players who want quick poker action. With just three cards, rounds are fast and exciting, making it ideal for those who enjoy rapid gameplay.</p>\n\n<h3>Gameplay</h3>\n<p>You receive three cards and decide whether to play or fold. If you play, you compete against the dealer\'s three-card hand. The best three-card poker hand wins. Hand rankings follow standard poker rules, with straight flushes being the highest.</p>\n\n<h3>Features</h3>\n<p>Enjoy fast-paced gameplay with quick rounds and exciting action. The game features smooth card dealing and clear hand rankings. Perfect for players who want poker action without long waits!</p>',
        thumbnail: '../casino game screenshots/threecardpoker/logo.jpg',
        logo: '../casino game screenshots/threecardpoker/logo.jpg',
        path: '../casino games/threecardpoker/index.html',
        categories: ['Poker', 'Card Game', 'Fast-Paced'],
        stats: {
            players: '52K+',
            rating: '4.6',
            difficulty: 'Medium',
            ageRating: '18+'
        },
        screenshots: [
            '../casino game screenshots/threecardpoker/1.jpg',
            '../casino game screenshots/threecardpoker/2.jpg',
            '../casino game screenshots/threecardpoker/3.jpg'
        ]
    }
};

