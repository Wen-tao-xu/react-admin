import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

class CustomMenu extends Component {
  state = {
    openKeys: [],
    selectedKeys: []
  }

  onOpenChange = () => {
    
  }

  render() {
    let { openKeys, selectedKeys } = this.state
    return (
      <Menu
        mode='inline'
        theme='dark'
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={({ key }) => this.setState({ selectedKeys: [key] })}
        onOpenChange={this.onOpenChange}>

      </Menu>
    )
  }
}