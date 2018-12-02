import React, { Component } from 'react';

export default class HandleSearch extends Component {
  render() {
    return (
      <form className="main-search">
        <fieldset>
          <legend>맛집검색</legend>
          <input
            type="text"
            name="searchInput"
            placeholder="지역, 식당 또는 음식"
          />
          <button>검색</button>
        </fieldset>
      </form>
    );
  }
}
