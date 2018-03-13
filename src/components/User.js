import React,{Component}from 'react';
// import AuthRoute from "./AuthRoute";
import RouteWithSubRoutes from "../routes/RouteWithSubRoutes";

class User extends Component {
  render(){
    let {routes,location,isAuthenticated} = this.props;
      return(
          <div>
            <p>This is User</p>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} location={location} isAuthenticated={isAuthenticated} />)}
            </div>
    )
  }
}

export default User;