// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './FacebookLoginView.module.scss';
import { withUser } from '../contexts/UserContext';

const cx = classNames.bind(styles);

class FacebookLoginView extends Component {
  // state = {
  //   isLoggedIn: false,
  //   userID: '',
  //   name: '',
  //   email: '',
  //   picture: '',
  // };

  // responseFacebook = response => {
  //   console.log(response);
  //   this.setState({
  //     isLoggedIn: true,
  //     userID: response.userID,
  //     name: response.name,
  //     email: response.email,
  //     picture: response.picture.data.url,
  //   });
  // };

  render() {
    const { login } = this.props;

    return (
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_KEY}
        autoLoad={true}
        fields="name,email,picture"
        callback={login}
        render={renderProps => (
          <div onClick={renderProps.onClick} className={cx('loginFacebook')}>
            <span className={cx('btnTitle')}>페이스북으로 시작하기</span>
          </div>
        )}
      />
    );
  }
}

export default withUser(FacebookLoginView);
