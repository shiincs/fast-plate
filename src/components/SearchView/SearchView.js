import React, { Component } from 'react';
import SearchListView from '../SearchListView/SearchListView';
import classNames from 'classnames/bind';
import styles from './SearchView.module.scss';
import GoogleMap from '../../containers/GoogleMap';

const cx = classNames.bind(styles);

export default class SearchView extends Component {
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
    const { restaurants, ...rest } = this.props;
    // DB의 속성 이름을 내가 원하는 이름으로 바꾸기 위해 map을 돌려서 새로운 객체 속성에 값을 대입해준다.
    const restaurantList = restaurants.map(r => ({
      id: r.pk,
      imgUrl:
        'https://mp-seoul-image-production-s3.mangoplate.com/882510_1516984909816099.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80',
      name: r.name,
      score: 4.7,
      location: r.address,
      foodType: r.food_type,
      viewCount: r.view_num,
      reviewCount: r.review_num,
      wannagoCount: r.want_num,
      latitude: r.latitude,
      longitude: r.longitude,
    }));
    return (
      <article className={cx('searchView')}>
        {/* 검색 결과 목록 출력 컴포넌트 */}
        <SearchListView restaurants={restaurantList} {...rest} />
        {/* 지도 출력 컴포넌트 */}
        {/* <div>여기 지도 default</div> */}
        <GoogleMap restaurants={restaurantList} />
      </article>
    );
  }
}
