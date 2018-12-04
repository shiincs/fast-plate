import React, { Component } from 'react';
import Search from '../containers/Search';
import SearchContext from '../contexts/SearchContext';

export default class SearchPage extends Component {
  render() {
    const { location } = this.props;
    const params = new URLSearchParams(decodeURI(location.search));
    const keyword = params.get('keyword');
    return (
      <React.Fragment>
        <SearchContext.Provider value={keyword}>
          <Search />
        </SearchContext.Provider>
      </React.Fragment>
    );
  }
}
