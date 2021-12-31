import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

const ReviewCard = ({ review }) => {
  let convertedRating = review.rating / 5 * 100;

  return (
    <div className='review'>
      <Row className='review-star-rating'>
        <Col md={8} >
          <div className='stars-outer'>
            <div className='stars-inner' style={{ width: `${convertedRating}%` }}></div>
          </div>
        </Col>
        <Col md={4} className='review-dateInfo'>
          {review.reviewer_name ? <div className='review-name'>{review.reviewer_name},</div> : ''}
          <div className='review-date'>{moment(review.date).format('LL')}</div>
        </Col>
      </Row>
      <div className='review-summary'>I'm enjoying wearing these shades</div>
      {review.body ? <div className='review-body'>{review.body}</div> : ''}
      {review.photos ?
        <div className='review-pictures'>
          {review.photos.map((photo) => (
            photo.url ? <div key={photo.id}><img src={photo.url} /></div> : ''
          ))}
        </div>
        : ''}
    </div>
  )
}

export default ReviewCard;