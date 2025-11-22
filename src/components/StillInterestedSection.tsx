'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';

// Mock Data for Still Interested
const INTERESTED_PRODUCTS = [
    {
        id: '101',
        name: 'Samba XLG Shoes',
        category: 'Originals',
        price: 66,
        originalPrice: 110,
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop',
        isBestSeller: true,
    },
    {
        id: '102',
        name: 'Samba OG Shoes',
        category: 'Originals',
        price: 70,
        originalPrice: 100,
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '103',
        name: 'Samba OG Shoes',
        category: 'Originals',
        price: 100,
        image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '104',
        name: 'Samba XLG Shoes',
        category: 'Originals',
        price: 55,
        originalPrice: 110,
        image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '105',
        name: 'Gazelle Bold Shoes',
        category: 'Originals',
        price: 120,
        image: 'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '106',
        name: 'Handball Spezial',
        category: 'Originals',
        price: 110,
        image: 'https://images.unsplash.com/photo-1520256862855-3982eb6c8cbe?q=80&w=800&auto=format&fit=crop',
    },
];

export default function StillInterestedSection() {
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? INTERESTED_PRODUCTS : INTERESTED_PRODUCTS.slice(0, 4);

    return (
        <section className="w-full py-12 bg-white border-t border-gray-100">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">
                    Still Interested?
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {itemsToShow.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                {/* View More Button */}
                {INTERESTED_PRODUCTS.length > 4 && !showAll && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-8 py-3 bg-black text-white font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
