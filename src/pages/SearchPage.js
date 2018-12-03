import React, { Component } from 'react';
import Search from '../containers/Search';
import SearchContext from '../contexts/SearchContext';

export default class SearchPage extends Component {
  render() {
    const { match } = this.props;
    const searchKeyword = match.params.searchKeyword;
    return (
      <React.Fragment>
        <SearchContext.Provider value={searchKeyword}>
          <Search />
        </SearchContext.Provider>
      </React.Fragment>
    );
  }
}
