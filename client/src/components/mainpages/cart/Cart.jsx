import React, { useContext, useState } from 'react';
import { GlobalState } from '../../../GlobalState';

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;

  // Calculate total price and total number of items in cart
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

  const handleRemove = (productId) => {
    const newCart = cart.filter(product => product._id !== productId);
    setCart(newCart);
  };

  const handleIncrement = (productId) => {
    const newCart = cart.map(product =>
      product._id === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(newCart);
  };

  

  


  

  

};


