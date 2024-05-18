import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

const BtnRender = ({ product }) => {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;
  const addCart = state.userAPI.addCart;

  return (
    <div className="flex justify-between">
      {isAdmin ? (
        <>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-4 transition duration-300 ease-in-out" onClick={() => console.log('Delete')}>
            Delete
          </button>
          <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out" to={`detail/${product._id}`}>
            Edit
          </Link>
        </>
      ) : (
        <>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mr-4 transition duration-300 ease-in-out" onClick={() => addCart(product)}>
            Buy
          </button>
          <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out" to={`detail/${product._id}`}>
            View
          </Link>
        </>
      )}
    </div>
  );
};


