import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchListView.module.scss';
import SearchContext from '../../contexts/SearchContext';
import { Link } from 'react-router-dom';
import withLoading from '../../hoc/withLoading';

const cx = classNames.bind(styles);

class SearchListView extends Component {
  static defaultProps = {
    // 서버로부터 받아온 레스토랑 목록 데이터
    restaurants: [
      {
        // id:
        // imgUrl:
        // name:
        // score:
        // location:
        // foodType:
        // viewCount:
        // reviewCount:
        // wannagoCount:
        // latitude:
        // longitude:
      },
    ],
  };

  render() {
    const { restaurants, count } = this.props;
    return (
      <React.Fragment>
        <section className={cx('outerSection')}>
          <SearchContext.Consumer>
            {keyword => (
              <div className={cx('innerSection')}>
                <div className={cx('listInfo')}>
                  <React.Fragment>
                    <h1 className={cx('listTitle')}>
                      {keyword} 맛집 인기 검색순위
                    </h1>
                    <button className={cx('listFilter')}>필터</button>
                  </React.Fragment>
                </div>

                <div className={cx('listSection')}>
                  <ul className={cx('listRestaurants')}>
                    {restaurants.map(r => (
                      <li key={r.id} className={cx('listItem')}>
                        <figure>
                          <Link to={`/restaurant/${r.id}`}>
                            <img
                              className={cx('thumb')}
                              src={r.imgUrl}
                              alt={r.name}
                            />
                          </Link>
                          <figcaption className={cx('info')}>
                            <Link to={`/restaurant/${r.id}`}>
                              <h2 className={cx('name')}>{r.name}</h2>
                            </Link>
                            <span className={cx('score')}>{r.score}</span>
                            <p className={cx('etcInfo')}>
                              <span className={cx('location')}>
                                {r.location} -
                              </span>
                              <span className={cx('type')}> {r.foodType}</span>
                            </p>
                            <p className={cx('countInfo')}>
                              <span className={cx('viewCount')}>
                                {r.viewCount}
                              </span>
                              <span className={cx('reviewCount')}>
                                {r.reviewCount}
                              </span>
                            </p>
                          </figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={cx('pagination')}>
                  {[...Array(count / 5)].map((item, index) => {
                    return (
                      <Link
                        key={index + 1}
                        to={`/search?keyword=${keyword}&page=${index + 1}`}
                        className={cx('btnPaginate')}
                      >
                        {index + 1}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </SearchContext.Consumer>
        </section>
      </React.Fragment>
    );
  }
}

export default withLoading(SearchListView);
