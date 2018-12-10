import React, { Component } from 'react';
import Search from '../containers/Search';
import SearchContext from '../contexts/SearchContext';
import { withPage } from '../contexts/PageContext';

class SearchPage extends Component {
  componentDidMount() {
    this.props.handlePageOpen('search');
  }

  componentWillUnmount() {
    this.props.handlePageClose('search');
  }

  render() {
    const { location } = this.props;
    const params = new URLSearchParams(decodeURI(location.search));
    const keyword = params.get('keyword');
    const page = parseInt(params.get('page'));
    return (
      <React.Fragment>
        <SearchContext.Provider value={keyword}>
          <Search key={page} page={page} />
        </SearchContext.Provider>
      </React.Fragment>
    );
  }
}

export default withPage(SearchPage);
