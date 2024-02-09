import React, { useState } from 'react';
import { Input, Menu, Select, Button, Layout, Pagination } from 'antd';
import { Flex } from 'antd';
import '../style/sidebar.css';
const { Sider } = Layout;
const { Search } = Input;
const { Option } = Select;

const Sidebar = () => {
  const [current, setCurrent] = useState(1);
  const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const onPageChange = (page) => {
  console.log(page);
   setCurrent(page);
};

return (
    <Sider
      width={300}
      style={{ backgroundColor: 'grey' }}
    >

    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{height: '100%',borderRight: 0,marginTop: 10,}}
    >

    <div className="filtre">
        <p>Filtres</p>
    </div>


    <Menu.Item key="1">
        <Search placeholder="mot cle"
          style={{width: 230}}
        />
    </Menu.Item>


      <Menu.Item key="2" style={{ display: 'flex', alignItems: 'center' }}>
        <Select
            defaultValue="lucy"
            style={{width: 100,marginRight: 10}}
            onChange={handleChange}
        >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">Yiminghe</Option>
        </Select>


          <Select
            defaultValue="engineer"
            style={{ width: 120}}
            onChange={handleChange}
          >
            <Option value="software">Software</Option>
            <Option value="hardware">Hardware</Option>
          </Select>
      </Menu.Item>


        <Menu.Item key="3" style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
          <Select
            defaultValue="option1"
            style={{width: 100,marginRight: 10}}
            onChange={handleChange}
          >
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
          </Select>

          <Select
            defaultValue="option3"
            style={{width: 120}}
            onChange={handleChange}
          >
            <Option value="option3">Option 3</Option>
            <Option value="option4">Option 4</Option>
          </Select>
      </Menu.Item>


      <Menu.Item key="4" className="bottom-right-button">
          <Flex justify="end">
            <Button type="primary">Mon Bouton</Button>
          </Flex>

        </Menu.Item>
            <div className="filtre"> <p>Marque et modele</p> </div>
        <Menu.Item key="6">

          <Flex gap="small">
            <Select
              defaultValue="option1"
              style={{width: 100,marginRight: 10}}
              onChange={handleChange}
            >
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
            </Select>

            <Select
              defaultValue="option3"
              style={{width: 120}}
              onChange={handleChange}
            >
              <Option value="option3">Option 3</Option>
              <Option value="option4">Option 4</Option>
            </Select>
          </Flex>
        </Menu.Item>

        <div className="filtre"> <p>Annee</p> </div>

        <Flex vertical gap={12} style={{ width: 240, marginLeft: 25 }}>
           <Input placeholder="Annee" />
        </Flex>

        <div className="filtre"> <p>Boite de vitesse</p></div>
          <Select
              defaultValue="option1"
              style={{width: 240,marginLeft: 25}}
              onChange={handleChange}
          >
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
          </Select>


        <div className="filtre"> <p>Carburant</p> </div>
            <Select
              defaultValue="option1"
              style={{width: 240,marginLeft: 25}}
              onChange={handleChange}
            >
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
            </Select>
        <div className="filtre"> <p>Type Vehicule</p></div>

        <Select
              defaultValue="option1"
              style={{width: 240,marginLeft: 25}}
              onChange={handleChange}
            >
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
        </Select>
        
        <div className="filtre"> <p>Nombre de place</p> </div>

        <Menu.Item key="5" style={{ marginTop: 10 }}>
          <Flex justify="end">
            <Pagination current={current} onChange={onPageChange} total={50} />
          </Flex>
        </Menu.Item>

      </Menu>
    </Sider>
  );
};

export default Sidebar;
