import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/AuthActions";
import "../style/style.css";

function CheckAuthorize({ ...props }) {
  return props.isAuthorized ? (
    <div>
      <p>Hello {props.user.firstName} !</p>
      <button className="logout" onClick={props.logout}>
        Log out
      </button>
    </div>
  ) : (
    <div>
      <p>You are not logged</p> <Link to="/login">Log in </Link>
    </div>
  );
}

class Home extends Component {
  render() {
    console.log(this.props.isAuthorized);
    return (
      <div className="home">
        <CheckAuthorize
          isAuthorized={this.props.isAuthorized}
          user={this.props.user}
          logout={this.props.logoutAction}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.auth.user ? JSON.parse(store.auth.user) : {},
    isAuthorized: store.auth.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return { logoutAction: () => dispatch(logout()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
