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

  
};


