import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

const RelatedProducts = ({ product }) => {

  return (
    <section className='related'>
      {console.log(product.related)}
      {/* <Carousel> */}
      {product.related ? product.related.map((item) => (
        <div className='related_item' key={item}>
          <div className='realated_thumb'><img src='' /></div>
          <div className='realated_cat'>
            {product.overview.category}
          </div>
          <h3 className='realated_name'>
            {/* {product.overview.name} */}
          </h3>
          <div className='realated_price'>
            {/* ${product.styles ? product.styles[active].original_price : product.overview.default_price} */}
          </div>
        </div>
      )) : ''}

      {/* </Carousel> */}
    </section>
  )
}

export default RelatedProducts;