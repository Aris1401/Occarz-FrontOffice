import React, { useState, useEffect } from 'react';
import { Card, Carousel, Button, Descriptions, Modal, Input, Tag } from 'antd';
import { Flex, Rate } from 'antd';
import { HeartFilled, SmileOutlined, ShoppingOutlined } from '@ant-design/icons';
import logoImage from '../pages/ok.jpg';
import Image from '../pages/ok1.jpg';


const Milieu = ( props ) => {
  const [rateColor, setRateColor] = useState('black');
  const [buttonCount, setButtonCount] = useState(4);
  const [rateValue, setRateValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Annonce
  const { annonce } = props;

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
        const totalButtons = 7;
        setButtonCount(Math.min(maxButtonsPerRow, totalButtons));
      }
    };
    window.addEventListener('resize', checkButtonCount);
    checkButtonCount();
    return () => window.removeEventListener('resize', checkButtonCount);
  }, []);



  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleContacterVendeur = () => {

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        bordered={false}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >

        <div style={{ display: 'flex' }}>
          <Carousel autoplay style={{ width: 300, marginRight: 20 }}>
            <div> <img src={logoImage} alt="Logo Image" style={{ width: 300, height: 200 }} /> </div>
            <div> <img src={Image} alt="Image" style={{ width: 300, height: 200 }} /> </div>
          </Carousel>

          <div style={{ flex: 1 }}>
            <div className="Information" style={{ marginLeft: 5 }}>
              <h2>{ annonce && annonce.titre }</h2>
              <p>{ annonce && annonce.description }</p>

              <div className="bouton" style={{ marginTop: 2 }}> {
                annonce && annonce.labels.map((label, index) => {
                  return <Tag key={index} >{ label }</Tag>
                })
              } </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>

                <div>
                  <p>{ annonce && ( annonce.utilisateur.nom + " " + annonce.utilisateur.prenom) }</p>
                  <Rate
                    character={<HeartFilled />}
                    style={{ color: rateColor }}
                    onChange={handleRateChange}
                    value={rateValue}
                    count={1}
                    allowClear
                  />
                </div>

                <div>
                  <h6>{ annonce && annonce.prix } Ar</h6>
                  <Button type="primary" icon={<ShoppingOutlined />} onClick={(e) => {
                    handleContacterVendeur()
                  } }>Acheter</Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

};

export default Milieu;
