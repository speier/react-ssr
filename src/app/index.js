import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import TopicsPage from './pages/Topics';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/topics" component={TopicsPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
