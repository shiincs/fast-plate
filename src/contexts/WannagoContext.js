import React, { Component } from 'react';
import api from '../api';

const { Provider, Consumer } = React.createContext();

class WannagoProvier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPk: null,
      wannagoSet: [],
      wannagoActive: false,
      handleActive: this.handleActive,
      handleCount: this.handleCount,
      handleToggle: this.handleToggle,
    };
  }

  async componentDidMount() {
    // 현재 보고있는 레스토랑의 pk를 가져온다.
    const restaurantId = parseInt(this.props.children.props.restaurantId);

    // 현재 유저의 정보를 불러온다.
    // const pk = localStorage.getItem('currentUserPK');
    const { data } = await api.get(`/api/members/list/2`);

    // 현재 보고있는 레스토랑이 wannago_set에 있는 레스토랑이라면 true
    const isActive = data.wannago_set
      .map(item => item.restaurant)
      .includes(restaurantId);

    // 현재 보고있는 레스토랑이 wannago_set에서 몇번째 pk인지
    const currentPk = data.wannago_set.find(
      item => item.restaurant === restaurantId
    )
      ? data.wannago_set.find(item => item.restaurant === restaurantId).pk
      : null;

    // pk 상태 저장
    this.setState({
      currentPk,
    });

    // 만약 현재 보고있는 레스토랑이 wannago_set에 있는 레스토랑이라면 wannagoActive 상태를 true로 바꿔준다.
    if (isActive) {
      this.setState({
        wannagoActive: true,
      });
    }
  }

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
      const res2 = await api.delete(
        `/api/restaurants/list/wannago/${this.state.currentPk}`
      );
    } else {
      const res = await api.post(`/api/restaurants/list/wannago/`, {
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

export { WannagoProvier, Consumer as WannagoConsumer, withWannago };
