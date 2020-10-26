import React from "react";

import PrimaryButton from "../PrimaryButton";

import "./DisplayPanel.scss";

function DisplayPanel({Buttons, className, children}) {
  return (
    <div className="DisplayPanel">
      <div className={`Display${className ? ` ${className}` : ""}`}>
        {children}
      </div>

      {Buttons?.length &&
        <div className="PanelButtonGroup">
          {Buttons.map((Button, b) => 
            <PrimaryButton key={b} onClick={Button.action}>{Button.text}</PrimaryButton>
          )}
        </div>
      }
    </div>
  );
}

export default DisplayPanel;
