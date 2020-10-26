import React from "react";

import PrimaryModal from "../PrimaryModal";

import "./LogModal.scss";

function LogModal({Logs, CloseCallback}) {
  return (
    <PrimaryModal HeaderTitle="Logs" CloseCallback={CloseCallback}>
      <div className="Logs">
        {Logs?.length ?
          <ul>
            {Logs?.map((Log, l) => <li key={l}>{Log}</li>)}
          </ul>
          :
          <center>No Logs To Display</center>
        }

      </div>
    </PrimaryModal>
  );
}

export default LogModal;
