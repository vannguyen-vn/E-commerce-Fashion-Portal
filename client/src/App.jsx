import React, { useState, useEffect, useContext, createContext } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ListProduct from './components/ListProduct';
import Testimonial from './components/Testimonial';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  // const [productId, setProductId] = useState('40344');
  // const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    let result = [];
    axios.get('/products', { page: 1, count: 4 })
      .then((resultProductList) => setProducts(resultProductList.data))
      .catch(err => console.log('Fetching product list err', err))
  }

  // const getProduct = (productId) => {
  //   const result = [];
  //   const overview = axios.get(`/products/${productId}`);
  //   const styles = axios.get(`/products/${productId}/styles`);
  //   const related = axios.get(`/products/${productId}/related`);
  //   axios.all([overview, styles, related])
  //     .then(values => { 'overview': values[0].data, 'styles': values[1].data, 'related': values[2].data })
  // }

  return (
    <>
      <Header />
      <Banner />
      <ListProduct productList={products} />
      <Testimonial /></>
  )
}

export default App;