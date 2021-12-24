import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Carousel = ({ product }) => {
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    setActive(+e.target.dataset.index);
  }

  return (
    <Row className='overview'>
      <Col md={8}>
        <div className='galary'>
          <div className='image'><img src={product.styles ? product.styles[active].photos[active].thumbnail_url : ''}></img></div>
          <div className='description'>{product.overview.description}</div>
        </div>
      </Col>
      <Col md={4}>
        <div className='start'>
          <span><a href='#reviews'>Read all reviews</a></span>
        </div>
        <div className='cat'>{product.overview.category}</div>
        <div className='name'>{product.overview.name}</div>
        <div className='price'>${product.overview.default_price}</div>
        <div className='styles-carousel'>
          {product.styles ? product.styles.map((photos, index) =>
            <img
              key={index}
              src={photos.photos[0].thumbnail_url}
              data-index={index}
              className={index === active ? 'active' : ''}
              alt={product.overview.name}
              onClick={handleClick}
            />
          ) : ''}
        </div>
        <ul className='features'>
          {product.features ? product.features.map((item, index) => <li key={index}>{item.feature} : {item.value}</li>) : ''}
        </ul>
      </Col>
    </Row>
  )
}

export default Carousel;