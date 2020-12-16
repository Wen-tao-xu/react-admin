import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'

const { Sider } = Layout

const Aside = props => {
  let { menuToggle, menu } = props
  return (
    <Sider className="aside">
      <div className='logo'>
        <a rel='noopener noreferrer' href='https://github.com/ltadpoles' target='_blank'>
          <Icon type='github' style={{ fontSize: '3.8rem', color: '#fff' }} />
        </a>
      </div>
    </Sider>
  )
}

Aside.prototypes = {
  menuToggle: PropTypes.bool,
  menu: PropTypes.array.isRequired
}

export default Aside;