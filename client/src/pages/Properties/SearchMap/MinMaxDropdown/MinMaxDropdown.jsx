import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "./style.css";

class MinMaxDropdown extends Component {
  state = {
    isHovering: false
  };

  renderDropdown = () => {
    const { data } = this.props;
    if (this.state.isHovering && data) {
      return (
        <div>
          <div className="map__dropdown">
            {data.map(title => {
              return (
                <div className="radio-wrapper" key={title}>
                  <label>
                    <h6>{title}</h6>
                    <Field
                      name={title}
                      component="input"
                      type="checkbox"
                      id={title}
                    />
                  </label>
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

// mapStateToProps(state) = () => {
//     return;
// }

export default reduxForm(
  connect(
    null,
    null
  )(MinMaxDropdown)
);
