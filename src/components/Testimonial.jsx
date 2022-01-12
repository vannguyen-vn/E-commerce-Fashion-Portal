import React from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
  const testimonial = [
    {
      content:
        'Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.',
      author: 'Sarah M., Director of Events',
      url: 'https://opencart.templatemela.com/OPC10/OPC100246/image/catalog/user1.jpg'

    },
    {
      content:
        'I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.',
      author: 'Sarah M., CCHS Foundation',
      url: 'https://opencart.templatemela.com/OPC10/OPC100246/image/catalog/user1.jpg'

    },
    {
      content:
        "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
      author: 'Alexander B., Pan-Mass Challenge',
      url: 'https://opencart.templatemela.com/OPC10/OPC100246/image/catalog/user1.jpg'

    },
    {
      content:
        'MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.',
      author: 'Amy C., One Less Orphan Fund',
      url: 'https://opencart.templatemela.com/OPC10/OPC100246/image/catalog/user1.jpg'
    },
  ]

  return (
    <Carousel interval={1000} className='testimonial'>
      {testimonial.map((c, index) => {
        return (
          <Carousel.Item interval={5000} key={index}>
            <div className='testimonial_inner'>
              <div className='picture'><img src={c.url} /></div>
              <p className='text'>{c.content}</p>
              <p className='author'>{c.author}</p>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  )
}

export default Testimonial;