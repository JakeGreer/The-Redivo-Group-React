import React from "react";
import "./ContactForm.css";

const ContactForm = props => {
  return (
    <div>
      <div className="discover-text contact-info">
        <div className="discover-h-container">
          <h1 className="discover-h-b">CONTACT FORM</h1>
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              value={props.state.first}
              className="form-control"
              name="first"
              placeholder="First name"
              onChange={props.handleChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={props.state.last}
              className="form-control"
              name="last"
              placeholder="Last name"
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <input
            type="text"
            value={props.state.email}
            id="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={props.handleChange}
          />
        </div>
        <div className="row">
          <textarea
            type="text"
            value={props.state.message}
            id="content"
            className="form-control"
            name="message"
            placeholder="Comments"
            onChange={props.handleChange}
          />
        </div>
        <div className="row">
          <div className="col-5" />
          <div className="col-2">
            <button
              onClick={props.handleSubmit}
              className="btn submit-btn btn-lg"
            >
              Submit
            </button>
          </div>
          <div className="col-5" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
