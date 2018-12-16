// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './FacebookLoginView.module.scss';

const cx = classNames.bind(styles);

export default class FacebookLoginView extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  componentClicked = () => console.log('componentClicked!');

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_KEY}
          autoLoad={true}
          fields="name,email,picture"
          // onClick={this.componentClicked}
          callback={this.responseFacebook}
          render={renderProps => (
            <div onClick={renderProps.onClick} className={cx('loginFacebook')}>
              <span className={cx('btnTitle')}>페이스북으로 시작하기</span>
            </div>
          )}
        />
      );
    }
    return <React.Fragment>{fbContent}</React.Fragment>;
  }
}
