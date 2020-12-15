import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import DefaultLayout from '@/container/DefaultLayout'

import Login from '@/views/Login/Login.jsx'
import Index from '@/views/Index/Index.jsx'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact render={() => <Redirect to='/index' />} />
      <Route path="/login" component={Login} />
      <Route path="/index" component={Index} />
      <Route component={DefaultLayout} />
    </Switch>
  </Router>
)

export default App;
