import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "../components/Auth/Auth";
import Reg from "../components/Reg/Reg";
import { setTitleAuth, setTitleReg } from "../actions/PageActions";

import "../style/style.css";

class App extends Component {
  render() {
    const { auth, reg, setTitleAuthAction, setTitleRegAction } = this.props;
    return (
      <div className="App">
        <Auth titleAuth={auth.titleAuth} btnAuth={auth.btnAuth} setTitleAuth={setTitleAuthAction} />
        <Reg titleReg={reg.titleReg} btnReg={reg.btnReg} setTitleReg={setTitleRegAction} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    auth: store.auth,
    reg: store.reg,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTitleAuthAction: titleAuth => dispatch(setTitleAuth(titleAuth)),
    setTitleRegAction: titleReg => dispatch(setTitleReg(titleReg)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
