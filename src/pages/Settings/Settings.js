import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
class Settings extends Component {
  render() {
    const { firstName, lastName, username, email, age } = this.props.user;
    return (
      <List>
        <List.Item>FirstName: {firstName}</List.Item>
        <List.Item>lastName: {lastName}</List.Item>
        <List.Item>Username: {username}</List.Item>
        <List.Item>Email: {email}</List.Item>
        <List.Item>Age: {age}</List.Item>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Settings);
