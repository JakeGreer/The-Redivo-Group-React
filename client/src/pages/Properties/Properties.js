import React, {Component} from 'react'
import axios from "axios"
import Jumbotron from "../../components/Jumbotron"
import {Container} from "../../components/Grid"
import PropTypeSection from "../../components/PropTypeSection"
import CityTypeSection from "../../components/CityTypeSection"
import PropertyDirections from "../../components/PropertyDirections"
import PropertySearchField from "../../components/PropertySearchField"
import PropertyCustomSearch from "../../components/PropertyCustomSearch"
import InitSelector from "../../components/InitSelector"
import PropertyDetail from "../../components/PropertyDetail"
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
            selectedProp: null,
            queryString: "",
            typeString: "",
            data: []
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
                    <PropCardSection array={this.state.data} handleDetails = {this.handleDetails}/>
                    <PropertyCustomSearch/>
                    <PropertySearchField handleSearch={this.grabDataAndDisplayCards} queryString={this.state.queryString} typeString={this.state.typeString}/>
                </div>
            )
        }

        if(this.state.displayDetails) {
            let el = this.state.data[this.state.selectedProp]
            return (
                <PropertyDetail
                    addressTop={el.address.streetName}
                    addressBottom={el.address.state + ", " + el.address.state + " " + el.address.postalCode}
                    price={el.listPrice}
                    propertyImages={el.photos}
                    sqrft={el.property.lotSize}
                    bedrooms={el.property.bedrooms}
                    baths={el.property.bathrooms}
                    mls={el.listingId}
                    propStyle={el.property.style}
                    yearBuilt={el.property.yearBuilt}
                    propClass="Residential"
                    county={el.address.county}
                    subdivision={el.property.subdivision}
                    lotSize={el.property.lotSize}
                    stories={el.property.stories}
                    garage={el.property.garageSpaces}
                    interiorFeatures={el.property.interiorFeatures}
                    exteriorFeatures={el.property.exteriorFeatures}
                    laundryFeat={el.property.laundryFeatures}
                    bathHalf={el.property.bathsHalf}
                    lotDim={el.property.lotSizeAreaUnits}
                    pool={el.property.pool}
                    bathFull={el.property.bathsFull}
                    fireplace={el.property.fireplaces}
                    addRooms={el.property.addtionalRooms}
                    roof={el.property.roof}
                    parking={el.property.parking.spaces}
                    foundation= {el.property.foundation}
                    view={el.property.view}
                    area={el.mls.area}
                    accessibility={el.property.accessibility}
                    parkDesc={el.property.description}
                    cooling={el.property.cooling}
                    heating={el.property.heating}
                    amenities="Club House,Community Pool,Garden/ Greenbelt/ Trails,Playground,Recreation Room,Sauna/ Spa/ Hot Tub"
                    schoolDist={el.school.district}
                    elmSchool={el.school.elementarySchool}
                    midSchool={el.school.middleSchool}
                    highSchool={el.school.highSchool}/>
            )
        }
    }

    renderCities = (e) => {
        let city = e.target.id
        let query = this.state.queryString
        query += city
        this.grabDataAndDisplayCards(query, this.state.typeString)
        .then( res => {
        })
        .then( res =>{

        })
        this.setState({cities: false, cards: true, queryString: city})
    }

    grabDataAndDisplayCards = (queryString, typeString) => {
        return new Promise((res, rej) => {
            axios.post('/api/user/search', {
                query: queryString,
                searchType: typeString
            })
            .then( (response) => {
                this.setState({data: response.data})
            })
            .catch( (error) => {
                console.log(error);
                rej(error)
            });
        })

    }

    handlePropType = (e) => {
        let type = e.target.id;
        let query = this.state.typeString

        query += type
        this.setState({typeString: query, propType: false, cities: true})
    }

    handleInitSelector = (e) => {
        let type = e.target.id + "+";
        this.setState({initSelector: false, propType: true, typeString: type})
    }

    handleDetails = (e) => {
        e.preventDefault()

        this.setState({selectedProp: e.target.id, displayDetails: true, cards: false})
    }

    render() {

        return (
            <div>
                <Jumbotron header="Properties"/>
                <Container>
                    <PropertyDirections/>
                    {this.renderTypes()}
                </Container>
            </div>
        )
    }
}

export default Properties