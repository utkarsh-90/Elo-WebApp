'use client';

import Link from 'next/link';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import MegaMenu from './MegaMenu';
import SearchOverlay from './SearchOverlay';
import { useFavorites } from '@/context/FavoritesContext';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();
    const supabase = createClient();
    const { favorites } = useFavorites();
    const { getCartCount } = useCart();

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleMouseEnter = (category: string) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setActiveCategory(category);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveCategory(null);
        }, 100); // Small delay to allow moving to the menu
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full">
                {/* Top Strip */}
                <div className="bg-black text-white text-xs font-bold py-2 text-center tracking-widest">
                    FREE SHIPPING ON ORDERS OVER $100
                </div>

                {/* Main Nav */}
                <nav className="bg-white border-b border-gray-100 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            {/* Mobile Menu Button */}
                            <div className="flex items-center md:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="text-black hover:text-gray-600 focus:outline-none"
                                >
                                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>

                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute md:static left-0 pointer-events-none md:pointer-events-auto">
                                <Link href="/" className="text-2xl font-black tracking-tighter pointer-events-auto">
                                    ELO
                                </Link>
                            </div>

                            {/* Desktop Links */}
                            <div className="hidden md:flex space-x-8 items-center justify-center flex-1 h-full">
                                {['NEW & TRENDING', 'MEN', 'WOMEN', 'KIDS', 'SALE'].map((item) => (
                                    <div
                                        key={item}
                                        className="h-full flex items-center"
                                        onMouseEnter={() => handleMouseEnter(item)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={item === 'NEW & TRENDING' ? '/new-arrivals' : `/${item.toLowerCase()}`}
                                            className={`text-sm font-bold tracking-wide h-full flex items-center border-b-4 border-transparent transition-colors ${activeCategory === item ? 'border-black' : 'hover:border-black'
                                                } ${item === 'SALE' ? 'text-red-600' : 'text-black'}`}
                                        >
                                            {item}
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Icons */}
                            {/* Icons */}
                            <div className="flex items-center gap-4 md:gap-6">
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="text-black hover:text-gray-600 p-2"
                                >
                                    <Search size={20} />
                                </button>
                                {user ? (
                                    <Link
                                        href="/profile"
                                        className="hidden md:flex items-center gap-2 text-black hover:text-gray-600 py-2"
                                    >
                                        <User size={20} />
                                        <span className="text-sm font-bold">{user.email?.split('@')[0]}</span>
                                    </Link>
                                ) : (
                                    <Link href="/login" className="hidden md:block text-black hover:text-gray-600 p-2">
                                        <User size={20} />
                                    </Link>
                                )}
                                <Link href="/favorites" className="hidden md:block text-black hover:text-gray-600 p-2 relative">
                                    <Heart size={20} />
                                    {favorites.length > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                            {favorites.length}
                                        </span>
                                    )}
                                </Link>
                                <Link href="/cart" className="text-black hover:text-gray-600 relative p-2">
                                    <ShoppingBag size={20} />
                                    {getCartCount() > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-[#b91c1c] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                            {getCartCount()}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* Mega Menu */}
                    <MegaMenu
                        category={activeCategory}
                        isOpen={!!activeCategory}
                        onMouseEnter={() => {
                            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        }}
                        onMouseLeave={handleMouseLeave}
                    />

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full h-screen">
                            <div className="px-4 pt-2 pb-3 space-y-1">
                                {['MEN', 'WOMEN', 'KIDS', 'SALE'].map((item) => (
                                    <Link
                                        key={item}
                                        href={`/${item.toLowerCase()}`}
                                        className="block px-3 py-4 text-lg font-bold text-black border-b border-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <div className="pt-4 flex space-x-6 px-3">
                                    <button className="text-black flex items-center gap-2 font-bold">
                                        <User size={20} /> Account
                                    </button>
                                    <Link
                                        href="/favorites"
                                        className="text-black flex items-center gap-2 font-bold"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Heart size={20} /> Wishlist
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header >

            <SearchOverlay
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </>
    );
}
