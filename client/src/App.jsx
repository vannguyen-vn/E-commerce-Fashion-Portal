import React, { useState, useEffect, useContext, createContext } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ListProduct from './components/ListProduct';
import Testimonial from './components/Testimonial';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  // const [productId, setProductId] = useState('40344');
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    let result = [];
    axios.get('/products', { page: 1, count: 20 })
      .then((resultProductList) => {

        const productListId = resultProductList.data.map(pro => pro.id);
        productListId.map((productId) => {
          result.push(getProduct(productId))
        })
        console.log(result);
        return result;
      })

      .then(axios.spread(function (result) {
        console.log(result);
      }))

      // .then(result => {
      //     Promise
      //       .all(result)
      //       .then(values => console.log(values));
      //   })
      .catch(err => console.log('Fetching product list err', err))
  }

  const getProduct = (productId) => {
    const overview = axios.get(`/products/${productId}`);
    const styles = axios.get(`/products/${productId}/styles`);
    const related = axios.get(`/products/${productId}/related`);

    return axios.all([overview, styles, related]).then(axios.spread(function (res1, res2, res3) {
      return (res1, res2, res3);
    }))
  }

  return (
    <>
      <Header />
      <Banner />
      <ListProduct productList={products} />
      <Testimonial /></>
  )
}

export default App;