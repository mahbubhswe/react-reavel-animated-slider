import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Fade, { Rotate, Roll } from 'react-reveal';

import img from '../img/slide.png';
import img1 from '../img/slide1.png';
export default function Slider() {
  return (
    <>
      <div className="carousel-container">
        <Carousel>
          <div className="slider-container">
            <div className="left-side">
              <Rotate top left>
                <img src={img} alt="Logo"></img>
              </Rotate>
            </div>
            <div className="right-side">
              <Fade right>
                <h3 className="text-center">Are you Ready?</h3>
                <p>We provide only heigh quality product.</p>
              </Fade>
              <Fade left>
                {' '}
                <button className="btn">
                  <a href="#product-category">Start Shopping Now</a>
                </button>
              </Fade>
            </div>
          </div>

          <div className="slider-container">
            <div className="left-side">
              <Roll left>
                <img src={img1} alt="Logo"></img>
              </Roll>
            </div>
            <div className="right-side">
              <Fade right>
                <h3 className="text-center">Are you Ready?</h3>
                <p>We provide only heigh quality product.</p>
              </Fade>
              <Fade left>
                {' '}
                <button className="btn">Start Shopping Now</button>
              </Fade>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
