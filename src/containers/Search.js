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
      restaurants: [],
    };
  }

  async componentDidMount() {
    // 현재 api 서버에서 CORS 관련 문제 발생 (요청 불가)
    // proxy 우회해서 사용은 가능한 상태
    const { data: restaurants } = await api.get('/api/restaurants/list/');
    this.setState({
      restaurants: [...restaurants],
    });
  }

  render() {
    const { restaurants } = this.state;
    return (
      <React.Fragment>
        <SearchView restaurants={restaurants} />
      </React.Fragment>
    );
  }
}
