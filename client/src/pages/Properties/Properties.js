import React, {Component} from 'react'
import Jumbotron from "../../components/Jumbotron"
import {Container} from "../../components/Grid"
import PropTypeSection from "../../components/PropTypeSection"
import CityTypeSection from "../../components/CityTypeSection"
import PropertyDirections from "../../components/PropertyDirections"
import PropertySearchField from "../../components/PropertySearchField"
import PropertyCustomSearch from "../../components/PropertyCustomSearch"
import InitSelector from "../../components/InitSelector"
import PropCardSection from "../../components/PropCardSection"
import PropertyDetail from "../../components/PropertyDetail"
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
        if (this.state.initSelector) {
            return <InitSelector clickFunction={this.handleInitSelector}/>
        }

        if (this.state.propType) {
            return <PropTypeSection clickFunction={this.handlePropType}/>
        }

        if (this.state.cities) {
            return (
                <div>
                    <CityTypeSection clickFunction={this.renderCities}/>
                    <PropertyCustomSearch/>
                    <PropertySearchField queryString={this.state.queryString} typeString={this.state.typeString}/>
                </div>
            )
        }

        if (this.state.cards) {
            return (
                <div>
                    {/*<PropCardSection array={}/>*/}
                    <PropertyCustomSearch/>
                    <PropertySearchField queryString={this.state.queryString} typeString={this.state.typeString}/>
                </div>
            )
        }
    }
    stateCheck = (e) => {
        e.preventDefault()
        console.log('state', this.state)
    }

    renderCities = (e) => {
        let city = e.target.id
        let query = this.state.queryString
        query += city
        this.setState({cities: false, cards: true, queryString: query})
    }

    handlePropType = (e) => {
        let type = e.target.id;
        let query = this.state.typeString

        query += " " + type
        this.setState({queryString: query, propType: false, cities: true})
    }

    handleInitSelector = (e) => {
        let type = e.target.id;
        this.setState({initSelector: false, propType: true, typeString: type})
    }

    handleDetails = (e) => {
        e.preventDefault()
    }

    render() {

        return (
            <div>
                <Jumbotron header="Properties"/>
                <Container>
                    <PropertyDirections/> {this.renderTypes()}
                    {/* ******************************************************************************* */}
                    {/* ******************************************************************************* */}
                    {/* ******************************************************************************* */}
                    {/*I hard coded some examply data from one of the responses i got back to show what it will look like...
                    I think this component will need to get mapped our to every card or another way to go about it would to put this component in a function which the view details button will call. Then this component will be returned with the corresponding information. The second way will probably be more efficient */}
                    <PropertyDetail
                        addressTop="8590 Highland Crest"
                        addressBottom="Dallas, TX 75208"
                        price="$689,000"
                        propertyImages={[
                        "../public/img/house1.jpg",
                        "../public/img/house2.jpg",
                        "../public/img/house3.jpg",
                        "../public/img/house4.jpg",
                        "../public/img/house5.jpg",
                        "../public/img/house7.jpg",
                        "../public/img/house8.jpg"
                    ]}
                        sqrft="3,100"
                        bedrooms="4"
                        baths="2.5"
                        mls="120876543"
                        propStyle="Ranch"
                        yearBuilt="2002"
                        propClass="Residential"
                        county="Dallas"
                        subdivision="Woodlawn"
                        lotSize="9,757 Sq Ft Lot"
                        stories="2"
                        garage="2 Car"
                        interiorFeatures="Drapes/Curtains/Window Cover, Fire/Smoke Alarm, High Ceiling, Island Kitchen"
                        exteriorFeatures="Back Yard Fenced, Covered Patio/Deck, Patio/Deck"
                        laundryFeat="Area,Electric Dryer Hookup,Individual Room,Washer Hookup"
                        bathHalf="5"
                        lotDim="80x135"
                        pool="Yes-Gunite"
                        bathFull="6"
                        fireplace="Yes"
                        addRooms="Recreation, Master Bedroom"
                        roof="Tile"
                        parking="6"
                        foundation= "Slab"
                        view="Golf Course"
                        area="1043"
                        accessibility="Manned Gate"
                        parkDesc="Garage Door Opener,Public,Garage,Side by Side"
                        cooling="Central-Electric"
                        heating="Central-Gas"
                        amenities="Club House,Community Pool,Garden/ Greenbelt/ Trails,Playground,Recreation Room,Sauna/ Spa/ Hot Tub"
                        schoolDist="Richardson ISD"
                        elmSchool="Meriman Park"
                        midSchool="Lake Highlands"
                        highSchool="Lake Highlands High School"/>
                </Container>
            </div>
        )
    }
}

export default Properties