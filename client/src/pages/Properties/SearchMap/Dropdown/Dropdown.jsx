import React, { Component } from "react";
import "./style.css";

class Dropdown extends Component {
  state = {
    isHovering: false
  };

  renderDropdown = () => {
    const { data } = this.props;
    if (this.state.isHovering && data) {
      return (
        <div>
          <div className="map__dropdown">
            {data.map(item => {
              return (
                <div className="row">
                  <div key={item.title} className="radio-wrapper">
                    <div className="col-10">
                      <label>{item.title}</label>
                    </div>
                    <div className="col-2">
                      <input
                        className="radio-item"
                        value={item.value}
                        type="checkbox"
                        onChange
                      />
                    </div>
                  </div>
                </div>
              );
            })}
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
        <a className="btn map__btn">{this.props.children}</a>
        {this.renderDropdown()}
      </div>
    );
  }
}

export default Dropdown;
