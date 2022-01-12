import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ProductsContext } from '../components/ProductsContext';
import { avgRating } from '../components/helper/avgRating.js';
import Overview from '../components/Overview';
import RelatedProducts from '../components/RelatedProducts';
import RatingReview from "../components/RatingReview";
import axios from 'axios';
import Header from '../components/Header';
import Testimonial from '../components/Testimonial';

const ProductDetail = ({ handleShow, handleClose, showCart }) => {
  const { product_id } = useParams();
  const productId = product_id;
  let isApiSubscribed = true;

  const { getReviews, reviews, reviewsMeta, getReviewsMeta, product, getProduct, addnewreview, theme } = useContext(ProductsContext);

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
    <div className={theme} className='productDetail'>
      <Header />
      <div >
        <div className='rb'><strong>Buy now, pay later. No Interest, ever!</strong><br></br>Introducing Afterpay! <a href=''>Learn More</a> About Afterpay</div>
        <Container>
          <Overview
            productId={productId}
            product={product}
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
      <Testimonial />
    </div>
  )
}
export default ProductDetail;