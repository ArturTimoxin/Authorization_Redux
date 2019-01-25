import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "../components/Auth/Auth";
import { setTitleAuth } from "../actions/AuthActions";

import "../style/style.css";

class App extends Component {
  render() {
    const { auth, setTitleAuthAction } = this.props;
    return (
      <div className="App">
        <Auth titleAuth={auth.titleAuth} btnAuth={auth.btnAuth} setTitleAuth={setTitleAuthAction} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    auth: store.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTitleAuthAction: titleAuth => dispatch(setTitleAuth(titleAuth)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
