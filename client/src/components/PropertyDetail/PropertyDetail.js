import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import "./PropertyDetail.css"



// Tasks that need to get done on this page include the following

// CSS on the Property Details page is messed up. By that I mean the border lines are not showing for the tabs with the arrows next to them..
// Also the Header that Contains the words Property Details needs to be fixed. The styling they gave is not working. For instance the border is not there..
// If you reference the template site they have a cool border that merges with the tabs below I would like to achieve this look.

//I added the html for the Details tab but none of the other ones and I have not yet put the corresponding CSS in either...
// Html needs to be added for the remaining three tabs but you can just copy paste from the details one I did and change the values and words because they all four follow the exact same format. I would just be wary of the different css classes.

//Lastly all of the on click functions need to be written and passed in to handle the opening and closing of the tabs.

const PropertyDetail = (props) => {
    // This variable is used under the property details section as an inline styler
    let textStyle = {
        display: "none", 
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
                        <div className="address-top">{props.addressTop}</div>
                        <div className="address-bottom">{props.addressBottom}</div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="detail-price">{props.price}</div>
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
                        {props.propertyImages ? props.propertyImages.map((e, i) => (
                            <div>
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
                    <div class="details-info">
                        <div class="row">
                            <div class="col-md-12 col-sm-12">
                                <div class="item-id">
                                    MLS #: {props.mls}
                                </div>
                                <div class="det-characteristics">
                                    <ul>
                                        <li>{props.sqrft} S/F</li>
                                        <li>{props.bedrooms} Bedrooms</li>
                                        <li>{props.baths} Baths</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="col-md-6 col-sm-6">
                                <div class="realtor-mini">
                                    <img class="img-responsive" src="../public/img/Clear-Logo.png" alt=""/>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="details-place">The Redivo Group Realty</div>
                                <div class="details-phone">949.838.5449</div>
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
                        <li className="active"><a class="styler_bg_color" href="#details1" data-toggle="tab">PROPERTY DETAILS</a></li>
                    </ul>
                    <div className="tab-content tab-blocks">
                        <ul className="info_slides">
                            <li><a className="styler_color"><i class="fas fa-angle-right"></i>DETAILS</a>
                            {/* The section below is displaying none as of right now. This needs to be set to active and have the active class switch on a click handler */}
                            <div class="text" style={textStyle}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque quis congue bibendum. Suspendisse vitae velit diam. Nulla vestibulum interdum lectus in vulputate. Cras et enim at lacus hendrerit condimentum. Vivamus sed nisi luctus metus bibendum semper. Etiam at facilisis ipsum. Etiam rutrum mi eget sem suscipit pellentesque. Aenean lobortis commodo eros ut sollicitudin.</p>
                                <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="left-tab-wrapper">
                                            <table class="details-values">
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
                                                        <td><strong>Property Class:</strong></td>
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
                                    <div class="col-md-6 col-sm-6">
                                        <div class="right-tab-wrapper">
                                            <table class="details-values">
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
                            
                            </li>
                            <li><a className="styler_color"><i class="fas fa-angle-right"></i>INTERIOR</a></li>
                            <li><a className="styler_color"><i class="fas fa-angle-right"></i>EXTERIOR</a></li>
                            <li><a className="styler_color"><i class="fas fa-angle-right"></i>ADDITIONAL DETAILS</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PropertyDetail