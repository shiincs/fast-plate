import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/search/:searchKeyword" component={SearchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
