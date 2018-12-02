import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

// Containers
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/:username' exact component={Profile} />
      </div>
    );
  }
}

export default App;
