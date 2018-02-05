import React, { Component } from 'react'
import  Jumbotron from "../../components/Jumbotron"
import { Container } from "../../components/Grid"
import PropTypeSection from "../../components/PropTypeSection"
import PropertyDirections from "../../components/PropertyDirections"
import "./Properties.css";

class Properties extends Component {

    constructor(props) {
        super(props)
        this.state = {
            propType: true
        }
    }

    renderTypes = () => {
        if( this.state.propType ) {
            return <PropTypeSection/>
        }
    }

    handlePropType = (text, e) => {
        this.setState({ propType: false })
    }

    render() {
        return (
            <div>
                <Jumbotron header = "Properties"/>
                <Container>
                    <PropertyDirections/>
                    { this.renderTypes() }
                </Container>
            </div>
        )
    }
}

export default Properties