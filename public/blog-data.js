// Blog Authors Data
const blogAuthors = {
    'alex-gaming': {
        id: 'alex-gaming',
        name: 'Alex Thompson',
        title: 'Senior Gaming Editor',
        bio: 'Alex has been covering the gaming industry for over 8 years, specializing in indie games, mobile gaming, and esports. When not writing, you can find him speedrunning classic platformers.',
        avatar: '/public/images/authors/alex-gaming.jpg',
        social: {
            twitter: 'https://twitter.com/alexgaming',
            linkedin: 'https://linkedin.com/in/alexthompson'
        }
    },
    'sarah-chen': {
        id: 'sarah-chen',
        name: 'Sarah Chen',
        title: 'Gaming Strategy Expert',
        bio: 'Sarah is a competitive gamer turned writer who loves breaking down game mechanics and creating in-depth strategy guides. She has competed in multiple esports tournaments and now shares her expertise with the gaming community.',
        avatar: '/public/images/authors/sarah-chen.jpg',
        social: {
            twitter: 'https://twitter.com/sarahchen',
            twitch: 'https://twitch.tv/sarahchen'
        }
    },
    'mike-rodriguez': {
        id: 'mike-rodriguez',
        name: 'Mike Rodriguez',
        title: 'Retro Gaming Specialist',
        bio: 'Mike is passionate about classic games and gaming history. With a collection of over 500 retro games, he brings unique insights into how classic games influence modern game design.',
        avatar: '/public/images/authors/mike-rodriguez.jpg',
        social: {
            twitter: 'https://twitter.com/mikeretro',
            youtube: 'https://youtube.com/@mikeretro'
        }
    },
    'emma-wilson': {
        id: 'emma-wilson',
        name: 'Emma Wilson',
        title: 'Mobile Gaming Analyst',
        bio: 'Emma specializes in mobile and casual gaming, with a focus on game design psychology and player engagement. She has worked as a game designer before transitioning to gaming journalism.',
        avatar: '/public/images/authors/emma-wilson.jpg',
        social: {
            twitter: 'https://twitter.com/emmawilson',
            linkedin: 'https://linkedin.com/in/emmawilson'
        }
    }
};

