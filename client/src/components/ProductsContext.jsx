import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [related, setRelated] = useState([]);
  const [product, setProduct] = useState({
    overview: {},
    features: [],
    picture: '',
    styles: '',
  });

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    let result = [];
    axios.get('/products', { page: 1, count: 20 })
      .then((resultProductList) => {
        setIsLoaded(false)
        setProducts(resultProductList.data)
      })

      .catch(err => {
        setIsLoaded(true);
        console.log('Fetching product list err', err)
      })
  }

  const getProduct = (productId) => {
    let isApiSubscribed = true;

    const overview = axios.get(`/products/${productId}`);
    const styles = axios.get(`/products/${productId}/styles`);

    Promise.all([overview, styles])
      .then(values => {
        if (isApiSubscribed) {
          console.log(values[1].data.results)

          setProduct({
            overview: values[0].data,
            styles: values[1].data.results,
            features: values[0].data.features,
          })
        }
      })

      .catch((error) => {
        console.log('Error fetching product styles', error);
      });

    return () => {
      isApiSubscribed = false;
    }
  }

  const getRelated = (productId) => {
    axios.get(`/products/${productId}/related`)
      .then(result => setRelated(result.data))
      .catch((error) => {
        console.log('Error fetching related product ', error);
      });
  }

  return (
    <ProductsContext.Provider value={{ getProductList, getProduct, getRelated, products, related, product }} >
      {props.children}
    </ProductsContext.Provider>
  );

}
