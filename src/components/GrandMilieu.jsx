import React from 'react';
import { Card, Select } from 'antd';
import Milieu from './Milieu';

const { Option } = Select;

const GrandMilieu = () => {
   const handleChange = (value) => {
      console.log(`Option sélectionnée: ${value}`);
   };


return (
    <Card title="Grand Milieu" bordered={false}    
      style={{
        width: 1000,
        marginLeft: 20,
        height: 800,
        marginTop:1,
      }}>

      <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2 style={{ marginRight: 'auto', marginBottom: 0 }}>Resultat:  1007 Annonces</h2>
      <div style={{ marginRight: 10 }}>

      <Select
        defaultValue="option1"
        style={{ width: 100}}
              onChange={handleChange}
      >
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>

      </div>
         <Select
            defaultValue="option1"
            style={{ width: 100}}
            onChange={handleChange}
          >
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
          </Select>
      </div>

       <Milieu />
       <Milieu />
       <Milieu />
    </Card>
   );
};

export default GrandMilieu;
