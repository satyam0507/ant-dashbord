import React, { Component } from 'react';
import {Button} from 'antd';
import {connect}from 'react-redux';
import NvCard from './NvCard'; 



class Home extends Component {
  authUser(){
    this.props.dispatch({type:'USER_LOGED_OUT'});
  }
  render() {
    return (
      <div>
        <p>This is Home</p>
        <NvCard abc = "ahhaha"/>
        <Button type="primary" onClick={this.authUser.bind(this)}>Log Out</Button>
      </div>
    );
  }
}
function mapStateToProps(state){return state};
// function mapDispatchToProps(dispatch){return};
export default connect(mapStateToProps)(Home);