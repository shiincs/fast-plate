import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchListView.module.scss';
import SearchContext from '../contexts/SearchContext';

export default class SearchListView extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={classNames(styles.outerSection)}>
          <div className={classNames(styles.innerSection)}>
            <div className={classNames(styles.listInfo)}>
              <SearchContext.Consumer>
                {keyword => (
                  <h1 className={classNames(styles.listTitle)}>
                    {keyword} 맛집 인기 검색순위
                  </h1>
                )}
              </SearchContext.Consumer>
            </div>
            <div className={classNames(styles.listSection)}>
              <ul className={classNames(styles.listRestaurants)}>
                <li className={classNames(styles.listItem)}>1</li>
                <li className={classNames(styles.listItem)}>2</li>
                <li className={classNames(styles.listItem)}>3</li>
                <li className={classNames(styles.listItem)}>4</li>
                <li className={classNames(styles.listItem)}>5</li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
