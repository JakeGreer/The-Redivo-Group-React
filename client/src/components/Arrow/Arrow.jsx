import React from "react";

const Arrow = ({ size, direction, onClick }) => {
  return (
    <div>
      <a onClick={onClick}>
        <ion-icon
          size={size}
          style={{ color: "white" }}
          name={`arrow-drop${direction}-circle`}
        />
      </a>
    </div>
  );
};

export default Arrow;
