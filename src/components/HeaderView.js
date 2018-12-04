import React, { Component } from 'react';
import './HeaderView.scss';
import MypageView from './MypageView';

export default class HeaderView extends Component {
  targetElement = null;

  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    this.targetElement = MypageView;
  }

  render() {
    const { modalOpen, showTargetElement, hideTargetElement } = this.props;
    return (
      <>
        <header className="Header">
          <h1 className="Logo">MANGO PLATE</h1>
          <nav className="Nav">
            <ul className="__list">
              <li className="__item">EAT DEAL</li>
              <li className="__item">맛집 리스트</li>
              <li className="__item">망고 스토리</li>
              <button
                className="Myprofile"
                onClick={modalOpen ? hideTargetElement : showTargetElement}
              >
                프로필
              </button>
            </ul>
          </nav>
        </header>
        {modalOpen ? <MypageView {...this.props} /> : null}
      </>
    );
  }
}
