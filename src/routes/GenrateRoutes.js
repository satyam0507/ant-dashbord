import React from 'react';
import AuthRoute from "../components/AuthRoute"; 
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route} from "react-router-dom";
import RedirectToLogin from '../components/RedirectToLogin'; 

const RouteWithSubRoutes  = (route,location) => (
    <AuthRoute
      path={route.path}
      exact = {route.exact}
      component={route.component}
      routes={route.routes}
      location={location}
    />
  );

  <Route
  {...rest}
  render={props =>
    isAuthenticated ? <Component {...props} /> : <RedirectToLogin/>
  }
/>

const GenRoute = ()=>(
    {isAuthenticated,routes,location}
    <div>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} location={location} />)}
    </div>
)

AuthRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };
  
  function mapStateToProps(state) {
    return {
      isAuthenticated:state.auth.isAuthenticated
    };
  };

export default connect(mapStateToProps)(GenRoute);