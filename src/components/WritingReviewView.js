import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './WritingReviewView.module.scss';
const cx = classNames.bind(styles);

// 컴포넌트 나누기 (page, container, presentational)
// 코드의 양 줄이기

export default class WritingReviewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodOpen: false,
      okOpen: false,
      notGoodOpen: false,
      imagePath: [
        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_recommend_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_recommend_active_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_ok_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_ok_active_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_not_recommend_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_not_recommend_active_face.svg',
      ],
    };
  }

  allFontBlack() {
    document.querySelector('.pickColor1').style.color = '#181818';
    document.querySelector('.pickColor2').style.color = '#181818';
    document.querySelector('.pickColor3').style.color = '#181818';
  }

  toggleGoodOpen() {
    this.setState(prevState => ({
      goodOpen: !prevState.goodOpen,
      okOpen: false,
      notGoodOpen: false,
    }));
    if (this.state.goodOpen) {
      this.allFontBlack();
    } else {
      document.querySelector('.pickColor1').style.color = '#ff792a';
      document.querySelector('.pickColor2').style.color = '#181818';
      document.querySelector('.pickColor3').style.color = '#181818';
    }
  }

  toggleOkOpen() {
    this.setState(prevState => ({
      okOpen: !prevState.okOpen,
      goodOpen: false,
      notGoodOpen: false,
    }));

    if (this.state.okOpen) {
      this.allFontBlack();
    } else {
      document.querySelector('.pickColor2').style.color = '#ff792a';
      document.querySelector('.pickColor1').style.color = '#181818';
      document.querySelector('.pickColor3').style.color = '#181818';
    }
  }

  toggleNotGoodOpen() {
    this.setState(prevState => ({
      notGoodOpen: !prevState.notGoodOpen,
      okOpen: false,
      goodOpen: false,
    }));
    if (this.state.notGoodOpen) {
      this.allFontBlack();
    } else {
      document.querySelector('.pickColor3').style.color = '#ff792a';
      document.querySelector('.pickColor1').style.color = '#181818';
      document.querySelector('.pickColor2').style.color = '#181818';
    }
  }

  goodImageName() {
    const { goodOpen, imagePath } = this.state;
    if (goodOpen) {
      return imagePath[1]; // active
    } else {
      return imagePath[0]; // normal
    }
  }

  okImageName() {
    const { okOpen, imagePath } = this.state;
    if (okOpen) {
      return imagePath[3]; // active
    } else {
      return imagePath[2]; // normal
    }
  }

  notGoodImageName() {
    const { notGoodOpen, imagePath } = this.state;
    if (notGoodOpen) {
      return imagePath[5]; // active
    } else {
      return imagePath[4]; // normal
    }
  }

  render() {
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
                    src={this.goodImageName()}
                    alt="좋아요 버튼"
                    onClick={() => this.toggleGoodOpen()}
                  />
                  <p className={cx('pickColor1')}>맛있다</p>
                </li>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <img
                    src={this.okImageName()}
                    alt="괜찮다 버튼"
                    onClick={() => this.toggleOkOpen()}
                  />
                  <p className={cx('pickColor2')}>괜찮다</p>
                </li>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <img
                    src={this.notGoodImageName()}
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
