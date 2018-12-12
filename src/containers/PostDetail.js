import React, { Component } from 'react';
import api from '../api';
import PostDetailView from '../components/PostDetailView';
import { setRecentView } from '../setLocalStorage';

import hero1 from '../components/MainHeroView/MainImg/hero1.jpg';
import hero2 from '../components/MainHeroView/MainImg/hero2.jpg';
import hero3 from '../components/MainHeroView/MainImg/hero3.jpg';
import hero4 from '../components/MainHeroView/MainImg/hero4.jpg';
import ModalProvider from '../contexts/ModalContext';

export default class PostDetail extends Component {
  /* 
    여기에서 식당리스트 정보를 서버에서 받아와서 상태를 관리한다.
    SearchView(PC)에 내려주고,
    SearchListView와 SearchMapView 까지 상태를 내려서 정보를 표시해준다.
  */
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: null,
      want_num: 0,
      restaurants: {},
      detailpics: [hero1, hero2, hero3, hero4],
      comments: ['인덱스1', '인덱스2', '인덱스3', '인덱스4'],
      wannaGo: false,
      post_set: [],
      filter: [],
    };
  }

  async componentDidMount() {
    const { restaurantId } = this.props;

    //PostDetailPage에서 받아온 match 안에 id 값
    const {
      data: { want_num, post_set, rate_good, ...rest },
    } = await api.get(`/api/restaurants/list/${restaurantId}`);
    // console.log(post_set);
    this.setState({
      restaurants: { want_num, ...rest },
      want_num: want_num,
      post_set: post_set,
    });

    // console.log(post_set);
    // 해당 레스토랑 정보를 localStorage에 저장 (최근 본 맛집에서 사용)
    // restaurants 에서 최근 본 맛집에 필요한 정보만 뽑아서 객체에 저장
    const {
      pk,
      name,
      address,
      food_type,
      rate_average,
    } = this.state.restaurants;

    const restData = {
      pk,
      name,
      address,
      food_type,
      rate_average,
    };
    // 뽑아낸 정보 객체를 로컬스토리지에 저장
    setRecentView(restData);
  }

  async handleCount(pk, num) {
    await api.patch(`/api/restaurants/list/${pk}`, {
      want_num: num + 1,
    });
  }

  handleWannaGo() {
    this.setState(prevState => {
      return {
        wannaGo: !prevState.wannaGo,
      };
    });
  }

  handleReviewfilter(n) {
    const { filter } = this.state;
    const rateFilter = filter.concat(rw => rw.rate === n);
    console.log(rateFilter);
    this.setState({
      post_set: [rateFilter],
    });
  }

  render() {
    const {
      restaurantId,
      restaurants,
      detailpics,
      comments,
      wannaGo,
      post_set,
    } = this.state;
    const { location } = this.props;

    return (
      <React.Fragment>
        <ModalProvider>
          <PostDetailView
            postset={post_set}
            restaurantId={restaurantId}
            restaurants={restaurants}
            detailpics={detailpics}
            comments={comments}
            handleCount={this.handleCount}
            wannaGo={wannaGo}
            handleWannaGo={() => this.handleWannaGo()}
            handleRating={() => this.handleRating()}
            location={location}
            // handleReviewfilter={() => this.handleReviewfilter()}
          />
        </ModalProvider>
      </React.Fragment>
    );
  }
}
