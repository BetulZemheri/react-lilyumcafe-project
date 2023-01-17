import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div style={{marginTop:"20px"}}>
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../assets/img/slide1.jpg"
          alt="First slide"
          style={{height:"610px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../assets/img/slide2.jpg"
          alt="Second slide"
          style={{height:"610px"}}
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../assets/img/slide3.jpg"
          alt="Third slide"
          style={{height:"610px"}}
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider