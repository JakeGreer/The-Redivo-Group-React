import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import "./PropertyDetail.css"

class PropertyDetail extends Component {

    state = {
        detail: true,
        interior: false,
        exterior: false,
        additional: false
    }

    handleDetailsClick = (event) => {
        event.preventDefault()
        let selection = event.target.id;
        switch(selection) {
            case "detail":         
                            this.setState({
                                detail: true,
                                interior: false,
                                exterior: false,
                                additional: false
                            })
                            break;
            case "interior":         
                            this.setState({
                                detail: false,
                                interior: true,
                                exterior: false,
                                additional: false
                            })
                            break;
            case "exterior":   
                            this.setState({
                                detail: false,
                                interior: false,
                                exterior: true,
                                additional: false
                            })
                            break;
            case "additional":    
                            this.setState({
                                detail: false,
                                interior: false,
                                exterior: false,
                                additional: true
                            })
                            break;
        }
    }

    render() {
    // This variable is used under the property details section as an inline styler
    let textStyle = {
        display: "block", 
        overflow: "hidden"
    }
    return(
        <div>

            {/**************************************************^*******/
             /**********************************************************/}
            {/* This Row contains the address and the price */}
            <div className="row">
                <div className="col-md-8 col-sm-8">
                    <div className="detail-address">
                        <div className="address-top">{this.props.addressTop}</div>
                        <div className="address-bottom">{this.props.addressBottom}</div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="detail-price">{this.props.price}</div>
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
                        {this.props.propertyImages ? this.props.propertyImages.map((e, i) => (
                            <div key={i}>
                                <img className="img-fluid" src={e}/>
                            </div>
                        ))
                        :
                        (<h6 id="nan">No images available</h6>)
                        }
                    </Carousel>
                </div>

                {/* Sidebar - Main Characteristics */}
                <div className="col-md-4 col-sm-4">
                    <div className="details-info">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="item-id">
                                    MLS #: {this.props.mls}
                                </div>
                                <div className="det-characteristics">
                                    <ul>
                                        <li>{this.props.sqrft} S/F</li>
                                        <li>{this.props.bedrooms} Bedrooms</li>
                                        <li>{this.props.baths} Baths</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-6 col-sm-6">
                                <div className="realtor-mini">
                                    <img className="img-responsive" src="../public/img/Clear-Logo.png" alt=""/>
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
                propertyType: (single family),  yearBuilt, propertyClass: (Residential), county, subdivision, bedrooms, baths, lotSize, stories, garage*/}
                {/* Details Section */}
                <div className="col-md-12">
                    <ul className="tabs">
                        <li className="active"><a className="styler_bg_color btn disabled" href="#details1" data-toggle="tab" disabled>PROPERTY DETAILS</a></li>
                    </ul>
                    <div className="tab-content tab-blocks">
                        <ul className="info_slides">
                            <li><a onClick={this.handleDetailsClick} className="styler_color" id="detail">
                            <i class="fas fa-bars"></i> DETAILS</a>
                            
                            {this.state.detail ? 
                            <div className="text" style={textStyle}>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="left-tab-wrapper">
                                            <table className="details-values">
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Property Type:</strong></td>
                                                        <td>{this.props.propType}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Year Built:</strong></td>
                                                        <td>{this.props.yearBuilt}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Property Class:</strong></td>
                                                        <td>{this.props.propClass}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>County:</strong></td>
                                                        <td>{this.props.county}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Subdivision:</strong></td>
                                                        <td>{this.props.subdivision}</td>
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
                                                        <td><strong>Bedrooms:</strong></td>
                                                        <td>{this.props.bedrooms}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Baths:</strong></td>
                                                        <td>{this.props.baths}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Lot Size:</strong></td>
                                                        <td>{this.props.lotSize}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Stories:</strong></td>
                                                        <td>{this.props.stories}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Garage:</strong></td>
                                                        <td>{this.props.garage}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            (<div></div>)
                            }
                            </li>
                            <li><a onClick={this.handleDetailsClick} className="styler_color" id="interior">
                            <i class="fas fa-bars"></i>INTERIOR</a>
                            {this.state.interior ? 
                            <div className="text" style={textStyle}>
                                {/* I dont think the API returns any of this information so this section will most likely be deleted or replaced with different information. I am not going to assign props for this section just yet until that is figured out. Temporary Props List for the Interior Section
                                livingAreaOne, livingAreaTwo, DiningRoom, masterBedroom, kitchen, bedroomOne, bedroomTwo, bedroomThree, study, utilityRoom
                                */}
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="left-tab-wrapper">
                                            <table className="details-values">
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Living Area 1:</strong></td>
                                                        <td>22 x 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Living Area 2:</strong></td>
                                                        <td>14 x 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Dining Room:</strong></td>
                                                        <td>22 x 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Master Bedroom:</strong></td>
                                                        <td>22 x 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Kitchen:</strong></td>
                                                        <td>22 x 24</td>
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
                                                        <td><strong>Bedroom 1:</strong></td>
                                                        <td>22 x 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Bedroom 2:</strong></td>
                                                        <td>22 x 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Bedroom 3:</strong></td>
                                                        <td>22 x 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Study:</strong></td>
                                                        <td>22 x 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Utility Room:</strong></td>
                                                        <td>22 x 24</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            (<div></div>)
                            }
                            </li>
                            <li><a onClick={this.handleDetailsClick} className="styler_color" id="exterior">
                            <i class="fas fa-bars"></i>EXTERIOR</a>
                            {this.state.exterior ? 
                            <div className="text" style={textStyle}>
                                {/* Temporary Variables Used for the Exterior Section
                                fence, sprinklers, lotDimensions, pool, patio, balcony, gutters, exteriorLight */}
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="left-tab-wrapper">
                                            <table className="details-values">
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Fence:</strong></td>
                                                        <td>{this.props.fence}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Sprinkler System:</strong></td>
                                                        <td>{this.props.sprinklers}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Lot Dimensions:</strong></td>
                                                        <td>{this.props.lotDim}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Pool:</strong></td>
                                                        <td>{this.props.pool}</td>
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
                                                            <td><strong>Patio:</strong></td>
                                                            <td>{this.props.patio}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Balcony:</strong></td>
                                                            <td>{this.props.balcony}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Gutters:</strong></td>
                                                            <td>{this.props.gutters}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Exterior Lighting:</strong></td>
                                                            <td>{this.props.extLight}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                (<div></div>)
                                }
                            </li>
                            <li><a onClick={this.handleDetailsClick} className="styler_color" id="additional"><i class="fas fa-bars"></i>ADDITIONAL DETAILS</a>
                            { this.state.additional ? 
                            <div className="text" style={textStyle}>
                                    {/* This is the temporary list of props used for the Additional Details section
                                     garage, cooling, heating, subdivision, schoolDist, elmSchool, midSchool, highSchool*/}
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="left-tab-wrapper">
                                                <table className="details-values">
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Garage:</strong></td>
                                                            <td>{this.props.garage}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Cooling:</strong></td>
                                                            <td>{this.props.cooling}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Heating:</strong></td>
                                                            <td>{this.props.heating}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Subdivision:</strong></td>
                                                            <td>{this.props.subdivision}</td>
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
                                                            <td><strong>School District:</strong></td>
                                                            <td>{this.props.schoolDist}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Elementary School:</strong></td>
                                                            <td>{this.props.elmSchool}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Middle School:</strong></td>
                                                            <td>{this.props.midSchool}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>High School:</strong></td>
                                                            <td>{this.props.highSchool}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                (<div></div>)
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
}

export default PropertyDetail