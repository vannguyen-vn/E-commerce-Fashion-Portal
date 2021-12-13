import React, { useState, useContext } from 'react'
// import Carousel from 'react-grid-carousel'
import { Container, Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { products } from '../App'

const ListProduct = () => {

  return (
    <Container>
      <h1 className="title">Featured Products</h1>
      <Row>
        {/* {products.productList.map(prdouct => {
          <ProductCard />
        })} */}
      </Row>

      {/* <Carousel cols={5} rows={1} gap={20} loop>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
      </Carousel> */}
    </Container>
  )
}

export default ListProduct;