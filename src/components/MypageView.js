import React, { Component } from 'react';
import styles from './MypageView.module.scss';
import classNames from 'classnames/bind';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import { withUser } from '../contexts/UserContext';
import { withModal } from '../contexts/ModalContext';
import LoginPopupView from './LoginPopupView';
import RecentGo from '../containers/RecentGo';

const cx = classNames.bind(styles);

class MypageView extends Component {
  targetElement = null;

  componentDidMount() {
    this.targetElement = LoginPopupView;
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
      handleRecentReset,
      recentView,
      modalOpen,
      popupOpen,
      recentOpen,
      wannagoOpen,
      handleClick,
      showTargetElement,
      hideTargetElement,
      username,
    } = this.props;

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
                최근 본 맛집
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
                <React.Fragment>
                  <button
                    className={cx('recentResetBtn')}
                    onClick={handleRecentReset}
                  >
                    목록 삭제
                  </button>
                  <ul className={cx('recentView')}>
                    <RecentGo
                      hideTargetElement={hideTargetElement}
                      recentView={recentView}
                    />
                  </ul>
                </React.Fragment>
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
