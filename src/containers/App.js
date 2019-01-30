import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "../components/Auth/Auth";
import Home from "../components/Home/Home";
import { setUserData, login, logout, setError } from "../actions/AuthActions";

import "../style/style.css";

class App extends Component {
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem("user_data"));
    if (user) {
      this.props.setUserDataAction(user);
    }
  }

  render() {
    const { user, error, loginAction, logoutAction, setErrorAction } = this.props;
    return (
      <div className="App">
        {Object.keys(user).length !== 0 ? (
          <Home user={user} logout={logoutAction} />
        ) : (
          <Auth login={loginAction} error={error} setError={setErrorAction} />
        )}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.auth.user,
    error: store.auth.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserDataAction: user => dispatch(setUserData(user)),
    setErrorAction: message => dispatch(setError(message)),
    loginAction: userData => dispatch(login(userData)),
    logoutAction: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
