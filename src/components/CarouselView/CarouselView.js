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
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
        <p className="legend">Legend 7</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
        <p className="legend">Legend 8</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
        <p className="legend">Legend 9</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
        <p className="legend">Legend 10</p>
      </div>
    </Carousel>
  );
}
