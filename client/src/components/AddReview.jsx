import React, { useState, useEffect } from 'react';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductsContext } from './ProductsContext';

import axios from 'axios';

const AddReview = (props) => {
  const [hover, setHover] = useState(0);
  const [validated, setValidated] = useState(false);
  const [reviewer_name, setReviewer_name] = useState('');
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const aNewReview = {
      "product_id": Number(props.productid),
      "rating": rating,
      "summary": "test",
      "body": body,
      "recommend": (recommend === 'on' ? true : false),
      "name": reviewer_name,
      "email": "t@xxx.com",
      "photos": [],
      "characteristics": {}
    }

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    axios.post('/reviews', aNewReview)
      .then(response => console.log(response.data))
      .catch(error => console.log('error', error));

    if (validated) props.onHide();
  };


  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Write Your Reiew
        </Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <h4>About {props.name}</h4>
          <Form.Group className="mb-3" controlId="reviewer_name" >
            <Form.Label>What is your nickname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Example: jackson11!"
              required
              onChange={(e) => setReviewer_name(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rating" >
            <Form.Label>Your rating</Form.Label>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;

                return (
                  <button
                    id={index}
                    key={index}
                    type='button'
                    className={index <= rating ? 'on' : 'off'}
                    onClick={(e) => {
                      e.preventDefault()
                      setRating(index)
                    }}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <FontAwesomeIcon className="star" icon={faStar} />
                  </button>
                )
              })}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="body">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Why did you like the product or not?"
              required
              onChange={(e) => setBody(e.target.value)}
            // value={newReivew.body}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="recommend">
            <Form.Check
              type="checkbox"
              label="Do you recommend this product?"
              // value={newReivew.recommend}
              onChange={(e) => setRecommend(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
          <Button variant="outline-secondary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddReview;