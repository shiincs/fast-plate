import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderView.module.scss';
import MypageView from './MypageView';
import { withUser } from '../contexts/UserContext';
import { withModal } from '../contexts/ModalContext';
import { ReactComponent as MainLogo } from '../commonimgs/main-logo.svg';
import { ReactComponent as GrayLogo } from '../commonimgs/gray-logo.svg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class HeaderView extends Component {
  targetElement = null;

  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    this.targetElement = MypageView;
  }

  render() {
    const {
      username,
      modalOpen,
      showTargetElement,
      handleClick,
      ...rest
    } = this.props;
    return (
      <>
        <header className={cx('header')}>
          <div className={cx('headerInfo')}>
            <Link to="/" className={cx('logo')}>
              <div className={cx('miniLogo', 'hide')} />
              <MainLogo className={cx('logoImg', 'appear')} />
              <GrayLogo className={cx('logoImg', 'hide')} />
            </Link>
            <form className={cx('searchBox')}>
              <span className={cx('searchIcon')} />
              <input type="text" placeholder="지역, 식당 또는 음식" />
            </form>
          </div>
          <nav className={cx('nav')}>
            <ul className={cx('navList')}>
              <li className={cx('navItem', 'hide')}>EAT딜</li>
              <li className={cx('navItem', 'hide')}>맛집 리스트</li>
              <li className={cx('navItem', 'hide')}>망고 스토리</li>
              <li className={cx('navItem', 'appear')}>
                <button
                  className={cx('hamburger')}
                  onClick={() => {
                    // !modalOpen && showTargetElement('modalOpen');
                  }}
                >
                  메뉴 펼치기
                </button>
              </li>
              <li className={cx('navItem')}>
                {username ? (
                  <button
                    className={cx('myPage', 'logined')}
                    onClick={() => {
                      !modalOpen && showTargetElement('modalOpen');
                    }}
                  >
                    마이페이지
                  </button>
                ) : (
                  <button
                    className={cx('myPage')}
                    onClick={() => {
                      !modalOpen && showTargetElement('modalOpen');
                    }}
                  >
                    마이페이지
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </header>
        {modalOpen ? <MypageView {...rest} handleClick={handleClick} /> : null}
      </>
    );
  }
}

export default withUser(withModal(HeaderView));
