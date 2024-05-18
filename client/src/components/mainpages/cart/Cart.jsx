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

  const handleDecrement = (productId) => {
    const newCart = cart.map(product =>
      product._id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    );
    setCart(newCart);
  };

  // const handleDecrement = (productId) => {
  //   const newCart = cart.map(product =>
  //     product._id === productId ? { ...product, quantity: product.quantity - 1 } : product
  //   );

  //   // Check if the product quantity is now 0
  //   const productToRemove = newCart.find(product => product._id === productId && product.quantity === 0);

  //   // If the product quantity is 0, remove it from the cart
  //   if (productToRemove) {
  //     const updatedCart = newCart.filter(product => product._id !== productId);
  //     setCart(updatedCart);
  //   } else {
  //     setCart(newCart);
  //   }
  // };


  

  

};


