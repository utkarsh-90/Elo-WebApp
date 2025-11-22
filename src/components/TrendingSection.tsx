'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from './ProductCard';

// Mock Data
const TRENDING_PRODUCTS = [
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
];

export default function TrendingSection() {
    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                        New & Trending
                    </h2>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {TRENDING_PRODUCTS.map((product) => (
                        <div key={product.id} className="w-full">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/new-arrivals"
                        className="group flex items-center gap-2 bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                    >
                        See More
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
