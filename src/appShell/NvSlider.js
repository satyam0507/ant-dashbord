import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class NvSlider extends Component {
    render(){
        return (
         <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
            <div className="logo" style={{minHeight: '84px'}} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
                <Link to="/home">
                    <Icon type="pie-chart" />
                    <span>Home</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/about">
                    <Icon type="desktop" />
                    <span>About</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/user">
                    <Icon type="file" />
                    <span>User</span>
                </Link>
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
            >
                <Menu.Item key="4">Tom</Menu.Item>
                <Menu.Item key="5">Bill</Menu.Item>
                <Menu.Item key="6">Alex</Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>
        )
    }
}

export default connect((state)=>{
    return state.sideBar;
  })(NvSlider);