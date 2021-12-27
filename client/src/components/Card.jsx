import React, { useState, useContext, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const Card = ({ productId }) => {
  const [relatedProduct, setRelatedProduct] = useState({
    overview: {},
    features: [],
    picture: '',
    styles: '',
  });

  useEffect(() => {
    let isApiSubscribed = true;
    const overview = axios.get(`/products/${productId}`);
    const styles = axios.get(`/products/${productId}/styles`);

    Promise.all([overview, styles])
      .then(values => {
        if (isApiSubscribed) {

          setRelatedProduct({
            overview: values[0].data,
            styles: values[1].data.results,
            features: values[0].data.features,
          })
        }
      })
      .catch((error) => {
        console.log('Error fetching related product', error);
      });

    return () => {
      isApiSubscribed = false;
    }
  }, [])

  return (
    <div className='card'>
      <div className='card_thumb'>
        <img src={relatedProduct.styles ? relatedProduct.styles[0].photos[0].thumbnail_url : '/static/default-placeholder.png'} />
      </div>
      <div className='card_cat'>{relatedProduct.overview.category}</div>
      <h2 className='card_name'>{relatedProduct.overview.name}</h2>
      <p className='card_price'><span>{relatedProduct.overview.default_price}</span></p>
    </div>
  )
}

export default Card;

