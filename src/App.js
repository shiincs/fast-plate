import React, { Component } from 'react';
import HandlePrimary from './components/MainPrimary/HandlePrimary';
import HandleSecondary from './components/MainSecondary/HandleSecondary';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <HandlePrimary />
        <HandleSecondary />
      </div>
    );
  }
}

export default App;
