import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AutoComplete from "../../../components/Autocomplete";

class SearchMap extends Component {
  renderField = field => {
    return (
      <div>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  };

  //   onSubmit(values) {
  //     this.props.createPost(values, () => {
  //       this.props.history.push("/");
  //     });
  //   }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form>
        <AutoComplete />
      </form>
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
