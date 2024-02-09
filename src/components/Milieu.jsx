import React, { useState, useEffect } from 'react';
import { Card, Carousel, Button, Descriptions, Modal, Input } from 'antd';
import { Flex, Rate } from 'antd';
import { HeartFilled, SmileOutlined, ShoppingOutlined } from '@ant-design/icons';
import logoImage from '../pages/ok.jpg';
import Image from '../pages/ok1.jpg';
import "../style/milieu.css";

const Milieu = () => {
  const [rateColor, setRateColor] = useState('black');
  const [buttonCount, setButtonCount] = useState(4);
  const [rateValue, setRateValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRateChange = (value) => {
    const color = value >= 1 ? 'red' : 'black';
    setRateColor(color);
    setRateValue(value);
  };

  useEffect(() => {
    const checkButtonCount = () => {
      const cardWidth = document.querySelector('.ant-card')?.offsetWidth;
      const buttonWidth = document.querySelector('.ant-btn')?.offsetWidth;
      if (cardWidth && buttonWidth) {
        const maxButtonsPerRow = Math.floor(cardWidth / buttonWidth);
        const totalButtons = 4;
        setButtonCount(Math.min(maxButtonsPerRow, totalButtons));
      }
    };

    window.addEventListener('resize', checkButtonCount);
    checkButtonCount();

    return () => window.removeEventListener('resize', checkButtonCount);
  }, []);

  const buttons = Array.from({ length: buttonCount }, (_, index) => (
    <Button key={index + 1} type="primary" style={{ marginTop: 5, marginLeft: 5, width: 'calc(100% / 5)' }}>
      Apple CarPlay {index + 1}
    </Button>
  ));

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Card
      title="Aixam City 6 kW"
      bordered={false}
      style={{
        width: 950,
        height: 350,
      }}
    >
      <div style={{ display: 'flex' }}>
        <Carousel autoplay style={{ width: 300, marginRight: 20 }}>
          <div>
            <img src={logoImage} alt="Logo Image" style={{ width: 300, height: 200 }} />
          </div>
          <div>
            <img src={Image} alt="Image" style={{ width: 300, height: 200 }} />
          </div>
        </Carousel>
        <div style={{ flex: 1, marginBottom: -50 }}>
          <div className="Information" style={{ marginLeft: 5 }}>
            <h2>Description</h2>
            <p>3km   11/2023   8hp   Automatic  Diesel</p>
            <div className="bouton" style={{ marginTop: 2 }}>
              {buttons}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 450 }}>
            <div>
              <p style={{ marginBottom: 0 }}>Iante</p>
                   <Rate
                   character={<HeartFilled />}
                    style={{ color: rateColor }}
                    onChange={handleRateChange}
                    value={rateValue}
                    count={1}
                    allowClear
                  />
                </div>
                <div style={{ marginLeft: 20 }}>
                  <p style={{ marginBottom: 0 }}>10000000Ar</p>
                  <Button type="primary" icon={<ShoppingOutlined />} onClick={() => setIsModalVisible(true)}>
                       Acheter
                  </Button>
                </div>
              </div>


          </div>
        </div>
      </div>

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
    </Card>
  );
};

export default Milieu;
