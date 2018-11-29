import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';

// Containers
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Home} />
      </div>
    );
  }
}

export default App;
