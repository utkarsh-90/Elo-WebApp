import { useState, useEffect } from 'react';

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    image: string;
    images: string[];
    isNew?: boolean;
    isBestSeller?: boolean;
    gender: string;
    description: string;
    sizes: string[];
    reviews: number;
}

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return { products, loading, error };
}
