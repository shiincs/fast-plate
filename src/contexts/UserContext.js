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
      logout: () => {},
      responseFacebook: this.responseFacebook,
      componentClicked: this.componentClicked,
    };
  }

  componentDidMount() {
    // 현재 유저 정보를 확인해서 setState 해준다.
    // localStorage.getItem('token')
    // this.setState({
    //   id: 1,
    //   username: 'user1',
    // });
  }

  login = async response => {
    console.log(response);
    const res = await api.post('/auth-token/facebook/', {
      access_token: response.accessToken,
      facebook_user_id: response.userId,
    });
    console.log(res);
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
