import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import PostDetailPage from './pages/PostDetailPage';
import Layout from './components/Layout';
import UserProvider from './contexts/UserContext';
import Handle from './containers/Handle';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <div className="App">
            <Layout>
              <Switch>
                <Route path="/search" component={SearchPage} />
                <Route
                  path="/restaurant/:rKeyword"
                  component={PostDetailPage}
                />
                {/*루트페이지는 항상 맨 아래 위치 */}
                <Route path="/" component={Handle} />
              </Switch>
            </Layout>
          </div>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
