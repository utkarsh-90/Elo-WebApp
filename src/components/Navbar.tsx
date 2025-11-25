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
                <div className="bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-bold py-2 text-center tracking-widest">
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
                                <Link href="/" className="text-2xl font-black tracking-tighter pointer-events-auto hover:text-primary transition-colors">
                                    VIBE
                                </Link>
                            </div>

                            {/* Desktop Links */}
                            <div className="hidden md:flex space-x-6 items-center justify-center flex-1 h-full">
                                {[
                                    { label: 'NEW & TRENDING', href: '/new-arrivals' },
                                    { label: 'MEN', href: '/men' },
                                    { label: 'WOMEN', href: '/women' },
                                    { label: 'KIDS', href: '/kids' },
                                    { label: 'SALE', href: '/sale', accent: true }
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="h-full flex items-center relative group"
                                        onMouseEnter={() => handleMouseEnter(item.label)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`text-xs font-extrabold uppercase tracking-widest px-3 py-2 relative transition-all duration-200 ${activeCategory === item.label
                                                ? 'text-primary'
                                                : item.accent
                                                    ? 'text-accent'
                                                    : 'text-foreground hover:text-primary'
                                                }`}
                                        >
                                            {/* Left accent bar */}
                                            <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 transition-all duration-200 ${activeCategory === item.label
                                                ? 'bg-primary'
                                                : 'bg-transparent group-hover:bg-primary'
                                                }`} />
                                            {item.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Icons */}
                            <div className="flex items-center gap-2">
                                {/* Search */}
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="p-2.5 hover:bg-primary/10 transition-colors group rounded-sm"
                                >
                                    <Search size={22} className="text-foreground group-hover:text-primary transition-colors" strokeWidth={2.5} />
                                </button>

                                {/* User/Profile */}
                                {user ? (
                                    <Link
                                        href="/profile"
                                        className="hidden md:flex items-center gap-2 px-3 py-2 hover:bg-primary/10 transition-colors group rounded-sm"
                                    >
                                        <User size={22} className="text-foreground group-hover:text-primary transition-colors" strokeWidth={2.5} />
                                        <span className="text-xs font-extrabold uppercase tracking-wider group-hover:text-primary transition-colors">{user.email?.split('@')[0]}</span>
                                    </Link>
                                ) : (
                                    <Link
                                        href="/login"
                                        className="hidden md:block p-2.5 hover:bg-primary/10 transition-colors group rounded-sm"
                                    >
                                        <User size={22} className="text-foreground group-hover:text-primary transition-colors" strokeWidth={2.5} />
                                    </Link>
                                )}

                                {/* Favorites */}
                                <Link
                                    href="/favorites"
                                    className="hidden md:block p-2.5 hover:bg-primary/10 transition-colors group relative rounded-sm"
                                >
                                    <Heart size={22} className="text-foreground group-hover:text-primary transition-colors" strokeWidth={2.5} />
                                    {favorites.length > 0 && (
                                        <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-sm shadow-lg">
                                            {favorites.length}
                                        </span>
                                    )}
                                </Link>

                                {/* Cart */}
                                <Link
                                    href="/cart"
                                    className="p-2.5 hover:bg-primary/10 transition-colors group relative rounded-sm"
                                >
                                    <ShoppingBag size={22} className="text-foreground group-hover:text-primary transition-colors" strokeWidth={2.5} />
                                    {getCartCount() > 0 && (
                                        <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-sm shadow-lg">
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
