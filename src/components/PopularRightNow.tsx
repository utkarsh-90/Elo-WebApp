'use client';

import { useProducts } from '@/hooks/useProducts';
import ProductCard from './ProductCard';

export default function PopularRightNow() {
    const { products, loading, error } = useProducts();

    // Filter for "popular" products (e.g., best sellers or specific IDs)
    const POPULAR_PRODUCTS = products.filter(p => p.isBestSeller || p.price > 100).slice(0, 4);

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
                        <span className="text-primary text-xs font-extrabold uppercase tracking-[0.25em]">Shop Now</span>
                    </div>
                    {/* Main heading */}
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-primary">
                        POPULAR RIGHT NOW
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {POPULAR_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
