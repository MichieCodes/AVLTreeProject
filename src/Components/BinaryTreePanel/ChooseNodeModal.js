import React from "react";
import {useLazyQuery, gql } from "@apollo/client";
import { UseBinaryTreeFunctionContext } from "../../Context/BinaryTreeContext";
import { UseNotificationContext } from "../../GlobalComponents/Notification/NotificationContext";

import NumberInput from "../../GlobalComponents/NumberInput";
import SecondaryModal from "../../GlobalComponents/SecondaryModal";
import Spinner from "../../GlobalComponents/Spinner";

const GENERATE_TREE = gql`
  fragment fields on BinaryTreeDisplay {name}

  fragment recursiveFields on BinaryTreeDisplay {
    children {
      ...fields
      children {
        ...fields
        children {
          ...fields 
          children {
          ...fields
            children {...fields}
          }
        }
      }
    }
  }

  query GenerateBinaryTree($nodes: Int!) {
    GenerateBinaryTree(nodes: $nodes) {
      ...fields ...recursiveFields 
    }
  }
`;

function ChooseNodeModal({CloseCallback}) {
  const [Loading, setLoading] = React.useState(false);
  const [ShowSpinner, setShowSpinner] = React.useState(false);
  const [Callback, setCallback] = React.useState(() => 0);
  const [Nodes, setNodes] = React.useState(1);
  const {setBinaryTreeData} = UseBinaryTreeFunctionContext();
  const PushNotification = UseNotificationContext();

  const Choose = (cb) => {
    setLoading(true);
    setCallback(cb)
    GenerateBinaryTree({variables: {nodes: Nodes}});
  }

  const [GenerateBinaryTree] = useLazyQuery(GENERATE_TREE, {fetchPolicy: "cache-and-network", 
    onCompleted: (GenerateBinaryTreeQueryData) => {
      setLoading(false);
      
      setTimeout(() => {
        setBinaryTreeData(() => ([GenerateBinaryTreeQueryData.GenerateBinaryTree]));
        Callback && Callback();
        setCallback(null);
        PushNotification({type: "Success", title: "Generated Tree", body: "Please Check Logs", timeout: 4500});
      }, 500)
    }, onError: () => {
        setTimeout(() => {
            Callback && Callback();
            PushNotification({title: "Failed To Generate Tree", 
                body: "Please Try Again Another Time", timeout: 4500});
        }, 500);
    }
  });

  return (
    <>
    <SecondaryModal 
      HeaderTitle="Choose Number of Nodes" CloseCallback={CloseCallback}
      LeftTitle="Cancel" 
      RightTitle="Choose"
      LeftAction={(cb) => cb()}
      RightAction={Choose}
    >
      <NumberInput label="Nodes:" value={Nodes} max={100} onChange={(e) => setNodes(e.target.value)}/>
    </SecondaryModal>
    {ShowSpinner && <Spinner Loading={Loading} CloseCallback={setShowSpinner}/>}
    </>
  );
}

export default ChooseNodeModal;
