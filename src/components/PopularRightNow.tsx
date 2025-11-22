'use client';

import { ALL_PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';

// Filter for "popular" products (e.g., best sellers or specific IDs)
// For now, we'll take a mix of products to show variety
const POPULAR_PRODUCTS = ALL_PRODUCTS.filter(p => p.isBestSeller || p.price > 100).slice(0, 4);

export default function PopularRightNow() {
    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter">
                        Popular right now
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
