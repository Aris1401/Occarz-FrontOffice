import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import GrandMilieu from '../components/GrandMilieu';

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleOk = () => { setIsModalVisible(false);};

const handleCancel = () => {setIsModalVisible(false);};

  return (
    <>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>Afficher la modal</Button>
      <Modal
        title="Login"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Login"
        cancelText="Cancel"
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
