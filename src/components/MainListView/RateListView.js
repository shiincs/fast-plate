import React, { Component } from 'react';
import styles from './RateListView.module.scss';
import classNames from 'classnames/bind';
import defaultimg from '../../commonimgs/defaultListItem.jpg';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

export default class RateListView extends Component {
  render() {
    const { restaurantList } = this.props;
    // console.log(restaurantList.map(r => r.length));
    // if (Object.keys(restaurantList).length > 0) {
    //   const r = restaurantList;
    //   console.log(r);
    //   const a = r.map(item => item.post_set.length > 0);
    //   console.log(a);
    // }

    // if (restaurantList.length > 1) {
    //   const r = restaurantList.map(item => item.post_set);
    //   console.log(r);
    //   const a = r.map(item => item.map(item => item.postimage_posts));
    //   console.log(a);
    //   const p = a.map(item => item.map(item => item.map(item => item.image)));
    //   console.log(p);
    // }
    return (
      <div className={cx('restaurants-list-wrap')}>
        <h2 className={cx('list-title')}>평점이 높은 인기 식당</h2>
        <ul className={cx('restaurants-list')}>
          {restaurantList.map(r => {
            let imageSrc;
            if (r.post_set[0] && r.post_set[0].postimage_posts[0]) {
              imageSrc = r.post_set[0].postimage_posts[0].image;
            } else {
              imageSrc = defaultimg;
            }
            return (
              <li className={cx('restaurants-item')}>
                <Link to={`/restaurant/${r.pk}`}>
                  <figure className={cx('restaurant_inner_wrap')}>
                    <div className={cx('thumb')}>
                      <img className={cx('image')} src={imageSrc} />
                    </div>
                    <figcaption>
                      <h3 className={cx('item-title')}>{r.name}</h3>
                      <span className={cx('point')}>{r.rate_average}</span>
                      <p className={cx('etc')}>{r.food_type}</p>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
