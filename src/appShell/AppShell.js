import React, { Component } from 'react';
import './../css/App.css'; 
import {Route,Switch} from 'react-router-dom';
import NvSlider from './NvSlider';
import NvHeader from './NvHeader';


import Home from '../components/Home';
import About from '../components/About';
import Entity from '../components/Entity';
import Intent from '../components/Intent';
import User from '../components/User';

import { Layout} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class AppShell extends Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <NvSlider collapsed={this.props.collapsed}/>
        <Layout>
          <NvHeader/>
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
