import React, { Component } from 'react';
import SearchListView from '../SearchListView/SearchListView';
import MapView from '../MapView/MapView';
import classNames from 'classnames/bind';
import styles from './SearchView.module.scss';

const cx = classNames.bind(styles);

export default class SearchView extends Component {
  static defaultProps = {
    // 서버로부터 받아온 레스토랑 목록 데이터
    products: [
      {
        // imgUrl: '',
        // name: '',
        // score: 0,
        // address: '',
        // foodTyle: '',
        // viewNum: 0,
        // reviewNum: 0,
      },
    ],
  };
  render() {
    return (
      <article className={cx('searchView')}>
        <SearchListView />
        <MapView />
      </article>
    );
  }
}
