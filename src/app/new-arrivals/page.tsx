import ProductCard from '@/components/ProductCard';

// Mock Data (Expanded for the full page)
const NEW_ARRIVALS = [
    {
        id: '1',
        name: 'Elo Titan X',
        category: 'Performance',
        price: 140,
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop',
        isBestSeller: true,
    },
    {
        id: '2',
        name: 'Elo Retro High',
        category: 'Originals',
        price: 110,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
        isNew: true,
    },
    {
        id: '3',
        name: 'Elo Ultrarun',
        category: 'Running',
        price: 160,
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '4',
        name: 'Elo Court Legacy',
        category: 'Lifestyle',
        price: 95,
        originalPrice: 120,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '5',
        name: 'Elo Cloud Slide',
        category: 'Slides',
        price: 40,
        image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop',
        isNew: true,
    },

    {
        id: '6',
        name: 'Elo City Low',
        category: 'Lifestyle',
        price: 85,
        image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '7',
        name: 'Elo Racer Z',
        category: 'Running',
        price: 115,
        image: 'https://images.unsplash.com/photo-1515555230216-82228b88ea98?q=80&w=800&auto=format&fit=crop',
        isNew: true,
    },
    {
        id: '8',
        name: 'Elo Hoops Mid',
        category: 'Basketball',
        price: 125,
        originalPrice: 150,
        image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '9',
        name: 'Elo Street Classic',
        category: 'Originals',
        price: 85,
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '10',
        name: 'Elo Marathon Pro',
        category: 'Performance',
        price: 180,
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop',
        isNew: true,
    },
    {
        id: '11',
        name: 'Elo Skate Low',
        category: 'Skateboarding',
        price: 75,
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '12',
        name: 'Elo Training Flex',
        category: 'Training',
        price: 100,
        image: 'https://images.unsplash.com/photo-1518894781321-630e638d0742?q=80&w=800&auto=format&fit=crop',
    },
];

export default function NewArrivalsPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                    New & Trending
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {NEW_ARRIVALS.map((product) => (
                        <div key={product.id} className="w-full">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
