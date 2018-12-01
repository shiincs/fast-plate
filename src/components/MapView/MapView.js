import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './MapView.module.scss';

const cx = classNames.bind(styles);
export default class MapView extends Component {
  render() {
    return (
      <section className={cx('mapSection')}>
        <h1>지도</h1>
      </section>
    );
  }
}
