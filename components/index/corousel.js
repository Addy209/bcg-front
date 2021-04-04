import { Carousel, Radio } from 'antd';
import React from 'react'

const contentStyle = {
  height: '80vh',
    background: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7))',
    width:'97%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    objectFit:'cover'
};

const CarouselView = () => {

  return (
    <>
    <div id="carousel">
      <Carousel dotPosition={"right"} autoplay effect='fade'>
        <div id="carousel1">
           <img style={contentStyle} src='/1.jpg' alt="me"/>
          <h2 style={contentStyle}>Asia’s leading Insurance Company</h2>
        </div >
        <div id="carousel3">
          <img style={contentStyle} src='/3.jpg' alt="me"/>
          <h2 style={contentStyle}>Offering a Range of Insurance Solutions
          that meet Various Life Stage Needs</h2>
        </div>
        <div id="carousel2">
          <img style={contentStyle} src='/2.jpg' alt="me"/>
          <h2 style={contentStyle}>Because Getting Insurance is your Responsibility to your Family and Loved Ones</h2>
        </div>
        
      </Carousel>
      </div>
    </>
  );
};

export default CarouselView