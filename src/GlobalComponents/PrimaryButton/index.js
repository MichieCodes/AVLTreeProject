import React from "react";

import "./PrimaryButton.scss";

function PrimaryButton({style, children, onClick}) {
  return (
    <button className="PrimaryButton" style={style} onClick={onClick}>
      {children}
    </button>      
  );
}

export default PrimaryButton;
