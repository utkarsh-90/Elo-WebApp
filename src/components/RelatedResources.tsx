'use client';

import Image from 'next/image';
import Link from 'next/link';

const RESOURCES = [
    {
        id: '1',
        title: 'How To Clean Shoes',
        description: 'Get down and dirty with adidas and learn how to clean your sneakers the right way.',
        image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        id: '2',
        title: 'The adidas Samba Size Guide',
        description: 'Tired of asking are Sambas true to size? Check out our official adidas Samba size chart for all you need to find your perfect...',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        id: '3',
        title: 'Ace the Looks: How to Style a Tennis Skirt',
        description: 'Are you ready to serve? Learn how to style your tennis skirt outfits with adidas.',
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        id: '4',
        title: 'How To Style A Soccer Jersey',
        description: 'From sporty to flirty to polished, the soccer jersey is a surprisingly versatile wardrobe hero. Get inspired on how to style a jersey...',
        image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
];

export default function RelatedResources() {
    return (
        <section className="w-full py-12 md:py-20 bg-white border-t border-gray-100">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-0.5 w-10 bg-primary"></div>
                        <span className="text-primary text-xs font-extrabold uppercase tracking-[0.25em]">Learn More</span>
                    </div>
                    {/* Main heading */}
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-primary">
                        RELATED RESOURCES
                    </h2>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {RESOURCES.map((resource) => (
                        <Link
                            key={resource.id}
                            href={resource.link}
                            className="group/card flex flex-col h-full"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-5 border-2 border-transparent group-hover/card:border-primary transition-colors duration-300">
                                {/* Left Accent Bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10"></div>

                                <Image
                                    src={resource.image}
                                    alt={resource.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1">
                                {/* Title */}
                                <h3 className="font-black text-lg uppercase leading-tight mb-3 group-hover/card:text-primary transition-colors min-h-[3rem] line-clamp-2 tracking-tight">
                                    {resource.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-snug mb-5 line-clamp-2">
                                    {resource.description}
                                </p>

                                {/* CTA Button */}
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 text-xs font-black uppercase tracking-wider transition-all duration-300 hover:bg-blue-700 shadow-md"
                                        style={{ borderRadius: '25px' }}
                                    >
                                        Read Post
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
