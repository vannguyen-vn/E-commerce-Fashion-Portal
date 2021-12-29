import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { ProductsContext } from '../components/ProductsContext';
import Overview from '../components/Overview';
import RelatedProducts from '../components/RelatedProducts';
import RatingReview from "../components/RatingReview";
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = id;
  const { product, getProduct, getRelated, related } = useContext(ProductsContext);

  useEffect(() => {
    getDetail();
  }, [productId]);

  const getDetail = () => {
    let product1 = getProduct(productId);
  }

  return (
    <div className='productDetail'>
      <div className='rb'><strong>Buy now, pay later. No Interest, ever!</strong><br></br>Introducing Afterpay! <a href=''>Learn More</a> About Afterpay</div>
      <Container>
        <Overview
          product={product} />
        <h1 className="title">Realated Products</h1>
        <RelatedProducts productId={productId} />
        <RatingReview />
      </Container>
    </div>
  )
}
export default ProductDetail;