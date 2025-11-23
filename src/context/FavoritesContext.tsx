'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface FavoritesContextType {
    favorites: string[];
    toggleFavorite: (productId: string) => void;
    isFavorite: (productId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('elo_favorites');
        if (saved) {
            try {
                setFavorites(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse favorites', e);
            }
        }
    }, []);

    // Save to localStorage whenever favorites change
    useEffect(() => {
        localStorage.setItem('elo_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (productId: string) => {
        setFavorites(prev => {
            if (prev.includes(productId)) {
                return prev.filter(id => id !== productId);
            } else {
                return [...prev, productId];
            }
        });
    };

    const isFavorite = (productId: string) => {
        return favorites.includes(productId);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
}
