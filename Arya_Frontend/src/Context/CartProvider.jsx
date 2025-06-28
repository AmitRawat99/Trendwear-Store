import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("cartItem");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    const addToCart = (product) => {
        setCartItem(prev => {
            const existing = prev.find(item => item.id === product.id);

            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const removeItem = (product) => {
        setCartItem(prev => prev.filter(item => item.id !== product.id));
    };

    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }, [cartItem]);

    return (
        <CartContext.Provider value={{ removeItem, addToCart, cartItem, setCartItem }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
