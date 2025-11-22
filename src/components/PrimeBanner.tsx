'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PrimeBanner() {
    return (
        <section className="w-full bg-[#0071DC] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex flex-col items-center justify-center space-y-6">
                    {/* Logo/Brand Text */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">
                            elo
                        </span>
                        <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            prime
                        </span>
                    </div>

                    {/* Main Text */}
                    <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">
                        Fast, Free Delivery
                    </h2>

                    {/* Button */}
                    <Link
                        href="/new-arrivals"
                        className="group bg-white text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center gap-2 mt-4"
                    >
                        Shop Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
