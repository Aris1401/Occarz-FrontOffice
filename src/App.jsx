import { useState } from 'react'
import './App.css'
import Annonces from './pages/Annonces'
import Entete from './components/Entete'
import { Breadcrumb, Layout, Menu, Modal } from 'antd'
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'

import GrandMilieu from './components/GrandMilieu'
import LoginPage from './components/LoginPage'

import Log from './pages/Log'
import Favoris from './pages/Favoris'
import MesAnnonces from './pages/MesAnnonces'
import Mess from './pages/Mess'
function App() {
  const { Header, Content, Sider } = Layout;
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout  style={{ height: '100vh' }}>
        <Entete />

        <Layout style={{ height: '100vh' }}>
          <Sidebar />
          
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
          
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >

          </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
              }}
            >

              <Routes>
                <Route exact path='/LoginPage' element={<LoginPage />}/>
              <Route exact path='/' element={<Annonces />} />
              <Route exact path='/Log' element={<Log />} />
              <Route exact path='/Favoris' element={<Favoris />} />
              <Route exact path='/MesAnnonces' element={<MesAnnonces />} />
              <Route exact path='/Mess' element={<Mess />} />
            </Routes>

            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default App
