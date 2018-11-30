import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchListView.module.scss';
import SearchContext from '../../contexts/SearchContext';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default class SearchListView extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={cx('outerSection')}>
          <div className={cx('innerSection')}>
            <div className={cx('listInfo')}>
              <SearchContext.Consumer>
                {keyword => (
                  <h1 className={cx('listTitle')}>
                    {keyword} 맛집 인기 검색순위
                  </h1>
                )}
              </SearchContext.Consumer>
            </div>
            <div className={cx('listSection')}>
              <ul className={cx('listRestaurants')}>
                <li className={cx('listItem')}>
                  <figure>
                    <Link to="/restaurant/1">
                      <img
                        className={cx('thumb')}
                        src="https://mp-seoul-image-production-s3.mangoplate.com/882510_1516984909816099.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                      />
                    </Link>
                    <figcaption className={cx('info')}>
                      <Link to="/restaurant/1">
                        <h2 className={cx('name')}>팩피</h2>
                      </Link>
                      <span className={cx('score')}>4.7</span>
                      <p className={cx('etcInfo')}>
                        <span className={cx('location')}>왕십리/성동 -</span>
                        <span className={cx('type')}> 기타 양식</span>
                      </p>
                      <p className={cx('countInfo')}>
                        <span className={cx('viewCount')}>22751</span>
                        <span className={cx('reviewCount')}>26</span>
                      </p>
                    </figcaption>
                  </figure>
                </li>
                <li className={cx('listItem')}>
                  <figure>
                    <Link to="/restaurant/1">
                      <img
                        className={cx('thumb')}
                        src="https://mp-seoul-image-production-s3.mangoplate.com/882510_1516984909816099.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                      />
                    </Link>
                    <figcaption className={cx('info')}>
                      <Link to="/restaurant/1">
                        <h2 className={cx('name')}>팩피</h2>
                      </Link>
                      <span className={cx('score')}>4.7</span>
                      <p className={cx('etcInfo')}>
                        <span className={cx('location')}>왕십리/성동 -</span>
                        <span className={cx('type')}> 기타 양식</span>
                      </p>
                      <p className={cx('countInfo')}>
                        <span className={cx('viewCount')}>22751</span>
                        <span className={cx('reviewCount')}>26</span>
                      </p>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
