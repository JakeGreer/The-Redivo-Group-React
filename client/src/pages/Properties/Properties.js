import React, { Component } from 'react'
import  Jumbotron from "../../components/Jumbotron"
import { Container } from "../../components/Grid"
import PropTypeSection from "../../components/PropTypeSection"
import PropertyDirections from "../../components/PropertyDirections"
import Card from "../../components/Card"
import "./Properties.css";

class Properties extends Component {

    constructor(props) {
        super(props)
        this.state = {
            propType: true,
            displayDetails: false
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

    handleDetails = (e) => {
        e.preventDefault()


    }

    render() {
        return (
            <div>
                <Jumbotron header = "Properties"/>
                <Container>
                    <PropertyDirections/>
                    { this.renderTypes() }
                    <Card
                        src = "../public/img/house1.jpg"
                        title = "Pool & Spa"
                        price = "689,000" 
                        address = "8950 Highland Crest Dallas, TX 75208"
                        sqrft = "3,100"
                        bedrooms = "4"
                        baths = "2.5"
                    />
                </Container>
            </div>
        )
    }
}

export default Properties