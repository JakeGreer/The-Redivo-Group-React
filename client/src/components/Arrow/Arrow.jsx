import React from "react";

const Arrow = ({ size, direction }) => {
  return (
    <div>
      <ion-icon size={size} name={`arrow-drop${direction}-circle`} />
    </div>
  );
};

export default Arrow;
