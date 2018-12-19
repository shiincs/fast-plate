import React, { Component } from 'react';
import api from '../api';
import { withPage } from './PageContext';
import { withUser } from './UserContext';

const { Provider, Consumer } = React.createContext();

class WannagoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 0,
      currentPk: null,
      wannagoSet: [],
      myPageSet: null,
      wannagoActive: false,
      handleActive: this.handleActive,
      handleCount: this.handleCount,
      handleToggle: this.handleToggle,
      handleCurrentPk: this.handleCurrentPk,
      isMyPage: null,
      handleMyPage: this.handleMyPage,
    };
  }

  async componentDidMount() {
    // 현재 보고있는 레스토랑의 pk를 가져온다.
    const restaurantId = parseInt(this.props.children.props.restaurantId);
    // 현재 유저의 정보를 불러온다.
    // const pk = localStorage.getItem('currentUserPK');
    const { data } = await api.get(`/api/members/list/2`);
    this.setState({
      wannagoSet: data.wannago_set,
    });
    // 현재 보고있는 레스토랑이 wannago_set에 있는 레스토랑이라면 true
    const isActive = data.wannago_set
      .map(item => item.restaurant)
      .includes(restaurantId);

    if (this.props.detail) {
      // 현재 보고있는 레스토랑이 wannago_set에서 몇번째 pk인지
      const currentPk = data.wannago_set.find(
        item => item.restaurant === restaurantId
      )
        ? data.wannago_set.find(item => item.restaurant === restaurantId).pk
        : null;

      this.handleCurrentPk(currentPk);
    }
    // 만약 현재 보고있는 레스토랑이 wannago_set에 있는 레스토랑이라면 wannagoActive 상태를 true로 바꿔준다.
    if (isActive) {
      this.setState({
        wannagoActive: true,
      });
    }
  }

  // async componentDidUpdate() {
  //   const itemPk = this.state.isMyPage;

  //   // 현재 유저의 정보를 불러온다.
  //   const wannagoSet = this.state.wannagoSet;

  //   // 현재 보고있는 레스토랑이 wannago_set에 있는 레스토랑이라면 true
  //   const isItemActive = wannagoSet
  //     .map(item => item.restaurant)
  //     .includes(itemPk);
  //   // const isItemActive =
  //   //   itemPk &&
  //   //   itemPk.every(item =>
  //   //     wannagoSet.map(item => item.restaurant).includes(item)
  //   //   );

  //   console.log('wannagoSet', wannagoSet.map(item => item.restaurant));
  //   console.log('itemPk', itemPk);
  //   console.log(isItemActive);

  //   if (!this.state.wannagoActive && isItemActive) {
  //     this.setState({
  //       wannagoActive: true,
  //     });
  //   }
  // }

  handleMyPage = arr => {
    console.log('1111');
    const wannagoSet = this.state.wannagoSet.map(item => item.restaurant);
    const arrSet = arr.map(item => wannagoSet.includes(item));
    if (!this.state.myPageSet) {
      console.log('2222');
      this.setState({
        myPageSet: arrSet,
      });
    }
  };

  // handleMyPage = (pk, length) => {
  //   if (this.state.flag < length) {
  //     this.setState(prev => ({
  //       isMyPage: pk,
  //       flag: prev.flag + 1,
  //     }));
  //   }
  // };

  handleCurrentPk = pk => {
    // pk 상태 저장
    this.setState({
      currentPk: pk,
    });
  };

  handleCount = async (pk, num) => {
    await api.patch(`/api/restaurants/list/${pk}`, {
      want_num: num + 1,
    });
  };

  handleActive = () => {
    this.setState(prev => ({
      wannagoActive: !prev.wannagoActive,
    }));
  };

  handleToggle = async active => {
    const restaurantId = parseInt(this.props.children.props.restaurantId);
    if (active) {
      await api.delete(`/api/restaurants/list/wannago/${this.state.currentPk}`);
    } else {
      await api.post(`/api/restaurants/list/wannago/`, {
        restaurant: restaurantId,
      });
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withWannago(WrappedComponent) {
  return function WithWannago(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

const withUserPageWannagoProvider = withUser(withPage(WannagoProvider));
export {
  withUserPageWannagoProvider as WannagoProvider,
  Consumer as WannagoConsumer,
  withWannago,
};
