import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../../components/Card";
import fetchProperties from "../reducer_properties";

class PropCardSection extends Component {
  render() {
    return (
      <div className="row">
        {props.properties.map((element, i) => {
          return (
            <div className="col-md-4" key={i}>
              <Card
                src={element.photos[0]}
                title="For Sale"
                price={element.sales.closePrice}
                address={element.address.full}
                sqrft={element.property.area + " sqr/ft"}
                bedrooms={element.property.bedrooms}
                baths={element.property.bathsFull}
                id={i}
                handleDetails={props.handleDetails}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  null,
  { fetchProperties }
)(PropCardSection);
