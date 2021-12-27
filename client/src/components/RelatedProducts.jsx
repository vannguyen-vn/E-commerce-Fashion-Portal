import React, { useState, useContext, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
import { ProductsContext } from './ProductsContext'
import axios from 'axios';

const RelatedProducts = ({ productId }) => {

  const { getRelated, related } = useContext(ProductsContext);
  const [relatedPro, setRelatedPro] = useState({})

  useEffect(() => {
    getRelated(productId);
  }, [productId])

  return (
    <section className='related'>
      {related.map((productId) => (
        <Card
          productId={productId}
          key={productId}
        />
      ))}
    </section>
  )
}

export default RelatedProducts;