import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/AuthActions";
import { Redirect } from "react-router-dom";
import { Button, Form, Grid, Header, Segment, Icon } from "semantic-ui-react";
import { history } from "../../store/configureStore";
import { LOGIN_ERROR } from "../../constants/constants";
const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

class Auth extends Component {
  state = {
    email: "",
    password: "",
  };

  log = e => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      if (emailRegExp.test(this.state.email)) {
        let userAuthData = {
          email: this.state.email,
          password: this.state.password,
        };
        this.props.loginAction(userAuthData);
      } else {
        this.props.loginErrorAction("Enter a valid email");
      }
    } else {
      this.props.loginErrorAction("Enter email and password");
    }
  };

  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.isAuthorized) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="auth" style={{ height: "100vh" }}>
          <Icon
            name="home"
            size="huge"
            color="grey"
            onClick={() => {
              history.push("/");
            }}
            style={{ cursor: "pointer" }}
          />
          <Grid textAlign="center" style={{ height: "90%" }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="blue" textAlign="center">
                Log-in to your account
              </Header>
              <Form size="large" onSubmit={this.log}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    name="email"
                    iconPosition="left"
                    placeholder="E-mail address"
                    onChange={this.changeInput}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.changeInput}
                  />
                  <Button type="submit" loading={this.props.loading} color="blue" fluid size="large">
                    Login
                  </Button>
                  <p id="error" style={{ color: "red" }}>
                    {this.props.error}
                  </p>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
  }
}

const mapStateToProps = store => {
  return { error: store.auth.error, loading: store.auth.loading, isAuthorized: store.auth.isAuthorized };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: userData => dispatch(login(userData)),
    loginErrorAction: message => dispatch({ type: LOGIN_ERROR, payload: message }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
