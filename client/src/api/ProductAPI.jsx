import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductAPI = () => {

    const [products,setProducts]=useState([])

    const getProducts = async()=> {
        const res = await axios.get('http://localhost:5000/api/products')
        console.log(res)
        setProducts(res.data.products)
    }

    
}


