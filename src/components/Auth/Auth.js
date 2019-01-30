import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/AuthActions";
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

class Auth extends Component {
  state = {
    email: "",
    password: "",
  };

  log = e => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      if (emailPattern.test(this.state.email)) {
        let userAuthData = {
          email: this.state.email,
          password: this.state.password,
        };
        this.props.loginAction(userAuthData);
      } else {
        this.props.setError("Enter a valid email");
      }
    } else {
      this.props.setError("Enter email and password");
    }
  };

  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="auth">
        <h1 className="title">Authorization</h1>
        <form onSubmit={this.log}>
          <input type="type" name="email" id="email" placeholder="E-mail" onChange={this.changeInput} />
          <br />
          <input type="password" name="password" id="password" placeholder="Password" onChange={this.changeInput} />
          <br />
          <p id="error" style={{ color: "red" }}>
            {this.props.error}
          </p>
          <button type="submit" id="login">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { loginAction: userData => dispatch(login(userData)) };
};

export default connect(mapDispatchToProps)(Auth);
