import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
  const [theme, setTheme] = useState('light');
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [related, setRelated] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState({});

  const [ratings, setRatings] = useState({})
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

  const getReviews = (productId) => {
    axios.get(`/reviews/${productId}`)
      .then(result => setReviews(result.data.results))
      .catch((error) => {
        console.log('Error fetching related product ', error);
      });
  }

  const getReviewsMeta = (productId) => {
    axios.get(`/reviews/meta/${productId}/`)
      .then(result => setReviewsMeta(result.data.ratings))
      .catch((error) => {
        console.log('Error fetching related product ', error);
      });
  }


  return (
    <ProductsContext.Provider value={{ getProductList, getProduct, getRelated, products, related, product, getReviews, getReviewsMeta, reviews, reviewsMeta, theme }} >
      {props.children}
    </ProductsContext.Provider>
  );

}


ProductsProvider.propTypes = {
  theme: PropTypes.string,
  products: PropTypes.array,
  isLoaded: PropTypes.bool,
  related: PropTypes.array,
  reviews: PropTypes.array,
  reviewsMeta: PropTypes.object,
  ratings: PropTypes.object,
  product: PropTypes.object
};