import React from "react";
import PropTypes from "prop-types";

class Auth extends React.Component {
  log = e => {
    e.preventDefault();
    const titleAuth = "Successful Authorization";
    this.props.setTitleAuth(titleAuth);
  };

  render() {
    const { titleAuth, btnAuth } = this.props;
    return (
      <div className="auth">
        <h1 className="title">{titleAuth}</h1>
        <p className="userData">
          Your name: <br />
          Your lastname: <br />
          Yout login: <br />
          Email: <br />
          Your age:
        </p>
        <form>
          <input type="text" name="email" id="email" placeholder="E-mail" />
          <br />
          <input type="password" name="password" id="password" placeholder="Password" />
          <br />
          <button type="submit" id="log" onClick={this.log}>
            {btnAuth}
          </button>
        </form>
      </div>
    );
  }
}

Auth.propTypes = {
  titleAuth: PropTypes.string.isRequired,
  btnAuth: PropTypes.string.isRequired,
  setTitleAuth: PropTypes.func.isRequired,
};

export default Auth;
