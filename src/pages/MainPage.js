import React, { Component } from 'react';
import Main from '../containers/Main';

export default class MainPage extends Component {
  componentDidMount() {
    // 페이지가 렌더링 될때마다 스크롤을 맨 위로 올린다.
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    );
  }
}
