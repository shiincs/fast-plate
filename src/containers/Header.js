import React, { Component } from 'react';
import HeaderView from '../components/HeaderView';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  showTargetElement = () => {
    // ... some logic to show target element
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
    }));
    // 3. Disable body scroll
    disableBodyScroll(this.targetElement);
  };

  hideTargetElement = () => {
    // ... some logic to hide target element
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
    }));
    // 4. Re-enable body scroll
    enableBodyScroll(this.targetElement);
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <React.Fragment>
        <HeaderView
          modalOpen={modalOpen}
          showTargetElement={this.showTargetElement}
          hideTargetElement={this.hideTargetElement}
        />
      </React.Fragment>
    );
  }
}
