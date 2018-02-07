import React, { Component } from 'react'
import  Jumbotron from "../../components/Jumbotron"
import { Container } from "../../components/Grid"
import PropTypeSection from "../../components/PropTypeSection"
import CityTypeSection from "../../components/CityTypeSection"
import PropertyDirections from "../../components/PropertyDirections"
import PropertySearchField from "../../components/PropertySearchField"
import PropertyCustomSearch from "../../components/PropertyCustomSearch"
import InitSelector from "../../components/InitSelector"
import PropCardSection from "../../components/PropCardSection"
import "./Properties.css";

class Properties extends Component {

    constructor(props) {
        super(props)
        this.state = {
            initSelector: true,
            propType: false,
            displayDetails: false,
            cities: false,
            cards: false,
            queryString: "",
            typeString: ""
        }
    }

    renderTypes = () => {
        if(this.state.initSelector) {
            return <InitSelector clickFunction={ this.handleInitSelector }/>
        }

        if( this.state.propType ) {
            return <PropTypeSection clickFunction={ this.handlePropType }/>
        }
        
        if( this.state.cities ) {
            return (
                <div>
                    <CityTypeSection clickFunction={ this.renderCities }/>
                    <PropertyCustomSearch/>
                    <PropertySearchField/>
                </div>)
        }

        if( this.state.cards) {
            return (
                <div>
                    {/*<PropCardSection array={}/>*/}
                    <PropertyCustomSearch/>
                    <PropertySearchField/>
                </div>)
        }
    }

    renderCities = (e) => {
        let city = e.target.id
        let query = this.state.queryString
        query += city
        this.setState({ cities: false, cards: true, queryString: query })
    }


    handlePropType = (e) => {
        let type = e.target.id;
        let query = this.state.typeString

        query += " " + type
        this.setState({ queryString: query, propType: false, cities: true })
    }

    handleInitSelector = (e) => {
        let type = e.target.id;
        this.setState({ initSelector: false, propType: true, typeString: type })
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
                </Container>
            </div>
        )
    }
}

export default Properties