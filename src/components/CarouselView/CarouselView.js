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
        <img
          src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
          alt="1"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laboriosam minus perferendis, neque aperiam magnam veniam vel
          dignissimos quos, eos quaerat corporis at,{' '}
        </p>
      </div>
      <div className="imgWrapper">
        <img
          src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg"
          alt="2"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laboriosam minus perferendis, neque aperiam magnam veniam vel
          dignissimos quos, eos quaerat corporis at,{' '}
        </p>
      </div>
      <div className="imgWrapper">
        <img
          src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg"
          alt="3"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laboriosam minus perferendis, neque aperiam magnam veniam vel
          dignissimos quos, eos quaerat corporis at,{' '}
        </p>
      </div>
      <div className="imgWrapper">
        <img
          src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"
          alt="4"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laboriosam minus perferendis, neque aperiam magnam veniam vel
          dignissimos quos, eos quaerat corporis at,{' '}
        </p>
      </div>
      <div className="imgWrapper">
        <img
          src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg"
          alt="5"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laboriosam minus perferendis, neque aperiam magnam veniam vel
          dignissimos quos, eos quaerat corporis at,{' '}
        </p>
      </div>
      <div className="imgWrapper">
        <img
          src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg"
          alt="6"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laboriosam minus perferendis, neque aperiam magnam veniam vel
          dignissimos quos, eos quaerat corporis at,{' '}
        </p>
      </div>
      <div className="imgWrapper">
        <img
          src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg"
          alt="7"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laboriosam minus perferendis, neque aperiam magnam veniam vel
          dignissimos quos, eos quaerat corporis at,{' '}
        </p>
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
