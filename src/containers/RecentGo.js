import React, { Component } from 'react';
import RecentGoView from '../components/RecentGoView/RecentGoView';

export default class RecentGo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wannago: false,
    };
  }

  handleWannagoBtn = () => {
    this.setState(prevState => ({
      wannago: !prevState.wannago,
    }));
  };

  render() {
    const { recentView } = this.props;
    return (
      <React.Fragment>
        {recentView &&
          recentView.map(item => (
            <RecentGoView
              key={item.pk}
              item={item}
              {...this.state}
              {...this.props}
              handleWannagoBtn={this.handleWannagoBtn}
            />
          ))}
      </React.Fragment>
    );
  }
}
