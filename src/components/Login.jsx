import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';

import { sendLoginInformations } from '../services/auth/AuthServices';

const Login = () => {
  useEffect(() => {
    let access = window.localStorage.getItem("accessToken");
    if (access) window.location.href = "/#/statistique";
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOk = () => {
    // Traitement à effectuer lorsque l'utilisateur clique sur le bouton "Login"
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    // Traitement à effectuer lorsque l'utilisateur clique sur le bouton "Cancel" ou en dehors de la modal
    setIsModalVisible(false);
  };

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
