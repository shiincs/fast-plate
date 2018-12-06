import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import PostDetailPage from './pages/PostDetailPage';
import Layout from './components/Layout';
import UserProvider from './contexts/UserContext';
import PageProvider from './contexts/PageContext';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <PageProvider>
            <div className="App">
              <Layout>
                <Switch>
                  <Route path="/search" component={SearchPage} />
                  <Route
                    path="/restaurant/:rKeyword"
                    component={PostDetailPage}
                  />
                  {/*루트페이지는 항상 맨 아래 위치 */}
                  <Route path="/" component={MainPage} />
                </Switch>
              </Layout>
            </div>
          </PageProvider>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
