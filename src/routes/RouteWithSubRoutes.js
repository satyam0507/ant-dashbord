import React from 'react';
// import PropTypes from "prop-types";
import { Route} from "react-router-dom";
import RedirectToLogin from '../components/RedirectToLogin'; 

const RouteWithSubRoutes  = route => {
  return(
  <Route
  path={route.path}
  exact={route.exact}
  render={props=>
    route.isAuthenticated?<route.routecomponent {...props} routes={route.routes} isAuthenticated={route.isAuthenticated} />:<RedirectToLogin/>
  }
/>
);
}

export default RouteWithSubRoutes;