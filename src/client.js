import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

class ClientApp extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    )
  }
}

render(<ClientApp />, document.getElementById('main'));
