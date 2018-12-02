import React, { Component } from 'react';
import SearchListView from '../SearchListView/SearchListView';
import MapView from '../MapView/MapView';
import classNames from 'classnames/bind';
import styles from './SearchView.module.scss';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
const cx = classNames.bind(styles);

export default class SearchView extends Component {
  render() {
    return (
      <article className={cx('searchView')}>
        <SearchListView />
        <RenderAfterNavermapsLoaded
          clientId={process.env.REACT_APP_MAP_CLIENT_ID} // required
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          {/* <p>Navermaps Loaded!</p> */}
          <MapView />
        </RenderAfterNavermapsLoaded>
      </article>
    );
  }
}
