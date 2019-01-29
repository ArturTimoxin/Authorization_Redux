import React from "react";

class Home extends React.Component {
  render() {
    const { user, logout } = this.props;
    return (
      <div className="home">
        <h1>Hello {user.firstName} !</h1>
        <ul>
          <li>Lastname: {user.lastName}</li>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>Age: {user.age}</li>
        </ul>
        <button id="logout" onClick={logout}>
          Log out
        </button>
      </div>
    );
  }
}

export default Home;
