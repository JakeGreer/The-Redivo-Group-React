import React from "react";
import Arrow from "../../../components/Arrow";

const LocalHomeSlide = () => {
  return (
    <div className="row">
      <div className="col-1">
        <Arrow size="large" direction="left" />
      </div>
      <div className="col-1">
        <Arrow size="large" direction="right" />
      </div>
    </div>
  );
};

export default LocalHomeSlide;
