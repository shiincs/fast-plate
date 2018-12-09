import React, { Component } from 'react';
import styles from './MypageView.module.scss';
import classNames from 'classnames/bind';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import { withUser } from '../contexts/UserContext';
import { withModal } from '../contexts/ModalContext';
import LoginPopupView from './LoginPopupView';

const cx = classNames.bind(styles);

class MypageView extends Component {
  targetElement = null;

  state = {
    recentView: [],
  };

  componentDidMount() {
    this.targetElement = LoginPopupView;
    // 로컬 스토리지에 저장된 최근 본 맛집을 상태에 저장한다.
    // (하위 컴포넌트인 MyPageView에 넘겨주기 위함)
    for (let i = 0; i < localStorage.length; i++) {
      this.state.recentView.unshift(JSON.parse(Object.values(localStorage)[i]));
      console.log(this.state.recentView);
    }
    // this.setState({
    //   recentView: recentView,
    // });
  }
  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
  }

  render() {
    const {
      modalOpen,
      popupOpen,
      recentOpen,
      wannagoOpen,
      handleClick,
      showTargetElement,
      hideTargetElement,
      username,
    } = this.props;

    console.log(this.state.recentView);

    return (
      <React.Fragment>
        <div
          className={cx({ blackOverlay: modalOpen })}
          onClick={() => {
            hideTargetElement('modalOpen');
          }}
        />
        <section className={cx('myPage', 'arrowTop', { modal: !modalOpen })}>
          <div className={cx('myPageWrapper')}>
            <div className={cx('tapWrapper')}>
              <div
                className={cx('tap', { active: recentOpen })}
                onClick={() => {
                  handleClick('recentOpen', 'wannagoOpen');
                }}
              >
                최근 본 맛집 (0)
              </div>
              <div
                className={cx('tap', { active: wannagoOpen })}
                onClick={() => {
                  username == null
                    ? !popupOpen && showTargetElement('popupOpen')
                    : handleClick('wannagoOpen', 'recentOpen');
                }}
              >
                가고싶다
              </div>
            </div>
            <div className={cx('list')}>
              {recentOpen && (
                <ul className={cx('recentView')}>
                  <button>목록 삭제</button>
                  {this.state.recentView.map(item => (
                    <li key={item.pk}>{item.name}</li>
                  ))}
                </ul>
              )}
              {wannagoOpen && (
                <ul className={cx('wannago')}>
                  <li>가고싶다</li>
                </ul>
              )}
            </div>
            <div className={cx('buttonList')}>
              {username == null ? (
                <button
                  className={cx('btn')}
                  onClick={() => {
                    !popupOpen && showTargetElement('popupOpen');
                  }}
                >
                  로그인
                </button>
              ) : (
                <button className={cx('btn')}>로그아웃</button>
              )}
            </div>
          </div>
        </section>
        <LoginPopupView
          popupOpen={popupOpen}
          hideTargetElement={hideTargetElement}
        />
      </React.Fragment>
    );
  }
}

export default withUser(withModal(MypageView));
