import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
function App() {
  const { Header, Content, Sider } = Layout;
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Layout  style={{ height: '100vh' }}>
        <Entete />

        <Layout style={{ height: '100vvh' }}>
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
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                // background: colorBgContainer,
                // borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route exact path='/Annonce' element={<Annonces />} />
                <Route exact path='/Log' element={<Log />} />
                <Route exact path='/Favoris' element={<Favoris />} />
                <Route exact path='/LoginPage' element={<LoginPage />}/>
              </Routes>

            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default App
