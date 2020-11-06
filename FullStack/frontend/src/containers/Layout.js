import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'

const { Header, Content, Footer } = Layout;

const CustomLayout=(props)=> {
    return(<Layout className="layout">
        {
          props.isAuthenticated ? 
          <div>
          <Header>
            <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to="/">HOME</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/login">LOGOUT</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{props.children}</div>
          </Content>
          </div>
          
          :
          <div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="2"><Link to="/login">LOGIN</Link></Menu.Item>
            </Menu>
          <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">{props.children}</div>
          </Content>
          </div>
          }
    
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>)
}
  
export default CustomLayout;