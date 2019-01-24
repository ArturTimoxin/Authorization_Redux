import React from "react";
import PropTypes from "prop-types";

class Reg extends React.Component {
  reg = e => {
    const titleReg = "Successful Registration";
    this.props.setTitleReg(titleReg);
  };

  render() {
    const { titleReg, btnReg } = this.props;
    return (
      <div className="reg">
        <h1 className="title">{titleReg}</h1>
        <button type="submit" id="log" onClick={this.reg}>
          {btnReg}
        </button>
      </div>
    );
  }
}

Reg.propTypes = {
  titleReg: PropTypes.string.isRequired,
  btnReg: PropTypes.string.isRequired,
  setTitleReg: PropTypes.func.isRequired,
};

export default Reg;
