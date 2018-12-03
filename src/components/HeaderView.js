import React, { Component } from 'react';
import './Header.scss';
import MypageView from './MypageView';

export default class HeaderView extends Component {
  render() {
    return (
      <>
        <header className="Header">
          <h1 className="Logo">MANGO PLATE</h1>
          <nav className="Nav">
            <ul className="__list">
              <li className="__item">EAT DEAL</li>
              <li className="__item">맛집 리스트</li>
              <li className="__item">망고 스토리</li>
              <button className="Myprofile">프로필</button>
            </ul>
          </nav>
        </header>
        <MypageView />
      </>
    );
  }
}
