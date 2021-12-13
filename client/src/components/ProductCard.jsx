import React from 'react'
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductCard = () => {
  return (
    <Card>
      <Card.Img className="" variant="top" src='https://opencart.templatemela.com/OPC10/OPC100246/image/cache/catalog/2-222x315.jpg' />
      <Card.Body>
        <div className="rating">Star</div>
        <h4 className="name"><a>Tellus Eu Varius </a></h4>
        <p className="price">
          <span className="price-old">$241.99</span><span className="price-new">$182.00</span>
        </p>
      </Card.Body>
    </Card>
  );
}


export default ProductCard;