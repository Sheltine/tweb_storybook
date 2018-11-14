import DetailIssue from './DetailIssue'
import App from './App'
import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routing = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/details' component={DetailIssue}/>
    </Switch>
  </main>
)

export default Routing