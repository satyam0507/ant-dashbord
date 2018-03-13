import React, { Component } from 'react';
import './../css/App.css';

import {Route} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import NvSlider from './NvSlider';
import NvHeader from './NvHeader';


import GenerateRoutes from "../routes/GenerateRoutes";
import routes from "../routes/Routes";
// import RedirectToHome from '../components/RedirectToHome';
// import Home from '../components/Home';
// import About from '../components/About';
// import Entity from '../components/Entity';
// import Intent from '../components/Intent';
// import User from '../components/User';

import NvLoader from '../components/NvLoader';

import { Layout } from 'antd';
const {Content} = Layout;

class AppShell extends Component {
  render() {
    const {location,isAuthenticated} = this.props;
      return (
        <div>
          {!isAuthenticated &&  <NvLoader text="Loading..." active={!isAuthenticated} />}
          {isAuthenticated &&
          <Layout style={{ minHeight: '100vh' }}>
              <NvSlider collapsed={this.props.collapsed} />
              <Layout>
                <NvHeader />
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '100vh' }}>
                    {/* <AuthRoute path="/" exact component={RedirectToHome} location={location} />
                    <AuthRoute path="/home" exact component={Home} location={location} />
                    <AuthRoute path="/about" exact component={About} location={location}  />
                    <AuthRoute path="/entity" exact component={Entity} location={location}  />
                    <AuthRoute path="/intent" exact component={Intent} location={location}  />
                    <AuthRoute path="/user" component={User} location={location} /> */}
                    <GenerateRoutes location={location} routes={routes}/>
                </Content>
              </Layout>
          </Layout>
          }
        </div>
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
    collapsed:state.sideBar.collapsed,
    // isAuthenticated:true
  }
}

export default connect(mapStateToProps)(AppShell);
