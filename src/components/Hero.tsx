import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] bg-gray-200 overflow-hidden">
            {/* Background Image Placeholder - In a real app, this would be an <Image> or <video> */}
            <div className="absolute inset-0 bg-black">
                {/* Solid Black Background */}
            </div>

            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20 md:pb-32">
                <div className="max-w-3xl">
                    <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.9] mb-6 tracking-tighter drop-shadow-lg">
                        Run The<br />Game
                    </h1>
                    <p className="text-lg md:text-xl text-white font-medium mb-8 max-w-lg drop-shadow-md">
                        New season innovation for the streets and the stadium.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/men"
                            className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Shop Men
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/women"
                            className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Shop Women
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/kids"
                            className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
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
