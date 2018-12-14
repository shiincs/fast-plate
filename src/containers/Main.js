import React, { Component } from 'react';
import { withPage } from '../contexts/PageContext';
import MainHeroView from '../components/MainHeroView/MainHeroView';
import MainListView from '../components/MainListView/MainListView';
import RateListView from '../components/MainListView/RateListView';
class Main extends Component {
  componentDidMount() {
    this.props.handlePageOpen('main');
  }

  componentWillUnmount() {
    this.props.handlePageClose('main');
  }

  render() {
    return (
      <main>
        <MainHeroView />
        <MainListView />
        <RateListView />
      </main>
    );
  }
}

export default withPage(Main);
