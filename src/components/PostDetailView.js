import React, { Component } from 'react';
import './PostDetailView.scss';
import ReviewList from '../containers/ReviewList';
import { Link } from 'react-router-dom';
import Map from '../containers/Map';

export default class PostDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      currentModalPic: null,
      currentModalComment: null,
    };
  }

  showModal(index) {
    const { detailpics, comments } = this.props;
    this.setState({
      show: true,
      currentModalPic: detailpics[index],
      currentModalComment: comments[index],
    });
    document.body.style.overflow = 'hidden';
  }

  hideModal() {
    this.setState({
      show: false,
    });
    document.body.style.overflow = 'scroll';
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
    const { restaurants, detailpics, handleCount } = this.props;
    return (
      <React.Fragment>
        <div className="photo-list">
          {detailpics.map((pic, index) => (
            <div key={index} className="photo-item">
              {/* 레스토랑 디테일 정보 사진들 */}
              <img
                src={pic}
                alt="detailRestaurantpics"
                onClick={() => this.showModal(index)}
              />
            </div>
          ))}
          {/* 레스토랑 사진을 클릭하면 나오는 modal*/}
          <Modal show={this.state.show} handleClose={() => this.hideModal()}>
            <div className="picCommentContainer">
              <img
                src={this.state.currentModalPic}
                alt="restuarantDetailPicsWithComments"
              />
              <div className="commentBox">
                <p>{this.state.currentModalComment}</p>
              </div>
            </div>
          </Modal>
        </div>

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
                  <button
                    className="wannago"
                    onClick={() =>
                      handleCount(restaurants.pk, restaurants.want_num)
                    }
                  >
                    <span>가고싶다</span>
                  </button>
                </div>
              </div>
              {/* <div className="status">
                <span className="hit">{restaurants.view_num}</span>
                <span className="review">{restaurants.review_num}</span>
                <span className="favorite">{restaurants.want_num}</span>
              </div> */}
            </header>
            <div>
              <dl className="detail-list">
                <dt className="addressName">주소</dt>
                <dd className="address"> {restaurants.address_detail}</dd>

                <dt className="tel-label">전화번호</dt>
                <dd className="tel-number">{restaurants.phone_num}</dd>

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
            <Map restaurants={restaurants} />
          </div>
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
