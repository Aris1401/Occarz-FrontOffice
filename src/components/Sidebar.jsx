import React, { useEffect, useState } from 'react';
import { Input, Menu, Select, Button, Layout, Pagination, DatePicker } from 'antd';
import { Flex } from 'antd';
import '../style/sidebar.css';
const { Sider } = Layout;
const { Search } = Input;
const { Option } = Select;
import { obtenirAnneeModele, obtenirBoiteDeVitesse, obtenirCarburant, obtenirCategorie, obtenirMarques, obtenirModeles, obtenirPlaces } from "../services/crud/DetailsService";
import MenuItem from 'antd/es/menu/MenuItem';
import { ajouterArrayFiltre, ajouterFiltre, ajouterFiltreAObjet, effacerFiltres } from '../services/filtres/FiltresService';


const Sidebar = () => {
  const [current, setCurrent] = useState(1);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onPageChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const [marques, setMarques] = useState([]);
  const [modeles, setModeles] = useState([]);
  const [anneeModeles, setAnneeModeles] = useState([]);
  const [boiteDeVitesse, setbBoiteDeVitesse] = useState([]);
  const [carburant, setCarburant] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    obtenirMarques().then((data) => {
      setMarques(data.data)
    })

    obtenirModeles().then((data) => {
      setModeles(data.data)
    })

    obtenirAnneeModele().then((data) => {
      setAnneeModeles(data.data)
    })

    obtenirBoiteDeVitesse().then((data) => {
      setbBoiteDeVitesse(data.data)
    })

    obtenirCarburant().then((data) => {
      setCarburant(data.data)
    })

    obtenirCategorie().then((data) => {
      setCategorie(data.data)
    })

    obtenirPlaces().then((data) => {
      setPlaces(data.data)
    })
  }, [])

  return (
    <Sider
      width={300}
      height= {'100vh'}
      style={{ backgroundColor: 'grey' }}
    >

      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0, marginTop: 0, }}
      >

        <div className="filtre">
          <p>Filtres</p>
          <Button type='primary' onClick={(e) => {
            effacerFiltres()
          }}>Effacer filtres</Button>
        </div>


        <Menu.Item key="1">
          <Search placeholder="Mot cle"
            style={{ width: 230 }}
            onChange={(e) => {
              ajouterFiltre("motCle", e.target.value)
            }}
          />
        </Menu.Item>


        <Menu.Item key="2">
          <div className='d-flex gap-1'>
            <Input placeholder='Minimum Prix' onChange={(e) => {
              ajouterFiltre("prixMinimum", e.target.value)
            }}/>

            <Input placeholder='Maximum Prix' onChange={(e) => {
              ajouterFiltre("prixMaximum", e.target.value)
            }} />
          </div>
        </Menu.Item>


        <Menu.Item key="3" style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
          <div className='d-flex gap-1'>
            <DatePicker picker='date' onChange={(e) => ajouterFiltre("datePublicationMinimum", new Date(e['$d']).toISOString().split('T')[0])} />
            <DatePicker picker='date' onChange={(e) => ajouterFiltre("datePublicationMaximum", new Date(e['$d']).toISOString().split('T')[0])} />
          </div>
        </Menu.Item>


        <Menu.Item key="4" className="bottom-right-button">
          <Flex justify="end">
            <Button type="primary">Valider</Button>
          </Flex>

        </Menu.Item>
        <div className="filtre"> <p>Marque et modele</p> </div>
        <Menu.Item key="6">

          <Flex gap="small">
            <Select
              onChange={(value) => {
                ajouterFiltreAObjet("marque", value)
              }}
              size='large'
              style={{ width: '100%' }}
            >
              {marques.map((item, index) => {
                return (
                  <Option value={item.id} key={index}>{item.nom}</Option>
                );
              })}
            </Select>

          </Flex>
        </Menu.Item>

        <Menu.Item>
          <Select
            size='large'
            style={{ width: '100%' }}
            onChange={(value) => {
              ajouterFiltreAObjet("modele", value)
            }}
          >
            {modeles.map((item, index) => {
              return (
                <Option value={item.id} key={index}>{item.nom}</Option>
              );
            })}
          </Select>
        </Menu.Item>

        <div className="filtre"> <p>Annee</p> </div>

        <Flex vertical gap={12} style={{ width: 240, marginLeft: 25 }}>
          <Select
            size='large'
            style={{ width: '100%' }}
            onChange={(value) => {
              ajouterFiltreAObjet("anneeModele", value)
            }}
          >
            {anneeModeles.map((item, index) => {
              return (
                <Option value={item.id} key={index}>{item.annee}</Option>
              );
            })}
          </Select>
        </Flex>

        <div className="filtre"> <p>Boite de vitesse</p></div>
        <Select
          mode='multiple'
          style={{ width: 240, marginLeft: 25 }}
          onChange={(value) => {
              ajouterFiltre('boiteDeVitesses', value)
          }}
        >
          {boiteDeVitesse.map((item, index) => {
            return (
              <Option value={item.id} key={index}>{item.nom}</Option>
            );
          })}
        </Select>


        <div className="filtre"> <p>Carburant</p> </div>
        <Select
          mode='multiple'

          style={{ width: 240, marginLeft: 25 }}
          onChange={(value) => {
            ajouterFiltre('carburants', value)
        }}
        >
          {carburant.map((item, index) => {
            return (
              <Option value={item.id} key={index}>{item.nom}</Option>
            );
          })}
        </Select>
        <div className="filtre"> <p>Type Vehicule</p></div>

        <Select
          mode='multiple'
          style={{ width: 240, marginLeft: 25 }}
          onChange={(value) => {
            ajouterFiltre('categoriesVehicule', value)
        }}
        >
          {categorie.map((item, index) => {
            return (
              <Option value={item.id} key={index}>{item.nom}</Option>
            );
          })}
        </Select>

        <div className="filtre"> <p>Nombre de place</p> </div>

        <Menu.Item key="5" style={{ marginTop: 10 }}>
          <Flex justify="end">
            <Select
              mode='multiple'

              style={{ width: 240 }}
              onChange={(value) => {
                ajouterFiltre('places', value)
            }}
            >
              {places.map((item, index) => {
                return (
                  <Option value={item.id} key={index}>{item.nombre}</Option>
                );
              })}
            </Select>
          </Flex>
        </Menu.Item>

      </Menu>
    </Sider>
  );
};

export default Sidebar;
