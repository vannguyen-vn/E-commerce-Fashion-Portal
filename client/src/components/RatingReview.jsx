import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, ProgressBar, Table } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { ProductsContext } from './ProductsContext';
import { avgRating, calEachRating } from './helper/avgRating.js';
import ReviewCard from './ReviewCard'

import axios from 'axios';

const RatingReview = ({ productId }) => {
  const { getReviews, reviews, reviewsMeta, getReviewsMeta } = useContext(ProductsContext);
  let convertedRating = avgRating(reviewsMeta) / 5 * 100;
  let eachRating = calEachRating(reviewsMeta);

  useEffect(() => {
    getReviews(productId);
    getReviewsMeta(productId)
  }, [productId])

  return (
    <section className='RatingReview'>
      <h3>Customer Reviews</h3>
      <Row>
        <Col md={4}>
          <div className='average-star-rating'>
            <div className='avgRating'>{avgRating(reviewsMeta)}</div>
            <div className='stars-outer'>
              <div className='stars-inner' style={{ width: `${convertedRating}%` }}></div>
            </div>
          </div>
          <div className='reviews'>
            {eachRating ?
              eachRating.map((rating, index) => {
                if (Number(rating)) {
                  return (
                    <div className='total-review' key={index}>
                      <div className='star'>{index + 1} star</div>
                      <ProgressBar now={rating} max={100} />
                      <div className='percent'>{`${rating}%`}</div>
                    </div>
                  )
                }
              }) : ''
            }
          </div>
        </Col>
        <Col md={8}>
          {reviews ? reviews.map(review => (
            <ReviewCard
              key={review.review_id}
              review={review}
            />
          )) : ''}
        </Col>

      </Row>
    </section>
  )
}

export default RatingReview;