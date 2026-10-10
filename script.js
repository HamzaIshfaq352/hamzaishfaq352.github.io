/* Add verified projects here when their links, media, and contributions are ready.
   { title, description, platforms: ['PC'], genres: ['Action', 'Adventure'], image: 'path-to-game-image', url: 'https://...' }
   Keep URLs absolute for external links and relative for locally hosted assets. */
const projects = [{
  title: 'Artillery Tycoon',
  cover: './assets/artillery-tycoon/square-icon.webp', coverType: 'app-icon', coverAlt: 'Artillery Tycoon square cover artwork', accent: '#c6d99a', tagline: 'FROM THE FACTORY TO THE FRONTLINE',
  description: 'A WWI-era factory management game. Research artillery, develop prototypes, manage production, and compete for government contracts.',
  platforms: ['PC'], genres: ['Simulation', 'Strategy'],
  image: './assets/artillery-tycoon/screenshot-1.jpg',
  imageAlt: 'Artillery production line inside the factory in Artillery Tycoon',
  url: 'https://store.steampowered.com/app/3370510/Artillery_Tycoon/',
  featured: true, status: 'STEAM · EARLY ACCESS',
  trailer: { poster: './assets/artillery-tycoon/cover.jpg', url: 'https://store.steampowered.com/app/3370510/Artillery_Tycoon/' },
  role: 'Lead Developer & Game Planner',
  contribution: 'Led development and game planning, designed the economy, and implemented the game’s systems.',
  studio: 'Awful Waffle Studio', release: '30 April 2025',
  highlights: ['Economy & progression', 'Game planning', 'Gameplay systems'],
  screenshots: [
    { image: './assets/artillery-tycoon/screenshot-1.jpg', caption: 'The production floor' },
    { image: './assets/artillery-tycoon/screenshot-3.jpg', caption: 'Artillery up close' },
    { image: './assets/artillery-tycoon/screenshot-2.jpg', caption: 'The factory grounds' },
    { image: './assets/artillery-tycoon/screenshot-0.jpg', caption: 'Factory exterior' }
  ]
}, {
  title: 'Logistics Battalion',
  cover: './assets/logistics-battalion/square-icon.webp', coverType: 'app-icon', coverAlt: 'Logistics Battalion square cover artwork', accent: '#e8bb79', tagline: 'EVERY DELIVERY SHAPES THE FRONTLINE',
  description: 'A WWII supply-management game set in 1939–1940. Balance food, ammunition, and fuel, organize deliveries, and expand your depot to keep troops supplied.',
  platforms: ['PC'], genres: ['Simulation', 'Strategy'],
  image: './assets/logistics-battalion/screenshot-0.jpg',
  imageAlt: 'Supply depot and resource interface in Logistics Battalion',
  url: 'https://store.steampowered.com/app/4063630/Logistics_Battalion/',
  featured: true, status: 'STEAM · RELEASED',
  trailer: { poster: './assets/logistics-battalion/cover.jpg', url: 'https://store.steampowered.com/app/4063630/Logistics_Battalion/' },
  role: 'Lead Developer & Game Planner',
  contribution: 'Led game development and planning, shaping the game from its core concept through implementation.',
  studio: 'Awful Waffle Studio', release: '16 March 2026', releaseLabel: 'Released',
  highlights: ['Development leadership', 'Game planning'],
  screenshots: [
    { image: './assets/logistics-battalion/screenshot-0.jpg', caption: 'Managing the supply depot' },
    { image: './assets/logistics-battalion/screenshot-2.jpg', caption: 'Campaign environments' },
    { image: './assets/logistics-battalion/screenshot-3.jpg', caption: 'Planning a supply shipment' },
    { image: './assets/logistics-battalion/screenshot-1.jpg', caption: 'Campaign selection' }
  ]
}, {
  title: 'Dice Jockey',
  cover: './assets/dice-jockey/icon.jpg', coverType: 'app-icon', accent: '#ffbc75', tagline: 'RACE SIMULATION. CONNECTED CLUBS.',
  description: 'A dice-driven horse-racing simulation for Android and iOS, with club events and a chip-based participation system.',
  platforms: ['Android', 'iOS'], genres: ['Simulation'],
  image: './assets/dice-jockey/screenshot-0.jpg',
  imageAlt: 'Dice Jockey horse race and dice on the track',
  featured: true, status: 'ANDROID + iOS · RELEASED',
  role: 'Game & Backend Developer',
  contribution: 'Built the complete club system with Firebase Realtime Database, Cloud Functions, and push notifications, supporting club membership, events, and buying, selling, and earning club chips.',
  highlights: ['Firebase Realtime Database', 'Cloud Functions', 'Push notifications'],
  credit: 'App Store developer: Dice Jockeys · Seller: ROCKET GAMES LLC',
  links: [
    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=net.diceandjockeys.Alpha&hl=en' },
    { label: 'App Store', url: 'https://apps.apple.com/us/app/dice-jockey/id6462781173' }
  ],
  breakdown: [
    { title: 'Clubs & events', text: 'Implemented club membership and event participation using Firebase Realtime Database and Cloud Functions, with push notifications.' },
    { title: 'Club chip economy', text: 'Built the flows for members to buy, sell, and earn club chips and participate in club events.' },
    { title: 'Pre-calculated race simulation', text: 'Developed a pre-calculated simulation presented with the feel of a multiplayer match. The race simulation is separate from the connected club systems.' }
  ],
  media: [
    { type: 'video', src: './assets/dice-jockey/showcase.mp4?v=4', poster: './assets/dice-jockey/showcase-poster.jpg?v=4', caption: 'Developer showcase · 89 seconds · silent', captions: './assets/dice-jockey/showcase.vtt?v=4' },
    { type: 'image', src: './assets/dice-jockey/screenshot-0.jpg', caption: 'Dice-driven racing' },
    { type: 'image', src: './assets/dice-jockey/screenshot-1.jpg', caption: 'Race progression' },
    { type: 'image', src: './assets/dice-jockey/screenshot-2.jpg', caption: 'Home, clubs, and notifications' }
  ]
}, {
  title: 'Text Rush',
  cover: './assets/text-rush/cover-art.webp', coverType: 'app-icon', coverAlt: 'Text Rush cover art',
  accent: '#6fe0ec', tagline: 'TYPE. COMPETE. CLIMB THE SCOREBOARD.',
  description: 'A multiplayer typing game for Android and iOS, with practice and competitive modes, tournament entry, timed challenges, and payment and withdrawal flows.',
  platforms: ['Android', 'iOS'], genres: ['Typing'], featured: true,
  status: 'ANDROID + iOS · DEVELOPMENT SHOWCASE',
  role: 'Full Game Developer',
  contribution: 'Developed the full game, including gameplay, multiplayer, Stripe payment integration, and withdrawal flows.',
  highlights: ['Multiplayer', 'Timed typing', 'Stripe payments', 'Withdrawals'],
  links: [],
  media: [
    { type: 'video', src: './assets/text-rush/showcase.mp4?v=2', poster: './assets/text-rush/showcase-poster.jpg?v=2', caption: 'Developer showcase · 73 seconds · silent', captions: './assets/text-rush/showcase.vtt' },
    { type: 'image', src: './assets/text-rush/feature-art.webp', caption: 'Text Rush · Type. Compete. Climb.' },
    { type: 'image', src: './assets/text-rush/cover-art.webp', caption: 'Text Rush · Cover art' },
    { type: 'image', src: './assets/text-rush/play-and-compete.jpg', caption: 'Practice, matchmaking, and timed typing · development screens' },
    { type: 'image', src: './assets/text-rush/results-and-withdrawals.jpg', caption: 'Results and withdrawal requests · account details concealed' }
  ],
  breakdown: [
    { title: 'Complete game development', text: 'Built the full Android/iOS game, including account flows, practice and competitive typing experiences, and the game interface.' },
    { title: 'Multiplayer experience', text: 'Developed multiplayer functionality. The recordings show opponent matching, tournament presentation, timed typing, and comparative results.' },
    { title: 'Payments & withdrawals', text: 'Implemented Stripe payment integration and withdrawal functionality, including request submission and transaction-status presentation.' }
  ]
}, {
  title: 'Passive Empire',
  cover: './assets/passive-empire/square-icon.webp', coverType: 'app-icon', coverAlt: 'Passive Empire castle cover art',
  accent: '#a9e5ca', tagline: 'YOUR FINANCES. AN INTERACTIVE EMPIRE.',
  description: 'A Unity WebGL financial-management simulation that turns assets into an interactive empire. Explore buildings, manage property values and income, and revisit your records month by month.',
  platforms: ['WebGL'], genres: ['Simulation'], featured: true, status: 'UNITY · WEBGL',
  role: 'Lead Game Developer',
  contribution: 'Led game development for Passive Empire, bringing its interactive world, asset-management interface, and history flows together in Unity for WebGL.',
  highlights: ['Unity WebGL', 'Asset management', 'Monthly history', 'Interactive world'],
  links: [{ label: 'Visit project', url: 'https://passive-empire.com/' }],
  media: [
    { type: 'video', src: './assets/passive-empire/showcase.mp4', poster: './assets/passive-empire/cover-art.webp', caption: 'Passive Empire · 48-second showcase', captions: './assets/passive-empire/showcase.vtt' },
    { type: 'image', src: './assets/passive-empire/feature-art.webp', caption: 'Every asset has a place' },
    { type: 'image', src: './assets/passive-empire/cover-art.webp', caption: 'Passive Empire · Cover art' }
  ],
  breakdown: [
    { title: 'An interactive financial world', text: 'An isometric environment connects buildings with asset information, making financial records part of an explorable game experience.' },
    { title: 'Asset details & summaries', text: 'Building panels present value, net value, debt, and monthly income. Editable property records bring the underlying numbers into the game interface.' },
    { title: 'History-aware interactions', text: 'Month and year controls let players revisit records. Changes to past data include a confirmation explaining their effect on subsequent history.' }
  ]
}, {
  title: 'Immersive Real Estate VR',
  cover: './assets/real-estate-vr/square-icon.webp', coverType: 'app-icon', coverAlt: 'Immersive Real Estate VR architectural cover art',
  accent: '#e3c399', tagline: 'FROM MASTERPLAN TO LIVING SPACE.',
  description: 'An interactive VR project for housing societies and real estate, connecting a large-scale development overview with an explorable residential walkthrough, furnished interiors, and outdoor spaces.',
  platforms: ['XR'], genres: ['Simulation'], featured: true, status: 'XR · INTERACTIVE REAL ESTATE',
  role: 'Game Developer',
  contribution: 'Developed an interactive real-estate experience that brings property exploration into a navigable virtual environment.',
  highlights: ['Interactive walkthrough', 'Society overview', 'Interior exploration', 'Outdoor spaces'],
  links: [],
  media: [
    { type: 'video', src: './assets/real-estate-vr/showcase.mp4', poster: './assets/real-estate-vr/cover-art.webp', caption: 'Immersive Real Estate VR · 59-second walkthrough', captions: './assets/real-estate-vr/showcase.vtt' },
    { type: 'image', src: './assets/real-estate-vr/interior-art.webp', caption: 'Living spaces · Architectural artwork' },
    { type: 'image', src: './assets/real-estate-vr/cover-art.webp', caption: 'Immersive Real Estate VR · Cover art' }
  ],
  breakdown: [
    { title: 'Society to residence', text: 'The experience moves from a broad development overview into a residential property, connecting the surrounding masterplan with a closer view of the home.' },
    { title: 'Walkable environments', text: 'Explore the property through character navigation, moving along garden paths, beside the pool, and through furnished indoor spaces.' },
    { title: 'A sense of space', text: 'Connected rooms, stairs, and outdoor areas let visitors explore the layout and spatial relationships throughout the residence.' }
  ]
}, {
  "title": "Cross Crib Card Multiplayer",
  "cover": "./assets/cross-crib/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Cross Crib Card Multiplayer app icon",
  "accent": "#e7c574",
  "tagline": "EVERY CARD CHANGES THE TABLE.",
  "description": "A competitive multiplayer card game built around tactical placement, reading the table, and planning ahead. Play online with friends and other players.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Card",
    "Strategy"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Main Game Developer",
  "contribution": "Served as the main developer, implementing the game and its SDK integrations.",
  "highlights": [
    "Online multiplayer",
    "Card strategy",
    "SDK integration"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.bb.cross.crib"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/cross-crib/screenshot-0.webp",
      "caption": "Competitive card play"
    },
    {
      "type": "image",
      "src": "./assets/cross-crib/screenshot-1.webp",
      "caption": "Create and join games"
    },
    {
      "type": "image",
      "src": "./assets/cross-crib/screenshot-2.webp",
      "caption": "The card table"
    },
    {
      "type": "image",
      "src": "./assets/cross-crib/screenshot-3.webp",
      "caption": "Strategic placement"
    }
  ],
  "breakdown": [
    {
      "title": "Card-game experience",
      "text": "Online matches combine card placement and table strategy in a competitive multiplayer format."
    },
    {
      "title": "Development & integration",
      "text": "Handled main game development and SDK implementation, connecting the game experience with its supporting integrations."
    }
  ]
}, {
  "title": "Which Wheel 3D: Shape Shifter",
  "cover": "./assets/which-wheel/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Which Wheel 3D: Shape Shifter app icon",
  "accent": "#77ddbb",
  "tagline": "SWITCH SHAPE. KEEP MOVING.",
  "description": "A transformation racer where choosing the right vehicle is part of the challenge. Switch between forms to cross roads, water, and obstacles with simple touch controls.",
  "platforms": [
    "Android",
    "iOS"
  ],
  "genres": [
    "Racing",
    "Casual"
  ],
  "featured": true,
  "status": "ANDROID + iOS",
  "role": "Main Game Developer",
  "contribution": "Served as the main developer, implementing the game and its SDK integrations.",
  "highlights": [
    "Vehicle transformations",
    "Obstacle courses",
    "SDK integration"
  ],
  "links": [
{
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.shape.shifting.transform.games.changing.running.shifter"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/which-wheel/screenshot-0.webp",
      "caption": "Race through changing terrain"
    },
    {
      "type": "image",
      "src": "./assets/which-wheel/screenshot-1.webp",
      "caption": "Switch between land and water"
    },
    {
      "type": "image",
      "src": "./assets/which-wheel/screenshot-2.webp",
      "caption": "Adapt to the course"
    },
    {
      "type": "image",
      "src": "./assets/which-wheel/screenshot-3.webp",
      "caption": "Transformation racing"
    }
  ],
  "breakdown": [
    {
      "title": "Transformation gameplay",
      "text": "Changing vehicle forms lets players adapt to different terrain and obstacles as they race through the course."
    },
    {
      "title": "Development & integration",
      "text": "Handled main game development and SDK implementation, connecting the game experience with its supporting integrations."
    }
  ]
}, {
  "title": "Old Woman: Horror Escape",
  "cover": "./assets/old-woman-horror/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Old Woman: Horror Escape app icon",
  "accent": "#e3a091",
  "tagline": "STAY QUIET. FIND A WAY OUT.",
  "description": "A horror escape game set inside a threatening house. Search for keys, complete tasks, hide from danger, and work toward an escape.",
  "platforms": [
    "Android",
    "iOS"
  ],
  "genres": [
    "Horror",
    "Adventure"
  ],
  "featured": true,
  "status": "ANDROID + iOS",
  "role": "Main Game Developer",
  "contribution": "Served as the main developer, implementing the game and its SDK integrations.",
  "highlights": [
    "Escape gameplay",
    "Exploration & tasks",
    "SDK integration"
  ],
  "links": [
{
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.wb.scary.granni.game.scary"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/old-woman-horror/screenshot-0.webp",
      "caption": "Inside the haunted house"
    },
    {
      "type": "image",
      "src": "./assets/old-woman-horror/screenshot-1.webp",
      "caption": "A threatening encounter"
    },
    {
      "type": "image",
      "src": "./assets/old-woman-horror/screenshot-2.webp",
      "caption": "Explore the environment"
    },
    {
      "type": "image",
      "src": "./assets/old-woman-horror/screenshot-3.webp",
      "caption": "Horror escape"
    }
  ],
  "breakdown": [
    {
      "title": "Escape experience",
      "text": "Exploration, key finding, assigned tasks, and hiding build the journey through the house toward an escape."
    },
    {
      "title": "Development & integration",
      "text": "Handled main game development and SDK implementation, connecting the game experience with its supporting integrations."
    }
  ]
}, {
  "title": "Super Marino: Jungle Adventure",
  "cover": "./assets/super-marino/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Super Marino: Jungle Adventure app icon",
  "accent": "#b3e978",
  "tagline": "RUN. JUMP. EXPLORE.",
  "description": "A colourful platforming adventure with run-and-jump challenges, collectible coins, enemies, and obstacle-filled environments.",
  "platforms": [
    "Android",
    "iOS"
  ],
  "genres": [
    "Platformer",
    "Adventure"
  ],
  "featured": true,
  "status": "ANDROID + iOS",
  "role": "Main Game Developer",
  "contribution": "Served as the main developer, implementing the game and its SDK integrations.",
  "highlights": [
    "Platforming",
    "Coins & obstacles",
    "SDK integration"
  ],
  "links": [
{
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.superjumpermariorunninggames"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/super-marino/screenshot-0.webp",
      "caption": "Super Marino adventure"
    },
    {
      "type": "image",
      "src": "./assets/super-marino/screenshot-1.webp",
      "caption": "Platforming challenges"
    },
    {
      "type": "image",
      "src": "./assets/super-marino/screenshot-2.webp",
      "caption": "Explore the world"
    },
    {
      "type": "image",
      "src": "./assets/super-marino/screenshot-3.webp",
      "caption": "Run and jump"
    }
  ],
  "breakdown": [
    {
      "title": "Platforming adventure",
      "text": "Running, jumping, collecting coins, and avoiding enemies form the core of the level-based adventure."
    },
    {
      "title": "Development & integration",
      "text": "Handled main game development and SDK implementation, connecting the game experience with its supporting integrations."
    }
  ]
}, {
  "title": "Alien Shooter Space War Games",
  "cover": "./assets/alien-shooter/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Alien Shooter Space War Games app icon",
  "accent": "#b7a5ff",
  "tagline": "TAKE FLIGHT. DEFEND THE GALAXY.",
  "description": "An arcade space shooter with enemy waves, boss encounters, and upgradeable ships. Dodge attacks, collect equipment, and build your firepower.",
  "platforms": [
    "Android",
    "iOS"
  ],
  "genres": [
    "Shooter",
    "Arcade"
  ],
  "featured": true,
  "status": "ANDROID + iOS",
  "role": "Main Game Developer",
  "contribution": "Served as the main developer, implementing the game and its SDK integrations.",
  "highlights": [
    "Enemy waves",
    "Ship upgrades",
    "SDK integration"
  ],
  "links": [
{
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.galaxy.shooter.wargame"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/alien-shooter/screenshot-0.webp",
      "caption": "Alien waves"
    },
    {
      "type": "image",
      "src": "./assets/alien-shooter/screenshot-1.webp",
      "caption": "Boss encounters"
    },
    {
      "type": "image",
      "src": "./assets/alien-shooter/screenshot-2.webp",
      "caption": "Space battles"
    },
    {
      "type": "image",
      "src": "./assets/alien-shooter/screenshot-3.webp",
      "caption": "Build your firepower"
    }
  ],
  "breakdown": [
    {
      "title": "Arcade combat",
      "text": "Touch-controlled ship movement, enemy waves, boss battles, and equipment upgrades shape the space-combat experience."
    },
    {
      "title": "Development & integration",
      "text": "Handled main game development and SDK implementation, connecting the game experience with its supporting integrations."
    }
  ]
}, {
  "title": "Gun Simulator & Gun Sound Game",
  "cover": "./assets/gun-simulator/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Gun Simulator & Gun Sound Game app icon",
  "accent": "#f5bd79",
  "tagline": "SOUND. FEEDBACK. INTERACTION.",
  "description": "An interactive gun-sound simulator with selectable weapons, firing and reload effects, and multiple firing modes.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Simulation",
    "Casual"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Main Game Developer",
  "contribution": "Served as the main developer, implementing the game and its SDK integrations.",
  "highlights": [
    "Weapon selection",
    "Sound & visual effects",
    "SDK integration"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.gun.soundgame"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/gun-simulator/screenshot-0.webp",
      "caption": "Interactive gun simulation"
    },
    {
      "type": "image",
      "src": "./assets/gun-simulator/screenshot-1.webp",
      "caption": "Sound and firing effects"
    },
    {
      "type": "image",
      "src": "./assets/gun-simulator/screenshot-2.webp",
      "caption": "Weapon selection"
    },
    {
      "type": "image",
      "src": "./assets/gun-simulator/screenshot-3.webp",
      "caption": "Firing modes"
    }
  ],
  "breakdown": [
    {
      "title": "Interactive simulation",
      "text": "Weapon selection, firing modes, reload sounds, and visual effects provide the core simulation experience."
    },
    {
      "title": "Development & integration",
      "text": "Handled main game development and SDK implementation, connecting the game experience with its supporting integrations."
    }
  ]
}, {
  "title": "Prado Car Games:Modern Parking",
  "cover": "./assets/prado-parking/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Prado Car Games:Modern Parking app icon",
  "accent": "#e1bc80",
  "tagline": "PRECISION BEHIND THE WHEEL.",
  "description": "A driving and parking simulation with Prado-style SUVs, varied parking challenges, and touch-based steering, acceleration, and braking.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Simulation",
    "Driving"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this Android title.",
  "highlights": [
    "Parking challenges",
    "Vehicle controls",
    "Driving simulation"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.prado.drive.car.parking.games"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/prado-parking/screenshot-0.webp",
      "caption": "Parking challenges"
    },
    {
      "type": "image",
      "src": "./assets/prado-parking/screenshot-1.webp",
      "caption": "Vehicle controls"
    },
    {
      "type": "image",
      "src": "./assets/prado-parking/screenshot-2.webp",
      "caption": "Driving simulation"
    },
    {
      "type": "image",
      "src": "./assets/prado-parking/screenshot-3.webp",
      "caption": "Prado Car Games:Modern Parking"
    }
  ]
}, {
  "title": "Offroad Jeep 4x4 Driving Games",
  "cover": "./assets/offroad-jeep/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Offroad Jeep 4x4 Driving Games app icon",
  "accent": "#b8d08c",
  "tagline": "TAKE THE ROAD LESS TRAVELLED.",
  "description": "An off-road driving game with rugged 4x4 vehicles, mountain trails, mud tracks, and exploration challenges. Upgrade vehicles and tackle demanding terrain.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Simulation",
    "Driving"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this Android title.",
  "highlights": [
    "Off-road terrain",
    "Vehicle upgrades",
    "Multiple camera views"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.offroad.suv.driving.games.jeep.offroadcargame.hill4x4.driving.parking.adventure"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/offroad-jeep/screenshot-0.webp",
      "caption": "Off-road terrain"
    },
    {
      "type": "image",
      "src": "./assets/offroad-jeep/screenshot-1.webp",
      "caption": "Vehicle upgrades"
    },
    {
      "type": "image",
      "src": "./assets/offroad-jeep/screenshot-2.webp",
      "caption": "Multiple camera views"
    },
    {
      "type": "image",
      "src": "./assets/offroad-jeep/screenshot-3.webp",
      "caption": "Offroad Jeep 4x4 Driving Games"
    }
  ]
}, {
  "title": "Wedding Run: Dream Planner",
  "cover": "./assets/wedding-run/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Wedding Run: Dream Planner app icon",
  "accent": "#f2aacc",
  "tagline": "EVERY CHOICE SHAPES THE BIG DAY.",
  "description": "A wedding-themed runner where choices along the course shape the celebration. Guide the couple, choose wedding details, and watch the destination come together.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Runner",
    "Casual"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this Android title.",
  "highlights": [
    "Choice-based running",
    "Wedding customization",
    "Touch controls"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.wedding.run.perfect.life.wb"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/wedding-run/screenshot-0.webp",
      "caption": "Choice-based running"
    },
    {
      "type": "image",
      "src": "./assets/wedding-run/screenshot-1.webp",
      "caption": "Wedding customization"
    },
    {
      "type": "image",
      "src": "./assets/wedding-run/screenshot-2.webp",
      "caption": "Touch controls"
    },
    {
      "type": "image",
      "src": "./assets/wedding-run/screenshot-3.webp",
      "caption": "Wedding Run: Dream Planner"
    }
  ]
}, {
  "title": "Fantasy House : Tidy ASMR",
  "cover": "./assets/fantasy-house/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Fantasy House : Tidy ASMR app icon",
  "accent": "#b7b4ef",
  "tagline": "UNPACK. ARRANGE. MAKE IT HOME.",
  "description": "A relaxing home-design puzzle game about unpacking, organizing furniture, and decorating rooms, paired with gentle ASMR sounds.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Puzzle",
    "Casual"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this Android title.",
  "highlights": [
    "Furniture placement",
    "Room decoration",
    "ASMR feedback"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.bb.fantasy.house.asmr"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/fantasy-house/screenshot-0.webp",
      "caption": "Furniture placement"
    },
    {
      "type": "image",
      "src": "./assets/fantasy-house/screenshot-1.webp",
      "caption": "Room decoration"
    },
    {
      "type": "image",
      "src": "./assets/fantasy-house/screenshot-2.webp",
      "caption": "ASMR feedback"
    },
    {
      "type": "image",
      "src": "./assets/fantasy-house/screenshot-3.webp",
      "caption": "Fantasy House : Tidy ASMR"
    }
  ]
}, {
  "title": "Car Robot Games - War Game 3d",
  "cover": "./assets/bus-simulator/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Car Robot Games - War Game 3d app icon",
  "accent": "#78cce7",
  "tagline": "TRANSFORM. DRIVE. DEFEND.",
  "description": "A robot action game that shifts between vehicle transformations, city combat, and racing challenges. Take control of cars, buses, helicopters, and jets across different game modes.",
  "platforms": [
    "Android",
    "iOS"
  ],
  "genres": [
    "Action",
    "Racing"
  ],
  "featured": true,
  "status": "ANDROID + iOS",
  "role": "Game Developer",
  "contribution": "Game development for this mobile title.",
  "highlights": [
    "Robot transformations",
    "City combat",
    "Racing challenges"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.bus.simulator2019.ultimate.bus.driver.city.coach.busgame"
    },
    {
      "label": "App Store",
      "url": "https://apps.apple.com/us/app/car-crash-robot-car-simulator/id1645252622"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/bus-simulator/screenshot-0.webp",
      "caption": "Car Robot Games - War Game 3d / 01"
    },
    {
      "type": "image",
      "src": "./assets/bus-simulator/screenshot-1.webp",
      "caption": "Car Robot Games - War Game 3d / 02"
    },
    {
      "type": "image",
      "src": "./assets/bus-simulator/screenshot-2.webp",
      "caption": "Car Robot Games - War Game 3d / 03"
    },
    {
      "type": "image",
      "src": "./assets/bus-simulator/screenshot-3.webp",
      "caption": "Car Robot Games - War Game 3d / 04"
    }
  ]
}, {
  "title": "Bus Jam Crowded Traffic Fever",
  "cover": "./assets/airport-jam/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Bus Jam Crowded Traffic Fever app icon",
  "accent": "#f1bc73",
  "tagline": "CLEAR THE JAM. KEEP THEM MOVING.",
  "description": "A traffic puzzle about clearing crowded parking lanes and matching waiting passengers to colorful buses. Plan each move to untangle the gridlock.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Puzzle",
    "Casual"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this mobile title.",
  "highlights": [
    "Traffic puzzles",
    "Passenger color matching",
    "Parking challenges"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.jv.bus.airport.jam.traffic.parking.games"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/airport-jam/screenshot-0.webp",
      "caption": "Bus Jam Crowded Traffic Fever / 01"
    },
    {
      "type": "image",
      "src": "./assets/airport-jam/screenshot-1.webp",
      "caption": "Bus Jam Crowded Traffic Fever / 02"
    },
    {
      "type": "image",
      "src": "./assets/airport-jam/screenshot-2.webp",
      "caption": "Bus Jam Crowded Traffic Fever / 03"
    },
    {
      "type": "image",
      "src": "./assets/airport-jam/screenshot-3.webp",
      "caption": "Bus Jam Crowded Traffic Fever / 04"
    }
  ]
}, {
  "title": "Super Hero Rush - Maze Games",
  "cover": "./assets/nature-magic/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Super Hero Rush - Maze Games app icon",
  "accent": "#b7dd8b",
  "tagline": "FIND YOUR PATH. BECOME THE HERO.",
  "description": "A superhero maze adventure with swipe controls, rescue missions, and characters with different abilities. Navigate traps and explore colorful 3D environments at your own pace.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Action",
    "Puzzle"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this mobile title.",
  "highlights": [
    "Hero abilities",
    "Maze navigation",
    "Rescue missions"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.superheros.nature.magic.dash"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/nature-magic/screenshot-0.webp",
      "caption": "Super Hero Rush - Maze Games / 01"
    },
    {
      "type": "image",
      "src": "./assets/nature-magic/screenshot-1.webp",
      "caption": "Super Hero Rush - Maze Games / 02"
    },
    {
      "type": "image",
      "src": "./assets/nature-magic/screenshot-2.webp",
      "caption": "Super Hero Rush - Maze Games / 03"
    },
    {
      "type": "image",
      "src": "./assets/nature-magic/screenshot-3.webp",
      "caption": "Super Hero Rush - Maze Games / 04"
    }
  ]
}, {
  "title": "Rolling Ball Beach Game",
  "cover": "./assets/rolling-ball/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Rolling Ball Beach Game app icon",
  "accent": "#79d7d5",
  "tagline": "KEEP ROLLING. FIND YOUR FLOW.",
  "description": "A rolling-ball game set across beach courses and winding tracks. Guide the ball through varied levels, collect coins, and stay on course to reach the finish.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Arcade",
    "Racing"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this mobile title.",
  "highlights": [
    "Ball control",
    "Beach courses",
    "Obstacle navigation"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.jv.rolling.ball.beach.going.balls.game"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/rolling-ball/screenshot-0.webp",
      "caption": "Rolling Ball Beach Game / 01"
    },
    {
      "type": "image",
      "src": "./assets/rolling-ball/screenshot-1.webp",
      "caption": "Rolling Ball Beach Game / 02"
    },
    {
      "type": "image",
      "src": "./assets/rolling-ball/screenshot-2.webp",
      "caption": "Rolling Ball Beach Game / 03"
    },
    {
      "type": "image",
      "src": "./assets/rolling-ball/screenshot-3.webp",
      "caption": "Rolling Ball Beach Game / 04"
    }
  ]
}, {
  "title": "Unravel yarn wool puzzle 3d",
  "cover": "./assets/yarn-puzzle/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Unravel yarn wool puzzle 3d app icon",
  "accent": "#e4a6d9",
  "tagline": "UNTANGLE COLOR. UNWIND YOUR MIND.",
  "description": "A colorful 3D yarn puzzle built around unraveling wool and sorting threads by color. Rotate playful shapes and plan your moves through relaxing tactile challenges.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Puzzle",
    "Casual"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this mobile title.",
  "highlights": [
    "3D yarn puzzles",
    "Color sorting",
    "Relaxing play"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.jv.unravel.yarn.wool.puzzle.game"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/yarn-puzzle/screenshot-0.webp",
      "caption": "Unravel yarn wool puzzle 3d / 01"
    },
    {
      "type": "image",
      "src": "./assets/yarn-puzzle/screenshot-1.webp",
      "caption": "Unravel yarn wool puzzle 3d / 02"
    },
    {
      "type": "image",
      "src": "./assets/yarn-puzzle/screenshot-2.webp",
      "caption": "Unravel yarn wool puzzle 3d / 03"
    },
    {
      "type": "image",
      "src": "./assets/yarn-puzzle/screenshot-3.webp",
      "caption": "Unravel yarn wool puzzle 3d / 04"
    }
  ]
}, {
  "title": "Save The Cat Draw to Save",
  "cover": "./assets/save-pet/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Save The Cat Draw to Save app icon",
  "accent": "#ffc17c",
  "tagline": "ONE LINE. A CLEVER RESCUE.",
  "description": "A drawing puzzle where your lines become barriers that protect cats and dogs from bees. Experiment with shapes and solve each rescue challenge with a creative defense.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Puzzle",
    "Casual"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this mobile title.",
  "highlights": [
    "Drawing mechanics",
    "Protective barriers",
    "Pet rescue puzzles"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.jv.draw.to.save.the.pet.cat.dog"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/save-pet/screenshot-0.webp",
      "caption": "Save The Cat Draw to Save / 01"
    },
    {
      "type": "image",
      "src": "./assets/save-pet/screenshot-1.webp",
      "caption": "Save The Cat Draw to Save / 02"
    },
    {
      "type": "image",
      "src": "./assets/save-pet/screenshot-2.webp",
      "caption": "Save The Cat Draw to Save / 03"
    },
    {
      "type": "image",
      "src": "./assets/save-pet/screenshot-3.webp",
      "caption": "Save The Cat Draw to Save / 04"
    }
  ]
}, {
  "title": "Paint Color Hide and Seek Game",
  "cover": "./assets/paint-hide/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Paint Color Hide and Seek Game app icon",
  "accent": "#cb98ee",
  "tagline": "PAINT. BLEND. STAY HIDDEN.",
  "description": "A colorful 3D hide-and-seek game where paint becomes camouflage. Match your surroundings, freeze in place, or switch roles and search for disguised characters.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Casual",
    "Stealth"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this mobile title.",
  "highlights": [
    "Color camouflage",
    "Hider and seeker roles",
    "Character customization"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.mt.paint.color.hide.and.seek.game"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/paint-hide/screenshot-0.webp",
      "caption": "Paint Color Hide and Seek Game / 01"
    },
    {
      "type": "image",
      "src": "./assets/paint-hide/screenshot-1.webp",
      "caption": "Paint Color Hide and Seek Game / 02"
    },
    {
      "type": "image",
      "src": "./assets/paint-hide/screenshot-2.webp",
      "caption": "Paint Color Hide and Seek Game / 03"
    },
    {
      "type": "image",
      "src": "./assets/paint-hide/screenshot-3.webp",
      "caption": "Paint Color Hide and Seek Game / 04"
    }
  ]
}, {
  "title": "Supermarket Simulator Toymart",
  "cover": "./assets/toymart/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Supermarket Simulator Toymart app icon",
  "accent": "#8ed8b4",
  "tagline": "STOCK THE SHELVES. GROW THE STORE.",
  "description": "A toy-store management simulation with stock ordering, shelf placement, checkout, and store expansion. Serve customers, manage inventory, and hire staff as the business grows.",
  "platforms": [
    "Android",
    "iOS"
  ],
  "genres": [
    "Simulation",
    "Strategy"
  ],
  "featured": true,
  "status": "ANDROID + iOS",
  "role": "Game Developer",
  "contribution": "Game development for this mobile title.",
  "highlights": [
    "Inventory and restocking",
    "Store management",
    "Staff and expansion"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.mt.toymart.supermarket.simulator.game"
    },
    {
      "label": "App Store",
      "url": "https://apps.apple.com/us/app/supermarket-simulator-toymart/id6762590733"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/toymart/screenshot-0.webp",
      "caption": "Supermarket Simulator Toymart / 01"
    },
    {
      "type": "image",
      "src": "./assets/toymart/screenshot-1.webp",
      "caption": "Supermarket Simulator Toymart / 02"
    },
    {
      "type": "image",
      "src": "./assets/toymart/screenshot-2.webp",
      "caption": "Supermarket Simulator Toymart / 03"
    },
    {
      "type": "image",
      "src": "./assets/toymart/screenshot-3.webp",
      "caption": "Supermarket Simulator Toymart / 04"
    }
  ]
}, {
  "title": "Car Beyond Simulator Game 3D",
  "cover": "./assets/drive-beyond/icon.webp",
  "coverType": "app-icon",
  "coverAlt": "Car Beyond Simulator Game 3D app icon",
  "accent": "#e4b47e",
  "tagline": "BUILD YOUR RIDE. BRAVE THE DESERT.",
  "description": "A desert driving and survival game combining vehicle assembly, repairs, scavenging, and zombie encounters. Gather parts and supplies to keep your car moving across the open world.",
  "platforms": [
    "Android"
  ],
  "genres": [
    "Simulation",
    "Driving",
    "Survival"
  ],
  "featured": true,
  "status": "ANDROID · GOOGLE PLAY",
  "role": "Game Developer",
  "contribution": "Game development for this mobile title.",
  "highlights": [
    "Vehicle building and repair",
    "Open-world scavenging",
    "Survival combat"
  ],
  "links": [
    {
      "label": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.drive.beyond.horizon.game.mt"
    }
  ],
  "media": [
    {
      "type": "image",
      "src": "./assets/drive-beyond/screenshot-0.webp",
      "caption": "Car Beyond Simulator Game 3D / 01"
    },
    {
      "type": "image",
      "src": "./assets/drive-beyond/screenshot-1.webp",
      "caption": "Car Beyond Simulator Game 3D / 02"
    },
    {
      "type": "image",
      "src": "./assets/drive-beyond/screenshot-2.webp",
      "caption": "Car Beyond Simulator Game 3D / 03"
    },
    {
      "type": "image",
      "src": "./assets/drive-beyond/screenshot-3.webp",
      "caption": "Car Beyond Simulator Game 3D / 04"
    }
  ]
}];

