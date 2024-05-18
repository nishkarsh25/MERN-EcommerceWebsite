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


  if (cart.length === 0)
    return (
      <h2 className="text-center text-5xl mt-20">Cart Empty</h2>
    );

  return (
    <div className="container mx-auto mt-4">
      {/* Total Items and Total Price section */}
      <div className="flex justify-between items-center mb-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg p-6 shadow-md">
        {/* Total Items */}
        <div className="text-center">
          <p className="text-lg font-semibold mb-2 text-white">Total Items</p>
          <p className="text-3xl font-bold text-white">{totalItems}</p>
        </div>
        {/* Total Price */}
        <div className="text-center">
          <p className="text-lg font-semibold mb-2 text-white">Total Price</p>
          <div className="flex items-center justify-center">
            <p className="text-3xl font-bold text-white mr-2">${totalPrice.toFixed(2)}</p>
            {/* Add an icon or any additional styling here if desired */}
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cart.map(product => (
          <div key={product._id} className="bg-white rounded-md overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105">
            <img src={product.images.url} alt={product.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-gray-800" title={product.title}>{product.title}</h2>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">${product.price}</span>
                <span className="text-sm text-gray-500">{product.product_id}</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
              <p className="text-gray-700 mb-2">{product.content}</p>
              <div className="flex justify-center items-center space-x-4">
                {/* Decrement button */}
                <button onClick={() => handleDecrement(product._id)} className='text-center bg-gray-300 text-gray-800 py-2 px-3 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none'>-</button>
                {/* Display quantity */}
                <span className="text-lg font-bold">{product.quantity}</span>
                {/* Increment button */}
                <button onClick={() => handleIncrement(product._id)} className='text-center bg-gray-300 text-gray-800 py-2 px-3 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none'>+</button>
                {/* Remove button */}
                <button onClick={() => handleRemove(product._id)} className='text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300 ease-in-out focus:outline-none'>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Cart;
