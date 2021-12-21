import React from 'react'
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductCard = ({ product, pic }) => {

  return (
    <Col>
      <Card>
        <div className='thumb'>
          {console.log(product)}

          {console.log(Array.isArray(product))}
          {/* <img src={pic} /> */}
        </div>
        <Card.Body>
          <h4 className="name">{product}</h4>
          {/* <div className="slogan">{product.slogan}</div>
          <p className="price">{product.default_price}</p> */}
        </Card.Body>
      </Card>
    </Col>
  );
}


export default ProductCard;