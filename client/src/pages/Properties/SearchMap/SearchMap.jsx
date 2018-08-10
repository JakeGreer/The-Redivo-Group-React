import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dropdown from "./Dropdown";
import AutoComplete from "../../../components/Autocomplete";
import "./style.css";

class SearchMap extends Component {
  state = {};
  //   onSubmit(values) {
  //     this.props.createPost(values, () => {
  //       this.props.history.push("/");
  //     });
  //   }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="map-wrapper">
          <div className="container">
            <div className="row">
              <form>
                <ul>
                  <li>
                    <Dropdown />
                  </li>
                </ul>
              </form>
            </div>
            <AutoComplete />
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    null
  )(SearchMap)
);
