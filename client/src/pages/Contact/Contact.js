import React, { Component } from 'react'
import  Jumbotron from "../../components/Jumbotron"
import { Container } from "../../components/Grid"
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            
            <div>
                <Jumbotron 
                    header = "Contact"
                />
                <Container>

                </Container>
            </div>
        )
    }
}

export default Contact