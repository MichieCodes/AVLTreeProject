import React from "react";
import AnimateModal from "../../Utils/AnimateModal";

import "./Spinner.scss";

function Spinner({Loading, CloseCallback}) {
  const Overlay = React.useRef(null);

  React.useEffect(() => {
    if(!CloseCallback) return; 

    if(Loading === false)
      AnimateModal(Overlay.current, () => CloseCallback(), "OverlayFadeOut")
  }, [Overlay, Loading, CloseCallback]);

  return (
    <div ref={Overlay} className="Overlay SpinnerOverlay">
      <svg className="Spinner" width={"14rem"} viewBox="0 0 50 50" fill="none">
        <circle className="SpinnerStroke" cx="25" cy="25" r="19.5" strokeWidth={6 - 0.1}/>
        <circle className="SpinnerPath" cx="25" cy="25" r="19.5" strokeWidth={6}/>
      </svg>
    </div>
  );
}

export default Spinner;
