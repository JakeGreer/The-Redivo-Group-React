import React, { Component } from "react";
import { connect } from "react-redux";

class Test extends Component {
    state = {};

    render() {
        return(
            <div>
            
            </div>
        )
    }
}

mapStateToProps(state) = () => {
    return;
}

export default connect(
    mapStateToProps,
    null
  )(Test);