// Editorial display order: strongest ownership and technical showcases first,
// then larger mobile games, followed by casual and puzzle work.
// Unlisted future projects stay at the end until deliberately placed.
const showcaseOrder = [
  "dice-jockey",
  "artillery-tycoon",
  "text-rush",
  "logistics-battalion",
  "passive-empire",
  "real-estate-vr",
  "toymart",
  "drive-beyond",
  "cross-crib",
  "bus-simulator",
  "paint-hide",
  "offroad-jeep",
  "prado-parking",
  "nature-magic",
  "alien-shooter",
  "old-woman-horror",
  "super-marino",
  "which-wheel",
  "rolling-ball",
  "airport-jam",
  "fantasy-house",
  "yarn-puzzle",
  "wedding-run",
  "save-pet",
  "gun-simulator"
];
const showcaseRank = new Map(showcaseOrder.map((slug, index) => [slug, index]));
const projectRank = project => showcaseRank.get(project.cover?.split('/')[2]) ?? showcaseOrder.length;
projects.sort((a, b) => projectRank(a) - projectRank(b));

const grid = document.querySelector('#game-grid');
const empty = document.querySelector('#library-empty');
const filterState = { platform: 'All', genre: 'All', query: '' };
const genreSelect = document.querySelector('#genre-filter');
// Until games are supplied, these are browsing categories, not claims about completed work.
const starterGenres = ['Action', 'Adventure', 'Arcade', 'Casual', 'Puzzle', 'Racing', 'RPG', 'Shooter', 'Simulation', 'Sports', 'Strategy'];
const genres = projects.length ? [...new Set(projects.flatMap(project => project.genres || []))].sort() : starterGenres;
genres.forEach(genre => { const option = document.createElement('option'); option.value = genre; option.textContent = genre; genreSelect.append(option); });
// Explicit visitor preference takes precedence over the device default.
const systemMotion = matchMedia('(prefers-reduced-motion: reduce)');
let motionChoice;
try { motionChoice = localStorage.getItem('portfolio-motion'); } catch {}
const motionListeners = new Set();
const motionPreference = {
  get matches() { return motionChoice ? motionChoice === 'off' : systemMotion.matches; },
  addEventListener(type, listener) { if (type === 'change') motionListeners.add(listener); }
};
function syncSiteMotion() {
  document.documentElement.dataset.motion = motionPreference.matches ? 'off' : 'on';
  const button = document.querySelector('#site-motion');
  button.textContent = motionPreference.matches ? 'Animations off · Enable' : 'Animations on';
  button.setAttribute('aria-pressed', String(!motionPreference.matches));
  motionListeners.forEach(listener => listener({matches:motionPreference.matches}));
}
systemMotion.addEventListener('change', syncSiteMotion);
document.querySelector('#site-motion').addEventListener('click', () => {
  motionChoice = motionPreference.matches ? 'on' : 'off';
  try { localStorage.setItem('portfolio-motion',motionChoice); } catch {}
  syncSiteMotion();
  if (!motionPreference.matches) grid.animate([{opacity:.15,transform:'translateY(40px)'},{opacity:1,transform:'translateY(0)'}],{duration:1000,easing:'ease-out'});
});
// Motion is progressive enhancement: content stays visible if animation is unavailable.

