import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] bg-gray-200 overflow-hidden">
            {/* Background - Electric Blue Gradient with Diagonal Split */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-slate-900">
                {/* Diagonal accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                {/* Dynamic diagonal split */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent transform skew-x-[-10deg] translate-x-1/4"></div>
            </div>

            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20 md:pb-32">
                <div className="max-w-3xl">
                    {/* Small eyebrow text */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-0.5 w-12 bg-white"></div>
                        <span className="text-white/90 text-xs font-bold uppercase tracking-[0.2em]">Multi-Brand Retailer</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.85] mb-6 tracking-tight">
                        Find Your<br />Vibe
                    </h1>

                    {/* Value Proposition Tagline */}
                    <p className="text-2xl md:text-4xl text-accent font-black mb-3 max-w-lg uppercase tracking-tight leading-tight">
                        SAME STYLE. SMARTER PRICE.
                    </p>

                    <p className="text-xl md:text-2xl text-white font-bold mb-2 max-w-lg uppercase tracking-wide">
                        Shop Nike, Adidas, New Balance & More
                    </p>
                    <p className="text-base md:text-lg text-white/80 font-normal mb-10 max-w-lg">
                        Every brand you love. Prices that make sense.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Shop Men Button - Transparent with border */}
                        <Link
                            href="/men"
                            className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 font-black uppercase text-sm tracking-wider hover:bg-white hover:text-primary transition-all duration-300"
                            style={{ borderRadius: '50px' }}
                        >
                            Shop Men
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/women"
                            className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 font-black uppercase text-sm tracking-wider hover:bg-white hover:text-primary transition-all duration-300"
                            style={{ borderRadius: '50px' }}
                        >
                            Shop Women
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/kids"
                            className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 font-black uppercase text-sm tracking-wider hover:bg-white hover:text-primary transition-all duration-300"
                            style={{ borderRadius: '50px' }}
                        >
                            Shop Kids
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
