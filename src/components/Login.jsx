import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Login"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Login"
        cancelText="Cancel"
        style={{ borderRadius: 10}}
      >
        <div style={{ marginBottom: 16 }}>
          <label>Email:</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Password:</label>
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </Modal>
    </>
  );
};

export default Login;
