import React, { useState, useContext, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import { ProductsContext } from './ProductsContext';
import { avgRating } from './helper/avgRating.js';

const Card = ({ productId }) => {
  const { getReviewsMeta, reviewsMeta } = useContext(ProductsContext);

  const [relatedProduct, setRelatedProduct] = useState({
    overview: {},
    features: [],
    picture: '',
    styles: '',
  });

  useEffect(() => {
    let isApiSubscribed = true;
    const overview = axios.get(`https://fashion-van.netlify.app/products/${productId}`);
    const styles = axios.get(`https://fashion-van.netlify.app/products/${productId}/styles`);

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

  }, [productId])


  let convertedRating = avgRating(reviewsMeta) / 5 * 100;

  return (
    <div className='card text-center'>
      <div className='thumb'><img src={relatedProduct.styles && relatedProduct.styles[0].photos[0].thumbnail_url !== null ? relatedProduct.styles[0].photos[0].thumbnail_url : '/static/media/default-placeholder.png'} className="card-img-top" /></div>
      <div className="card-body">
        <div className='stars-outer'>
          <div className='stars-inner' style={{ width: `${convertedRating}%` }}></div>
        </div>
        <h5 className="card-title">{relatedProduct.overview.name}</h5>
        <p className='card-text'>${Number(relatedProduct.overview.default_price)}</p>
      </div>
    </div>
  )
}

export default Card;

