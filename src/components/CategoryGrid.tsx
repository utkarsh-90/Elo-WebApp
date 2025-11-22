'use client';

import Link from 'next/link';
import Image from 'next/image';

const CATEGORIES = [
    {
        id: '1',
        title: 'FIFA WORLD CUP 26™ HOME JERSEYS',
        description: 'Inspired by national emblems and culture.',
        image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop',
        link: '/men',
    },
    {
        id: '2',
        title: 'RACE OVER. FITS ON.',
        description: 'Introducing the Las Vegas Pack.',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
        link: '/women',
    },
    {
        id: '3',
        title: 'ADISTAR CONTROL 5',
        description: 'Running tech heritage recut for the modern era of streetwear—an Original recoded.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
        link: '/new-arrivals',
    },
    {
        id: '4',
        title: 'CLUB AMÉRICA 25/26 THIRD JERSEY',
        description: 'Designed for those who live and breathe soccer.',
        image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop',
        link: '/sale',
    },
];

export default function CategoryGrid() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {CATEGORIES.map((category) => (
                        <div key={category.id} className="flex flex-col group cursor-pointer h-full">
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-gray-100">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col items-start flex-1">
                                <h3 className="text-lg font-bold uppercase tracking-tight leading-tight mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">
                                    {category.description}
                                </p>
                                <Link
                                    href={category.link}
                                    className="inline-block text-sm font-bold uppercase tracking-wider border-b border-black py-1 px-2 hover:bg-black hover:text-white hover:border-black transition-colors"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
