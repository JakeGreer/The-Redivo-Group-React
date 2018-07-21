import React, { Component } from "react";
import axios from "axios";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import PropTypeSection from "./PropTypeSection";
import CityTypeSection from "./CityTypeSection";
import PropertyDirections from "./PropertyDirections";
import PropertySearchField from "./PropertySearchField";
import PropertyCustomSearch from "./PropertyCustomSearch";
import InitSelector from "./InitSelector";
import PropertyDetail from "./PropertyDetail";
import PropCardSection from "./PropCardSection";
import "./Properties.css";

class Properties extends Component {
  state = {};

  renderPropDetail = () => {
    return (
      <PropertyDetail
        addressTop={el.address.streetName}
        addressBottom={`${el.address.state}, ${el.address.state}, ${
          el.address.postalCode
        }`}
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
        foundation={el.property.foundation}
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
        highSchool={el.school.highSchool}
      />
    );
  };

  render() {
    return (
      <div>
        <Jumbotron header="Properties" />
        <Container>
          <PropertyDirections />
          {this.renderTypes()}
        </Container>
      </div>
    );
  }
}

export default Properties;
