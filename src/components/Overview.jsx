import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, DropdownButton, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import Cart from './Cart';
import PropTypes from 'prop-types';

const Overview = ({ product, convertedRating, productId }) => {

  const [active, setActive] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Select size');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [textBtnCart, setTextBtnCard] = useState('Add to cart');
  const [itemInCart, setItemInCard] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => { setItemInCard }, [itemInCart])

  const handleClick = (e) => {
    setActive(+e.target.dataset.index);
  }

  const handleClickSize = (e) => {
    e.preventDefault();
    setSelectedSize(e.target.innerHTML);
  }

  const handleAddToCart = (e) => {

    e.preventDefault();
    e.stopPropagation();

    setTextBtnCard('Item in a cart');
    let item = {
      productId: productId,
      quantity: selectedQuantity,
      size: selectedSize,
      thumb: product.styles ? product.styles[0].photos[0].thumbnail_url : '',
      name: product.overview.name,
      price: product.overview.default_price,
    };
    const found = itemInCart.find((item) => item.productId === productId);
    found === undefined ? itemInCart.push(item) : alert("Item added!");
    handleShow();
  }


  const sale = { textDecoration: product.styles && product.styles[active].sale_price ? product.styles && product.styles[active].sale_price !== null ? 'line-through' : 'none' : '' };

  return (
    <section className='overview'>
      <Row>
        <Col md={8}>
          <div className='gallery'>
            <Carousel className='gallery_selected_style' autoPlay axis='horizontal' infiniteLoop showStatus={false}>
              {product.styles ? product.styles[active].photos.map((photos, index) =>
                <div
                  key={index}
                  className={index === active ? 'gallery_selected_style_item active' : 'gallery_selected_style_item'}
                >
                  <img src={photos.url} />
                </div>
              ) : ''}
            </Carousel>
          </div>
        </Col>
        <Col md={4}>
          <div className='info padT0'>
            <div className='info_star'>
              <div className='stars-outer'>
                <div className='stars-inner' style={{ width: `${convertedRating}%` }}></div>
              </div>
            </div>
            <div className='info_cat'>{product.overview.category}</div>
            <h2 className='info_name'>{product.overview.name}</h2>
            <p className='info_price'>
              <span style={sale} className={product.styles && product.styles[active].sale_price !== null ? 'red' : ''}
              > ${
                  product.styles ? Number(product.styles[active].original_price) : ''}</span>
              <span className='salePrice'>
                {product.styles && product.styles[active].sale_price !== null ? ' $' + Number(product.styles[active].sale_price) : ''}
              </span>
            </p>

            <p className='info_selected_style'>
              <strong>Style > </strong>
              <span>{product.styles ? product.styles[active].name : ''}</span>
            </p>
            <ul className='styles_gallery'>
              {product.styles ? product.styles.map((photos, index) =>
                <li
                  key={index}
                  className={index === active ? 'styles_gallery_item active' : 'styles_gallery_item'}
                  alt={product.overview.name}
                >
                  <img
                    src={photos.photos[0].thumbnail_url}
                    className='styles_gallery_img'
                    onClick={handleClick}
                    data-index={index}
                  />
                </li>
              ) : ''}
            </ul>
            <div className="selectecSize">
              <DropdownButton
                variant="outline-secondary"
                title={selectedSize}
                id="selectSize"
              >
                <Dropdown.Item eventKey="1" onClick={handleClickSize}>S</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={handleClickSize}>M</Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={handleClickSize}>L</Dropdown.Item>
              </DropdownButton>

              <DropdownButton id="quantity" title={selectedQuantity} variant="outline-secondary">
                {[...Array(5)].map((x, i) => <Dropdown.Item
                  as="button"
                  key={i + 1}
                  onClick={(e) => setSelectedQuantity(e.target.innerHTML)} >{i + 1}
                </Dropdown.Item>)}
              </DropdownButton>
            </div>
            <Button variant="outline-secondary" onClick={handleAddToCart} id="addToCart">{textBtnCart}</Button>
            <Cart show={show} handleClose={handleClose} itemInCart={itemInCart} />
          </div>
        </Col>
      </Row>
      <Row className='info'>
        <Col md={8} className='info_overview'>
          <p className='info_slogan'>{product.overview.slogan}</p>
          <p className='info_description'>{product.overview.description}</p>
        </Col>
        <Col md={4}>
          <ul className='info_features'>
            {product.features ? product.features.map((item, index) => <li key={index}>{item.feature} : {item.value}</li>) : ''}
          </ul>
        </Col>
      </Row>

    </section>
  )
}

Overview.propTypes = {
  active: PropTypes.number,
  selectedSize: PropTypes.string,
  selectedQuantity: PropTypes.number,
  textBtnCart: PropTypes.string,
  itemInCart: PropTypes.array,
  show: PropTypes.bool
}

export default Overview;
