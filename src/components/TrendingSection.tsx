'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from './ProductCard';

import { ALL_PRODUCTS } from '@/lib/data';

// Filter trending products (first 8 for now)
const TRENDING_PRODUCTS = ALL_PRODUCTS.slice(0, 8);

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
