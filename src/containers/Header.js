import React, { Component } from 'react';
import HeaderView from '../components/HeaderView';
import ModalProvider from '../contexts/ModalContext';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentOpen: true,
      wannagoOpen: false,
    };
  }

  componentDidMount() {
    if (this.props.main) {
      window.addEventListener('scroll', this.handleScroll, true);
    } else {
      window.removeEventListener('scroll', this.handleScroll, true);
    }
  }

  handleScroll = () => {
    console.log(window.scrollY);
  };

  handleClick = (active, inactive) => {
    this.setState({
      [active]: true,
      [inactive]: false,
    });
  };

  render() {
    const params = new URLSearchParams(decodeURI(window.location.search));
    const keyword = params.get('keyword');
    console.log(keyword);
    return (
      <React.Fragment>
        <ModalProvider>
          <HeaderView
            {...this.state}
            handleClick={this.handleClick}
            key={keyword}
          />
        </ModalProvider>
      </React.Fragment>
    );
  }
}
