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
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
                    {Object.values(FOOTER_LINKS).map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-300 hover:text-white hover:underline transition-colors"
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
                        <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">
                            FOLLOW US
                        </h3>
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                <Instagram size={24} />
                            </Link>
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                {/* TikTok Icon (Custom SVG) */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </Link>
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                {/* X (Twitter) Icon (Custom SVG) */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                            </Link>
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                <Facebook size={24} />
                            </Link>
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                <Youtube size={24} />
                            </Link>
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                <Linkedin size={24} />
                            </Link>
                        </div>
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
                    <p>© 2025 Elo America, Inc.</p>
                </div>
            </div>
        </footer>
    );
}
