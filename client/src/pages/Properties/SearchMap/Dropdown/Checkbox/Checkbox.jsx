import React, { Component } from "react";

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  setChecked = e => {
    e.preventDefault();
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <div>
        <input
          className="radio-item"
          value={this.props.item ? this.props.item : null}
          type="checkbox"
          onChange={this.setChecked}
          checked={this.state.isChecked}
        />
      </div>
    );
  }
}

export default Checkbox;
