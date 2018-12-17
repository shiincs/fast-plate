import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      username: null,
      picture: null,
      login: this.login,
      logout: () => {},
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

  login = response => {
    console.log(response);
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
