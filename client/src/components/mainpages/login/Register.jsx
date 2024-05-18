import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/user/register', { ...user });
      localStorage.setItem('firstLogin', true);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  
};


