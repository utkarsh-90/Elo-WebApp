export const ALL_PRODUCTS = [
    // Trending Products
    {
        id: '1',
        name: 'Elo Titan X',
        category: 'Performance',
        price: 140,
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop'
        ],
        isBestSeller: true,
        gender: 'Men',
        description: 'Engineered for maximum energy return, the Elo Titan X features our most responsive cushioning yet. The breathable knit upper adapts to your foot shape for a custom fit, while the durable outsole provides traction on any surface.',
        sizes: ['M 7 / W 8', 'M 8 / W 9', 'M 9 / W 10', 'M 10 / W 11', 'M 11 / W 12', 'M 12 / W 13'],
        reviews: 128
    },
    {
        id: '2',
        name: 'Elo Retro High',
        category: 'Originals',
        price: 110,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop'
        ],
        isNew: true,
        gender: 'Women',
        description: 'A classic silhouette reimagined for the modern street. The Elo Retro High combines vintage aesthetics with premium leather construction. Features a padded collar for comfort and a timeless design that pairs with everything.',
        sizes: ['M 5 / W 6', 'M 6 / W 7', 'M 7 / W 8', 'M 8 / W 9', 'M 9 / W 10'],
        reviews: 85
    },
    {
        id: '3',
        name: 'Elo Ultrarun',
        category: 'Running',
        price: 160,
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop'
        ],
        gender: 'Men',
        description: 'Push your limits with the Elo Ultrarun. Designed for long-distance comfort, it features a lightweight mesh upper and targeted support zones. The high-abrasion rubber outsole ensures durability mile after mile.',
        sizes: ['M 8 / W 9', 'M 9 / W 10', 'M 10 / W 11', 'M 11 / W 12', 'M 12 / W 13', 'M 13 / W 14'],
        reviews: 210
    },
    {
        id: '4',
        name: 'Elo Court Legacy',
        category: 'Lifestyle',
        price: 95,
        originalPrice: 120,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=800&auto=format&fit=crop'
        ],
        gender: 'Women',
        description: 'Tennis-inspired style for everyday wear. The Elo Court Legacy brings a clean, minimalist look to your rotation. Made with synthetic leather and a soft foam insole for all-day comfort.',
        sizes: ['M 4 / W 5', 'M 5 / W 6', 'M 6 / W 7', 'M 7 / W 8'],
        reviews: 45
    },
    {
        id: '5',
        name: 'Elo Cloud Slide',
        category: 'Slides',
        price: 40,
        image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop'
        ],
        isNew: true,
        gender: 'Unisex',
        description: 'Like walking on air. The Elo Cloud Slide features a contoured footbed and a soft, quick-drying strap. Perfect for post-workout recovery or lounging at home.',
        sizes: ['M 6 / W 7', 'M 7 / W 8', 'M 8 / W 9', 'M 9 / W 10', 'M 10 / W 11', 'M 11 / W 12'],
        reviews: 320
    },
    {
        id: '6',
        name: 'Elo City Low',
        category: 'Lifestyle',
        price: 85,
        image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588117260148-447885162913?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588117260148-447885162913?q=80&w=800&auto=format&fit=crop'
        ],
        gender: 'Kids',
        description: 'Built for play. The Elo City Low offers durable construction and easy on-and-off with elastic laces. The non-marking rubber outsole is perfect for gym class or the playground.',
        sizes: ['1Y', '2Y', '3Y', '4Y', '5Y'],
        reviews: 60
    },
    {
        id: '7',
        name: 'Elo Racer Z',
        category: 'Running',
        price: 115,
        image: 'https://images.unsplash.com/photo-1515555230216-82228b88ea98?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1515555230216-82228b88ea98?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515555230216-82228b88ea98?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=800&auto=format&fit=crop'
        ],
        isNew: true,
        gender: 'Women',
        description: 'Speed meets style. The Elo Racer Z is a lightweight running shoe designed for tempo runs and race day. The responsive midsole propels you forward with every stride.',
        sizes: ['M 4 / W 5', 'M 5 / W 6', 'M 6 / W 7', 'M 7 / W 8'],
        reviews: 95
    },
    {
        id: '8',
        name: 'Elo Hoops Mid',
        category: 'Basketball',
        price: 125,
        originalPrice: 150,
        image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=800&auto=format&fit=crop'
        ],
        gender: 'Men',
        description: 'Dominate the court. The Elo Hoops Mid provides ankle support and lockdown for explosive moves. The herringbone traction pattern gives you grip when you need it most.',
        sizes: ['M 8 / W 9', 'M 9 / W 10', 'M 10 / W 11', 'M 11 / W 12', 'M 12 / W 13', 'M 13 / W 14'],
        reviews: 150
    },
    // Still Interested Products
    {
        id: '101',
        name: 'Samba XLG Shoes',
        category: 'Originals',
        price: 66,
        originalPrice: 110,
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop'
        ],
        isBestSeller: true,
        gender: 'Unisex',
        description: 'An icon, elevated. The Samba XLG takes the classic soccer silhouette and adds a chunky platform sole for a bold look. Premium leather and suede details complete the design.',
        sizes: ['M 4 / W 5', 'M 5 / W 6', 'M 6 / W 7', 'M 7 / W 8', 'M 8 / W 9', 'M 9 / W 10'],
        reviews: 500
    },
    {
        id: '102',
        name: 'Samba OG Shoes',
        category: 'Originals',
        price: 70,
        originalPrice: 100,
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop'
        ],
        gender: 'Men',
        description: 'The original icon. Born on the pitch, the Samba OG is a timeless classic. Features a soft leather upper and suede T-toe overlay.',
        sizes: ['M 7 / W 8', 'M 8 / W 9', 'M 9 / W 10', 'M 10 / W 11', 'M 11 / W 12'],
        reviews: 1200
    },
    {
        id: '103',
        name: 'Samba OG Shoes',
        category: 'Originals',
        price: 100,
        image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop'
        ],
        gender: 'Women',
        description: 'Timeless style. This version of the Samba OG features fresh colorways for the season while maintaining the authentic look and feel of the original.',
        sizes: ['M 4 / W 5', 'M 5 / W 6', 'M 6 / W 7', 'M 7 / W 8', 'M 8 / W 9'],
        reviews: 800
    },
    {
        id: '104',
        name: 'Samba XLG Shoes',
        category: 'Originals',
        price: 55,
        originalPrice: 110,
        image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop'
        ],
        gender: 'Kids',
        description: 'Big style for small feet. The Samba XLG Kids brings the chunky platform look to the playground. Durable and stylish.',
        sizes: ['1Y', '2Y', '3Y', '4Y', '5Y'],
        reviews: 150
    },
    {
        id: '105',
        name: 'Gazelle Bold Shoes',
        category: 'Originals',
        price: 120,
        image: 'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop'
        ],
        gender: 'Women',
        description: 'Bold and beautiful. The Gazelle Bold features a triple-stacked platform midsole for a high-fashion look. The suede upper keeps it rooted in sport heritage.',
        sizes: ['M 4 / W 5', 'M 5 / W 6', 'M 6 / W 7', 'M 7 / W 8', 'M 8 / W 9'],
        reviews: 450
    },
    {
        id: '106',
        name: 'Handball Spezial',
        category: 'Originals',
        price: 110,
        image: 'https://images.unsplash.com/photo-1520256862855-3982eb6c8cbe?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1520256862855-3982eb6c8cbe?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520256862855-3982eb6c8cbe?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop'
        ],
        gender: 'Men',
        description: 'A terrace culture favorite. The Handball Spezial was originally designed for indoor sports but became a streetwear staple. Features a soft suede upper and gum rubber outsole.',
        sizes: ['M 7 / W 8', 'M 8 / W 9', 'M 9 / W 10', 'M 10 / W 11', 'M 11 / W 12', 'M 12 / W 13'],
        reviews: 600
    },
];
