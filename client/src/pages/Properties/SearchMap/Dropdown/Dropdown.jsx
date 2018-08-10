import React, { Component } from "react";
import "./style.css";

class Dropdown extends Component {
  state = {
    isHovering: false
  };

  renderDropdown = () => {
    if (this.state.isHovering) {
      return (
        <div>
          <div className="map__dropdown">
            <a />
            <div className="radio-wrapper">
              <label>
                Action
                <input className="dropdown-item" type="checkbox" />
              </label>
            </div>
          </div>
        </div>
      );
    }
  };

  hover = () => {
    this.setState({ isHovering: true });
  };

  notHover = () => {
    this.setState({ isHovering: false });
  };

  render() {
    return (
      <div
        className="map__dropdown-menu"
        onMouseEnter={this.hover}
        onMouseLeave={this.notHover}
      >
        <a className="btn map__btn">Property Type</a>
        {this.renderDropdown()}
      </div>
    );
  }
}

export default Dropdown;
