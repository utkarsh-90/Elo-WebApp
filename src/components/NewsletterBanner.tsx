'use client';

import { ArrowRight } from 'lucide-react';

export default function NewsletterBanner() {
    return (
        <div className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic text-white mb-2">
                            Join the Club
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Be the first to know about new arrivals and exclusive drops.
                        </p>
                    </div>

                    <div className="w-full md:w-auto flex-shrink-0">
                        <button className="w-full md:w-auto bg-white text-black font-black uppercase tracking-widest px-8 py-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                            Sign Up
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
