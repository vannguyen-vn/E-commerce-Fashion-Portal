import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

const Overview = ({ product }) => {
  const [active, setActive] = useState(0);
  const [currentStyle, setCurrentStyle] = useState()

  const handleClick = (e) => {
    setActive(+e.target.dataset.index);
  }

  return (
    <section className='overview'>
      {console.log(product.styles)}
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
              <a href='#reviews'>Read all reviews</a>
            </div>
            <div className='info_cat'>{product.overview.category}</div>
            <h2 className='info_name'>{product.overview.name}</h2>
            <div className='info_price'>
              ${product.styles ? product.styles[active].original_price : product.overview.default_price}
            </div>
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

export default Overview;