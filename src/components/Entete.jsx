import React from 'react';
import { Layout, Menu } from 'antd';
import { HeartOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Entete = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: 'white', fontSize: '1.5rem' }}>
        Occar-z     Annonces
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Favoris <HeartOutlined /></Menu.Item>
        <Menu.Item key="2">Login <UserOutlined /></Menu.Item>
      </Menu>
    </Header>
  );
};

export default Entete;
