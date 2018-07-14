import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import axios from "axios";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      message: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/mail/send", {
        email: this.state.email,
        first: this.state.first,
        last: this.state.last,
        message: this.state.message
      })
      .then(res => {
        window.location.replace("/contact");
      })
      .catch(err => {
        window.location.replace("/contact");
      });
  };

  render() {
    return (
      <div>
        <Jumbotron header="Contact" />
        <Container>
          <div className="row">
            <div className="col-6">
              <ContactInfo />
            </div>
            <div className="col-6">
              <ContactForm
                state={this.state}
                handleChange={this.handleInputChange}
                handleSubmit={this.handleFormSubmit}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
