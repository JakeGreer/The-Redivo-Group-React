import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../../components/Card";
import PropertyDetail from "../PropertyDetail";

import "./style.css";

class LocalHomesSlide extends Component {
  constructor(props) {
    super(props)
    this.state ={
      active: ((this.props.active !== undefined ) ? this.props.active : -1)
    }
  }

  handleDetails = (event) => {
    let active = event.currentTarget.dataset.tag;
    this.setState({
      active: active
    })
  }

  renderCards = () => {
    const { data } = this.props;
    if (data) {
      return data.map((res, index) => {
        return (
          <div key={res.mlsId} className="col-3">
            <Card
              src={res.photos[0]}
              price={res.listPrice}
              title={`${res.property.style} House`}
              address={res.address.full}
              sqrft={res.property.area}
              bedrooms={res.property.bedrooms}
              baths={res.property.bathsFull}
              index={index}
              handleDetails={this.handleDetails}
            />
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div className="local-home-wrapper">
        <div className="row local-inner">{this.renderCards()}</div>
        {/* <PropertyDetail /> */}
      </div>
    );
  }
}

function mapStateToProps({ SearchedData }) {
  return { data: SearchedData.data };
}

export default connect(mapStateToProps)(LocalHomesSlide);
