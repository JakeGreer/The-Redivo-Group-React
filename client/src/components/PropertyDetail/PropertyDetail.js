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
                
                {/* Details Section */}
                <div className="col-md-12">
                    <ul className="tabs">
                        <li className="active"><a className="styler_bg_color" href="#details1" data-toggle="tab">PROPERTY DETAILS</a></li>
                    </ul>
                    <div className="tab-content tab-blocks">
                        <ul className="info_slides">
                            <li><a onClick={this.handleDetailsClick} className="styler_color" id="detail">
                            {
                                this.state.detail ? <i className="fas fa-angle-down"></i>
                            :
                                (<i className="fas fa-angle-right"></i>)
                            }
                            DETAILS</a>
                            
                            {this.state.detail ? 
                            <div className="text" style={textStyle}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque quis congue bibendum. Suspendisse vitae velit diam. Nulla vestibulum interdum lectus in vulputate. Cras et enim at lacus hendrerit condimentum. Vivamus sed nisi luctus metus bibendum semper. Etiam at facilisis ipsum. Etiam rutrum mi eget sem suscipit pellentesque. Aenean lobortis commodo eros ut sollicitudin.</p>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="left-tab-wrapper">
                                            <table className="details-values">
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Property Type:</strong></td>
                                                        <td>Single Family</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Year Built:</strong></td>
                                                        <td>2002</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Property className:</strong></td>
                                                        <td>Residential</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>County:</strong></td>
                                                        <td>Dallas</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Subdivision:</strong></td>
                                                        <td>Woodlawn</td>
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
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Baths:</strong></td>
                                                        <td>2.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Lot Size:</strong></td>
                                                        <td>9,757 Sq Ft Lot</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Stories:</strong></td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Garage:</strong></td>
                                                        <td>2 Car</td>
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
                            {
                                this.state.interior ? <i className="fas fa-angle-down"></i>
                            :
                                (<i className="fas fa-angle-right"></i>)
                            }
                            INTERIOR</a>
                            {this.state.interior ? 
                            <div className="text" style={textStyle}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque quis congue bibendum. Suspendisse vitae velit diam. Nulla vestibulum interdum lectus in vulputate. Cras et enim at lacus hendrerit condimentum. Vivamus sed nisi luctus metus bibendum semper. Etiam at facilisis ipsum. Etiam rutrum mi eget sem suscipit pellentesque. Aenean lobortis commodo eros ut sollicitudin.</p>
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
                            {
                                this.state.exterior ? 
                                (<i className="fas fa-angle-down"></i>)
                                :
                                (<i className="fas fa-angle-right"></i>)
                            }
                            EXTERIOR</a>
                            {this.state.exterior ? 
                            <div className="text" style={textStyle}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque quis congue bibendum. Suspendisse vitae velit diam. Nulla vestibulum interdum lectus in vulputate. Cras et enim at lacus hendrerit condimentum. Vivamus sed nisi luctus metus bibendum semper. Etiam at facilisis ipsum. Etiam rutrum mi eget sem suscipit pellentesque. Aenean lobortis commodo eros ut sollicitudin.</p>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="left-tab-wrapper">
                                            <table className="details-values">
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Fence:</strong></td>
                                                        <td>Wood</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Sprinkler System:</strong></td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Lot Dimensions:</strong></td>
                                                        <td>80x135</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Pool:</strong></td>
                                                        <td>Yes - Gunite</td>
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
                                                            <td>Yes - Covered</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Balcony:</strong></td>
                                                            <td>Yes</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Gutters:</strong></td>
                                                            <td>Yes</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Exterior Lighting:</strong></td>
                                                            <td>Yes</td>
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
                            <li><a onClick={this.handleDetailsClick} className="styler_color" id="additional">
                            {
                                this.state.additional? 
                                (<i className="fas fa-angle-down"></i>)
                                :
                                (<i className="fas fa-angle-right"></i>)
                            }
                            ADDITIONAL DETAILS</a>
                            { this.state.additional ? 
                            <div className="text" style={textStyle}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque quis congue bibendum. Suspendisse vitae velit diam. Nulla vestibulum interdum lectus in vulputate. Cras et enim at lacus hendrerit condimentum. Vivamus sed nisi luctus metus bibendum semper. Etiam at facilisis ipsum. Etiam rutrum mi eget sem suscipit pellentesque. Aenean lobortis commodo eros ut sollicitudin.</p>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="left-tab-wrapper">
                                                <table className="details-values">
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Garage:</strong></td>
                                                            <td>2 Car</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Cooling:</strong></td>
                                                            <td>Central - Electric</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Heating:</strong></td>
                                                            <td>Central - Gas</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Subdivision:</strong></td>
                                                            <td>Woodlawn</td>
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
                                                            <td>Richardson ISD</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Elementary School:</strong></td>
                                                            <td>Merriman Park</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Middle School:</strong></td>
                                                            <td>Lake Highlands</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>High School:</strong></td>
                                                            <td>Lake Highlands High School</td>
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