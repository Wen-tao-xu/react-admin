import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import routes from '@/routes'

import Aside from './Aside'

const { Content } = Layout

class DefaultLayout extends Component {

  state = {
    show: true,
    menu: [],
  }

  render() {
    let { menuClick, menuToggle } = this.props
    let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''
    return (
      <Layout className="app">
        <BackTop />
        <Aside menuToggle={menuToggle} menu={this.state.menu} />
        <Content className="content">
          <Switch>
            {routes.map(item => {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  exact={item.exact}
                  render={props =>
                    !auth ? (
                      <item.component {...props} />
                    ) : item.auth && item.auth.indexOf(auth) !== -1 ? (
                      <item.component {...props} />
                    ) : (
                          <Redirect to='/404' {...props} />
                        )
                  }></Route>
              )
            })}
          </Switch>
        </Content>
      </Layout>
    )
  }
}

export default DefaultLayout;