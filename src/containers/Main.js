import React, { Component } from 'react';
import HandlePrimary from '../components/HandlePrimary/HandlePrimary';
import HandleSecondary from '../components/HandleSecondary/HandleSecondary';
import { withPage } from '../contexts/PageContext';

class Main extends Component {
  componentDidMount() {
    this.props.handlePageOpen('main');
  }

  componentWillUnmount() {
    this.props.handlePageClose('main');
  }

  render() {
    return (
      <div>
        <HandlePrimary />
        <HandleSecondary />
      </div>
    );
  }
}

export default withPage(Main);