// Blog Posts Data
const blogPosts = {
    'top-10-puzzle-games-2024': {
        id: 'top-10-puzzle-games-2024',
        title: 'Top 10 Puzzle Games to Challenge Your Mind in 2024',
        slug: 'top-10-puzzle-games-2024',
        excerpt: 'Discover the most engaging puzzle games that will test your problem-solving skills and keep you entertained for hours.',
        content: `
            <p>Puzzle games have always been a cornerstone of gaming, offering players the perfect blend of challenge and satisfaction. In 2024, the puzzle game genre continues to evolve with innovative mechanics and creative designs.</p>
            
            <h2>Why Puzzle Games Matter</h2>
            <p>Puzzle games aren't just entertaining—they're beneficial for cognitive development, problem-solving skills, and stress relief. Whether you're looking for a quick brain teaser or an immersive puzzle experience, there's something for everyone.</p>
            
            <h2>Our Top 10 Picks</h2>
            
            <h3>1. 2048 - The Classic Number Puzzle</h3>
            <p>This addictive sliding block puzzle has stood the test of time. Combine tiles to reach the elusive 2048 tile while managing limited space on the board.</p>
            
            <h3>2. Candy Crush Saga - Match-3 Mastery</h3>
            <p>The king of match-3 games continues to deliver with hundreds of levels, special events, and satisfying candy-crushing action.</p>
            
            <h3>3. The Witness - Environmental Puzzles</h3>
            <p>An open-world puzzle game that challenges you to solve intricate line puzzles while exploring a beautiful, mysterious island.</p>
            
            <h3>4. Portal 2 - Physics-Based Puzzling</h3>
            <p>Use portals to navigate through mind-bending test chambers in this critically acclaimed first-person puzzle platformer.</p>
            
            <h3>5. Tetris Effect - Rhythm Meets Puzzles</h3>
            <p>Experience the classic Tetris gameplay enhanced with stunning visuals and a dynamic soundtrack that responds to your actions.</p>
            
            <h2>Tips for Puzzle Game Success</h2>
            <ul>
                <li>Take your time - rushing often leads to mistakes</li>
                <li>Look for patterns and recurring solutions</li>
                <li>Don't be afraid to restart if you're stuck</li>
                <li>Practice regularly to improve your skills</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Whether you're a casual player or a puzzle enthusiast, these games offer something special. Start with the classics like 2048 and work your way through more complex titles as you build your skills.</p>
        `,
        author: 'alex-gaming',
        category: 'Puzzle Games',
        tags: ['puzzle', 'brain games', 'strategy', '2048', 'casual gaming'],
        publishDate: '2024-11-15',
        readTime: '8 min read',
        featured: true,
        thumbnail: '/public/images/blog/puzzle-games-2024.jpg',
        views: 15420
    },
    'mastering-subway-surfers': {
        id: 'mastering-subway-surfers',
        title: 'Mastering Subway Surfers: Advanced Tips and Tricks',
        slug: 'mastering-subway-surfers',
        excerpt: 'Take your Subway Surfers gameplay to the next level with these expert strategies and hidden techniques.',
        content: `
            <p>Subway Surfers has captivated millions of players worldwide with its fast-paced endless runner gameplay. Whether you're aiming for a high score or trying to complete missions, these advanced tips will help you become a Subway Surfers master.</p>
            
            <h2>Understanding the Basics</h2>
            <p>Before diving into advanced strategies, it's crucial to master the fundamentals: swipe controls, timing, and obstacle recognition.</p>
            
            <h2>Power-Up Strategies</h2>
            
            <h3>Jetpack Mastery</h3>
            <p>The jetpack is your best friend for collecting coins and avoiding obstacles. Learn to activate it at the right moments for maximum benefit.</p>
            
            <h3>Hoverboard Tactics</h3>
            <p>Don't waste your hoverboards! Save them for challenging sections or when you're on a high-scoring run.</p>
            
            <h2>Score Multiplier Tips</h2>
            <p>Your score multiplier is key to achieving massive scores. Focus on:</p>
            <ul>
                <li>Completing daily missions consistently</li>
                <li>Collecting letter tiles to spell ROLL</li>
                <li>Using score-boosting characters and boards</li>
                <li>Maintaining long runs without crashes</li>
            </ul>
            
            <h2>Character and Board Selection</h2>
            <p>Different characters and boards offer unique advantages. Experiment to find combinations that match your playstyle.</p>
            
            <h2>Advanced Movement Techniques</h2>
            <p>Master these techniques to navigate through the toughest sections:</p>
            <ul>
                <li>Quick lane switching for coin collection</li>
                <li>Perfect timing for rolling under barriers</li>
                <li>Jump-roll combinations for complex obstacles</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Practice makes perfect in Subway Surfers. Apply these strategies consistently, and you'll see your scores soar!</p>
        `,
        author: 'sarah-chen',
        category: 'Action Games',
        tags: ['subway surfers', 'endless runner', 'mobile gaming', 'tips and tricks', 'high score'],
        publishDate: '2024-11-20',
        readTime: '6 min read',
        featured: true,
        thumbnail: '/public/images/blog/subway-surfers-guide.jpg',
        views: 23150
    },
    'evolution-of-browser-games': {
        id: 'evolution-of-browser-games',
        title: 'The Evolution of Browser Games: From Flash to HTML5',
        slug: 'evolution-of-browser-games',
        excerpt: 'Explore the fascinating journey of browser-based gaming from the Flash era to modern HTML5 experiences.',
        content: `
            <p>Browser games have come a long way since the early days of the internet. Let's take a journey through the evolution of browser-based gaming and see how far we've come.</p>
            
            <h2>The Flash Era (1996-2020)</h2>
            <p>Adobe Flash revolutionized browser gaming, enabling developers to create rich, interactive experiences. Games like Club Penguin, FarmVille, and countless others defined a generation of online gaming.</p>
            
            <h3>Why Flash Was Popular</h3>
            <ul>
                <li>Easy to develop and deploy</li>
                <li>Cross-platform compatibility</li>
                <li>Rich multimedia capabilities</li>
                <li>Large developer community</li>
            </ul>
            
            <h2>The Transition Period</h2>
            <p>As security concerns and performance issues with Flash grew, the industry began transitioning to open web standards.</p>
            
            <h2>The HTML5 Revolution</h2>
            <p>HTML5, along with modern JavaScript and WebGL, has transformed browser gaming:</p>
            
            <h3>Advantages of HTML5 Gaming</h3>
            <ul>
                <li>No plugins required</li>
                <li>Better performance and security</li>
                <li>Mobile-friendly by default</li>
                <li>Access to modern web APIs</li>
                <li>Easier maintenance and updates</li>
            </ul>
            
            <h2>Modern Browser Games</h2>
            <p>Today's browser games rival native applications in quality and performance. Technologies like WebAssembly and WebGPU are pushing boundaries even further.</p>
            
            <h3>Popular Modern Browser Games</h3>
            <ul>
                <li>Agar.io - Multiplayer cell-eating action</li>
                <li>Slither.io - Snake-inspired multiplayer</li>
                <li>2048 - Addictive puzzle gameplay</li>
                <li>Cookie Clicker - Incremental gaming phenomenon</li>
            </ul>
            
            <h2>The Future of Browser Gaming</h2>
            <p>With technologies like cloud gaming, WebXR for VR/AR experiences, and continued improvements to web standards, the future of browser gaming looks incredibly bright.</p>
            
            <h2>Conclusion</h2>
            <p>From Flash to HTML5, browser games have evolved tremendously. Today's players enjoy high-quality gaming experiences without downloads or installations, making gaming more accessible than ever.</p>
        `,
        author: 'mike-rodriguez',
        category: 'Gaming History',
        tags: ['browser games', 'HTML5', 'Flash', 'gaming history', 'web development'],
        publishDate: '2024-11-10',
        readTime: '10 min read',
        featured: false,
        thumbnail: '/public/images/blog/browser-games-evolution.jpg',
        views: 8930
    },
    'mobile-gaming-trends-2024': {
        id: 'mobile-gaming-trends-2024',
        title: 'Mobile Gaming Trends to Watch in 2024',
        slug: 'mobile-gaming-trends-2024',
        excerpt: 'Discover the latest trends shaping the mobile gaming industry and what they mean for players.',
        content: `
            <p>Mobile gaming continues to dominate the gaming industry, with billions of players worldwide. Let's explore the key trends defining mobile gaming in 2024.</p>
            
            <h2>1. Cloud Gaming on Mobile</h2>
            <p>Services like Xbox Cloud Gaming and GeForce NOW are bringing console-quality games to mobile devices, eliminating the need for high-end hardware.</p>
            
            <h2>2. Cross-Platform Play</h2>
            <p>More games are enabling seamless play across mobile, PC, and console, creating unified gaming communities.</p>
            
            <h3>Benefits of Cross-Platform Gaming</h3>
            <ul>
                <li>Play with friends regardless of platform</li>
                <li>Progress syncs across devices</li>
                <li>Larger player bases for multiplayer games</li>
            </ul>
            
            <h2>3. Hyper-Casual Games Evolution</h2>
            <p>Hyper-casual games are becoming more sophisticated while maintaining their pick-up-and-play appeal.</p>
            
            <h2>4. Subscription Services</h2>
            <p>Apple Arcade and Google Play Pass offer ad-free, premium gaming experiences for a monthly fee, changing how players discover and play games.</p>
            
            <h2>5. Social and Competitive Features</h2>
            <p>Mobile games are incorporating more social features, tournaments, and competitive modes to increase engagement.</p>
            
            <h2>6. Improved Monetization Models</h2>
            <p>Developers are finding better balance between free-to-play mechanics and player satisfaction, moving away from aggressive pay-to-win models.</p>
            
            <h2>7. AR and VR Integration</h2>
            <p>Augmented reality games continue to evolve, while mobile VR experiences are becoming more accessible.</p>
            
            <h2>8. Blockchain and NFT Gaming</h2>
            <p>While controversial, blockchain-based games are exploring new ownership and economy models in mobile gaming.</p>
            
            <h2>Popular Mobile Games Leading These Trends</h2>
            <ul>
                <li>Genshin Impact - Console-quality mobile experience</li>
                <li>Among Us - Cross-platform social gaming</li>
                <li>Pokémon GO - AR gaming pioneer</li>
                <li>PUBG Mobile - Competitive mobile esports</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Mobile gaming is more diverse and innovative than ever. These trends are making mobile gaming more accessible, social, and engaging for players worldwide.</p>
        `,
        author: 'emma-wilson',
        category: 'Mobile Gaming',
        tags: ['mobile gaming', 'trends', 'cloud gaming', 'cross-platform', 'industry news'],
        publishDate: '2024-11-25',
        readTime: '7 min read',
        featured: true,
        thumbnail: '/public/images/blog/mobile-gaming-trends.jpg',
        views: 12340
    },
    'cookie-clicker-strategy-guide': {
        id: 'cookie-clicker-strategy-guide',
        title: 'Cookie Clicker: The Ultimate Strategy Guide for Maximum Cookies',
        slug: 'cookie-clicker-strategy-guide',
        excerpt: 'Learn the optimal strategies to maximize your cookie production and unlock all achievements in Cookie Clicker.',
        content: `
            <p>Cookie Clicker may seem simple at first, but beneath its charming exterior lies a deep strategy game. This guide will help you optimize your cookie empire.</p>
            
            <h2>Understanding the Basics</h2>
            <p>Cookie Clicker is an incremental game where you click cookies to earn cookies, which you then use to buy upgrades that generate more cookies automatically.</p>
            
            <h2>Early Game Strategy (0-1 Million Cookies)</h2>
            
            <h3>Initial Purchases</h3>
            <ol>
                <li>Buy cursors first - they're cheap and effective early on</li>
                <li>Get a few grandmas for steady passive income</li>
                <li>Unlock farms as soon as possible</li>
            </ol>
            
            <h3>Upgrade Priority</h3>
            <p>Focus on upgrades that multiply production rather than add flat amounts. These scale better as your empire grows.</p>
            
            <h2>Mid Game Strategy (1M-1B Cookies)</h2>
            
            <h3>Building Balance</h3>
            <p>Maintain a balanced portfolio of buildings. Don't over-invest in one type—diversification is key.</p>
            
            <h3>Golden Cookie Optimization</h3>
            <p>Golden cookies are crucial for progression:</p>
            <ul>
                <li>Click them immediately when they appear</li>
                <li>Combo "Frenzy" with "Lucky" for massive gains</li>
                <li>Use "Click Frenzy" to manually click for huge bonuses</li>
            </ul>
            
            <h2>Late Game Strategy (1B+ Cookies)</h2>
            
            <h3>Prestige System</h3>
            <p>Don't be afraid to ascend and use prestige upgrades. The permanent bonuses will accelerate future runs significantly.</p>
            
            <h3>Optimal Ascension Timing</h3>
            <p>Ascend when you can double your prestige level. This provides the best balance between progress and time investment.</p>
            
            <h2>Advanced Techniques</h2>
            
            <h3>Garden Management</h3>
            <p>The garden minigame can provide powerful bonuses. Focus on:</p>
            <ul>
                <li>Growing Queenbeets for sugar lumps</li>
                <li>Harvesting during buffs for maximum effect</li>
                <li>Unlocking all seeds for achievements</li>
            </ul>
            
            <h3>Stock Market Strategy</h3>
            <p>The stock market can multiply your cookies if played correctly. Buy low, sell high, and watch for patterns.</p>
            
            <h2>Achievement Hunting</h2>
            <p>Many achievements provide permanent bonuses. Prioritize:</p>
            <ul>
                <li>Building-related achievements</li>
                <li>Cookie clicking achievements</li>
                <li>Golden cookie achievements</li>
            </ul>
            
            <h2>Common Mistakes to Avoid</h2>
            <ul>
                <li>Ascending too early or too late</li>
                <li>Ignoring golden cookies</li>
                <li>Buying buildings without upgrades</li>
                <li>Not utilizing minigames</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Cookie Clicker rewards patience and strategy. Follow these tips, and you'll be swimming in cookies in no time!</p>
        `,
        author: 'alex-gaming',
        category: 'Strategy Guides',
        tags: ['cookie clicker', 'incremental games', 'strategy guide', 'idle games', 'tips'],
        publishDate: '2024-11-18',
        readTime: '9 min read',
        featured: false,
        thumbnail: '/public/images/blog/cookie-clicker-guide.jpg',
        views: 18750
    },
    'best-multiplayer-browser-games': {
        id: 'best-multiplayer-browser-games',
        title: 'Best Multiplayer Browser Games to Play with Friends',
        slug: 'best-multiplayer-browser-games',
        excerpt: 'Discover the top multiplayer browser games that you can enjoy with friends without any downloads.',
        content: `
            <p>Playing games with friends shouldn't require lengthy downloads or expensive hardware. These browser-based multiplayer games offer instant fun for everyone.</p>
            
            <h2>Why Browser Multiplayer Games?</h2>
            <p>Browser games are perfect for spontaneous gaming sessions. Just share a link, and everyone can join in seconds.</p>
            
            <h2>Top Multiplayer Browser Games</h2>
            
            <h3>1. Agar.io - Competitive Cell Growth</h3>
            <p>Eat smaller cells, avoid larger ones, and dominate the arena in this addictive multiplayer experience.</p>
            
            <h3>2. Slither.io - Snake Battle Royale</h3>
            <p>Guide your snake to consume orbs and other players in this modern take on the classic Snake game.</p>
            
            <h3>3. Skribbl.io - Drawing and Guessing</h3>
            <p>Take turns drawing while others guess what you're creating. Perfect for creative groups!</p>
            
            <h3>4. Among Us - Social Deduction</h3>
            <p>Work together to complete tasks while trying to identify the impostor among your crew.</p>
            
            <h3>5. Krunker.io - Fast-Paced FPS</h3>
            <p>Enjoy smooth first-person shooter action directly in your browser with various game modes.</p>
            
            <h2>Party Games for Groups</h2>
            
            <h3>Jackbox Party Packs</h3>
            <p>While not entirely browser-based, these games use phones as controllers and are perfect for parties.</p>
            
            <h3>GarticPhone</h3>
            <p>A hilarious combination of telephone and Pictionary that guarantees laughs.</p>
            
            <h2>Cooperative Experiences</h2>
            
            <h3>Shell Shockers</h3>
            <p>Team up with friends in this egg-themed multiplayer shooter with various game modes.</p>
            
            <h3>Powerline.io</h3>
            <p>A Tron-inspired game where you create light trails and try to make opponents crash.</p>
            
            <h2>Tips for Hosting Game Sessions</h2>
            <ul>
                <li>Use voice chat (Discord, etc.) for better coordination</li>
                <li>Choose games that match your group's skill level</li>
                <li>Take breaks between intense sessions</li>
                <li>Try different games to keep things fresh</li>
            </ul>
            
            <h2>Technical Requirements</h2>
            <p>Most browser games require:</p>
            <ul>
                <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Stable internet connection</li>
                <li>Mouse and keyboard (some support controllers)</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Browser multiplayer games offer accessible, instant fun for friends and family. No downloads, no hassle—just pure gaming enjoyment!</p>
        `,
        author: 'sarah-chen',
        category: 'Multiplayer Games',
        tags: ['multiplayer', 'browser games', 'online gaming', 'party games', 'co-op'],
        publishDate: '2024-11-22',
        readTime: '7 min read',
        featured: false,
        thumbnail: '/public/images/blog/multiplayer-browser-games.jpg',
        views: 14200
    }
};

// Helper function to get all blog posts as array
function getAllBlogPosts() {
    return Object.values(blogPosts).sort((a, b) =>
        new Date(b.publishDate) - new Date(a.publishDate)
    );
}

// Helper function to get featured posts
function getFeaturedPosts() {
    return Object.values(blogPosts)
        .filter(post => post.featured)
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

// Helper function to get posts by author
function getPostsByAuthor(authorId) {
    return Object.values(blogPosts)
        .filter(post => post.author === authorId)
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

// Helper function to get posts by category
function getPostsByCategory(category) {
    return Object.values(blogPosts)
        .filter(post => post.category === category)
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

// Helper function to get related posts
function getRelatedPosts(postId, limit = 3) {
    const currentPost = blogPosts[postId];
    if (!currentPost) return [];

    return Object.values(blogPosts)
        .filter(post => post.id !== postId)
        .filter(post =>
            post.category === currentPost.category ||
            post.tags.some(tag => currentPost.tags.includes(tag))
        )
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        .slice(0, limit);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogPosts, blogAuthors, getAllBlogPosts, getFeaturedPosts, getPostsByAuthor, getPostsByCategory, getRelatedPosts };
}
