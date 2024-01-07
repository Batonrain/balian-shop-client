import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
    localStorage.setItem('cart', JSON.stringify(item));
  };

  const saveCartItems = (newItem) => {
    // Получаем текущий список товаров из localStorage
    const savedCart = localStorage.getItem('cart');
    const cartItems = savedCart ? JSON.parse(savedCart) : [];
  
    // Проверяем, содержится ли уже новый товар в корзине
    const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);
  
    // Если товар уже есть, увеличиваем его количество
    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += newItem.quantity; // Предполагается, что у товаров есть свойство quantity
    } else {
      // Если товара еще нет, добавляем его в список
      cartItems.push(newItem);
    }
  
    // Сохраняем обновленный список товаров обратно в localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
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
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getCartItems, saveCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
