import React, { Component } from 'react'
import { Layout, Input, Form, Button, Divider } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '@/style/view-style/login.scss'

class Login extends Component {
  render() {
    return (
      <Layout className='login animated fadeIn'>
        <div className='model'>
          <div className="login-form">
            <h3>后台管理系统</h3>
            <Divider />
            <Form>
              <Form.Item>
                <Input prefix={<UserOutlined type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名' />
              </Form.Item>
              <Form.Item>
                <Input prefix={<LockOutlined type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' className="login-form-button">登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Login