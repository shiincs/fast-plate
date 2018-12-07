import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderView.module.scss';
import MypageView from './MypageView';
import { withUser } from '../contexts/UserContext';
import { withPage } from '../contexts/PageContext';
import { withModal } from '../contexts/ModalContext';
import { ReactComponent as MainLogo } from '../commonimgs/main-logo.svg';
import { ReactComponent as GrayLogo } from '../commonimgs/gray-logo.svg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class HeaderView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: 0,
    };
  }

  targetElement = null;

  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    this.targetElement = MypageView;
  }

  handleScroll = () => {
    this.setState({
      scroll: window.scrollY,
    });
  };

  render() {
    const {
      main,
      username,
      modalOpen,
      showTargetElement,
      handleClick,
      ...rest
    } = this.props;
    // console.log(this.props.main);
    const { scroll } = this.state;

    if (this.props.main) {
      window.addEventListener('scroll', this.handleScroll, true);
    } else {
      window.removeEventListener('scroll', this.handleScroll, true);
    }

    return (
      <>
        <header className={cx('header', { transparent: main && scroll < 300 })}>
          <div className={cx('logoAndSearch')}>
            <Link to="/" className={cx('logo')}>
              <div className={cx('miniLogo')} />
              <MainLogo
                className={cx('mainLogo', { appear: !main || scroll > 300 })}
              />
              <GrayLogo
                className={cx('grayLogo', { hide: main && scroll < 300 })}
              />
            </Link>
            <form className={cx('searchBox', { hide: main })}>
              <span className={cx('searchIcon')} />
              <input type="text" placeholder="지역, 식당 또는 음식" />
            </form>
          </div>
          <nav className={cx('nav')}>
            <ul className={cx('navList')}>
              <li className={cx('navItem', { white: main && scroll < 300 })}>
                EAT딜
              </li>
              <li className={cx('navItem', { white: main && scroll < 300 })}>
                맛집 리스트
              </li>
              <li className={cx('navItem', { white: main && scroll < 300 })}>
                망고 스토리
              </li>
              <li className={cx('navItem')}>
                <button
                  className={cx('hamburger')}
                  onClick={() => {
                    // !modalOpen && showTargetElement('modalOpen');
                  }}
                >
                  메뉴 펼치기
                </button>
              </li>
              <li className={cx('navItem', { white: main })}>
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

export default withUser(withPage(withModal(HeaderView)));
