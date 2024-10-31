import React, { createContext, useEffect, useState } from 'react';
import products from '../productList.json';

export const ProductContext = createContext();

export const ProductManagementProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (id) => {
        const existingItemIndex = cart.findIndex(item => item.id === id);
        let updatedCart;

        if (existingItemIndex !== -1) {
            updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
        } else {
            updatedCart = [...cart, { id, quantity: 1 }];
        }
        
        setCart(updatedCart);
    };

    const removeItem = (id) => {
        const existingItemIndex = cart.findIndex(item => item.id === id);
        let updatedCart;

        if (existingItemIndex !== -1) {
            updatedCart = [...cart];
            if (updatedCart[existingItemIndex].quantity > 1) {
                updatedCart[existingItemIndex].quantity -= 1;
            } else {
                updatedCart.splice(existingItemIndex, 1); 
            }
        } else {
            updatedCart = cart;
        }
        
        setCart(updatedCart);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getProductsInCart = () => {
        return cart.map(({ id, quantity }) => {
                const product = products.find(p => p.id === id);
                return product && { ...product, quantity };
            })
            .filter(product => product.quantity > 0);
    };

    const cleanCart = () => {
        localStorage.removeItem('cart');
        setCart([]);
    };

    const getOneProduct = (id) => {
        return products.find(product => product.id === Number(id));
    };

    const getQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        return item ? item.quantity : 0;
    };    

    const getTotalPrice = () => {
        const productList = getProductsInCart();
        const totalPrice = productList.reduce((accumulator, product) => {
            return accumulator + (product.price * product.quantity);
        }, 0);
        return totalPrice.toFixed(2);     
    }

    const values = {
        products,
        cart,
        addItem,
        removeItem,
        getTotalItems,
        cleanCart,
        getOneProduct,
        getProductsInCart,
        getQuantity,
        getTotalPrice
    };

    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    );
};
