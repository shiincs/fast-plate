import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './MainPrimary.module.scss';

export default class HandleSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      search: false,
    };
  }

  handleInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async handleButton() {
    this.setState({
      search: true,
    });
  }

  render() {
    if (this.state.search) {
      return <Redirect to={`/search?keyword=${this.state.value}`} />;
    }

    return (
      <form className={styles.mainSearch}>
        <fieldset>
          <legend>맛집검색</legend>
          <input
            type="text"
            value={this.state.value}
            name="searchInput"
            placeholder="지역, 식당 또는 음식"
            onChange={e => this.handleInput(e)}
          />
          <button onClick={() => this.handleButton()}>검색</button>
        </fieldset>
      </form>
    );
  }
}
