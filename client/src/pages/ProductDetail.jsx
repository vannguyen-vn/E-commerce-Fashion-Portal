import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams, HashRouter } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { ProductsContext } from '../components/ProductsContext';
import { avgRating } from '../components/helper/avgRating.js';
import Overview from '../components/Overview';
import RelatedProducts from '../components/RelatedProducts';
import RatingReview from "../components/RatingReview";
import axios from 'axios';

const ProductDetail = ({ handleShow, handleClose, showCart }) => {
  const { product_id } = useParams();
  const productId = product_id;
  let isApiSubscribed = true;


  const { getReviews, reviews, reviewsMeta, getReviewsMeta, product, getProduct, addnewreview, } = useContext(ProductsContext);

  useEffect(() => {
    if (isApiSubscribed) {
      getProduct(productId);
      getReviewsMeta(productId);
      getReviews(productId);
    }

    return () => {
      isApiSubscribed = false;
    }
  }, [productId]);

  let convertedRating = avgRating(reviewsMeta) / 5 * 100;

  return (
    <div className='productDetail'>
      <div className='rb'><strong>Buy now, pay later. No Interest, ever!</strong><br></br>Introducing Afterpay! <a href=''>Learn More</a> About Afterpay</div>
      <Container>
        <Overview
          productId={productId}
          product={product}
          handleShow={handleShow}
          handleClose={handleClose}
          showCart={showCart}
          convertedRating={convertedRating} />
        <h1 className="title">Realated Products</h1>
        <RelatedProducts productId={productId} />
        <RatingReview
          productId={productId}
          product={product}
          initReviews={reviews}
          reviewsMeta={reviewsMeta}
          convertedRating={convertedRating}
          getReviews={getReviews} />
      </Container>
    </div>
  )
}
export default ProductDetail;