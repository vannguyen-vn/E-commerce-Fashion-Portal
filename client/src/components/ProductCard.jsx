import React from 'react'
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductCard = ({ product, pic }) => {

  return (
    <Col>
      <h4 className="name">{product.name}</h4>
      <div className="slogan">{product.slogan}</div>
      <p className="price">{product.default_price}</p>
    </Col>
  );
}


export default ProductCard;