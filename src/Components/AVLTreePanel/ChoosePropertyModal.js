import React from "react";
import {useLazyQuery, gql } from "@apollo/client";
import { UseBinaryTreeFunctionContext } from "../../Context/BinaryTreeContext";
import { UseNotificationContext } from "../../GlobalComponents/Notification/NotificationContext";

import CheckBox from "../../GlobalComponents/CheckBox";
import SecondaryModal from "../../GlobalComponents/SecondaryModal";
import Spinner from "../../GlobalComponents/Spinner";

const Properties = [
  {title: "ISBN", displayName: "ISBN"},
  {title: "title", displayName: "Title"},
  {title: "author", displayName: "Author"}
]

const GENERATE_TREE = gql`
  fragment fields on AVLTreeDisplay {
    name attributes {ISBN title author}
  }

  fragment recursiveFields on AVLTreeDisplay {
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

  query GenerateAVLTree($comparator: String) {
    GenerateAVLTree(comparator: $comparator) {
      ...fields ...recursiveFields 
    }
  }
`;

function ChoosePropertyModal({setSelected, CloseCallback}) {
  const [Loading, setLoading] = React.useState(false);
  const [ShowSpinner, setShowSpinner] = React.useState(false);
  const [Callback, setCallback] = React.useState(() => 0);
  const [SelectedProperty, setSelectedProperty] = React.useState(Properties[0].title);
  const {setAVLTreeData} = UseBinaryTreeFunctionContext();
  const PushNotification = UseNotificationContext();

  const Choose = (cb) => {
    setLoading(true);
    setCallback(cb);
    setSelected(SelectedProperty);
    GenerateAVLTree({variables: {comparator: SelectedProperty}});
  }

  const [GenerateAVLTree] = useLazyQuery(GENERATE_TREE, {fetchPolicy: "cache-and-network", 
    onCompleted: (GenerateAVLTreeQueryData) => {
      setLoading(false);
      
      setTimeout(() => {
        setAVLTreeData(() => ([GenerateAVLTreeQueryData.GenerateAVLTree]));
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
      HeaderTitle="Choose Property To Compare" CloseCallback={CloseCallback}
      LeftTitle="Cancel" 
      RightTitle="Choose"
      LeftAction={(cb) => cb()}
      RightAction={Choose}
    >
      <div className="PropertyRadioButtonGroup">
        {
          Properties.map((Property, p) => 
            <CheckBox key={p} radio="BookProperties" label={Property.displayName} 
              defaultChecked={Property.title === SelectedProperty} onChange={() => setSelectedProperty(Property.title)}
            />
          )
        }
      </div>
    </SecondaryModal>
    {ShowSpinner && <Spinner Loading={Loading} CloseCallback={setShowSpinner}/>}
    </>
  );
}

export default ChoosePropertyModal;
