import React from 'react'
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductCard = ({ product, pic }) => {

  return (
    <Card>
      <div className='thumb'>
        <img src={pic} />
      </div>
      <Card.Body>
        <h4 className="name">{product.name}</h4>
        <div className="slogan">{product.slogan}</div>
        <p className="price">{product.default_price}</p>
      </Card.Body>
    </Card>
  );
}


export default ProductCard;