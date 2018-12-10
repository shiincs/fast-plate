import React from 'react';
import classNames from 'classnames/bind';
import styles from './RecentGoView.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function RecentGoView(props) {
  const { item, wannago, handleWannagoBtn, hideTargetElement } = props;
  return (
    <li key={item.pk} className={cx('RecentGo')}>
      <figure className={cx('RecentGoItem')}>
        <Link
          to={`/restaurant/${item.pk}`}
          onClick={() => {
            hideTargetElement('modalOpen');
          }}
        >
          <img
            // src={item.menuimage_res[0]}
            src="https://mp-seoul-image-production-s3.mangoplate.com/882510_1516984909816099.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
            alt={item.name}
            className={cx('thumb')}
          />
        </Link>
        <figcaption className={cx('info')}>
          <Link
            to={`/restaurant/${item.pk}`}
            onClick={() => {
              hideTargetElement('modalOpen');
            }}
          >
            <h3 className={cx('name')}>{item.name}</h3>
          </Link>
          <span className={cx('score')}>{item.rate_average}</span>
          <p className={cx('etcInfo')}>
            <span className={cx('location')}>{item.address} -</span>
            <span className={cx('type')}> {item.food_type}</span>
          </p>
        </figcaption>
        <div
          className={cx('wannagoBtn', { active: wannago })}
          onClick={handleWannagoBtn}
        >
          가고싶다
        </div>
      </figure>
    </li>
  );
}
