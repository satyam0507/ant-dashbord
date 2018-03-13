import React, { Component } from 'react';
import { Card } from 'antd';



class NvCard extends Component {
  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }} abc = {this.props.abc}>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
    );
  }
}

export default NvCard;