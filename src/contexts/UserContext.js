import React, { Component } from 'react';
import api from '../api';
import { Redirect } from 'react-router-dom';

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      username: null,
      picture: null,
      initialLogin: false,
      login: this.login,
      logout: this.logout,
      responseFacebook: this.responseFacebook,
      refreshUser: this.refreshUser,
    };
  }

  async componentDidMount() {
    const pk = localStorage.getItem('currentUserPK');
    localStorage.getItem('token') && pk && (await this.refreshUser(pk));
  }

  login = async response => {
    const res = await api.post('/api/members/auth-token/facebook/', {
      access_token: response.accessToken,
      facebook_user_id: response.userId,
    });

    localStorage.setItem('token', res.data.token);
    localStorage.setItem('currentUserPK', res.data.user.pk);

    this.setState(prev => ({
      id: res.data.user.pk,
      username: res.data.user.full_name,
      picture: res.data.user.img_profile,
      initialLogin: !prev.initialLogin,
    }));
  };

  refreshUser = async pk => {
    const { data } = await api.get(`/api/members/list/${pk}`);
    console.log(data);
    // 현재 유저 정보를 확인해서 setState 해준다.
    this.setState({
      id: data.pk,
      username: data.full_name,
      picture: data.img_profile,
    });
  };

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUserPK');
    this.setState(prev => ({
      id: null,
      username: null,
      picture: null,
      initialLogin: !prev.initialLogin,
    }));
  };

  render() {
    if (this.state.initialLogin) {
      return <Redirect to="/" />;
    }
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
