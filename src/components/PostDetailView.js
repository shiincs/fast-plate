import React, { Component } from 'react';
import './PostDetailView.scss';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import ReviewList from '../containers/ReviewList';
import { Link } from 'react-router-dom';
import MapView from './MapView/MapView';

// import MapView from './MapView/MapView';
export default class PostDetailView extends Component {
  static defaultProps = {
    // 서버로부터 받아온 레스토랑 목록 데이터
    restaurants: [
      {
        // name:
        // address_detail:
        // phone_num:
        // food_type:
        // price_level:
        // parking:
        // Business_hour:
      },
    ],
  };
  render() {
    const { restaurants } = this.props;

    return (
      <React.Fragment>
        <div className="photo-list">이미지 캐러셀 들어갈 자리</div>
        <div className="detail-inner">
          <div className="restaurant-detail">
            <header>
              <div className="titleWrap">
                <h1 className="title">{restaurants.name}</h1>
                <span className="rate" />
                <div className="restaurants_action_button_wrap">
                  <Link to="/newrestaurant">
                    <button className="review_writing_button">리뷰쓰기</button>
                  </Link>
                  <button class="wannago">
                    <span>가고싶다</span>
                  </button>
                </div>
              </div>
              <div className="status">
                <span className="hit">{restaurants.view_num}</span>
                <span className="review">{restaurants.review_num}</span>
                <span className="favorite">{restaurants.want_num}</span>
              </div>
            </header>
            <div>
              <dl className="detail-list">
                <dt>주소</dt>
                <dd> {restaurants.address_detail}</dd>
                <dt>전화번호</dt>
                <dd>{restaurants.phone_num}</dd>
                <dt>음식 종류</dt>
                <dd>{restaurants.food_type}</dd>
                <dt>가격대</dt>
                <dd>{restaurants.price_level}</dd>
                <dt>주차</dt>
                <dd>{restaurants.parking}</dd>
                <dt>영업시간</dt>
                <dd>{restaurants.Business_hour}</dd>
              </dl>
            </div>
            <ReviewList />
          </div>
          <div className="map">
            <MapView />
            {/* <Map google={this.props.google} zoom={14} /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
