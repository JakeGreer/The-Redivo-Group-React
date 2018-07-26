import React, { Component } from "react";

import { Container } from "../../components/Grid";
import PropertyDirections from "./PropertyDirections";
import LocalHomesSlide from "./LocalHomesSlide";
import "./Properties.css";

class Properties extends Component {
  state = {};
  //TO DO:
  // Create a slider of properties in san clemente area
  renderCarousel = () => {};

  // Create a robust search form to help users search specfic properties
  renderSearchForm = () => {};

  // renderPropDetail = () => {
  //   return (
  //     <PropertyDetail
  //       addressTop={el.address.streetName}
  //       addressBottom={`${el.address.state}, ${el.address.state}, ${
  //         el.address.postalCode
  //       }`}
  //       price={el.listPrice}
  //       propertyImages={el.photos}
  //       sqrft={el.property.lotSize}
  //       bedrooms={el.property.bedrooms}
  //       baths={el.property.bathrooms}
  //       mls={el.listingId}
  //       propStyle={el.property.style}
  //       yearBuilt={el.property.yearBuilt}
  //       propClass="Residential"
  //       county={el.address.county}
  //       subdivision={el.property.subdivision}
  //       lotSize={el.property.lotSize}
  //       stories={el.property.stories}
  //       garage={el.property.garageSpaces}
  //       interiorFeatures={el.property.interiorFeatures}
  //       exteriorFeatures={el.property.exteriorFeatures}
  //       laundryFeat={el.property.laundryFeatures}
  //       bathHalf={el.property.bathsHalf}
  //       lotDim={el.property.lotSizeAreaUnits}
  //       pool={el.property.pool}
  //       bathFull={el.property.bathsFull}
  //       fireplace={el.property.fireplaces}
  //       addRooms={el.property.addtionalRooms}
  //       roof={el.property.roof}
  //       parking={el.property.parking.spaces}
  //       foundation={el.property.foundation}
  //       view={el.property.view}
  //       area={el.mls.area}
  //       accessibility={el.property.accessibility}
  //       parkDesc={el.property.description}
  //       cooling={el.property.cooling}
  //       heating={el.property.heating}
  //       amenities="Club House,Community Pool,Garden/ Greenbelt/ Trails,Playground,Recreation Room,Sauna/ Spa/ Hot Tub"
  //       schoolDist={el.school.district}
  //       elmSchool={el.school.elementarySchool}
  //       midSchool={el.school.middleSchool}
  //       highSchool={el.school.highSchool}
  //     />
  //   );
  // };

  render() {
    return (
      <div>
        <LocalHomesSlide />
        <Container>
          <PropertyDirections />
        </Container>
      </div>
    );
  }
}

export default Properties;
