import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeCollapse} from '../actions/sidebar';
import { Layout,Icon } from 'antd';
const { Header } = Layout;


class NvHeader extends Component {
    toggle = () => {
        this.props.dispatch((dispatch)=>{ 
          dispatch(changeCollapse(!this.props.collapsed));
        }
        );
      }
    render(){
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
        )
    }
}

export default connect((state)=>{
    return state.sideBar;
  })(NvHeader);