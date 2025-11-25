'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { useProducts } from '@/hooks/useProducts';

export default function TrendingSection() {
    const { products, loading, error } = useProducts();

    // Filter trending products (first 8 for now)
    const TRENDING_PRODUCTS = products.slice(0, 8);

    if (loading) return null; // Or a skeleton loader
    if (error) return null;
    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-0.5 w-10 bg-primary"></div>
                        <span className="text-primary text-xs font-extrabold uppercase tracking-[0.25em]">Latest Drops</span>
                    </div>
                    {/* Main heading */}
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-primary">
                        NEW & TRENDING
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
                        className="group inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 font-black uppercase text-sm tracking-wider hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                        style={{ borderRadius: '50px' }}
                    >
                        <span className="relative z-10">See All Products</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
