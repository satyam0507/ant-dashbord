import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class NvSlider extends Component {
    state = {
        collapsed: this.props.collapsed,
      };
      componentWillMount(){
            this.state.collapsed = this.props.collapsed;
      };
    render(){
        return (
         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" style={{minHeight: '84px'}} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
            <Link to="/home">
                <Icon type="pie-chart" />
                <span>Home</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
            >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Team</span></span>}
            >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
            </Menu.Item>
            </Menu>
        </Sider>
        )
    }
}

export default NvSlider;