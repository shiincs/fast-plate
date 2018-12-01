import React, { Component } from 'react';
import SearchListView from '../SearchListView/SearchListView';
import MapView from '../MapView/MapView';
import classNames from 'classnames/bind';
import styles from './SearchView.module.scss';

const cx = classNames.bind(styles);

export default class SearchView extends Component {
  render() {
    return (
      <article className={cx('searchView')}>
        <SearchListView />
        <MapView />
      </article>
    );
  }
}
