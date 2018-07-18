import React from "react";
import SelectorBtn from "../../../components/Selector-Button";
import cities from "./Cities";
import URL from "./URL";

const CityTypeSection = props => {
  const column = cities.map((element, i) => {
    return (
      <div key={i} className="col-4">
        <SelectorBtn
          id={element}
          image={URL[i]}
          clickFunction={props.clickFunction}
        />
      </div>
    );
  });

  return <div className="row">{column}</div>;
};

export default CityTypeSection;
