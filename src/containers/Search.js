import React, { Component } from 'react';
import api from '../api';
import SearchView from '../components/SearchView/SearchView';

export default class Search extends Component {
  /* 
    여기에서 식당리스트 정보를 서버에서 받아와서 상태를 관리한다.
    SearchView(PC)에 내려주고,
    SearchListView와 SearchMapView 까지 상태를 내려서 정보를 표시해준다.
  */
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      name: '',
      score: 0,
      address: '',
      foodTyle: '',
      viewNum: 0,
      reviewNum: 0,
    };
  }

  async componentDidMount() {
    // 현재 api 서버에서 CORS 관련 문제 발생 (요청 불가)
    // const res = await api.get('/restaurants/list');
    // console.log(res);
  }

  render() {
    return (
      <React.Fragment>
        <SearchView />
      </React.Fragment>
    );
  }
}
