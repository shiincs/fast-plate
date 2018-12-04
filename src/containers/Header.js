import React, { Component } from 'react';
import HeaderView from '../components/HeaderView';
import ModalProvider from '../contexts/ModalContext';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   modalOpen: false,
      //   popupOpen: false,
      recentOpen: true,
      wannagoOpen: false,
    };
  }

  handleClick = (active, inactive) => {
    this.setState({
      [active]: true,
      [inactive]: false,
    });
  };

  // handlePopup = () => {
  //   this.setState({
  //     popupOpen: true,
  //   });
  // };

  // showTargetElement = name => {
  //   // ... some logic to show target element
  //   if (name === 'modalOpen') {
  //     this.setState(prevState => ({
  //       modalOpen: !prevState.modalOpen,
  //     }));
  //   } else if (name === 'popupOpen') {
  //     this.setState(prevState => ({
  //       popupOpen: !prevState.popupOpen,
  //     }));
  //   }

  //   // 3. Disable body scroll
  //   disableBodyScroll(this.targetElement);
  // };

  // hideTargetElement = name => {
  //   // ... some logic to hide target element
  //   if (name === 'modalOpen') {
  //     this.setState(prevState => ({
  //       modalOpen: !prevState.modalOpen,
  //     }));
  //   } else if (name === 'popupOpen') {
  //     this.setState(prevState => ({
  //       popupOpen: !prevState.popupOpen,
  //     }));
  //   }
  //   // 4. Re-enable body scroll
  //   enableBodyScroll(this.targetElement);
  // };

  render() {
    return (
      <React.Fragment>
        <ModalProvider>
          <HeaderView
            {...this.state}
            // showTargetElement={this.showTargetElement}
            // hideTargetElement={this.hideTargetElement}
            handleClick={this.handleClick}
            // handlePopup={this.handlePopup}
          />
        </ModalProvider>
      </React.Fragment>
    );
  }
}
