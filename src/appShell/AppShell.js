import React, { Component } from 'react';
import './../css/App.css';

import PropTypes from "prop-types";
import {connect} from "react-redux";  

import NvSlider from './NvSlider';
import NvHeader from './NvHeader';


import RouteWithSubRoutes from "../routes/RouteWithSubRoutes";
import routes from "../routes/Routes";

import NvLoader from '../components/NvLoader';  

import { Layout } from 'antd';
const {Content} = Layout;

class AppShell extends Component {
  render() {
    console.log('abc');      
    const {location,isAuthenticated,isAuthCallBack} = this.props;
      return (
        <div>
          {!isAuthenticated &&  <NvLoader text="Loading..." active={!isAuthenticated} />}
          {(isAuthenticated || isAuthCallBack) &&
          <Layout style={{ minHeight: '100vh' }}>
              <NvSlider collapsed={this.props.collapsed} />
              <Layout>
                <NvHeader />
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '100vh' }}>
                  {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} location={location} isAuthenticated={isAuthenticated} />)}
                </Content>
              </Layout>
          </Layout>
           } 
        </div>
      );
  }
}


function mapStateToProps(state) {
  return {
    isAuthenticated:state.auth.isAuthenticated,
    isAuthCallBack:state.auth.isAuthCallBack,
    collapsed:state.sideBar.collapsed,
    // isAuthenticated:true
  }
}

export default connect(mapStateToProps)(AppShell);


AppShell.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAuthCallBack:PropTypes.bool.isRequired,
};