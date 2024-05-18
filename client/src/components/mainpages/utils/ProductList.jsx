import React from 'react';

import BtnRender from './BtnRender';

const ProductList = ({ product, isAdmin }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out ">
      <div className="relative">
        {isAdmin && (
          <input
            type="checkbox"
            checked={product.checked}
            className="absolute top-2 right-2"
          />
        )}
        <img
          src={product.images.url}
          alt={product.title}
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2" title={product.title}>
          {product.title}
        </h2>
        <span className="block text-gray-700 mb-2">${product.price}</span>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <BtnRender product={product} />
      </div>
    </div>
  );
};

export default ProductList;
