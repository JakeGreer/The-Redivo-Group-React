import React from "react";
import "./Card.css"

const Card = (props) => {

    return (         
            <div className="card">
                <img className="card-img-top img-fluid" src={props.src} alt="Property Image"/>
                <div className="card-price">{"$" + props.price}</div>
                <div className="card-block content">
                    <h4 className="card-title">{props.title}</h4>
                    <h6 className="card-address"><i class="fas fa-map-marker-alt"></i>{props.address}</h6>
                    <div className="characteristics"> 
                        <ul>
                            <li className="card-sqrft"><i class="fas fa-arrows-alt"></i>{props.sqrft + " S/F"}</li>
                            <li className="card-bedrooms"><i class="fas fa-bed"></i>{props.bedrooms + " Bedrooms"}</li>
                            <li className="card-baths"><i class="fas fa-bath"></i>{props.baths + " Baths"}</li>
                        </ul>
                    </div>
                    <a id={props.id} className="btn btn-primary text-center property-link" onClick={props.handleDetails}>View Details</a>
                </div>
            </div>
        )
}

export default Card

