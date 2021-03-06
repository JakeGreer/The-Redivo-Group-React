import React, { Component, propTypes } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";

import { fetchCurrentProperty } from "./actions";
import SelectDropdown from "../Properties/SearchMap/SelectDropdown";
import AutoComplete from "../../components/Autocomplete";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PropertyDetail.css";

class PropertyDetail extends Component {
  state = {
    detail: true,
    interior: false,
    exterior: false,
    additional: false
  };

  handleDetailsClick = event => {
    event.preventDefault();
    let selection = event.target.id;
    switch (selection) {
      case "detail":
        this.setState({
          detail: true,
          interior: false,
          exterior: false,
          additional: false
        });
        break;
      case "interior":
        this.setState({
          detail: false,
          interior: true,
          exterior: false,
          additional: false
        });
        break;
      case "exterior":
        this.setState({
          detail: false,
          interior: false,
          exterior: true,
          additional: false
        });
        break;
      case "additional":
        this.setState({
          detail: false,
          interior: false,
          exterior: false,
          additional: true
        });
        break;
    }
  };

  render() {
    // This variable is used under the property details section as an inline styler
    let textStyle = {
      display: "block",
      overflow: "hidden"
    };
    const listPrice = this.props.data.listPrice
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
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
                  {/* <li className="nav-item">
                    <Dropdown data={propTypes}>Property Type</Dropdown>
                  </li>
                  <li className="nav-item">
                    <Dropdown data={propTypes}>Property Type</Dropdown>
                  </li> */}
                </ul>
              </form>
            </div>
            <AutoComplete nav={() => this.props.history.push("/properties")} />
          </div>
        </div>

        <div className="prop-page-wrapper">
          {/* This Row contains the address and the price */}
          <div className="row">
            <div className="col-6">
              <div className="detail-price">$ {listPrice}</div>
              <div className="detail-address">
                <div className="address-top">
                  {this.props.data.address.full}
                </div>
                <div className="address-bottom">
                  {`${this.props.data.address.city}, ${
                    this.props.data.address.state
                  } ${this.props.data.address.postalCode}`}
                </div>
              </div>
              <div className="details-place">The Redivo Group Realty</div>
              <div className="details-phone">949.838.5449</div>
            </div>
            <div className="col-6">
              <div className="redivo-img">
                <div className="realtor-mini">
                  <img
                    className="img-responsive"
                    src="../public/img/Clear-Logo.png"
                    alt=""
                  />
                </div>
                <div className="details-info">
                  <div className="item-id">MLS #: {this.props.data.mlsId}</div>
                  <div className="det-characteristics">
                    <ul>
                      <li>{this.props.data.property.area} S/F</li>
                      <li>{this.props.data.property.bedrooms} Bedrooms</li>
                      <li>{this.props.data.property.bathsFull} Baths</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row: Property details section */}
          <div className="row">
            {/* Temporary Props list for property dertails section...
                propStyle: (single family),  yearBuilt, propClass: (Residential), county, subdivision, bedrooms, baths, lotSize, stories, garage*/}
            {/* Details Section */}
            {/* Carousel*/}
            <div className="col-4 detail-carousel">
              <Carousel
                showArrows={true}
                showStatus={true}
                showIndicators={true}
                showThumbs={true}
                dynamicHeight={true}
              >
                {this.props.data.photos ? (
                  this.props.data.photos.map((e, i) => (
                    <div key={i}>
                      <img className="img-fluid" src={e} />
                    </div>
                  ))
                ) : (
                  <h6 id="nan">No images available</h6>
                )}
              </Carousel>
            </div>
            <div className="col-8">
              <ul className="tabs">
                <li className="active">
                  <a
                    className="styler_bg_color btn disabled"
                    href="#details1"
                    data-toggle="tab"
                    disabled
                  >
                    PROPERTY DETAILS
                  </a>
                </li>
              </ul>
              <div className="tab-content tab-blocks">
                <ul className="info_slides">
                  <li>
                    <a
                      onClick={this.handleDetailsClick}
                      className="styler_color"
                      id="detail"
                    >
                      <i className="fas fa-bars" /> DETAILS
                    </a>

