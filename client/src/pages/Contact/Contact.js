import React, { Component } from 'react'
import  Jumbotron from "../../components/Jumbotron"
import { Container } from "../../components/Grid"
import ContactInfo from "../../components/ContactInfo"
import ContactForm from "../../components/ContactForm"
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            
            <div>
                <Jumbotron 
                    header = "Contact"
                />
                <Container>
                    <div className="row">
                        <div className="col-6">
                            <ContactInfo/>
                        </div>
                        <div className="col-6">
                            <ContactForm/>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Contact