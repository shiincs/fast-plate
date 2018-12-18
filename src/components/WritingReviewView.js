import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Redirect } from 'react-router-dom';
import styles from './WritingReviewView.module.scss';
import { withUser } from '../contexts/UserContext';
const cx = classNames.bind(styles);

class WritingReviewView extends Component {
  render() {
    const {
      username,
      picture,
      goodOpen,
      okOpen,
      notGoodOpen,
      imagePath,
      toggleGoodOpen,
      toggleOkOpen,
      toggleNotGoodOpen,
      handleWordCount,
      restaurantsName,
      restaurantsPk,
      buttonActive,
      reviewTextBox,
      handleCancel,
      cancel,
      postReview,
      uploadImgArr,
      handleDeleteImg,
      fileSeletedHandler,
      // fileUploadHandler,
    } = this.props;

    if (cancel) {
      return <Redirect to={`/restaurant/${restaurantsPk}`} />;
    }

    return (
      <React.Fragment>
        <section className={cx('WritingReviewPage')}>
          <div className={cx('ReviewWritingPage__Row')}>
            <div className={cx('RestaurantSubMessage')}>
              <h2 className={cx('RestaurantName')}>{restaurantsName}</h2>
              <p className={cx('RestaurantMessage')}>
                에 대한 솔직한 리뷰를 써주세요.
              </p>
            </div>
            <div className={cx('RestaurantRecommendPicker')}>
              <ul className={cx('RestaurantRecommendPicker__List')}>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <img
                    src={goodOpen ? imagePath[1] : imagePath[0]}
                    alt="좋아요 버튼"
                    onClick={toggleGoodOpen}
                  />
                  <p className={cx('pickColor1')}>맛있다</p>
                </li>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <img
                    src={okOpen ? imagePath[3] : imagePath[2]}
                    alt="괜찮다 버튼"
                    onClick={toggleOkOpen}
                  />
                  <p className={cx('pickColor2')}>괜찮다</p>
                </li>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <img
                    src={notGoodOpen ? imagePath[5] : imagePath[4]}
                    alt="별로 버튼"
                    onClick={toggleNotGoodOpen}
                  />
                  <p className={cx('pickColor3')}>별로</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('ReviewWritingPage__ContentWrap')}>
            <div className={cx('UserSimpleProfile')}>
              <img src={picture} alt={username} />
              <span className={cx('username')}>{username}</span>
            </div>
            <div className={cx('ReviewWritingPage__FormWrap')}>
              <div className={cx('ReviewWritingPage__EditorWrap')}>
                <textarea
                  type="text"
                  maxLength="10000"
                  value={reviewTextBox}
                  required
                  placeholder={`${username}님, 주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!`}
                  onChange={handleWordCount}
                  onClick={buttonActive}
                />
                <p className={cx('ReviewEditor__TextLengthStateBox')}>
                  {this.props.chars_left.toLocaleString()} / 10,000
                </p>
              </div>
              <div className={cx('DraggablePictureContainer')}>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  onChange={fileSeletedHandler}
                  ref={fileInput => (this.fileInput = fileInput)}
                  onClick={event => {
                    event.target.value = null;
                  }}
                />
                <button
                  onClick={() => this.fileInput.click()}
                  className={cx('DraggablePictureContainer__PictureList')}
                >
                  +
                </button>
                {uploadImgArr.map((img, index) => (
                  <>
                    <img
                      src={img}
                      key={index}
                      alt="uploaded-images"
                      onClick={() => handleDeleteImg(index)}
                    />
                    <p className={cx('img_description')}>X</p>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className={cx('ReviewWritingPage__Buttons')}>
            <button
              className={cx('ReviewWritingPage__CancelButton')}
              onClick={handleCancel}
            >
              취소
            </button>
            <button
              className={cx(
                {
                  ReviewWritingPage__SubmitButton_Active: reviewTextBox,
                },
                {
                  ReviewWritingPage__SubmitButton_InActive: !reviewTextBox,
                }
              )}
              disabled={!reviewTextBox}
              onClick={postReview}
            >
              완료
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withUser(WritingReviewView);
