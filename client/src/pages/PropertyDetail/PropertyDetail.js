import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";

import { fetchCurrentProperty } from "./actions";
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
    console.log(this.props.data);
    // This variable is used under the property details section as an inline styler
    let textStyle = {
      display: "block",
      overflow: "hidden"
    };
    return (
      <div className="container">
        <div className="row">
          {/**************************************************^*******/
          /**********************************************************/}
          {/* This Row contains the address and the price */}
          <div className="row">
            <div className="col-md-8 col-sm-8">
              <div className="detail-address">
                <div className="address-top">{this.props.data.addressTop}</div>
                <div className="address-bottom">
                  {this.props.data.addressBottom}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="detail-price">{this.props.data.price}</div>
            </div>
          </div>

          {/**************************************************^*******/
          /**********************************************************/}
          <div className="row">
            {/* Carousel*/}
            <div className="col-md-8 detail-carousel">
              <Carousel
                showArrows={true}
                showStatus={true}
                showIndicators={true}
                showThumbs={true}
                dynamicHeight={true}
              >
                {this.props.data.propertyImages ? (
                  this.props.data.propertyImages.map((e, i) => (
                    <div key={i}>
                      <img className="img-fluid" src={e} />
                    </div>
                  ))
                ) : (
                  <h6 id="nan">No images available</h6>
                )}
              </Carousel>
            </div>

            {/* Sidebar - Main Characteristics */}
            <div className="col-md-4 col-sm-4">
              <div className="details-info">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="item-id">
                      MLS #: {this.props.data.mlsId}
                    </div>
                    <div className="det-characteristics">
                      <ul>
                        <li>{this.props.data.sqrft} S/F</li>
                        <li>{this.props.data.bedrooms} Bedrooms</li>
                        <li>{this.props.data.baths} Baths</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="realtor-mini">
                      <img
                        className="img-responsive"
                        src="../public/img/Clear-Logo.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="details-place">The Redivo Group Realty</div>
                    <div className="details-phone">949.838.5449</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row */}
          <div className="row">
            {/* Temporary Props list for property dertails section...
                propStyle: (single family),  yearBuilt, propClass: (Residential), county, subdivision, bedrooms, baths, lotSize, stories, garage*/}
            {/* Details Section */}
            <div className="col-md-12">
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
                                    <td>{this.props.data.propStyle}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Year Built:</strong>
                                    </td>
                                    <td>{this.props.data.yearBuilt}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Property Class:</strong>
                                    </td>
                                    <td>{this.props.data.propClass}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>County:</strong>
                                    </td>
                                    <td>{this.props.data.county}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Subdivision:</strong>
                                    </td>
                                    <td>{this.props.data.subdivision}</td>
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
                                    <td>{this.props.data.bedrooms}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Baths:</strong>
                                    </td>
                                    <td>{this.props.data.baths}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Lot Size:</strong>
                                    </td>
                                    <td>{this.props.data.lotSize}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Stories:</strong>
                                    </td>
                                    <td>{this.props.data.stories}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Garage:</strong>
                                    </td>
                                    <td>{this.props.data.garage}</td>
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
                                {this.props.data.interiorFeatures}
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
                                    <td>{this.props.data.laundryFeat}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Baths Half:</strong>
                                    </td>
                                    <td>{this.props.data.bathHalf}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Baths Full:</strong>
                                    </td>
                                    <td>{this.props.data.bathFull}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Fireplaces:</strong>
                                    </td>
                                    <td>{this.props.data.fireplace}</td>
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
                                    <td>{this.props.data.addRooms}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Heating:</strong>
                                    </td>
                                    <td>{this.props.data.heating}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Cooling:</strong>
                                    </td>
                                    <td>{this.props.data.cooling}</td>
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
                                {this.props.data.exteriorFeatures}
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
                                    <td>{this.props.data.roof}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Foundation:</strong>
                                    </td>
                                    <td>{this.props.data.foundation}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Lot Dimensions:</strong>
                                    </td>
                                    <td>{this.props.data.lotDim}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Pool:</strong>
                                    </td>
                                    <td>{this.props.data.pool}</td>
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
                                    <td>{this.props.data.parking}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Garage Spaces:</strong>
                                    </td>
                                    <td>{this.props.data.garage}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Accessibility:</strong>
                                    </td>
                                    <td>{this.props.data.accessibility}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>View:</strong>
                                    </td>
                                    <td>{this.props.data.view}</td>
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
                                {this.props.data.amenities}
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
                                    <td>{this.props.data.parkDesc}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Year Built:</strong>
                                    </td>
                                    <td>{this.props.data.yearBuilt}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Property Area:</strong>
                                    </td>
                                    <td>{this.props.data.area}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Subdivision:</strong>
                                    </td>
                                    <td>{this.props.data.subdivision}</td>
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
                                    <td>{this.props.data.schoolDist}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Elementary School:</strong>
                                    </td>
                                    <td>{this.props.data.elmSchool}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Middle School:</strong>
                                    </td>
                                    <td>{this.props.data.midSchool}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>High School:</strong>
                                    </td>
                                    <td>{this.props.data.highSchool}</td>
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
