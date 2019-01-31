import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const { isAuthorized } = rest;
      return isAuthorized ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
});

export default connect(mapStateToProps)(ProtectedRoute);
