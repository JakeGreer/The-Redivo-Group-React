import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="card card-wrapper">
      <div className="card-img-wrapper">
        <img src={props.src} alt="Property Image" />
      </div>
      <div className="card-price">{"$" + props.price}</div>
      <div className="card-block content">
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-address">
          <i className="fas fa-map-marker-alt" />
          {props.address}
        </h6>
        <div className="characteristics">
          <ul>
            <li className="card-sqrft">
              <i class="fas fa-arrows-alt" />
              {props.sqrft + " S/F"}
            </li>
            <li className="card-bedrooms">
              <i className="fas fa-bed" />
              {props.bedrooms + " Bedrooms"}
            </li>
            <li className="card-baths">
              <i className="fas fa-bath" />
              {props.baths + " Baths"}
            </li>
          </ul>
        </div>
        <a
          id={props.id}
          className="btn btn-primary text-center property-link"
          onClick={props.handleDetails}
          data-index={props.index}
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default Card;
