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
            <div className="relative aspect-square bg-[#F5F5F5] mb-3 overflow-hidden">
                {/* Badges */}
                <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                    {isNew && (
                        <span className="bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                            New
                        </span>
                    )}
                    {isBestSeller && (
                        <span className="bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                            Best Seller
                        </span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(id);
                    }}
                    className="absolute top-2 right-2 z-10 p-2 hover:bg-transparent transition-colors"
                >
                    <Heart
                        size={20}
                        className={`transition-colors ${isFavorite(id) ? 'fill-black text-black' : 'text-black hover:fill-black'}`}
                    />
                </button>

                {/* Product Image */}
                <div className="relative w-full h-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-center mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Price Overlay on Image (Adidas style sometimes does this, but we'll stick to below for clarity based on the screenshot provided earlier which had price below) */}
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className={`font-medium ${originalPrice ? 'text-[#b91c1c]' : 'text-black'}`}>
                        ${price}
                    </span>
                    {originalPrice && (
                        <span className="text-xs text-gray-500">
                            ${originalPrice} Original price <span className="text-[#b91c1c] ml-1">-{Math.round(((originalPrice - price) / originalPrice) * 100)}%</span>
                        </span>
                    )}
                </div>
                <h3 className="text-sm text-black font-normal leading-tight group-hover:underline decoration-1 underline-offset-2">
                    {name}
                </h3>
                <p className="text-sm text-gray-500 font-normal">
                    {category}
                </p>
            </div>
        </Link>
    );
}
