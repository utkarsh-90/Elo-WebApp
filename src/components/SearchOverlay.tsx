'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ALL_PRODUCTS } from '@/lib/data';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Filter products
    const filteredProducts = query.trim() === ''
        ? []
        : ALL_PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] bg-white animate-in fade-in duration-200">
            {/* Top Strip Spacer (optional, if we want to match exact position, but covering is safer for 'whole space') */}
            {/* <div className="h-[32px] bg-black w-full"></div> */}

            {/* Header / Search Bar */}
            <div className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16 gap-4">
                        <Search className="text-black" size={20} />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="SEARCH PRODUCTS..."
                            className="flex-1 text-lg md:text-xl font-bold uppercase tracking-wide placeholder-gray-300 border-none focus:ring-0 p-0 bg-transparent"
                        />
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-black"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Results Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-100px)] overflow-y-auto">
                {query.trim() === '' ? (
                    <div className="text-center text-gray-400 mt-20">
                        <p className="text-lg uppercase tracking-widest">Start typing to search</p>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-400 mt-20">
                        <p className="text-lg uppercase tracking-widest">No results found for "{query}"</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {filteredProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/product/${product.id}`} // Placeholder link
                                onClick={onClose}
                                className="group flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                            >
                                <div className="relative w-16 h-16 bg-gray-100 flex-shrink-0">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold uppercase tracking-wide group-hover:underline">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold">${product.price}</p>
                                    {product.originalPrice && (
                                        <p className="text-xs text-gray-400 line-through">${product.originalPrice}</p>
                                    )}
                                </div>
                                <ArrowRight className="text-gray-300 group-hover:text-black transition-colors" size={20} />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
