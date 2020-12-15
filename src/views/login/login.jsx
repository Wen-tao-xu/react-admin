import React, { Component } from 'react'
import { Layout, Input, Form, Button, Divider, notification, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '@/style/view-style/login.scss'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const tailLayout = {
  wrapperCol: {offset: 4, span: 20}
}

class Login extends Component {

  state = {
    loading: false,
  }

  enterLoading = () => {
    this.setState({
      loading: true
    })
  }

  onFinish = values => {
    console.log('success', values)
    localStorage.setItem('react-user', JSON.stringify(values))
    this.enterLoading()
    this.timer = setTimeout(() => {
      message.success('登录成功')
      this.props.history.push('/')
    }, 2000)
  }

  onFinishFailed = errInfo => {
    console.log('fail', errInfo)
  }

  componentDidMount() {
    notification.open({
      message: '欢迎使用后台管理平台',
      duration: null,
      description: '账号 admin(管理员) 其他(游客) 密码随意'
    })
  }

  componentWillUnmount() {
    notification.destroy()
    clearTimeout(this.timer)
  }

  render() {
    return (
      <Layout className='login animated fadeIn'>
        <div className='model'>
          <div className="login-form">
          <h3>后台管理系统</h3>
            <Divider />
            <Form {...layout} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
              <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input prefix={<UserOutlined type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入' />
              </Form.Item>
              <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                <Input.Password prefix={<LockOutlined type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入' />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type='primary' htmlType="submit" className="login-form-button" loading={this.state.loading}>登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Login