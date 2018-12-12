import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import classNames from 'classnames/bind';
// import styles from './CarouselView.module.scss';
import './CarouselView.scss';

// const cx = classNames.bind(styles);
export default function CarouselView() {
  return (
    <Carousel
      className="carouselWindow"
      showStatus={false}
      showIndicators={false}
    >
      <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
      </div>
      <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      </div>
      <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      </div>
      <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      </div>
      <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
      </div>
      <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
      </div>
      <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
      </div>
      {/* <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
      </div>
      <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
      </div>
      <div className="imgWrapper">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      </div> */}
    </Carousel>
  );
}
