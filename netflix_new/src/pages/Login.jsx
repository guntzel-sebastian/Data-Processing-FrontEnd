import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { NavLink } from "react-router-dom";
import '@/style/login.css';

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
  };

  const error = (tips) => {
    messageApi.open({
      type: 'error',
      content: tips,
    });
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    handleLogin(values.username, values.password, values.remember);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleLogin = (username, password, remember) => {
    console.log("click!!")
    // Simulate authentication logic
    if (username === 'admin' && password === 'admin') {
      login(); // Call the login function to set isAuthenticated to true
      navigate('/');
    } else {
      // Handle invalid credentials
      console.log('Invalid credentials');
      error('Invalid credentials');
    }
  };

  return (
    <div className='loginMain'>
      {contextHolder}
      <Form
        className='loginForm'
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Form.Item
         wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >
          <NavLink to={`/register`}>I want to register</NavLink>
        </Form.Item>
        <Form.Item
         wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >
          <NavLink to={`/forgot-password`}>Forgot password</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
};


export default Login;
