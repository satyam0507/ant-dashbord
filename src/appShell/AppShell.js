import React, { Component } from 'react';
import './../css/App.css'; 
import {Link,Route,Switch} from 'react-router-dom';
import NvSlider from './NvSlider';

import Home from '../components/Home';
import About from '../components/About';
import Entity from '../components/Entity';
import Intent from '../components/Intent';
import User from '../components/User';


import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;






class AppShell extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <NvSlider collapsed = {this.state.collapsed}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Switch>
                  <Route path="/home" exact component={Home}/>
                  <Route path="/about" exact component={About}/>
                  <Route path="/entity" exact component={Entity}/>
                  <Route path="/intent" exact component={Intent}/>
                  <Route path="/user" exact component={User}/>
              </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default AppShell;
