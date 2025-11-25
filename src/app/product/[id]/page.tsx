'use client';

import { useParams, useRouter } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Heart, Star, ChevronDown, Minus, Plus, Share2 } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ProductReviews from '@/components/ProductReviews';
import NewsletterBanner from '@/components/NewsletterBanner';
import SizeGuide from '@/components/SizeGuide';
import { useFavorites } from '@/context/FavoritesContext';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    // Data Fetching
    const { products, loading, error } = useProducts();
    const product = products.find((p) => p.id === id);

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const { toggleFavorite, isFavorite } = useFavorites();
    const { addToCart } = useCart();

    if (loading) {
        return (
            <div className="min-h-screen bg-white pt-24 pb-12 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white pt-24 pb-12 flex items-center justify-center">
                <p className="text-red-500">Error loading product: {error}</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
            </div>
        );
    }

    // Mock related products (same category or random)
    // Mock related products (same category or random)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Breadcrumbs */}
                <div className="text-sm text-gray-500 mb-8 uppercase tracking-wide font-medium">
                    <span>{product.gender}</span>
                    <span className="mx-2">/</span>
                    <span>{product.category}</span>
                    <span className="mx-2">/</span>
                    <span className="text-black font-bold">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                    {/* Left Column: Image Gallery */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {product.images?.map((img, index) => (
                                <div key={index} className="relative aspect-square bg-[#F5F5F5] overflow-hidden group">
                                    <Image
                                        src={img}
                                        alt={`${product.name} view ${index + 1}`}
                                        fill
                                        className="object-cover object-center mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {index === 0 && (
                                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                            {product.isNew && (
                                                <span className="bg-white text-black text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
                                                    New
                                                </span>
                                            )}
                                            {product.isBestSeller && (
                                                <span className="bg-white text-black text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
                                                    Best Seller
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                        <div className="flex justify-between items-start mb-2">
                            <h1 className="text-4xl font-black uppercase tracking-tighter italic leading-none">
                                {product.name}
                            </h1>
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <span className={`text-xl font-bold ${product.originalPrice ? 'text-[#b91c1c]' : 'text-black'}`}>
                                    ${product.price}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-gray-500 line-through decoration-1">
                                        ${product.originalPrice}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-black">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-xs font-bold underline underline-offset-2 ml-1 cursor-pointer">
                                    ({product.reviews} Reviews)
                                </span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Color Selection (Mock) */}
                        <div className="mb-8">
                            <h3 className="font-bold uppercase tracking-wider text-sm mb-3">Color</h3>
                            <div className="flex gap-3">
                                <button className="w-20 h-20 border-2 border-black p-1">
                                    <div className="w-full h-full bg-[#F5F5F5] relative">
                                        <Image
                                            src={product.image}
                                            alt="Color 1"
                                            fill
                                            className="object-cover mix-blend-multiply"
                                        />
                                    </div>
                                </button>
                                <button className="w-20 h-20 border border-gray-200 p-1 hover:border-gray-400 transition-colors opacity-50 cursor-not-allowed">
                                    <div className="w-full h-full bg-[#F5F5F5] relative">
                                        <Image
                                            src={product.image}
                                            alt="Color 2"
                                            fill
                                            className="object-cover mix-blend-multiply grayscale"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-bold uppercase tracking-wider text-sm">Select Size</h3>
                                <SizeGuide />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {product.sizes?.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-3 text-sm font-bold uppercase tracking-wider border transition-all ${selectedSize === size
                                            ? 'border-black bg-black text-white'
                                            : 'border-gray-200 hover:border-black text-black'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 mb-8">
                            <button
                                onClick={() => {
                                    if (!selectedSize) {
                                        alert('Please select a size');
                                        return;
                                    }
                                    addToCart({
                                        productId: product.id,
                                        size: selectedSize,
                                        quantity: 1
                                    });
                                    router.push('/cart');
                                }}
                                className="w-full bg-[#b91c1c] text-white font-black uppercase tracking-widest py-4 hover:bg-[#991b1b] transition-colors text-lg flex items-center justify-center gap-2"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => toggleFavorite(product.id)}
                                className={`w-full border border-black font-bold uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2 ${isFavorite(product.id)
                                    ? 'bg-black text-white hover:bg-gray-800'
                                    : 'text-black hover:bg-black hover:text-white'
                                    }`}
                            >
                                <Heart size={20} className={isFavorite(product.id) ? 'fill-white' : ''} />
                                {isFavorite(product.id) ? 'Favorited' : 'Favorite'}
                            </button>
                        </div>

                        {/* Accordions */}
                        <Accordion type="single" collapsible className="w-full border-t border-gray-200">
                            <AccordionItem value="description" className="border-b border-gray-200">
                                <AccordionTrigger className="font-bold uppercase tracking-wider hover:no-underline py-4">
                                    Description
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                                    {product.description}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="details" className="border-b border-gray-200">
                                <AccordionTrigger className="font-bold uppercase tracking-wider hover:no-underline py-4">
                                    Product Details
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Regular fit</li>
                                        <li>Lace closure</li>
                                        <li>Textile lining</li>
                                        <li>Rubber outsole</li>
                                        <li>Imported</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="shipping" className="border-b border-gray-200">
                                <AccordionTrigger className="font-bold uppercase tracking-wider hover:no-underline py-4">
                                    Shipping & Returns
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                                    Free standard shipping on all orders over $100. Returns are accepted within 30 days of purchase.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                {/* Reviews Section */}
                <ProductReviews />

                {/* Recommendations */}
                {relatedProducts.length > 0 && (
                    <div className="mt-24 border-t border-gray-100 pt-16">
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8">
                            You May Also Like
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} {...p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Newsletter Banner */}
            <NewsletterBanner />
        </div>
    );
}
