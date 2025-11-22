import Link from 'next/link';
import Image from 'next/image';

type CategoryData = {
    [key: string]: {
        columns: {
            title: string;
            links: string[];
        }[];
        featured: {
            title: string;
            image: string;
        };
    };
};

const MENU_DATA: CategoryData = {
    MEN: {
        columns: [
            {
                title: 'SHOES',
                links: ['Running', 'Soccer', 'Basketball', 'Training', 'Slides', 'Originals'],
            },
            {
                title: 'CLOTHING',
                links: ['T-Shirts & Tops', 'Shorts', 'Pants', 'Hoodies', 'Jackets', 'Jerseys'],
            },
            {
                title: 'ACCESSORIES',
                links: ['Bags', 'Socks', 'Hats', 'Balls', 'Gloves'],
            },
            {
                title: 'SPORTS',
                links: ['Soccer', 'Running', 'Basketball', 'Training', 'Golf', 'Tennis'],
            },
        ],
        featured: {
            title: 'NEW ARRIVALS',
            image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop',
        },
    },
    WOMEN: {
        columns: [
            {
                title: 'SHOES',
                links: ['Running', 'Training', 'Originals', 'Slides', 'Walking', 'Tennis'],
            },
            {
                title: 'CLOTHING',
                links: ['Leggings', 'Sports Bras', 'Tops', 'Shorts', 'Hoodies', 'Jackets'],
            },
            {
                title: 'ACCESSORIES',
                links: ['Bags', 'Socks', 'Hats', 'Headbands', 'Gloves'],
            },
            {
                title: 'SPORTS',
                links: ['Running', 'Training', 'Yoga', 'Tennis', 'Golf', 'Volleyball'],
            },
        ],
        featured: {
            title: 'BEST SELLERS',
            image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
        },
    },
    KIDS: {
        columns: [
            {
                title: 'SHOES',
                links: ['Boys Shoes', 'Girls Shoes', 'Baby Shoes', 'Originals', 'Soccer'],
            },
            {
                title: 'CLOTHING',
                links: ['Boys Clothing', 'Girls Clothing', 'Sets', 'Tops', 'Shorts'],
            },
            {
                title: 'ACCESSORIES',
                links: ['Bags', 'Socks', 'Hats'],
            },
            {
                title: 'SPORTS',
                links: ['Soccer', 'Basketball', 'Running', 'Training'],
            },
        ],
        featured: {
            title: 'BACK TO SCHOOL',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
        },
    },
    SALE: {
        columns: [
            {
                title: 'MENS SALE',
                links: ['Shoes', 'Clothing', 'Accessories', 'Sports'],
            },
            {
                title: 'WOMENS SALE',
                links: ['Shoes', 'Clothing', 'Accessories', 'Sports'],
            },
            {
                title: 'KIDS SALE',
                links: ['Shoes', 'Clothing', 'Accessories', 'Sports'],
            },
            {
                title: 'LIMITED TIME',
                links: ['Up to 50% Off', 'New Markdowns', 'Last Chance'],
            },
        ],
        featured: {
            title: 'END OF SEASON SALE',
            image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800&auto=format&fit=crop',
        },
    },
};

interface MegaMenuProps {
    category: string | null;
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function MegaMenu({ category, isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
    if (!category || !MENU_DATA[category]) return null;

    const data = MENU_DATA[category];

    return (
        <div
            className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-40 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between">
                    {/* Links Columns */}
                    <div className="flex gap-16 flex-1">
                        {data.columns.map((col, idx) => (
                            <div key={idx}>
                                <h3 className="font-bold text-black mb-4 tracking-wide text-sm">{col.title}</h3>
                                <ul className="space-y-2">
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="text-sm text-gray-600 hover:text-black hover:underline decoration-1 underline-offset-2 transition-colors"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Featured Section */}
                    <div className="w-72 flex-shrink-0">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 mb-4">
                            <Image
                                src={data.featured.image}
                                alt={data.featured.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h4 className="font-bold text-black uppercase tracking-wider">{data.featured.title}</h4>
                        <Link href="#" className="text-sm underline mt-1 block hover:text-gray-600">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
