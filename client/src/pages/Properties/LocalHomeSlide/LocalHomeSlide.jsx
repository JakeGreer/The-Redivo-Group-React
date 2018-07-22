import React from "react";
import Arrow from "../../../components/Arrow";
import "./style.css";

const LocalHomeSlide = () => {
  return (
    <div id="local-home-slide">
      <div className="row">
        <div className="col-1">
          <Arrow size="large" direction="left" />
        </div>
        <div className="col-10" />
        <div className="col-1">
          <Arrow size="large" direction="right" />
        </div>
      </div>
    </div>
  );
};

export default LocalHomeSlide;
