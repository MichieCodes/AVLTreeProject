import React from "react"; 

import PrimaryModal from "../PrimaryModal";

import "./SecondaryModal.scss"

function SecondaryModal(props) {
    return (
        <PrimaryModal 
            HeaderTitle={props.HeaderTitle} CloseCallback={props.CloseCallback}
            LeftTitle={props.LeftTitle || "Cancel"} 
            LeftAction={props.LeftAction ? (cb) => props.LeftAction(cb) : null}
            RightAction={props.RightAction ? (cb) => props.RightAction(cb) : null}
            RightTitle={props.RightTitle || "Confirm"}
            ModalOptions={{className: `PrimaryModal SecondaryModal`, ...props.ModalOptions}}
            style={props.style}
        >
            {props.children}
        </PrimaryModal>
    );
}

export default SecondaryModal;