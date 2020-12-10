import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './views/login/login'

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
)

export default App;
