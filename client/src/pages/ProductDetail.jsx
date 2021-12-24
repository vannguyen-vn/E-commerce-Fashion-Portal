import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { ProductsContext } from '../components/ProductsContext';
import Overview from '../components/Overview'

import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = id;
  const [product, setProduct] = useState({
    overview: {},
    related: [],
    features: [],
    picture: '',
    styles: '',
    salePrice: '',
  });


  useEffect(() => {
    getProduct();
  }, [productId]);


  const getProduct = () => {
    const overview = axios.get(`/products/${productId}`);
    const styles = axios.get(`/products/${productId}/styles`);
    const related = axios.get(`/products/${productId}/related`);

    Promise.all([overview, styles, related])
      .then(values =>
        setProduct(
          {
            overview: values[0].data,
            styles: values[1].data.results,
            related: values[2].data,
            features: values[0].data.features,
          })
      )

      .catch((error) => {
        console.log('Error fetching product styles', error);
      });
  }


  return (

    <div className='productDetail'>
      <div className='rb'><strong>Buy now, pay later. No Interest, ever!</strong><br></br>Introducing Afterpay! <a href=''>Learn More</a> About Afterpay</div>
      <Container>
        <Overview product={product} />
      </Container>
    </div>
  )
}
export default ProductDetail;