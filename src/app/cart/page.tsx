'use client';

import { useCart } from '@/context/CartContext';
import { useProducts } from '@/hooks/useProducts';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, getCartCount } = useCart();
    const { products: ALL_PRODUCTS, loading, error } = useProducts();

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
                <p className="text-red-500">Error loading products: {error}</p>
            </div>
        );
    }

    // Enrich cart items with product details
    const enrichedCartItems = cartItems.map(item => {
        const product = ALL_PRODUCTS.find(p => p.id === item.productId);
        return {
            ...item,
            product
        };
    }).filter(item => item.product); // Filter out any items where product not found

    const subtotal = enrichedCartItems.reduce((total, item) => {
        return total + (item.product!.price * item.quantity);
    }, 0);

    const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
    const tax = subtotal * 0.08; // Mock tax
    const total = subtotal + shipping + tax;

    return (
        <div className="min-h-screen bg-white pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-12">
                    <ShoppingBag size={32} className="text-black" />
                    <h1 className="text-4xl font-black uppercase tracking-tighter italic">Your Bag ({getCartCount()})</h1>
                </div>

                {enrichedCartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Cart Items List */}
                        <div className="lg:col-span-8 space-y-8">
                            {enrichedCartItems.map((item) => (
                                <div key={`${item.productId}-${item.size}`} className="flex gap-6 border-b border-gray-100 pb-8 last:border-0">
                                    <div className="relative w-32 h-32 bg-[#F5F5F5] flex-shrink-0">
                                        <Image
                                            src={item.product!.image}
                                            alt={item.product!.name}
                                            fill
                                            className="object-cover mix-blend-multiply p-2"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-bold uppercase tracking-wide">
                                                    <Link href={`/product/${item.productId}`} className="hover:underline">
                                                        {item.product!.name}
                                                    </Link>
                                                </h3>
                                                <span className="font-bold text-lg">${(item.product!.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-1 capitalize">{item.product!.gender}'s {item.product!.category}</p>
                                            <p className="text-sm font-medium">Size: {item.size}</p>
                                        </div>

                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center border border-gray-300">
                                                <button
                                                    onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                                                    className="p-2 hover:bg-gray-100 transition-colors"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                                                    className="p-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.productId, item.size)}
                                                className="text-gray-400 hover:text-red-600 transition-colors flex items-center gap-1 text-sm font-medium"
                                            >
                                                <Trash2 size={16} /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-4">
                            <div className="bg-gray-50 p-8 sticky top-24">
                                <h2 className="text-xl font-black uppercase tracking-tighter italic mb-6">Order Summary</h2>

                                <div className="space-y-3 text-sm mb-6 pb-6 border-b border-gray-200">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tax (Est.)</span>
                                        <span className="font-medium">${tax.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end mb-8">
                                    <span className="font-black uppercase tracking-wider text-lg">Total</span>
                                    <span className="font-black text-2xl">${total.toFixed(2)}</span>
                                </div>

                                <Link
                                    href="/checkout"
                                    className="block w-full bg-[#b91c1c] text-white font-black uppercase tracking-widest py-4 text-center hover:bg-[#991b1b] transition-colors text-lg"
                                >
                                    Proceed to Checkout
                                </Link>

                                <div className="mt-6 text-center">
                                    <Link href="/" className="text-sm font-bold underline underline-offset-2 hover:text-gray-600">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-24 bg-gray-50">
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">Your bag is empty</h2>
                        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your bag yet.</p>
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
