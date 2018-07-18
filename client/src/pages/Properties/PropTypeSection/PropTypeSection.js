import React from "react";
import SelectorBtn from "../../../components/Selector-Button";

const PropTypeSection = props => {
  return (
    <div className="row mx-auto text-center">
      <div className="col-6">
        <SelectorBtn
          image={"../public/img/Residential.png"}
          id="Residential"
          clickFunction={props.clickFunction}
        />
      </div>
      <div className="col-6">
        <SelectorBtn
          image={"../public/img/Commercial.png"}
          id="Commercial"
          clickFunction={props.clickFunction}
        />
      </div>
    </div>
  );
};

export default PropTypeSection;
