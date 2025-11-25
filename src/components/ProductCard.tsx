'use client';

import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';

interface ProductCardProps {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    image: string;
    isNew?: boolean;
    isBestSeller?: boolean;
}

export default function ProductCard({
    id,
    name,
    category,
    price,
    originalPrice,
    image,
    isNew,
    isBestSeller,
}: ProductCardProps) {
    const { toggleFavorite, isFavorite } = useFavorites();

    return (
        <Link href={`/product/${id}`} className="group block relative w-full min-w-[280px] cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100 mb-3 overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors duration-300">
                {/* Left Accent Bar - VIBE signature */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                    {isNew && (
                        <span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-widest shadow-lg">
                            NEW
                        </span>
                    )}
                    {isBestSeller && (
                        <span className="bg-black text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-widest shadow-lg">
                            BEST SELLER
                        </span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(id);
                    }}
                    className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm hover:bg-primary transition-all duration-300 group/heart rounded-sm shadow-lg"
                >
                    <Heart
                        size={18}
                        strokeWidth={2.5}
                        className={`transition-colors ${isFavorite(id) ? 'fill-primary text-primary' : 'text-foreground group-hover/heart:text-white'}`}
                    />
                </button>

                {/* Product Image */}
                <div className="relative w-full h-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-0.5">
                {/* Category - Small eyebrow */}
                <p className="text-xs text-primary font-extrabold uppercase tracking-wider mb-1">
                    {category}
                </p>

                {/* Product Name */}
                <h3 className="text-sm font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                    {name}
                </h3>

                {/* Price Section */}
                <div className="flex items-baseline gap-2">
                    <span className={`text-base font-black ${originalPrice ? 'text-accent' : 'text-foreground'}`}>
                        ${price}
                    </span>
                    {originalPrice && (
                        <>
                            <span className="text-xs text-gray-400 line-through font-medium">
                                ${originalPrice}
                            </span>
                            <span className="text-xs text-accent font-black">
                                -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
                            </span>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
}
