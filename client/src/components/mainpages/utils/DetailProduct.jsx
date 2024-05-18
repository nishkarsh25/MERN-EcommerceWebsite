import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';

const DetailProduct = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [detailProduct, setDetailProduct] = useState({});

  useEffect(() => {
    if (params.id && products.length > 0) {
      const foundProduct = products.find(product => product._id === params.id);
      setDetailProduct(foundProduct || {});
    }
  }, [params.id, products]);

  return (
    <div className="flex justify-center mt-8">
      <div className="max-w-md p-8 border rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
        <img src={detailProduct.images?.url} alt="" className="w-full h-64 object-cover rounded-lg mb-4" />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">{detailProduct.title}</h2>
          <p className="text-gray-600 mb-2">Product ID: {detailProduct.product_id}</p>
          <p className="text-gray-700 mb-2">${detailProduct.price}</p>
          <p className="text-gray-700 mb-4">{detailProduct.description}</p>
          <p className="text-gray-700 mb-4">{detailProduct.content}</p>
          <p className="text-gray-700 mb-4">Sold: {detailProduct.sold}</p>
          <div className="flex justify-center">
            <Link to="/" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 ease-in-out">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
