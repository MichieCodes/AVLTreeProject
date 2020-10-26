import React from "react";
import AnimateModal from "../../Utils/AnimateModal";

import PrimaryButton from "../PrimaryButton";

import "./PrimaryModal.scss";

function PrimaryModal(props) {
  const Overlay = React.useRef(null);
  const Modal = React.useRef(null);

  const CloseModal = (e, action) => {
    if(!Overlay.current || !Modal.current) return;
    e.persist();

    const OverlayClose = () => {
      typeof action === "function" && action();
      AnimateModal(Overlay.current, () => props.CloseCallback(props.PassCloseEvent ? e : null), "OverlayFadeOut");
    }

    AnimateModal(Modal.current, OverlayClose, "ModalFadeOut");
  }

  return (
    <>
      <div className="Overlay" ref={Overlay} 
        onClick={CloseModal}
      ></div>
      <div className="PrimaryModal"  ref={Modal} style={props.style} {...props.ModalOptions}>
        <h2 className="ModalHeader">
          {props.HeaderTitle || "Header"}
          <span className="CloseButton" onClick={CloseModal}>x</span>
        </h2>

        <div className="ModalContentContainer">
          <div className="ModalContent">{props.children}</div>

          {(props.LeftTitle || props.LeftAction || props.RightTitle || props.RightAction) &&                     
            <div className="ModalButtonContainer">
              <PrimaryButton onClick={
                props.LeftAction ? (e) => props.LeftAction((action) => CloseModal(e, action)) : null
              }>
                {props.LeftTitle || "Cancel"} 
              </PrimaryButton>
              
              <PrimaryButton onClick={
                props.RightAction ? (e) => props.RightAction((action) => CloseModal(e, action)) : null
              }>
                {props.RightTitle || "Save"}
              </PrimaryButton>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default PrimaryModal;
