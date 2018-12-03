import React from 'react';
import classNames from 'classnames/bind';
import styles from './MapInfoView.module.scss';
import { Link, BrowserRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function MapInfoView(props) {
  const selectedPlace = props.selectedPlace;
  return (
    <BrowserRouter>
      <figure className={cx('infoWindow')}>
        <Link to="/asdf">
          <img
            src={selectedPlace.img}
            alt={selectedPlace.name}
            className={cx('thumb')}
          />
        </Link>
        <figcaption className={cx('info')}>
          <h3 className={cx('name')}>{selectedPlace.name}</h3>
          <span className={cx('score')}>{selectedPlace.score}</span>
          <p className={cx('etcInfo')}>
            <span className={cx('location')}>{selectedPlace.location} -</span>
            <span className={cx('type')}> {selectedPlace.type}</span>
          </p>
          <p className={cx('countInfo')}>
            <span className={cx('reviewCount')}>
              {selectedPlace.reviewCount}
            </span>
            <span className={cx('wannagoCount')}>
              {selectedPlace.wannagoCount}
            </span>
          </p>
        </figcaption>
      </figure>
    </BrowserRouter>
  );
}
