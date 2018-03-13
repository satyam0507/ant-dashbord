import React, { Component } from 'react';
import AuthRoute from "./AuthRoute";
import User1 from './User1';
import { Layout } from 'antd';
const {Content} = Layout;

class User extends Component {
  render() {
    const {location,isAuthenticated,match} = this.props;
    return (
      <div>
        <p>This is User</p>
            <AuthRoute path={match.url+'/user1'} exact component={User1} location={location} />
        </div>
    );
  }
}

export default User;