'use client';

import { useState, useMemo } from 'react';
import { ALL_PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface CategoryPageProps {
    title: string;
    gender: 'Men' | 'Women' | 'Kids';
    description?: string;
}

export default function CategoryPage({ title, gender, description }: CategoryPageProps) {
    // State
    const [sortOption, setSortOption] = useState('newest');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState('all');

    // Get unique categories from products
    const allCategories = useMemo(() => {
        const categories = new Set(ALL_PRODUCTS.map(p => p.category));
        return Array.from(categories);
    }, []);

    // Filter and Sort Logic
    const filteredProducts = useMemo(() => {
        let result = ALL_PRODUCTS.filter(
            (product) => product.gender === gender || product.gender === 'Unisex'
        );

        // Filter by Category
        if (selectedCategories.length > 0) {
            result = result.filter(product => selectedCategories.includes(product.category));
        }

        // Filter by Price
        if (priceRange !== 'all') {
            switch (priceRange) {
                case 'under-50':
                    result = result.filter(product => product.price < 50);
                    break;
                case '50-100':
                    result = result.filter(product => product.price >= 50 && product.price <= 100);
                    break;
                case '100-150':
                    result = result.filter(product => product.price > 100 && product.price <= 150);
                    break;
                case 'over-150':
                    result = result.filter(product => product.price > 150);
                    break;
            }
        }

        // Sort
        switch (sortOption) {
            case 'price-low-high':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
            default:
                // Assuming higher ID is newer for now, or use isNew flag
                result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
        }

        return result;
    }, [gender, selectedCategories, priceRange, sortOption]);

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const clearFilters = () => {
        setSortOption('newest');
        setSelectedCategories([]);
        setPriceRange('all');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-white pt-8 pb-8 border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-2">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-gray-600 max-w-xl text-lg">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="flex items-center gap-2 font-bold hover:text-gray-600 transition-colors border border-black px-4 py-2 uppercase text-sm tracking-wider">
                                    <SlidersHorizontal size={18} />
                                    Filter & Sort
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[350px] sm:w-[450px] overflow-y-auto p-0 gap-0 border-r-0">
                                <SheetHeader className="px-8 py-8 border-b border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <SheetTitle className="text-4xl font-black uppercase tracking-tighter italic">Filter & Sort</SheetTitle>
                                    </div>
                                </SheetHeader>

                                <div className="px-8 py-8 space-y-10">
                                    {/* Sort */}
                                    <div>
                                        <h3 className="font-black uppercase tracking-tighter text-xl mb-6">Sort By</h3>
                                        <RadioGroup value={sortOption} onValueChange={setSortOption} className="gap-4">
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="newest" id="newest" className="peer sr-only" />
                                                <Label htmlFor="newest" className="text-lg font-bold uppercase tracking-wide cursor-pointer text-gray-400 peer-data-[state=checked]:text-black peer-data-[state=checked]:underline peer-data-[state=checked]:decoration-2 peer-data-[state=checked]:underline-offset-4 transition-colors">Newest</Label>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="price-low-high" id="price-low-high" className="peer sr-only" />
                                                <Label htmlFor="price-low-high" className="text-lg font-bold uppercase tracking-wide cursor-pointer text-gray-400 peer-data-[state=checked]:text-black peer-data-[state=checked]:underline peer-data-[state=checked]:decoration-2 peer-data-[state=checked]:underline-offset-4 transition-colors">Price: Low - High</Label>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="price-high-low" id="price-high-low" className="peer sr-only" />
                                                <Label htmlFor="price-high-low" className="text-lg font-bold uppercase tracking-wide cursor-pointer text-gray-400 peer-data-[state=checked]:text-black peer-data-[state=checked]:underline peer-data-[state=checked]:decoration-2 peer-data-[state=checked]:underline-offset-4 transition-colors">Price: High - Low</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    {/* Price Range */}
                                    <div>
                                        <h3 className="font-black uppercase tracking-tighter text-xl mb-6">Price Range</h3>
                                        <RadioGroup value={priceRange} onValueChange={setPriceRange} className="gap-4">
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="all" id="price-all" className="peer sr-only" />
                                                <Label htmlFor="price-all" className="text-lg font-bold uppercase tracking-wide cursor-pointer text-gray-400 peer-data-[state=checked]:text-black peer-data-[state=checked]:underline peer-data-[state=checked]:decoration-2 peer-data-[state=checked]:underline-offset-4 transition-colors">All Prices</Label>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="under-50" id="price-under-50" className="peer sr-only" />
                                                <Label htmlFor="price-under-50" className="text-lg font-bold uppercase tracking-wide cursor-pointer text-gray-400 peer-data-[state=checked]:text-black peer-data-[state=checked]:underline peer-data-[state=checked]:decoration-2 peer-data-[state=checked]:underline-offset-4 transition-colors">Under $50</Label>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="50-100" id="price-50-100" className="peer sr-only" />
                                                <Label htmlFor="price-50-100" className="text-lg font-bold uppercase tracking-wide cursor-pointer text-gray-400 peer-data-[state=checked]:text-black peer-data-[state=checked]:underline peer-data-[state=checked]:decoration-2 peer-data-[state=checked]:underline-offset-4 transition-colors">$50 - $100</Label>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="100-150" id="price-100-150" className="peer sr-only" />
                                                <Label htmlFor="price-100-150" className="text-lg font-bold uppercase tracking-wide cursor-pointer text-gray-400 peer-data-[state=checked]:text-black peer-data-[state=checked]:underline peer-data-[state=checked]:decoration-2 peer-data-[state=checked]:underline-offset-4 transition-colors">$100 - $150</Label>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="over-150" id="price-over-150" className="peer sr-only" />
                                                <Label htmlFor="price-over-150" className="text-lg font-bold uppercase tracking-wide cursor-pointer text-gray-400 peer-data-[state=checked]:text-black peer-data-[state=checked]:underline peer-data-[state=checked]:decoration-2 peer-data-[state=checked]:underline-offset-4 transition-colors">Over $150</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    {/* Categories */}
                                    <div>
                                        <h3 className="font-black uppercase tracking-tighter text-xl mb-6">Category</h3>
                                        <div className="space-y-4">
                                            {allCategories.map((category) => (
                                                <div key={category} className="flex items-center space-x-3">
                                                    <Checkbox
                                                        id={category}
                                                        checked={selectedCategories.includes(category)}
                                                        onCheckedChange={() => toggleCategory(category)}
                                                        className="peer sr-only"
                                                    />
                                                    <Label htmlFor={category} className="text-lg font-bold uppercase tracking-wide cursor-pointer text-gray-400 peer-data-[state=checked]:text-black peer-data-[state=checked]:underline peer-data-[state=checked]:decoration-2 peer-data-[state=checked]:underline-offset-4 transition-colors">{category}</Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="pt-8 flex flex-col gap-4">
                                        <SheetClose asChild>
                                            <button className="w-full py-4 bg-black text-white font-black uppercase tracking-widest hover:bg-gray-900 transition-colors text-lg">
                                                Apply Filters
                                            </button>
                                        </SheetClose>
                                        <button
                                            onClick={clearFilters}
                                            className="w-full py-2 text-gray-500 font-bold uppercase tracking-wider hover:text-black transition-colors text-sm underline underline-offset-4"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>

                        <span className="text-sm font-bold text-gray-500">
                            {filteredProducts.length} PRODUCTS
                        </span>
                    </div>

                    {/* Active Filters */}
                    {(selectedCategories.length > 0 || priceRange !== 'all') && (
                        <div className="pt-4 pb-2">
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-sm font-bold text-gray-500 mr-2 uppercase tracking-wider">Active Filters:</span>

                                {/* Category Chips */}
                                {selectedCategories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => toggleCategory(category)}
                                        className="flex items-center gap-1 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                                    >
                                        {category}
                                        <X size={12} />
                                    </button>
                                ))}

                                {/* Price Chip */}
                                {priceRange !== 'all' && (
                                    <button
                                        onClick={() => setPriceRange('all')}
                                        className="flex items-center gap-1 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                                    >
                                        {priceRange === 'under-50' && 'Under $50'}
                                        {priceRange === '50-100' && '$50 - $100'}
                                        {priceRange === '100-150' && '$100 - $150'}
                                        {priceRange === 'over-150' && 'Over $150'}
                                        <X size={12} />
                                    </button>
                                )}

                                {/* Clear All */}
                                <button
                                    onClick={clearFilters}
                                    className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black underline underline-offset-2 ml-2"
                                >
                                    Clear All
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold mb-4">No products found</h2>
                        <p className="text-gray-600 mb-8">Try adjusting your filters to see more results.</p>
                        <button
                            onClick={clearFilters}
                            className="inline-block border-b-2 border-black pb-1 font-bold uppercase tracking-wider hover:text-gray-600 hover:border-gray-600"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
