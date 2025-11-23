'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    productId: string;
    size: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: string, size: string) => void;
    updateQuantity: (productId: string, size: string, quantity: number) => void;
    clearCart: () => void;
    getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('elo_cart');
        if (saved) {
            try {
                setCartItems(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse cart', e);
            }
        }
    }, []);

    // Save to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('elo_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (newItem: CartItem) => {
        setCartItems(prev => {
            const existingItemIndex = prev.findIndex(
                item => item.productId === newItem.productId && item.size === newItem.size
            );

            if (existingItemIndex > -1) {
                const newItems = [...prev];
                newItems[existingItemIndex].quantity += newItem.quantity;
                return newItems;
            } else {
                return [...prev, newItem];
            }
        });
    };

    const removeFromCart = (productId: string, size: string) => {
        setCartItems(prev => prev.filter(item => !(item.productId === productId && item.size === size)));
    };

    const updateQuantity = (productId: string, size: string, quantity: number) => {
        if (quantity < 1) return;
        setCartItems(prev => prev.map(item =>
            (item.productId === productId && item.size === size)
                ? { ...item, quantity }
                : item
        ));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
