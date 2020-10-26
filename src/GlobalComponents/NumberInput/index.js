import React from "react";

import Arrows from "../Icons/Arrows";

import "./NumberInput.scss";

function NumberInput({label, value, min, max, step, onChange, size = 40, width = "40%", fontSize}) {
  return (
    <label className="NumberInput">
      {label && <span className="InputLabel" style={{fontSize}}>{label}</span>}
      <span style={{position: "relative", width}}>
        <input className="Input" type="number" style={{height: `${size}px`}} value={value} 
          min={min || 0} max={max || 10} step={step || 1} onChange={onChange}/>
        <Arrows className="Arrows"/>
      </span>
    </label>
  )
}

export default NumberInput;
