import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { sendLoginInformations } from '../services/auth/AuthServices';

const LoginPage = () => {
  let messageErreur = "Email ou mot de passe erroner.";
  const [ errorMessage, setErrorMessage ] = useState(undefined)

  const onFinish = (values) => {
    // Creer les infos de login
		let loginInfos = {
			email: values.email,
			motDePasse: values.password
		}

		sendLoginInformations(loginInfos).
    then((data) => {
      setErrorMessage(undefined)
    }).
    catch((error) => {
      setErrorMessage(messageErreur)
    })
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
            <h1>Bon retour!</h1>
            <p>Veuillez vous connecter pour beneficier des services.</p>
          </div>
        </Col>
        <Col span={12} style={rightStyle}>
          <div>
            <h2>Connexion</h2>
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

              <p className='m-0' style={{ color: 'red' }}>{ errorMessage && errorMessage }</p>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Se connecter
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
