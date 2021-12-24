import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { ProductsContext } from '../components/ProductsContext';
import Carousel from '../components/Carousel'

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
    // selectedStylesPhotos: [],
  });


  useEffect(() => {
    getProduct();
  }, [productId]);


  const getProduct = () => {
    const overview = axios.get(`/products/${productId}`);
    const styles = axios.get(`/products/${productId}/styles`);
    const related = axios.get(`/products/${productId}/related`);

    Promise.all([overview, styles, related])
      .then(values => setProduct(
        {
          overview: values[0].data,
          styles: values[1].data.results,
          related: values[2].data,
          features: values[0].data.features,
        }));
  }


  return (

    <div className='productDetail'>
      <div className='rb'><strong>Buy now, pay later. No Interest, ever!</strong><br></br>Introducing Afterpay! <a href=''>Learn More</a> About Afterpay</div>
      <Container>
        <Carousel product={product} />
      </Container>
    </div>
  )
}
export default ProductDetail;