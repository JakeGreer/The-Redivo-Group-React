import React, { Component } from "react";

import { Container } from "../../components/Grid";
import LocalHomesSlide from "./LocalHomesSlide";
import SearchMap from "./SearchMap";
import "./Properties.css";

class Properties extends Component {
  state = {};
  //TO DO:
  // Create a slider of properties in san clemente area
  renderCarousel = () => {};

  // Create a robust search form to help users search specfic properties
  renderSearchForm = () => {};

  render() {
    return (
      <div>
        <SearchMap />
        <LocalHomesSlide />
      </div>
    );
  }
}

export default Properties;
