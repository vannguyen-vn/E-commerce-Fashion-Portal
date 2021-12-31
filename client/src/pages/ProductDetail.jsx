import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { ProductsContext } from '../components/ProductsContext';
import { avgRating } from '../components/helper/avgRating.js';
import Overview from '../components/Overview';
import RelatedProducts from '../components/RelatedProducts';
import RatingReview from "../components/RatingReview";
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = id;
  let isApiSubscribed = true;

  const { getReviews, reviews, reviewsMeta, getReviewsMeta, product, getProduct } = useContext(ProductsContext);

  useEffect(() => {
    if (isApiSubscribed) {
      console.log(productId)
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
          product={product} convertedRating={convertedRating} />
        <h1 className="title">Realated Products</h1>
        <RelatedProducts productId={productId} />
        <RatingReview initReviews={reviews} reviewsMeta={reviewsMeta} convertedRating={convertedRating} />
      </Container>
    </div>
  )
}
export default ProductDetail;