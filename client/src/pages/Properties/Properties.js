import React, { Component } from 'react'
import  Jumbotron from "../../components/Jumbotron"
import { Container } from "../../components/Grid"
import "./Properties.css";

class Properties extends Component {
    render() {
        return (
            
            <div>
                <Jumbotron 
                    header = "Properties"
                />
                <Container>

                </Container>
            </div>
        )
    }
}

export default Properties