                    {this.state.detail ? (
                      <div className="text" style={textStyle}>
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <div className="left-tab-wrapper">
                              <table className="details-values">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Property Style:</strong>
                                    </td>
                                    <td>{this.props.data.property.style}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Year Built:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.yearBuilt}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Property Class:</strong>
                                    </td>
                                    <td>{this.props.data.agreement}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>County:</strong>
                                    </td>
                                    <td>{this.props.data.geo.county}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Subdivision:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.subdivision}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="right-tab-wrapper">
                              <table className="details-values">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Bedrooms:</strong>
                                    </td>
                                    <td>{this.props.data.property.bedrooms}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Baths:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.bathsFull}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Lot Size:</strong>
                                    </td>
                                    <td>{this.props.data.property.lotSize}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Stories:</strong>
                                    </td>
                                    <td>{this.props.data.property.stories}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Garage:</strong>
                                    </td>
                                    <td>
                                      {
                                        this.props.data.property.parking
                                          .description
                                      }
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </li>
                  <li>
                    <a
                      onClick={this.handleDetailsClick}
                      className="styler_color"
                      id="interior"
                    >
                      <i className="fas fa-bars" />
                      INTERIOR
                    </a>
                    {this.state.interior ? (
                      <div className="text" style={textStyle}>
                        {/* Props List for the Interior Section
                                interiorFeatures, laundryFeat, bathHalf, bathFull, fireplace, addRooms, heating, cooling
                                */}
                        <div className="row">
                          {/* since the response sends back major interior features as one string they will be represented here if they exist while the highlighted points remian in the table */
                          this.props.data.interiorFeatures ? (
                            <div className="interior-det col-md-12">
                              <p>
                                <strong>Interior Features Include: </strong>
                                {this.props.data.property.interiorFeatures}
                              </p>
                            </div>
                          ) : (
                            <div />
                          )}
                          <div className="col-md-6 col-sm-6">
                            <div className="left-tab-wrapper">
                              <table className="details-values">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Laundry Features:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.laundryFeatures}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Baths Half:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.bathsHalf}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Baths Full:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.bathsFull}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Fireplaces:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.fireplaces}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="right-tab-wrapper">
                              <table className="details-values">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Additional Rooms:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.additionalRooms}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Heating:</strong>
                                    </td>
                                    <td>{this.props.data.property.heating}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Cooling:</strong>
                                    </td>
                                    <td>{this.props.data.property.cooling}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </li>
                  <li>
                    <a
                      onClick={this.handleDetailsClick}
                      className="styler_color"
                      id="exterior"
                    >
                      <i className="fas fa-bars" />
                      EXTERIOR
                    </a>
                    {this.state.exterior ? (
                      <div className="text" style={textStyle}>
                        {/* Props Used for the Exterior Section
                                exteriorFeatures, roof, foundation, lotDimensions, pool, parking, garage, accessibility, view */}
                        <div className="row">
                          {/* since the response sends back major interior features as one string they will be represented here if they exist while the highlighted points remian in the table */
                          this.props.data.exteriorFeatures ? (
                            <div className="interior-det col-md-12">
                              <p>
                                <strong>Exterior Features Include: </strong>
                                {this.props.data.property.exteriorFeatures}
                              </p>
                            </div>
                          ) : (
                            <div />
                          )}
                          <div className="col-md-6 col-sm-6">
                            <div className="left-tab-wrapper">
                              <table className="details-values">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Roof:</strong>
                                    </td>
                                    <td>{this.props.data.property.roof}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Foundation:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.foundation}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Lot Dimensions:</strong>
                                    </td>
                                    <td>{this.props.data.property.lotSize}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Pool:</strong>
                                    </td>
                                    <td>{this.props.data.property.pool}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="right-tab-wrapper">
                              <table className="details-values">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Parking Spaces:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.parking.spaces}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Garage Spaces:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.garageSpaces}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Accessibility:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.accessibility}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>View:</strong>
                                    </td>
                                    <td>{this.props.data.property.view}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </li>
                  <li>
                    <a
                      onClick={this.handleDetailsClick}
                      className="styler_color"
                      id="additional"
                    >
                      <i className="fas fa-bars" />
                      ADDITIONAL DETAILS
                    </a>
                    {this.state.additional ? (
                      <div className="text" style={textStyle}>
                        {/* props used for the Additional Details section
                                     parkDesc, yearBuilt, heating, subdivision, schoolDist, elmSchool, midSchool, highSchool, amenities*/}
                        <div className="row">
                          {/* since the response sends back major interior features as one string they will be represented here if they exist while the highlighted points remian in the table */
                          this.props.data.amenities ? (
                            <div className="interior-det col-md-12">
                              <p>
                                <strong>Property amenities include: </strong>
                                {this.props.data.property.construction}
                              </p>
                            </div>
                          ) : (
                            <div />
                          )}
                          <div className="col-md-6 col-sm-6">
                            <div className="left-tab-wrapper">
                              <table className="details-values">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Parking Description:</strong>
                                    </td>
                                    <td>
                                      {
                                        this.props.data.property.parking
                                          .description
                                      }
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Year Built:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.yearBuilt}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Property Area:</strong>
                                    </td>
                                    <td>{this.props.data.property.area}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Subdivision:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.property.subdivision}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="right-tab-wrapper">
                              <table className="details-values">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>School District:</strong>
                                    </td>
                                    <td>{this.props.data.school.district}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Elementary School:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.school.elementarySchool}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Middle School:</strong>
                                    </td>
                                    <td>
                                      {this.props.data.school.middleSchool}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>High School:</strong>
                                    </td>
                                    <td>{this.props.data.school.highSchool}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const data = state.SearchedData.data.find(
    place => place.mlsId == props.match.params.id
  );
  return { data };
}

export default connect(
  mapStateToProps,
  { fetchCurrentProperty }
)(PropertyDetail);
