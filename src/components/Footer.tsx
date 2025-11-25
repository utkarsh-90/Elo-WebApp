'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const FOOTER_LINKS = {
    products: {
        title: 'PRODUCTS',
        links: [
            { label: 'Shoes', href: '/shoes' },
            { label: 'Clothing', href: '/clothing' },
            { label: 'Accessories', href: '/accessories' },
            { label: 'New Arrivals', href: '/new-arrivals' },
            { label: 'Best Sellers', href: '/best-sellers' },
            { label: 'Sale', href: '/sale' },
        ],
    },
    sports: {
        title: 'SPORTS',
        links: [
            { label: 'Soccer', href: '/soccer' },
            { label: 'Running', href: '/running' },
            { label: 'Basketball', href: '/basketball' },
            { label: 'Football', href: '/football' },
            { label: 'Outdoor', href: '/outdoor' },
            { label: 'Golf', href: '/golf' },
        ],
    },
    collections: {
        title: 'COLLECTIONS',
        links: [
            { label: 'Adicolor', href: '/adicolor' },
            { label: 'Ultraboost', href: '/ultraboost' },
            { label: 'Forum', href: '/forum' },
            { label: 'Superstar', href: '/superstar' },
            { label: 'Stan Smith', href: '/stan-smith' },
            { label: 'adizero', href: '/adizero' },
        ],
    },
    support: {
        title: 'SUPPORT',
        links: [
            { label: 'Help', href: '/help' },
            { label: 'Returns & Exchanges', href: '/returns' },
            { label: 'Shipping', href: '/shipping' },
            { label: 'Order Tracker', href: '/order-tracker' },
            { label: 'Size Charts', href: '/size-charts' },
        ],
    },
    company: {
        title: 'COMPANY INFO',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Student Discount', href: '/student-discount' },
            { label: 'Careers', href: '/careers' },
            { label: 'Press', href: '/press' },
        ],
    },
};

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white pt-16 pb-8">
            {/* Blue accent strip at top */}
            <div className="w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-primary"></div>

            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
                    {Object.values(FOOTER_LINKS).map((section) => (
                        <div key={section.title} className="relative">
                            {/* Section heading with left accent */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-4 w-0.5 bg-primary"></div>
                                <h3 className="font-black text-sm uppercase tracking-widest">
                                    {section.title}
                                </h3>
                            </div>
                            <ul className="space-y-2.5">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-primary hover:translate-x-1 transition-all inline-block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Follow Us Section */}
                    <div>
                        {/* Section heading with left accent */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-4 w-0.5 bg-primary"></div>
                            <h3 className="font-black text-sm uppercase tracking-widest">
                                FOLLOW US
                            </h3>
                        </div>
                        <ul className="space-y-2.5">
                            <li>
                                <Link href="#" className="text-sm text-gray-400 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2">
                                    <Instagram size={16} strokeWidth={2.5} />
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                    </svg>
                                    TikTok
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                    </svg>
                                    X
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2">
                                    <Facebook size={16} strokeWidth={2.5} />
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2">
                                    <Youtube size={16} strokeWidth={2.5} />
                                    YouTube
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2">
                                    <Linkedin size={16} strokeWidth={2.5} />
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Your Privacy Choices</Link>
                        <span className="hidden md:inline">|</span>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="hidden md:inline">|</span>
                        <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
                    </div>
                    <p>© 2025 VIBE, Inc. All rights reserved.</p>
                    <p className="text-xs text-gray-500 mt-2">
                        VIBE is not affiliated with or endorsed by any of the brands featured on this site.
                    </p>
                </div>
            </div>
        </footer>
    );
}
