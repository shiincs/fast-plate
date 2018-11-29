import React, { Component } from 'react';
import SearchView from '../components/SearchView';

export default class Search extends Component {
  /* 
    여기에서 식당리스트 정보를 서버에서 받아와서 상태를 관리한다.
    SearchView(PC)에 내려주고,
    SearchListView와 SearchMapView 까지 상태를 내려서 정보를 표시해준다.
  */
  render() {
    return (
      <React.Fragment>
        <SearchView />
      </React.Fragment>
    );
  }
}
