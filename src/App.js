import React, { Component } from 'react';
import HandlePrimary from './components/HandlePrimary/HandlePrimary';
import HandleSecondary from './components/HandleSecondary/HandleSecondary';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route path="/" component={HandlePrimary} />
          <Route path="/" component={HandleSecondary} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
