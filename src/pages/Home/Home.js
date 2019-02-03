import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../../store/configureStore";
import { logout, getAuthorizedUserData } from "../../actions/AuthActions";
import { Image, Menu } from "semantic-ui-react";
function CheckAuthorize({ ...props }) {
  return props.isAuthorized ? (
    <Menu secondary style={{ background: "blue" }}>
      <Image
        style={{ margin: "5px 0 0 15px" }}
        src="https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png"
        avatar
      />
      <Menu.Item style={{ paddingLeft: "10px", color: "white" }}>Hello {props.user.firstName} !</Menu.Item>
      <Menu.Item name="settings" style={{ color: "white" }} onClick={() => history.push("/settings")} />
      <Menu.Item
        position="right"
        style={{ marginRight: "50px", color: "white" }}
        name="logout"
        onClick={props.logout}
      />
    </Menu>
  ) : (
    <Menu secondary style={{ background: "blue" }}>
      <Menu.Item style={{ paddingLeft: "50px", color: "white" }}>You are not authorized</Menu.Item>
      <Menu.Item
        position="right"
        style={{ marginRight: "50px", color: "white" }}
        name="login"
        onClick={() => {
          history.push("/login");
        }}
      />
    </Menu>
  );
}

class Home extends Component {
  componentDidMount() {
    if (this.props.isAuthorized) {
      this.props.getAuthorizedUserDaraAction(localStorage.getItem("user_id"));
    }
  }

  render() {
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
    user: store.auth.user,
    isAuthorized: store.auth.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => dispatch(logout()),
    getAuthorizedUserDaraAction: id => dispatch(getAuthorizedUserData(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
