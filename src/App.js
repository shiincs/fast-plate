import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/search" component={SearchPage} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
