import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import SelectDropdown from "./SelectDropdown";
import MinMaxDropdown from "./MinMaxDropdown";
import AutoComplete from "../../../components/Autocomplete";
import "./style.css";

class SearchMap extends Component {
  state = {};
  //   onSubmit(values) {
  //     this.props.createPost(values, () => {
  //       this.props.history.push("/");
  //     });
  //   }

  render() {
    const { handleSubmit } = this.props;
    const propTypes = [
      { title: "Residential", action: this.props.actionName || null },
      { title: "Commercial", action: this.props.actionName || null },
      { title: "Industrial", action: this.props.actionName || null }
    ];

    return (
      <div>
        <div className="map-wrapper">
          <div className="container">
            <div className="row">
              <form>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <SelectDropdown data={propTypes}>
                      Property Type
                    </SelectDropdown>
                  </li>
<<<<<<< HEAD
=======
                  <li className="nav-item">
                    <SelectDropdown data={propTypes}>
                      Property Type
                    </SelectDropdown>
                  </li>
>>>>>>> a14224cf9d6ab6600ee47a77af1db07b55881e66
                  {/* <li className="nav-item">
                    <Dropdown data={propTypes}>Property Type</Dropdown>
                  </li>
                  <li className="nav-item">
                    <Dropdown data={propTypes}>Property Type</Dropdown>
                  </li> */}
                </ul>
              </form>
            </div>
            <AutoComplete />
            <div className="row" />
          </div>
          <Map
            google={this.props.google}
            zoom={14}
            style={{
              width: "50%",
              height: "50%",
              marginLeft: -25,
              marginTop: 25
            }}
          >
            <Marker onClick={this.onMarkerClick} name={"Current location"} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>Test</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default connect(
  null,
  null
)(SearchMap);
=======
export default GoogleApiWrapper({
  apiKey: "AIzaSyB_-MtvPVq_lBduxbhguMF0qSgv2wBKdH8"
})(
  connect(
    null,
    null
  )(SearchMap)
);
>>>>>>> a14224cf9d6ab6600ee47a77af1db07b55881e66
