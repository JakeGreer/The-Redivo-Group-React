import React, { Component } from "react";

import Arrow from "../../components/Arrow";
import Card from "../../components/Card";
import "./style.css";
import { isObject } from "util";
{
  /* <Card
      src=""
      price="123123"
      title="Title"
      address="Address"
      sqrft="500"
      bedrooms="3"
      baths="2"
    /> */
}
class ItemsCarousel extends Component {
  render() {
    return (
      <div className="local-home-wrapper">
        <div className="row local-inner">
          <div className="col-1">
            <Arrow onClick={this.slideLeft} size="large" direction="left" />
          </div>
          <div className="col-10">temp</div>
          <div className="col-1 right-arrow">
            <Arrow onClick={this.slideRight} size="large" direction="right" />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemsCarousel;
