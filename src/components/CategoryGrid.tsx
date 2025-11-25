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
                            <div className="relative aspect-[3/4] w-full overflow-hidden mb-5 bg-gray-100 border-2 border-transparent group-hover:border-primary transition-colors duration-300">
                                {/* Left Accent Bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col items-start flex-1">
                                {/* Eyebrow */}
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-0.5 w-6 bg-primary"></div>
                                    <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.2em]">Featured</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-black uppercase tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-snug mb-5 flex-1">
                                    {category.description}
                                </p>

                                {/* CTA Button */}
                                <Link
                                    href={category.link}
                                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                    style={{ borderRadius: '30px' }}
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
