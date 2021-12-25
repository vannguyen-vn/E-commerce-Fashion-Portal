import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [product, setProduct] = useState({
    overview: {},
    related: [],
    features: [],
    picture: '',
    styles: '',
    salePrice: '',
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
    const overview = axios.get(`/products/${productId}`);
    const styles = axios.get(`/products/${productId}/styles`);
    // const related = axios.get(`/products/${productId}/related`);

    Promise.all([overview, styles])
      .then(values =>
        setProduct(
          {
            overview: values[0].data,
            styles: values[1].data.results,
            // related: values[2].data,
            features: values[0].data.features,
          })
      )

      .catch((error) => {
        console.log('Error fetching product styles', error);
      });
  }

  const getRelatedProducts = (ProductId) => {
    axios
      .get(`/products/${productId}/related`)
      .then(relatedProducts => setProduct(
        related: relatedProducts.data,
      ))
      .catch(error => console.log('Error fetching related Products', error))
  }

  return (
    <ProductsContext.Provider value={{ products, product, getProduct }} >
      {props.children}
    </ProductsContext.Provider>
  );

}
