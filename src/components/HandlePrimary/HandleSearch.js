import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import magnifying from './MainImg/magnifying.jpg';
import styles from './HandlePrimary.module.scss';

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
      return <Redirect to={`/search?keyword=${this.state.value}&page=1`} />;
    }

    return (
      <form className={styles.mainSearch}>
        <fieldset>
          <legend>맛집검색</legend>
          <div className={styles.magnifyIcon}>
            <img src={magnifying} alt="magnifyingIcon" />
          </div>
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
