import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './WritingReviewView.module.scss';
const cx = classNames.bind(styles);

// 컴포넌트 나누기 (page, container, presentational)
// 코드의 양 줄이기

const imagePath = {
  goodOff:
    'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_recommend_face.svg',
  goodOn:
    'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_recommend_active_face.svg',
  okOff:
    'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_ok_face.svg',
  okOn:
    'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_ok_active_face.svg',
  notGoodOff:
    'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_not_recommend_face.svg',
  notGoodOn:
    'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_not_recommend_active_face.svg',
};

export default class WritingReviewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodOpen: false,
      okOpen: false,
      notGoodOpen: false,
    };
  }

  toggleGoodOpen() {
    const { reviewScore } = this.props;
    this.setState(prevState => ({
      goodOpen: !prevState.goodOpen,
      okOpen: false,
      notGoodOpen: false,
    }));
    document.querySelector('.pickColor1').style.color = '#ff792a';
    document.querySelector('.pickColor2').style.color = '#181818';
    document.querySelector('.pickColor3').style.color = '#181818';
    if (this.state.goodOpen) {
      console.log(reviewScore);
      document.querySelector('.pickColor1').style.color = '#181818';
    } else {
      this.setState({
        reviewScore: reviewScore + 5,
      });
      console.log(this.state.reviewScore);
    }
  }

  toggleOkOpen() {
    const { reviewScore } = this.props;
    this.setState(prevState => ({
      okOpen: !prevState.okOpen,
      goodOpen: false,
      notGoodOpen: false,
    }));
    document.querySelector('.pickColor2').style.color = '#ff792a';
    document.querySelector('.pickColor1').style.color = '#181818';
    document.querySelector('.pickColor3').style.color = '#181818';
    if (this.state.okOpen) {
      console.log(reviewScore);
      document.querySelector('.pickColor2').style.color = '#181818';
    } else {
      this.setState({
        reviewScore: reviewScore + 3,
      });
      console.log(this.state.reviewScore);
    }
  }

  toggleNotGoodOpen() {
    const { reviewScore } = this.props;
    this.setState(prevState => ({
      notGoodOpen: !prevState.notGoodOpen,
      okOpen: false,
      goodOpen: false,
    }));
    document.querySelector('.pickColor3').style.color = '#ff792a';
    document.querySelector('.pickColor1').style.color = '#181818';
    document.querySelector('.pickColor2').style.color = '#181818';

    if (this.state.notGoodOpen) {
      console.log(reviewScore);
      document.querySelector('.pickColor3').style.color = '#181818';
    } else {
      this.setState({
        reviewScore: reviewScore + 1,
      });
      console.log(this.state.reviewScore);
    }
  }

  goodImageName = () => (this.state.goodOpen ? 'goodOn' : 'goodOff');
  okImageName = () => (this.state.okOpen ? 'okOn' : 'okOff');
  notGoodImageName = () =>
    this.state.notGoodOpen ? 'notGoodOn' : 'notGoodOff';

  render() {
    const goodImage = this.goodImageName();
    const okImage = this.okImageName();
    const notGood = this.notGoodImageName();
    return (
      <React.Fragment>
        <section className={cx('WritingReviewPage')}>
          <div className={cx('ReviewWritingPage__Row')}>
            <div className={cx('RestaurantSubMessage')}>
              <h2 className={cx('RestaurantName')}>카메스시/亀すし総</h2>
              <p className={cx('RestaurantMessage')}>
                에 대한 솔직한 리뷰를 써주세요.
              </p>
            </div>
            <div className={cx('RestaurantRecommendPicker')}>
              <ul className={cx('RestaurantRecommendPicker__List')}>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <img
                    src={imagePath[goodImage]}
                    alt="좋아요 버튼"
                    onClick={() => this.toggleGoodOpen()}
                  />
                  <p className={cx('pickColor1')}>맛있다</p>
                </li>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <img
                    src={imagePath[okImage]}
                    alt="괜찮다 버튼"
                    onClick={() => this.toggleOkOpen()}
                  />
                  <p className={cx('pickColor2')}>괜찮다</p>
                </li>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <img
                    src={imagePath[notGood]}
                    alt="별로 버튼"
                    onClick={() => this.toggleNotGoodOpen()}
                  />
                  <p className={cx('pickColor3')}>별로</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('ReviewWritingPage__ContentWrap')}>
            <div className={cx('UserSimpleProfile')}>
              <img src="" alt="" />
              <span className={cx('username')}>Jominji</span>
            </div>
            <div className={cx('ReviewWritingPage__FormWrap')}>
              <div className={cx('ReviewWritingPage__EditorWrap')}>
                <textarea placeholder="Jominji님, 주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!" />
                <p className={cx('ReviewEditor__TextLengthStateBox')}>
                  0 / 10,000
                </p>
              </div>
              <div className={cx('DraggablePictureContainer')}>
                <ul>
                  <li className={cx('DraggablePictureContainer__PictureList')}>
                    <button />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx('ReviewWritingPage__Buttons')}>
            <button className={cx('ReviewWritingPage__CancelButton')}>
              취소
            </button>
            <button className={cx('ReviewWritingPage__SubmitButton')}>
              완료
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
