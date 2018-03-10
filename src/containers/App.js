import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../components/Nav';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard.js';

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/dashboard" component={ Dashboard } />
      </Switch>
    </div>
  )
}

export default App;