import React, { Component } from 'react';
import api from '../api';

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      username: null,
      picture: null,
      login: this.login,
      logout: this.logout,
      token: null,
      responseFacebook: this.responseFacebook,
      componentClicked: this.componentClicked,
    };
  }

  async componentDidMount() {
    // 로그인 분기 처리
    if (localStorage.getItem('ftoken')) {
      this.refresh();
    }
  }

  login = async response => {
    // 페이스북으로부터 받은 응답 값을 로컬 스토리지에 저장
    localStorage.setItem('ftoken', response.accessToken);
    localStorage.setItem('fid', response.id);
    // 로컬 스토리지에 저장된 값으로 api 요청
    const res = await api.post('api/members/auth-token/facebook/', {
      access_token: localStorage.getItem('ftoken'),
      facebook_user_id: localStorage.getItem('fid'),
    });

    // api 요청의 응답값으로 유저정보 업데이트
    this.setState({
      username: res.data.user.full_name,
      picture: res.data.user.img_profile,
    });
  };

  // 로그아웃
  logout = () => {
    localStorage.removeItem('ftoken');
    localStorage.removeItem('fid');
    this.setState({
      username: null,
      picture: null,
    });
    console.log(this.state.username);
  };

  // 사용자가 새로고침 눌렀을때 로그인 유지
  refresh = async () => {
    const res = await api.post('api/members/auth-token/facebook/', {
      access_token: localStorage.getItem('ftoken'),
      facebook_user_id: localStorage.getItem('fid'),
    });
    this.setState({
      username: res.data.user.full_name,
      picture: res.data.user.img_profile,
    });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withUser(WrappedComponent) {
  return function WithUser(props) {
    return (
      <Consumer>{value => <WrappedComponent {...props} {...value} />}</Consumer>
    );
  };
}

export { UserProvider, Consumer as UserConsumer, withUser };
