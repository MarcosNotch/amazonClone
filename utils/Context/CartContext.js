'use client';

import { createContext, useState } from 'react';

export const Context = createContext();

export default function CartProvider({ children }) {
  
  let [carrito, setCarrito] = useState([])

  const addToCart = (item) => {
    setCarrito([...carrito, item])
  }

  const getCartQuantity = () => {
    return carrito.length
  }

  const getItems = () => {
    return carrito
  }


  return (
    <Context.Provider value={{carrito, addToCart, getCartQuantity, getItems}}>
      {children}
    </Context.Provider>
  );
}