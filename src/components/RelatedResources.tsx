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
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                        Related Resources
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
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-6">
                                <Image
                                    src={resource.image}
                                    alt={resource.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1">
                                {/* Title with fixed height for alignment (2 lines) */}
                                <h3 className="font-bold text-xl leading-tight mb-3 group-hover/card:underline decoration-2 underline-offset-4 min-h-[3.5rem] line-clamp-2">
                                    {resource.title}
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed mb-6 line-clamp-2">
                                    {resource.description}
                                </p>
                                <div className="mt-auto">
                                    <span className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-1">
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
