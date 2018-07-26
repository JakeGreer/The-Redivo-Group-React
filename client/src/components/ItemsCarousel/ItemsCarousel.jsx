import React, { Component } from "react";

import Arrow from "../../components/Arrow";
import Card from "../../components/Card";
import "./style.css";

class ItemsCarousel extends Component {
  render() {
    return (
      <div className="local-home-wrapper">
        <div className="row local-inner">
          {/* <div className="col-2">
            <Arrow onClick={this.slideLeft} size="large" direction="left" />
          </div> */}
          <div className="col-3">
            <Card
              src="../public/img/slide2a.jpg"
              price="123123"
              title="Title"
              address="Address"
              sqrft="12,000"
              bedrooms="3"
              baths="2"
            />
          </div>
          <div className="col-3">
            <Card
              src="../public/img/slide1a.jpg"
              price="123123"
              title="Title"
              address="Address"
              sqrft="12,000"
              bedrooms="3"
              baths="2"
            />
          </div>
          <div className="col-3">
            <Card
              src="../public/img/slide1a.jpg"
              price="123123"
              title="Title"
              address="Address"
              sqrft="12,000"
              bedrooms="3"
              baths="2"
            />
          </div>
          <div className="col-3">
            <Card
              src="../public/img/slide3a.jpg"
              price="123123"
              title="Title"
              address="Address"
              sqrft="12,000"
              bedrooms="3"
              baths="2"
            />
          </div>
          {/* <div className="col-2 right-arrow">
            <Arrow onClick={this.slideRight} size="large" direction="right" />
          </div> */}
        </div>
      </div>
    );
  }
}

export default ItemsCarousel;
