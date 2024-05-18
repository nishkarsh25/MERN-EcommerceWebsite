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
        <li><Link to='/create_product' className="text-white hover:text-gray-300">CREATE PRODUCT</Link></li>
        <li><Link to='/category' className="text-white hover:text-gray-300">CATEGORIES</Link></li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li><Link to='/history' className="text-white hover:text-gray-300">HISTORY</Link></li>
        <li><Link to='/' onClick={logoutUser} className="text-white hover:text-gray-300">LOGOUT</Link></li>
      </>
    );
  };

  
};


