import React, { Component } from 'react';
import { Card,Button} from 'antd';
import NvCard from './NvCard';



class Home extends Component {
  authUser(){
    console.log('hahaha');
  }
  render() {
    return (
      <div>
        <p>This is Home</p>
        <NvCard abc = "ahhaha"/>
        <Button type="primary" onClick={this.authUser}>Auth</Button>
      </div>
    );
  }
}

export default Home;