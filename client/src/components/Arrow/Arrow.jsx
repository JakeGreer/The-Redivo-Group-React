import React from "react";

const Arrow = ({ size, direction }) => {
  return (
    <div>
      <a>
        <ion-icon size={size} name={`arrow-drop${direction}-circle`} />
      </a>
    </div>
  );
};

export default Arrow;
