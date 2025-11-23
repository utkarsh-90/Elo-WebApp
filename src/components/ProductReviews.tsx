'use client';

import { Star, ThumbsUp, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

export default function ProductReviews() {
    return (
        <div className="border-t border-gray-200 pt-16 pb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-12">Reviews</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                {/* Rating Snapshot */}
                <div className="lg:col-span-4 space-y-6">
                    <h3 className="font-bold uppercase tracking-wider text-sm mb-4">Rating Snapshot</h3>
                    <div className="space-y-3">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="flex items-center gap-4">
                                <span className="text-sm font-bold w-12">{star} stars</span>
                                <Progress value={star === 5 ? 85 : star === 4 ? 10 : 5} className="h-2 bg-gray-100" />
                                <span className="text-sm text-gray-500 w-8 text-right">
                                    {star === 5 ? 4914 : star === 4 ? 319 : star === 3 ? 152 : star === 2 ? 129 : 444}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overall Rating */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center text-center border-l border-r border-gray-100 px-8">
                    <h3 className="font-bold uppercase tracking-wider text-sm mb-2">Overall Rating</h3>
                    <div className="text-6xl font-black tracking-tighter mb-2">4.5</div>
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={24} fill="black" className="text-black" />
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 font-medium">
                        5958 Reviews
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                        90% of reviewers recommend this product
                    </p>
                </div>

                {/* Detailed Ratings (Sliders) */}
                <div className="lg:col-span-4 space-y-8">
                    <h3 className="font-bold uppercase tracking-wider text-sm mb-4">Average Customer Ratings</h3>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm font-bold uppercase tracking-wider mb-2">
                                <span>Quality</span>
                                <span>4.8</span>
                            </div>
                            <Progress value={96} className="h-2 bg-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between text-sm font-bold uppercase tracking-wider mb-2">
                                <span>Comfort</span>
                                <span>4.6</span>
                            </div>
                            <Progress value={92} className="h-2 bg-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between text-sm font-bold uppercase tracking-wider mb-2">
                                <span>Fit</span>
                            </div>
                            <div className="relative pt-2">
                                <div className="h-2 bg-gray-100 rounded-full w-full relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gray-300"></div>
                                    <div className="absolute top-0 left-[55%] w-4 h-4 bg-black rounded-full -mt-1 border-2 border-white shadow-sm"></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 mt-2 uppercase tracking-wide font-medium">
                                    <span>Runs Small</span>
                                    <span>Runs Large</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Review 1 */}
                <div className="border border-gray-200 p-8 hover:border-black transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="black" className="text-black" />
                            ))}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-2">2 days ago</span>
                    </div>

                    <h4 className="text-lg font-bold uppercase tracking-wide mb-3">Super Comfy</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        The 9060s are my favorite of the NB. Although bulky the 9060 is super super comfy. I wear them everywhere and get compliments all the time.
                    </p>

                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-xs">
                            AN
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wider">Anonymous</p>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                <CheckCircle2 size={12} className="text-black" />
                                Verified Purchaser
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4 mt-auto">
                        <div className="flex gap-6 text-xs font-bold uppercase tracking-wider text-gray-500">
                            <div>
                                <span className="block text-gray-400 mb-1">Size Purchased</span>
                                <span className="text-black">US 9</span>
                            </div>
                            <div>
                                <span className="block text-gray-400 mb-1">Usual Size</span>
                                <span className="text-black">US 9</span>
                            </div>
                            <div>
                                <span className="block text-gray-400 mb-1">Width</span>
                                <span className="text-black">Standard</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:text-black transition-colors">
                                <ThumbsUp size={14} />
                                Helpful (0)
                            </button>
                            <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:text-black transition-colors">
                                Report
                            </button>
                        </div>
                    </div>
                </div>

                {/* Review 2 */}
                <div className="border border-gray-200 p-8 hover:border-black transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="black" className="text-black" />
                            ))}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-2">5 days ago</span>
                    </div>

                    <h4 className="text-lg font-bold uppercase tracking-wide mb-3">Love it</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Super comfortable and stylish. I want to buy one of each color 😍. The quality is amazing and they fit perfectly right out of the box.
                    </p>

                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs">
                            GI
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wider">Gisele</p>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                <CheckCircle2 size={12} className="text-black" />
                                Verified Purchaser
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4 mt-auto">
                        <div className="flex gap-6 text-xs font-bold uppercase tracking-wider text-gray-500">
                            <div>
                                <span className="block text-gray-400 mb-1">Size Purchased</span>
                                <span className="text-black">US 8.5</span>
                            </div>
                            <div>
                                <span className="block text-gray-400 mb-1">Usual Size</span>
                                <span className="text-black">US 8.5</span>
                            </div>
                            <div>
                                <span className="block text-gray-400 mb-1">Width</span>
                                <span className="text-black">Standard</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:text-black transition-colors">
                                <ThumbsUp size={14} />
                                Helpful (2)
                            </button>
                            <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:text-black transition-colors">
                                Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <button className="bg-black text-white font-black uppercase tracking-widest px-8 py-4 hover:bg-gray-900 transition-colors">
                    Write a Review
                </button>
            </div>
        </div>
    );
}
