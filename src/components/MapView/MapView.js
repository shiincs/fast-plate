import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './MapView.module.scss';
import { NaverMap, Marker } from 'react-naver-maps';

const cx = classNames.bind(styles);
export default class MapView extends Component {
  render() {
    const navermaps = window.naver.maps;
    return (
      <section className={cx('mapSection')}>
        <NaverMap
          // id="maps-examples-marker"
          style={{
            width: '100%',
            height: '400px',
          }}
          defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
          defaultZoom={10}
        />
      </section>
    );
  }
}
