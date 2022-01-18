import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner1 from '../images/Main-Banner-2-1903x700.jpg';
import banner2 from '../images/Main-Banner-1903x700.jpg';

const Banner = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  )
}
export default Banner;