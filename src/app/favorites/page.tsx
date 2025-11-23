'use client';

import { useFavorites } from '@/context/FavoritesContext';
import { ALL_PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    const favoriteProducts = ALL_PRODUCTS.filter(product => favorites.includes(product.id));

    return (
        <div className="min-h-screen bg-white pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-12">
                    <Heart size={32} className="fill-black" />
                    <h1 className="text-4xl font-black uppercase tracking-tighter italic">Your Wishlist</h1>
                </div>

                {favoriteProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
                        {favoriteProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-gray-50">
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">Your wishlist is empty</h2>
                        <p className="text-gray-500 mb-8">Save items you love to your wishlist and revisit them later.</p>
                        <Link
                            href="/"
                            className="inline-block bg-black text-white font-bold uppercase tracking-widest py-4 px-12 hover:bg-gray-800 transition-colors"
                        >
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
