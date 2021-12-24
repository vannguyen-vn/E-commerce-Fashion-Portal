import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const ImageGallary = ({ product, active }) => {
  return (
    <Carousel className='gallery_selected_style' show={6}>
      {product.styles ? product.styles[active].photos.map((photos, index) =>
        <div>
          key={index}
          className={index === active ? 'gallery_selected_style_item active' : 'gallery_selected_style_item'}
      >
          <img src={photos.thumbnail_url} />
        </div>
      ) : ''}
    </Carousel>
  )
}

export default ImageGallary;