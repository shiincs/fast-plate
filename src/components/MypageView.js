import React, { Component } from 'react';

export default class MypageView extends Component {
  render() {
    return (
      <div>
        <section className="my-page">
          <div className="my-page__tap">
            <button>최근 본 맛집</button>
            <button>가고싶다</button>
          </div>
          <div className="my-page__list">
            <div className="veiwed-restraurants__list">
              <ul>
                <li>
                  <div className="viewed_restaurant__thumbnail" />
                </li>
              </ul>
            </div>
            <div className="wannago-container__list" />
          </div>
        </section>
      </div>
    );
  }
}
