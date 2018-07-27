import React from "react";
import { connect } from "react-redux";
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";
import { withRouter } from "react-router";

import defaultStyles from "./defaultStyles.js";
import { postProperties } from "./actions";
import "./Autocomplete.css";

class Autocomplete extends React.Component {
  state = {
    address: "", //autocomplete address
    placeId: "", //autocomplete placeId
    cityString: "", //formatted string with spaces replaced by +'s
    locationObject: {} //autocomplete result after submitting
  };
  //this is checking the <input>
  onChange = (address, placeId) => this.setState({ address, placeId });

  //Sets the state with autocomplete values if you click on an city
  handleSelect = (address, placeId) => {
    this.setState(
      {
        address,
        placeId
      },
      () => null
    );
  };

  //Sets the state with autocomplete values of the top city if press enter
  handleEnter = (address, placeId) => {
    this.setState(
      {
        address,
        placeId
      },
      () => null
    );
  };

  // this fires when you click submit, its what gets the geocode data from google
  // I've already written something take makes the city into a string to add to a
  // query string for simplyRETS
  handleFormSubmit = e => {
    console.log(this.props.history);
    e.preventDefault();
    geocodeByAddress(this.state.address)
      .then(x => {
        this.setState(
          {
            cityString: x[0].formatted_address
              .replace(/\s*,\s*|\s+,/g, " ")
              .replace(/\s/g, "+")
              .toLowerCase()
              .trim()
          }, // Query API for property data to wire into redux
          () =>
            this.props.postProperties({ query: this.state.cityString }, () => {
              console.log(this.props.history);
              if (this.props.home) {
                this.props.history.push("/properties");
              }
            })
        );
      })
      .catch(error => console.error(error));
  };

  //Says what the autocomplete is looking for
  options = {
    types: ["(regions)"]
  };

  // Log error status and clear dropdown when Google Maps API returns an error.
  onError = (status, clearSuggestions) => {
    console.error("Google Maps API returned error with status: ", status);
    clearSuggestions();
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    //dropdown autocomplete
    const renderSuggestion = ({ formattedSuggestion }) => (
      <div>
        <strong>{formattedSuggestion.mainText}</strong>{" "}
        <small>{formattedSuggestion.secondaryText}</small>
      </div>
    );

    return (
      <div className="row mx-auto">
        <div className="col-md-12">
          <form className="" onSubmit={this.handleFormSubmit}>
            <div class="row">
              <div className="col-md-10">
                <PlacesAutocomplete
                  inputProps={inputProps}
                  renderSuggestion={renderSuggestion}
                  onSelect={this.handleSelect}
                  onEnterKeyDown={this.handleEnter}
                  highlightFirstSuggestion={true}
                  onError={this.onError}
                  options={this.options}
                  styles={defaultStyles}
                />
              </div>
              <div className="col-md-2">
                <button className="btn autocomplete-btn" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { postProperties }
)(withRouter(Autocomplete));
