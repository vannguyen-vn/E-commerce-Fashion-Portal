import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
  const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState({});
  // const [styles, setStyle] = useState({});
  // const [relatedProduct, setRelatedProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [productId, setProductId] = useState('41032');

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    let result = [];
    axios.get('/products', { page: 1, count: 4 })
      .then((resultProductList) => {
        setIsLoaded(false)
        setProducts(resultProductList.data)
      })
      .catch(err => {
        setIsLoaded(true);
        console.log('Fetching product list err', err)
      })
  }

  return (
    <ProductsContext.Provider value={{ products, productId, setProductId }} >
      {props.children}
    </ProductsContext.Provider>
  );

}
