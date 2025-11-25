'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PrimeBanner() {
    return (
        <section className="w-full py-16 md:py-20 bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white relative overflow-hidden">
            {/* Diagonal accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-[-10deg] translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-0.5 w-10 bg-white"></div>
                    <span className="text-white/90 text-xs font-extrabold uppercase tracking-[0.3em]">Premium Access</span>
                    <div className="h-0.5 w-10 bg-white"></div>
                </div>

                {/* Logo */}
                <div className="mb-6">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight inline-block">
                        VIBE<span className="text-accent">+</span>
                    </h2>
                </div>

                {/* Tagline */}
                <p className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-8">
                    FAST, FREE DELIVERY
                </p>

                {/* CTA Button */}
                <Link
                    href="/prime"
                    className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 font-black uppercase text-sm tracking-wider hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl hover:shadow-white/20 group"
                    style={{ borderRadius: '50px' }}
                >
                    Shop Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
