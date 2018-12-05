import React, { Component } from 'react';
import './PostDetailView.scss';
// import MapView from '../MapView/MapView';
import ReviewList from '../containers/ReviewList';

export default class PostDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showModal() {
    this.setState({
      show: true,
    });
  }

  hideModal() {
    this.setState({
      show: false,
    });
  }

  static defaultProps = {
    // 서버로부터 받아온 레스토랑 목록 데이터
    // PostDetail에서 받아온 레스토랑 더미 사진 목록
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
    detailpics: [
      // food1, food2, food3, food4
    ],
  };

  render() {
    const { restaurants, detailpics } = this.props;
    return (
      <React.Fragment>
        <div className="photo-list">
          {detailpics.map((pic, index) => (
            <img key={index} src={pic} alt="detailRestaurantpics" />
          ))}
          <Modal show={this.state.show} handleClose={() => this.hideModal()}>
            {detailpics.map((pic, index) => (
              <img key={index} src={pic} alt="detailRestaurantpics" />
            ))}
          </Modal>
          <button onClick={() => this.showModal()}>사진 더보기</button>
        </div>

        <div className="detail-inner">
          <div className="restaurant-detail">
            <header>
              <div className="titleWrap">
                <h1 className="title">{restaurants.name}</h1>
                <span className="rate" />
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
          <div className="map">지도</div>
        </div>
      </React.Fragment>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>CLOSE</button>
      </section>
    </div>
  );
};
