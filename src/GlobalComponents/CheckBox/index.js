import React from "react";

import "./CheckBox.scss";

function CheckBox({radio, defaultChecked, label, onChange, size = 40, fontSize}) {
  const Input = React.useRef(null);

  React.useEffect(() => {
    Input.current.checked = defaultChecked;
  }, [Input, defaultChecked]);

  return (
    <label className="CheckBox">
      <input ref={Input} type={radio ? "radio" : "checkbox"} name={radio} onChange={onChange}/>
      <span className="CheckMark Input" style={{width: `${size}px`, height: `${size}px`}}>
        <span>x</span>
      </span>
      {label && <span className="CheckBoxLabel" style={{fontSize}}>{label}</span>}
    </label>
  )
}

export default CheckBox;
