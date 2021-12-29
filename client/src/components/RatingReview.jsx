import React from 'react';
import { Row, Col, ProgressBar, Table } from 'react-bootstrap';


const RatingReview = () => {
  return (
    <section className='RatingReview'>
      <Row>
        <Col md={4}>
          <h4>Customer Reviewa</h4>
          <div className='average-star-rating'>3.9</div>
          <Table>
            <thead>
              <tr>
                <td>5 star</td>
                <td>
                  <ProgressBar striped now={55} />
                </td>
                <td> 55%</td>
              </tr>
            </thead>
          </Table>
        </Col>
        <Col md={8}>
          <h4 className='total-review-count'>8,033 reviewas, sortred</h4>
          <div className='review'>
            <div className='review-card'>
              <div className='review-rating'>
                <Row className='review-star-rating'>
                  <Col md={8} className='review-name'>5 stars</Col>
                  <Col md={4} >
                    <span className='review-name'>shortandsweeet</span>
                    <span className='review-date'>January 1. 2019</span>
                  </Col>
                </Row>
                <p className='review-summary'>I'm enjoying wearing these shades</p>
                <p className='review-body'>Comfortable and practical.</p>
                <div className='review-pictures'>Arrays pictures</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default RatingReview;