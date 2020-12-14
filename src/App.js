import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './views/login/login'
import Index from '@/views/index/index'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact render={() => <Redirect to='/index' />} />
      <Route path="/login" component={Login} />
      <Route path="/index" component={Index} />
    </Switch>
  </Router>
)

export default App;
