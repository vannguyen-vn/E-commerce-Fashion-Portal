import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { ProductsContext } from '../components/ProductsContext';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Testimonial from '../components/Testimonial';

const ListProduct = () => {
  const { products, theme } = useContext(ProductsContext);

  return (
    <div className={theme}>
      <Header />
      <Banner />
      <div id="featureProducts">
        <Container id='productList'>
          <h1 className="title">Featured Products</h1>
          <div className='productList'>
            {products.map((product, index) => (
              <Link to={`/products/${product.id}`} key={product.id} className='productDetail'>
                <Col>
                  <h4 className="name">{product.name}</h4>
                  <div className="slogan">{product.slogan}</div>
                  <p className="price">{Number(product.default_price)}</p>
                </Col>
              </Link>
            ))}
          </div>
        </Container>
      </div>
      <Testimonial />
    </div>

  )
}

export default ListProduct;