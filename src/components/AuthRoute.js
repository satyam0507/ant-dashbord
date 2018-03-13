import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route} from "react-router-dom";
import RedirectToLogin from '../components/RedirectToLogin';


const AuthRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <RedirectToLogin/>
    }
  />
);

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated:state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(AuthRoute);