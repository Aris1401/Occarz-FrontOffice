import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const leftStyle = {
    backgroundColor: '#1890ff',
    color: 'white',
    padding: '20px',
  };

  const rightStyle = {
    backgroundColor: '#f0f2f5',
    padding: '20px',
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Row>
        <Col span={12} style={leftStyle}>
          <div>
            <h1>Welcome Back!</h1>
            <p>Please login to your account.</p>
          </div>
        </Col>
        <Col span={12} style={rightStyle}>
          <div>
            <h2>Login</h2>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
