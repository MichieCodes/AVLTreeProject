import React from "react";
import { UseBinaryTreeDataContext } from "../../Context/BinaryTreeContext";

import DisplayPanel from "../../GlobalComponents/DisplayPanel";
import BinaryTree from "../../GlobalComponents/BinaryTree";
import BinaryTreeNode from "./BinaryTreeNode";
import ChooseNodeModal from "./ChooseNodeModal";
import BinaryLogModal from "./BinaryTreeLogModal";

import "./BinaryTreePanel.scss";

function BinaryTreePanel() {
  const [ShowNodeModal, setShowNodeModal] = React.useState(false);
  const [ShowLogModal, setShowLogModal] = React.useState(false);
  const Buttons = React.useRef([
    {text: "Generate Binary Tree", action: () => setShowNodeModal(true)},
    {text: "View Logs", action: () => setShowLogModal(true)}
  ]);
  const {BinaryTreeData} = UseBinaryTreeDataContext();

  return (
    <>
      <DisplayPanel Buttons={Buttons.current}>
        <BinaryTree key={BinaryTreeData} DisplayText="Please Generate A Binary Tree" TreeData={BinaryTreeData} TreeNode={BinaryTreeNode}/>
      </DisplayPanel>

      {ShowNodeModal && <ChooseNodeModal CloseCallback={setShowNodeModal}/>}
      {ShowLogModal && <BinaryLogModal CloseCallback={setShowLogModal}/>}
    </>
  );
}

export default BinaryTreePanel;
