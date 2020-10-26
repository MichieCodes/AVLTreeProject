import React from "react";
import {useLazyQuery, gql } from "@apollo/client";
import { UseBinaryTreeDataContext, UseBinaryTreeFunctionContext } from "../../Context/BinaryTreeContext";
import { UseNotificationContext } from "../../GlobalComponents/Notification/NotificationContext";

import LogModal from "../../GlobalComponents/LogModal";
import Spinner from "../../GlobalComponents/Spinner";

const GET_LOGS = gql`
  query GetBinaryTreeLogs {GetBinaryTreeLogs}
`;

function BinaryLogModal({CloseCallback}) {
  const [Loading, setLoading] = React.useState(true);
  const [ShowSpinner, setShowSpinner] = React.useState(true);
  const {BinaryTreeLogs} = UseBinaryTreeDataContext();
  const {setBinaryTreeLogs} = UseBinaryTreeFunctionContext();
  const PushNotification = UseNotificationContext();

  const [GetTreeLogs] = useLazyQuery(GET_LOGS, {fetchPolicy: "cache-and-network", 
    onCompleted: (GetTreeLogsQueryData) => {
      setBinaryTreeLogs(() => (GetTreeLogsQueryData.GetBinaryTreeLogs));
      setLoading(false);
    }, onError: () => {
      setTimeout(() => {
        CloseCallback();
        PushNotification({title: "Failed To Get Logs", 
            body: "Please Try Again Another Time", timeout: 4500});
      }, 500);
    }
  });

  React.useEffect(() => {
    GetTreeLogs();
  }, [GetTreeLogs]);

  return (
    <>
      {!ShowSpinner ? 
        <LogModal Logs={BinaryTreeLogs} CloseCallback={CloseCallback}/> :
        <Spinner Loading={Loading} CloseCallback={setShowSpinner}/>
      }
    </>
  );
}

export default BinaryLogModal;
