import React, { useState, useContext, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';


import Card from './Card';
import { ProductsContext } from './ProductsContext'
import axios from 'axios';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const RelatedProducts = ({ productId }) => {

  const { getRelated, related } = useContext(ProductsContext);
  const [relatedPro, setRelatedPro] = useState({})

  useEffect(() => {
    getRelated(productId);
  }, [productId])

  return (
    <section className='related'>
      <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
        {related.map((productId) => (
          <Link to={`/products/${productId}`} key={productId} className='productDetail'>
            <Card
              productId={productId}
              key={productId}
            />
          </Link>
        ))}
      </Carousel>
    </section>
  )
}

export default RelatedProducts;