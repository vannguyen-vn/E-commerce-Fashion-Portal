import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

// import ProductsContext from './ProductsContext';


const ProductDetail = () => {
  const { id } = useParams();
  const { productId } = useContext(ProductsContext);

  const [product, setProduct] = useState({});
  const [styles, setStyle] = useState([]);
  const [features, setFeatures] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const getProduct = (productId) => {
    axios.get(`/products/${productId}`)
      .then((resultProduct) => {
        axios.get(`/products/${productId}/styles`)
        console.log(resultProduct)
          .then((resultStyles) => {
            console.log(resultProduct)

            axios.get(`/products/${productId}/related`)
              .then((resultRelated) => {

                setProduct(resultProduct.data);
                setFeatures(resultProduct.data.features);
                setStyle(resultStyles.data.results);
                setRelatedProduct(resultRelated.data);
                setLoading(false);
              })
          })
      })
      .catch(err => console.log(`Product ${productId} err`, err))
  }


  return (
    <div id={id} className='productDetail'>
      <div className='rb'><strong>Buy now, pay later. No Interest, ever!</strong><br></br>Introducing Afterpay! <a href=''>Learn More</a> About Afterpay</div>
      <Container>
        <Row className='descriptionSection'>
          <Col md={8}>
            <div className='galary'><img src='{photos.url}' /></div>
            <div className='description'>{product.description}</div>
          </Col>
          <Col md={4}>
            <div className='start'>
              <span><a href='#reviews'>Read all reviews</a></span>
            </div>
            <div className='cat'>{product.category}</div>
            <div className='name'>{product.name}</div>
            <div className='price'>{product.price}</div>
            <div className='styles'></div>
            <ul className='features'>
              {features.map((item, index) => (
                <li key={index}>{item.feature} : {item.value}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ProductDetail;