import React, { Component } from 'react';
import './App.scss';
<<<<<<< HEAD
import Layout from './components/Layout';

class App extends Component {
  render() {
    return <Layout />;
=======
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
>>>>>>> 9c73ebb49fe6ccbb1fd2d0da5acca81fc36563a5
  }
}

export default App;
