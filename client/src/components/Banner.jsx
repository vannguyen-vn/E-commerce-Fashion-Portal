import React from 'react'
import { Carousel } from 'react-bootstrap'

const Banner = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/static/Main-Banner-2-1903x700.jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/static/Main-Banner-1903x700.jpg'
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
export default Banner;