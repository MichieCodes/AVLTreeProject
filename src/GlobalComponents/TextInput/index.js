import React from "react";

import "./TextInput.scss";

function TextInput({value, label, onChange, size = 40, fontSize}) {
  return (
    <label className="TextInput">
      {label && <span className="InputLabel" style={{fontSize}}>{label}</span>}
      <input className="Input" type="text" style={{height: `${size}px`}} value={value} onChange={onChange}/>
    </label>
  )
}

export default TextInput;
