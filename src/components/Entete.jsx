import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { HeartOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
  </Menu>
);

const Entete = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

      <div style={{ color: 'white', fontSize: '1.5rem' }}>
        <p> Occar-z     Annonces</p>
      </div>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Favoris <HeartOutlined /></Menu.Item>
        <Menu.Item key="2">
          
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}> Login <DownOutlined /> </a>
          </Dropdown>

        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Entete;
