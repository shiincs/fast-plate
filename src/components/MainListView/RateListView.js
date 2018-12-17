import React, { Component } from 'react';
import styles from './RateListView.module.scss';
import classNames from 'classnames/bind';
// import derfaultimg from '../commonimgs/defaultimg';
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

    if (restaurantList.length > 1) {
      const r = restaurantList.map(item => item.post_set);
      console.log(r);
      const a = r.map(item => item.map(item => item.postimage_posts));
      console.log(a);
      const p = a.map(item => item.map(item => item.map(item => item.image)));
      console.log(p);
    }
    return (
      <div className={cx('restaurants-list-wrap')}>
        <h2 className={cx('list-title')}>평점이 높은 인기 식당</h2>
        <ul className={cx('restaurants-list')}>
          {restaurantList.map(r => {
            // let imageSrc;
            // if (r.post_set.length > 1 ) {
            //   imageSrc = 'asdf';
            // } else {
            //   imageSrc = 'fdas';
            // }
            return (
              <li className={cx('restaurants-item')}>
                <figure className={cx('restaurant_inner_wrap')}>
                  <div className={cx('thumb')}>
                    <img
                      className={cx('image')}
                      src={r.post_set
                        .find(item => item.postimages_post.length > 0)
                        .map(item => {
                          if (item) {
                            return item.postimage_posts[0].image;
                          } else {
                            return null;
                          }
                        })}
                    />
                  </div>
                  <figcaption>
                    <h3 className={cx('item-title')}>{r.name}</h3>
                    <span className={cx('point')}>{r.rate_average}</span>
                    <p className={cx('etc')}>{r.food_type}</p>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
