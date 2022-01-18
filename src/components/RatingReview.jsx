import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, ProgressBar, Button, Modal } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { avgRating, calEachRating } from './helper/avgRating.js';
import ReviewCard from './ReviewCard';
import AddReview from './AddReview';
import PropTypes from 'prop-types';
import axios from 'axios';

const RatingReview = ({ productid, product, initReviews, reviewsMeta, convertedRating, getReviews }) => {
  const [limit, setLimit] = useState(4);
  const [reviews, setReviews] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setReviews(initReviews);
  }, [initReviews]);

  let eachRating = calEachRating(reviewsMeta);

  const handleClickMore = (e) => {
    e.preventDefault();
    setLimit(null);
    document.querySelector('#viewmore').classList.toggle("hidden");
  }

  const handleFilter = (index) => {
    let result = initReviews.filter(item => item.rating === index)
    return setReviews(result)
  }

  return (
    <section className='RatingReview' id='reviews'>
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
                    <div className='total-review' key={index} onClick={() => handleFilter(index + 1)} >
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
          {reviews ? reviews.slice(0, limit ? limit : reviews.length).map(review => (
            <ReviewCard
              key={review.review_id}
              review={review}
            />
          )) : ''}
          {(limit < reviews.length) && <Button id='viewmore' variant="outline-secondary" className='' onClick={handleClickMore}>More reviews</Button>}
          <Button variant="outline-secondary" className='' onClick={() => setModalShow(true)}>Add review</Button>
          <AddReview
            productid={productid}
            show={modalShow}
            onHide={() => setModalShow(false)}
            name={product.overview.name}
          />
        </Col>
      </Row>
    </section>
  )
}

RatingReview.propTypes = {
  limit: PropTypes.number,
  reviews: PropTypes.array,
  modalShow: PropTypes.bool
}

export default RatingReview;