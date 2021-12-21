import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import ProductCard from "./ProductCard";

const ListProduct = ({ productList }) => {

  // const [productList, setProductList] = useState([]);
  // const FeaturedPicture = ['/static/pic1.jpg', '/static/pic2.jpg', '/static/pic3.jpg', '/static/pic4.jpg', '/static/pic5.jpg']

  // const getProductList = () => {
  //   axios.get('/products')
  //     .then((resultProductList) => {
  //       setProductList(resultProductList.data);
  //     })
  //     .catch(err => console.log(`Can't get product list`, err))
  // }

  return (
    <div id="featureProducts">
      <Container>
        <h1 className="title">Featured Products</h1>
        <Row>

          {productList.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            // pic={FeaturedPicture[index]}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ListProduct;