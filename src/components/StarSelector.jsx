import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'

const StarSelector = ({ handleChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;

        return (
          <button
            id={index}
            key={index}
            name="rating"
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            value={newReivew.index}
            onChange={handleChange}
          >
            <FontAwesomeIcon className="star" icon={faStar} />
          </button>
        )
      })}
    </div>
  )
}

StarSelector.propTypes = {
  rating: PropTypes.number,
  hover: PropTypes.number
}

export default StarSelector;
