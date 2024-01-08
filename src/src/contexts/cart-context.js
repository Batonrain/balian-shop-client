import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const saveCartItems = (newItem) => {
    const savedCart = localStorage.getItem('cart');
    const cartItems = savedCart ? JSON.parse(localStorage.getItem('cart')) : [];
    console.log(cartItems)
  
    const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id && item.size === newItem.size);
  
    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].count += newItem.count;
    } else {
      cartItems.push(newItem);
    }
  
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setCartItems(cartItems);
  };
  
  const getCartItems = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, currentItem) => {
      return total + currentItem.pricePerItem * currentItem.count;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, clearCart, getCartTotal, getCartItems, saveCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
