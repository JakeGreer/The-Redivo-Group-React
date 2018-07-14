import React from "react";
import "./SelectorBtn.css";

const SelectorBtn = props => {
  return (
    <a className="area-selector" onClick={props.clickFunction}>
      <img className="area-img img-fluid" id={props.id} src={props.image} />
    </a>
  );
};

export default SelectorBtn;
