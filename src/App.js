import React, { Component } from 'react';
import HandlePrimary from './components/HandlePrimary/HandlePrimary';
import HandleSecondary from './components/HandleSecondary/HandleSecondary';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import PostDetailPage from './pages/PostDetailPage';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/search" component={SearchPage} />
              <Route path="/restaurant/:rKeyword" component={PostDetailPage} />      
              <Route path="/" component={HandlePrimary} />
              <Route path="/" component={HandleSecondary} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