const entranceObserver = new IntersectionObserver(entries => {
  entries.forEach(({target,isIntersecting}) => {
    if (!isIntersecting) return;
    entranceObserver.unobserve(target);
    if (!motionPreference.matches) target.animate([
      {opacity:0, transform:'translateY(42px) scale(.975)'},
      {opacity:1, transform:'translateY(0) scale(1)'}
    ], {duration:850, delay:Number(target.dataset.motionDelay || 0), fill:'backwards', easing:'cubic-bezier(.16,1,.3,1)'});
  });
}, {threshold:0.08});
motionPreference.addEventListener('change', event => {
  if (event.matches) document.getAnimations().forEach(animation => animation.cancel());
});
let expandedProject = null;
function renderProjects() {
  const { platform, genre } = filterState;
  const selected = projects.filter(project => (platform === 'All' || project.platforms.includes(platform)) && (genre === 'All' || (project.genres || []).includes(genre)) && [project.title, project.description, project.role, project.contribution, ...(project.highlights || [])].join(' ').toLowerCase().includes(filterState.query.trim().toLowerCase()));
  if (!selected.some(project => project.title === expandedProject)) expandedProject = null;
  grid.querySelectorAll('.game-card').forEach(card => entranceObserver.unobserve(card));
  grid.getAnimations().forEach(animation => animation.cancel());
  grid.replaceChildren();
  const disclosures = [];
  let disclosureRequest = 0;
  for (const project of selected) {
    const card = document.createElement('article'); card.className = `game-card${project.featured ? ' featured-game' : ''}`;
    if(project.coverType === 'app-icon')card.classList.add('mobile-project');
    card.style.setProperty('--project-accent', project.accent || '#c1f36b');
    const projectHeader = document.createElement('header'); projectHeader.className = 'project-header';
    if(project.cover){const cover=document.createElement('img');cover.className='project-cover';cover.src=project.cover;cover.alt=project.coverAlt||`${project.title} official cover artwork`;cover.loading='lazy';projectHeader.append(cover);}
    const introduction = document.createElement('div'); introduction.className='project-introduction';
    const eyebrow=document.createElement('span');eyebrow.className='tiny-label';eyebrow.textContent=`SELECTED WORK / ${String(projects.indexOf(project)+1).padStart(2,'0')} — ${project.platforms.join(' / ')}`;introduction.append(eyebrow);
    projectHeader.append(introduction);card.append(projectHeader);
    const content = document.createElement('div'); content.className='project-content';
    content.id=`project-content-${projects.indexOf(project)}`;
    content.append(createProjectMedia(project));
    const body = document.createElement('div'); body.className = 'project-body';
    const heading = document.createElement('h3'); heading.textContent = project.title;
    const description = document.createElement('p'); description.textContent = project.description;
    const tags = document.createElement('div'); tags.className = 'tech-tags';
    project.platforms.forEach(name => { const tag = document.createElement('span'); tag.textContent = name; tags.append(tag); });
    (project.genres || []).forEach(name => { const tag = document.createElement('span'); tag.className = 'genre-tag'; tag.textContent = name; tags.append(tag); });
    introduction.append(heading, tags, description);
    const toggle=document.createElement('button');toggle.type='button';toggle.className='project-toggle';
    toggle.setAttribute('aria-controls',content.id);introduction.append(toggle);
    let disclosureAnimation = null;
    let isOpen = false;
    const setOpen = (open, animate = true) => {
      const fromHeight = content.hidden ? 0 : content.getBoundingClientRect().height;
      const fromOpacity = content.hidden ? 0 : Number(getComputedStyle(content).opacity);
      if (disclosureAnimation) { disclosureAnimation.cancel(); disclosureAnimation = null; }
      isOpen = open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Minimize −' : 'Expand details +';
      toggle.setAttribute('aria-label', `${open ? 'Minimize' : 'Expand details for'} ${project.title}`);
      card.classList.toggle('is-expanded', open);
      content.inert = !open;
      if (!open) content.querySelectorAll('video').forEach(video => video.pause());
      if (!animate || !content.isConnected || motionPreference.matches || (!open && fromHeight === 0)) {
        content.hidden = !open;
        return Promise.resolve();
      }
      content.hidden = false;
      const toHeight = open ? content.getBoundingClientRect().height : 0;
      const animation = content.animate([
        {height:`${fromHeight}px`, minHeight:'0', opacity:fromOpacity, overflow:'clip'},
        {height:`${toHeight}px`, minHeight:'0', opacity:open ? 1 : 0, overflow:'clip'}
      ], {duration:open ? 620 : 440, easing:'cubic-bezier(.4,0,.2,1)', fill:'both'});
      disclosureAnimation = animation;
      return animation.finished.catch(() => {}).then(() => {
        if (disclosureAnimation !== animation) return;
        content.hidden = !isOpen;
        disclosureAnimation = null;
        animation.cancel();
      });
    };
    disclosures.push({setOpen});
    setOpen(expandedProject === project.title, false);
    toggle.addEventListener('click', async () => {
      const open = !isOpen;
      const request = ++disclosureRequest;
      if (!open) { expandedProject = null; await setOpen(false); return; }
      expandedProject = project.title;
      // Anchor the clicked control while the document reflows above it.
      // Do not combine a smooth scroll with a changing accordion height.
      const anchorTop = toggle.getBoundingClientRect().top;
      let tracking = true, anchorFrame = 0;
      const stopTracking = () => { tracking = false; cancelAnimationFrame(anchorFrame); };
      const onScrollKey = event => {
        if (['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key)) stopTracking();
      };
      const keepAnchor = () => {
        if (!tracking || request !== disclosureRequest || !card.isConnected) return;
        const drift = toggle.getBoundingClientRect().top - anchorTop;
        if (Math.abs(drift) > .5) window.scrollBy({top:drift,behavior:'instant'});
        anchorFrame = requestAnimationFrame(keepAnchor);
      };
      window.addEventListener('wheel',stopTracking,{passive:true});
      window.addEventListener('touchstart',stopTracking,{passive:true});
      window.addEventListener('keydown',onScrollKey);
      toggle.focus({preventScroll:true});
      keepAnchor();
      try {
        await Promise.all(disclosures.filter(item => item.setOpen !== setOpen).map(item => item.setOpen(false)));
        if (request !== disclosureRequest || !card.isConnected) return;
        await setOpen(true);
        if (tracking && request === disclosureRequest) {
          window.scrollBy({top:toggle.getBoundingClientRect().top-anchorTop,behavior:'instant'});
        }
      } finally {
        stopTracking();
        window.removeEventListener('wheel',stopTracking);
        window.removeEventListener('touchstart',stopTracking);
        window.removeEventListener('keydown',onScrollKey);
      }
    });
    if(project.tagline){const tagline=document.createElement('p');tagline.className='project-tagline';tagline.textContent=project.tagline;body.append(tagline);}
    if (project.role) {
      const contribution = document.createElement('div'); contribution.className = 'project-contribution';
      const label = document.createElement('span'); label.className = 'tiny-label'; label.textContent = 'MY ROLE';
      const role = document.createElement('h4'); role.textContent = project.role;
      const detail = document.createElement('p'); detail.textContent = project.contribution;
      contribution.append(label, role, detail); body.append(contribution);
    }
    if (project.highlights) { const highlights = document.createElement('p'); highlights.className = 'project-highlights'; highlights.textContent = project.highlights.join(' · '); body.append(highlights); }
    const storeLinks = project.links || (project.url ? [{label:project.status?.startsWith('STEAM') ? 'View on Steam' : 'Explore game',url:project.url}] : []);
    const actions=document.createElement('div');actions.className='project-store-links';
    storeLinks.forEach(store=>{if(/^https?:\/\//i.test(store.url)){const link=document.createElement('a');link.href=store.url;link.textContent=`${store.label} ↗`;link.className='button primary';link.target='_blank';link.rel='noopener';actions.append(link);}});
    body.append(actions);
    if (project.studio || project.credit) { const credit = document.createElement('p'); credit.className = 'project-credit'; credit.textContent = project.credit || `Developer & publisher: ${project.studio} · ${project.releaseLabel || 'Early Access'}: ${project.release}`; body.append(credit); }
    content.append(body);
    if(project.breakdown){
      const details=document.createElement('details');details.className='project-breakdown';
      const summary=document.createElement('summary');summary.textContent='Behind the build';const plus=document.createElement('span');plus.textContent='+';summary.append(plus);details.append(summary);
      const columns=document.createElement('div');columns.className='breakdown-columns';
      project.breakdown.forEach(item=>{const section=document.createElement('div');const title=document.createElement('h4');title.textContent=item.title;const text=document.createElement('p');text.textContent=item.text;section.append(title,text);columns.append(section);});details.append(columns);content.append(details);
    }
    const minimize=document.createElement('button');minimize.type='button';minimize.className='project-minimize';minimize.textContent='Minimize project ↑';
    minimize.addEventListener('click',async()=>{++disclosureRequest;expandedProject=null;toggle.focus({preventScroll:true});projectHeader.scrollIntoView({block:'start',behavior:motionPreference.matches?'instant':'smooth'});await setOpen(false);});
    content.append(minimize);card.append(content);
    grid.append(card);
    entranceObserver.observe(card);
  }
  if (grid.isConnected && !motionPreference.matches) grid.animate([{opacity:.25,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:500,easing:'cubic-bezier(.16,1,.3,1)'});
  empty.hidden = selected.length > 0;
  const selection = `${platform === 'All' ? 'All platforms' : platform} · ${genre === 'All' ? 'All genres' : genre}`;
  document.querySelector('#selection-summary').textContent = selection;
  document.querySelector('#reset-filters').hidden = platform === 'All' && genre === 'All' && !filterState.query;
  document.querySelector('#empty-title').textContent = projects.length ? 'No games match this combination yet.' : 'Games deserve a proper introduction.';
  document.querySelector('#empty-description').textContent = projects.length ? 'Try another platform or genre, or clear the filters to explore the full collection.' : 'I’m putting together gameplay, project stories, and a closer look at what I built. The collection will land here soon.';
  document.querySelector('#library-count').textContent = projects.length ? `${selected.length} PROJECT${selected.length === 1 ? '' : 'S'}` : 'COLLECTION IN PROGRESS';
  document.querySelector('#filter-status').textContent = `${selection}. ${selected.length} projects.${projects.length ? '' : ' Project details coming soon.'}`;
}
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  filterState.platform = button.dataset.platform;
  renderProjects();
}));
genreSelect.addEventListener('change', () => { filterState.genre = genreSelect.value; renderProjects(); });
document.querySelector('#reset-filters').addEventListener('click', () => {
  filterState.platform = 'All'; filterState.genre = 'All'; filterState.query = ''; document.querySelector('#project-search').value = ''; genreSelect.value = 'All';
  document.querySelectorAll('.filter').forEach(button => { const active = button.dataset.platform === 'All'; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  renderProjects();
  document.querySelector('.filter[data-platform="All"]').focus();
});
document.querySelector('#project-search').addEventListener('input', event => { filterState.query = event.target.value; renderProjects(); });
document.querySelector('#inquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `${data.get('type')} — ${data.get('name').trim()}`;
  const body = `Hi Hamza,\n\n${data.get('details').trim()}\n\nThanks,\n${data.get('name').trim()}`;
  document.querySelector('#draft-preview').value = `Subject: ${subject}\n\n${body}`;
  document.querySelector('#draft-mail').href = `mailto:Hamzaishfaq352@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#draft-gmail').href = `https://mail.google.com/mail/?view=cm&fs=1&to=Hamzaishfaq352%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#inquiry-draft').hidden = false;
  document.querySelector('#inquiry-status').textContent = 'Draft ready. Choose how you want to send it below.';
  document.querySelector('#inquiry-draft').scrollIntoView({block:'center'});
  document.querySelector('#draft-gmail').focus({preventScroll:true});
});
document.querySelector('#inquiry-form').addEventListener('input', () => {
  document.querySelector('#inquiry-draft').hidden = true;
  document.querySelector('#inquiry-status').textContent = '';
});
document.querySelector('#copy-message').addEventListener('click', async () => {
  const preview = document.querySelector('#draft-preview');
  try { await navigator.clipboard.writeText(`To: Hamzaishfaq352@gmail.com\n${preview.value}`); document.querySelector('#inquiry-status').textContent = 'Message copied. Paste it into your preferred email service.'; }
  catch { preview.focus(); preview.select(); document.querySelector('#inquiry-status').textContent = 'Select and copy the message above, then email it to Hamzaishfaq352@gmail.com.'; }
});
renderProjects();
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText('Hamzaishfaq352@gmail.com'); status.textContent = 'Email copied. Let’s make something great.'; }
  catch { status.textContent = 'Copy this address: Hamzaishfaq352@gmail.com'; }
});
const sections = [...document.querySelectorAll('main>section')];
const links = [...document.querySelectorAll('.nav-link')];
const updateNavigation = () => {
  const offset = window.innerWidth <= 850 ? 140 : 140;
  let current = sections[0];
  sections.forEach(section => { if (section.getBoundingClientRect().top <= offset) current = section; });
  links.forEach(link => { const active = link.hash === `#${current.id}`; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
};
window.addEventListener('scroll', updateNavigation, { passive:true }); updateNavigation();

// An original procedural scene, independent of project artwork and external assets.
const canvas = document.querySelector('#world-canvas');
const ctx = canvas.getContext('2d');
const motionButton = document.querySelector('#motion-toggle');
const reducedMotion = motionPreference;
let paused = reducedMotion.matches, visible = true, frame = 0, previousTime = 0, sceneTime = 0;
let width = 400, height = 400, pointerX = 0, pointerY = 0;
function syncMotion() { motionButton.textContent = paused ? '▶' : 'Ⅱ'; motionButton.setAttribute('aria-label', paused ? 'Play scene animation' : 'Pause scene animation'); motionButton.setAttribute('aria-pressed', String(paused)); document.querySelector('#scene-label').textContent = paused ? 'SCENE PAUSED · TAKE A BREATHER' : (matchMedia('(pointer: coarse)').matches ? 'A WORLD IN MOTION' : 'MOVE YOUR CURSOR TO EXPLORE'); }
function project(x, y, z) { const angle = -.45 + pointerX * .15; const rx = x * Math.cos(angle) - z * Math.sin(angle); const rz = x * Math.sin(angle) + z * Math.cos(angle); const scale = Math.min(width / 470, height / 410); return [width * .53 + rx * scale, height * .51 + (rz * .45 - y + pointerY * 5) * scale]; }
function polygon(points, fill, stroke) { ctx.beginPath(); points.forEach((point, index) => { const [x,y] = project(...point); index ? ctx.lineTo(x,y) : ctx.moveTo(x,y); }); ctx.closePath(); if (fill) { ctx.fillStyle=fill; ctx.fill(); } if (stroke) { ctx.strokeStyle=stroke;ctx.lineWidth=.7;ctx.stroke(); } }
function line(points, color, lineWidth=1) { ctx.beginPath(); points.forEach((point,index)=> { const [x,y]=project(...point); index ? ctx.lineTo(x,y) : ctx.moveTo(x,y); }); ctx.strokeStyle=color;ctx.lineWidth=lineWidth;ctx.stroke(); }
function draw(time) {
  ctx.clearRect(0,0,width,height);
  for (let i=0;i<45;i++) { const x=((i*137.51)%997)/997*width; const y=((i*73.13)%431)/431*height; ctx.fillStyle=`rgba(206,234,173,${.12+(Math.sin(time*.3+i)+1)*.1})`;ctx.fillRect(x,y,1,1); }
  for(let i=-220;i<=220;i+=36){ line([[i,-71,-180],[i,-71,190]],'#75825e20'); line([[-220,-71,i],[220,-71,i]],'#75825e20'); }
  const corners=[[-139,0,-102],[127,0,-102],[160,0,56],[83,0,122],[-120,0,109],[-168,0,16]];
  const bottoms=corners.map(([x,y,z])=>[x*.73,-68,z*.75]);
  for(let i=0;i<corners.length;i++) polygon([corners[i],corners[(i+1)%6],bottoms[(i+1)%6],bottoms[i]],['#202b23','#29372b','#36432d','#293825','#1c291f','#233122'][i],'#61704855');
  polygon(corners,'#4c5b38','#87925b');
  for(let i=-90;i<=100;i+=32)line([[i,1,-90],[i,1,91]],'#a8b77922');
  for(let i=-76;i<=80;i+=29)line([[-122,1,i],[123,1,i]],'#a8b77922');
  // Segmented landing path and an angular gateway.
  for(let z=94;z>5;z-=19)polygon([[-24,2,z],[23,2,z],[23,2,z-12],[-24,2,z-12]],'#879563','#cad99455');
  const bob=Math.sin(time*.8)*3;
  function pillar(x,z,h){ polygon([[x,3,z],[x+15,3,z],[x+15,h,z],[x,h,z]],'#a3b577','#d8e5a0');polygon([[x+15,3,z],[x+24,3,z-12],[x+24,h,z-12],[x+15,h,z]],'#586f47','#aec48188');polygon([[x,h,z],[x+15,h,z],[x+24,h,z-12],[x+9,h,z-12]],'#d7e9a1','#e1f5a7'); }
  pillar(-57,-24,132+bob);pillar(36,-24,132+bob);
  polygon([[-57,132+bob,-24],[51,132+bob,-24],[51,150+bob,-24],[-57,150+bob,-24]],'#b7cc85','#e3f5b1');
  polygon([[-57,150+bob,-24],[51,150+bob,-24],[60,150+bob,-36],[-48,150+bob,-36]],'#e4efbb','#e3f5b1');
  polygon([[51,132+bob,-24],[60,132+bob,-36],[60,150+bob,-36],[51,150+bob,-24]],'#6e8053','#b3ca7d');
  const center=project(0,67,-28);const glow=ctx.createRadialGradient(...center,3,...center,105);glow.addColorStop(0,'#c1f36b30');glow.addColorStop(1,'#c1f36b00');ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
  polygon([[-38,3,-25],[35,3,-25],[35,131+bob,-25],[-38,131+bob,-25]],'#bcf56812','#b5ed7577');
  // Small floating object inside the portal.
  const cy=65+Math.sin(time*1.4)*8;const r=16;
  polygon([[0,cy+r,-23],[r,cy,-23],[0,cy-r,-23],[-r,cy,-23]],'#d4fc8d','#edffd1');
  polygon([[0,cy+r,-23],[10,cy,-38],[r,cy,-23]],'#8eae59','#d4eb96');
  for(const [x,z,s] of [[-101,50,21],[91,42,16],[-95,-55,11],[98,-54,25]]){polygon([[x-s,2,z+s],[x+s,2,z+s],[x+s,2,z-s],[x-s,2,z-s]],'#334b30','#718759');polygon([[x-s,2,z+s],[x,29+s*.3,z],[x+s,2,z+s]],'#719059','#a1b976');polygon([[x+s,2,z+s],[x,29+s*.3,z],[x+s,2,z-s]],'#435f3d','#7a925e');}
  for(let i=0;i<9;i++){const y=(time*15+i*19)%155;const [x2,y2]=project(-29+(i*17)%61,y,-22);ctx.fillStyle='#ddffa8';ctx.globalAlpha=.4;ctx.fillRect(x2,y2,2,2);ctx.globalAlpha=1;}
}
function tick(now) { frame=0; if(paused||!visible||document.hidden)return; if(previousTime)sceneTime+=Math.min((now-previousTime)/1000,.05);previousTime=now;draw(sceneTime);frame=requestAnimationFrame(tick); }
function start(){if(!frame&&!paused&&visible&&!document.hidden){previousTime=0;frame=requestAnimationFrame(tick);}}
function stop(){cancelAnimationFrame(frame);frame=0;previousTime=0;}
motionButton.addEventListener('click',()=>{paused=!paused;syncMotion();paused?stop():start();});
reducedMotion.addEventListener('change',e=>{paused=e.matches;syncMotion();paused?stop():start();draw(sceneTime);});
canvas.parentElement.addEventListener('pointermove',e=>{if(paused)return;const box=canvas.getBoundingClientRect();pointerX=(e.clientX-box.left)/box.width-.5;pointerY=(e.clientY-box.top)/box.height-.5;});
canvas.parentElement.addEventListener('pointerleave',()=>{pointerX=0;pointerY=0;});
new ResizeObserver(()=>{const box=canvas.getBoundingClientRect();width=box.width;height=box.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);draw(sceneTime);}).observe(canvas.parentElement);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;visible?start():stop();}).observe(canvas);
document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
syncMotion();start();



// Reveal each static section once as it enters the viewport.
document.querySelectorAll('.portfolio-summary, .section-heading, .system-card, .job, .contact-section, .project-brief').forEach(element => entranceObserver.observe(element));

// Stage the opening scene so the motion is visible immediately on arrival.
if (!motionPreference.matches) {
  document.querySelectorAll('.hero-copy > *, .world').forEach((element, index) => {
    element.animate([{opacity:0,transform:'translateY(36px)'},{opacity:1,transform:'translateY(0)'}],
      {duration:1000,delay:120+index*110,fill:'backwards',easing:'cubic-bezier(.16,1,.3,1)'});
  });
}

syncSiteMotion();
