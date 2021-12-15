import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import ProductCard from "./ProductCard";
import axios from 'axios'
const ListProduct = () => {

  const [productList, setProductList] = useState([]);
  const FeaturedPicture = ['/static/pic1.jpg', '/static/pic2.jpg', '/static/pic3.jpg', '/static/pic4.jpg', '/static/pic5.jpg']

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    axios.get('/products')
      .then((resultProductList) => {
        setProductList(resultProductList.data);
      })
      .catch(err => console.log(`Can't get product list`, err))
  }

  return (
    <div id="featureProducts">
      <Container>
        <h1 className="title">Featured Products</h1>
        <Row>
          {productList.map((product, index) => (
            <Col>
              <ProductCard
                key={product.id}
                product={product}
                pic={FeaturedPicture[index]}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ListProduct;