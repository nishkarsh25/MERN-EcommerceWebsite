import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu, MdClose, MdOutlineAddShoppingCart } from "react-icons/md";
import { GlobalState } from '../../GlobalState';
import axios from 'axios';

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;

  const logoutUser = async () => {
    await axios.get('/user/logout');
    localStorage.clear();
    setIsAdmin(false);
    setIsLogged(false);
  };

  const adminRouter = () => {
    return (
      <>
        <Link to='/create_product' className="text-white hover:text-gray-300 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wide mr-4 md:mr-6">Create Product</Link>
        <Link to='/category' className="text-white hover:text-gray-300 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wide mr-4 md:mr-6">Categories</Link>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <Link to='/history' className="text-white hover:text-gray-300 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wide mr-4 md:mr-6">History</Link>
        <Link to='/' onClick={logoutUser} className="text-white hover:text-gray-300 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wide mr-4 md:mr-6">Logout</Link>
      </>
    );
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-4 px-6 sm:px-10 lg:px-16 flex justify-between items-center">
      <div className="logo">
        <h1>
          <Link to="/" className="text-3xl font-bold text-white">{isAdmin ? 'ADMIN' : '30DC SHOP'}</Link>
        </h1>
      </div>

      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wide mr-4 md:mr-6">{isAdmin ? 'Products' : 'Shop'}</Link>

        {isAdmin && adminRouter()}
        {
          isLogged ? loggedRouter() : <Link to="/login" className="text-white hover:text-gray-300 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wide mr-4 md:mr-6">Login or Register</Link>
        }

      </div>

      {
        isAdmin ? '' :
          <div className="relative">
            <Link to='/cart'>
              <MdOutlineAddShoppingCart size={30} className="text-white" />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {cart.length}
            </span>
          </div>

      }
    </header>
  );
};

export default Header;
