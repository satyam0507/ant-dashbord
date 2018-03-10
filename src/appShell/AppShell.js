import React, { Component } from 'react';
import './../css/App.css';
import AuthRoute from "../routes/AuthRoute";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NvSlider from './NvSlider';
import NvHeader from './NvHeader';


import Home from '../components/Home';
import About from '../components/About';
import Entity from '../components/Entity';
import Intent from '../components/Intent';
import User from '../components/User';

import { Layout } from 'antd';
const {Content} = Layout;

class AppShell extends Component {
  componentDidMount() {
    console.log(this.props);
    if (this.props.isAuthenticated){
      this.props.history.push('/home');
    }else{
      // window.location.href="https://dev1.notifyvisitors.com/";
    }
  }
  render() {
    const {location} = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <NvSlider collapsed={this.props.collapsed} />
        <Layout>
          <NvHeader />
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <AuthRoute path="/home" exact component={Home} location={location} />
              <AuthRoute path="/about" exact component={About} location={location} />
              <AuthRoute path="/entity" exact component={Entity} location={location} />
              <AuthRoute path="/intent" exact component={Intent} location={location} />
              <AuthRoute path="/user" exact component={User} location={location} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

AppShell.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated:state.auth.isAuthenticated,
    collapsed:state.sideBar.collapsed
  }
}

export default connect(mapStateToProps)(AppShell);
