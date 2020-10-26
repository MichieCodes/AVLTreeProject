import React from "react";
import { BookProvider } from "../../Context/BookContext";
import { UseBinaryTreeDataContext } from "../../Context/BinaryTreeContext";

import DisplayPanel from "../../GlobalComponents/DisplayPanel";
import BinaryTree from "../../GlobalComponents/BinaryTree";
import AVLTreeNode from "./AVLTreeNode";
import ChoosePropertyModal from "./ChoosePropertyModal";
import BookEditorModal from "./BookEditorModal";
import AVLTreeLogModal from "./AVLTreeLogModal";

import "./AVLTreePanel.scss";

function AVLTreePanel() {
  const [ShowPropertyModal, setShowPropertyModal] = React.useState(false);
  const [ShowBookEditor, setShowBookEditor] = React.useState(false);
  const [ShowLogModal, setShowLogModal] = React.useState(false);
  const [SelectedProperty, setSelectedProperty] = React.useState("ISBN");
  const Buttons = React.useRef([
    {text: "Edit Books", action: () => setShowBookEditor(true)},
    {text: "Generate AVL Tree", action: () => setShowPropertyModal(true)},
    {text: "View Logs", action: () => setShowLogModal(true)}
  ]);
  const {AVLTreeData} = UseBinaryTreeDataContext();

  return (
    <>
      <DisplayPanel Buttons={Buttons.current}>
        <BinaryTree key={AVLTreeData} DisplayText="Please Generate An AVL Tree" TreeData={AVLTreeData} TreeNode={AVLTreeNode} keyProperty={SelectedProperty}/>
      </DisplayPanel>

      {ShowPropertyModal && <ChoosePropertyModal CloseCallback={setShowPropertyModal} setSelected={setSelectedProperty}/>}
      <BookProvider>
        {ShowBookEditor && <BookEditorModal CloseCallback={setShowBookEditor}/>}
      </BookProvider>
      {ShowLogModal && <AVLTreeLogModal CloseCallback={setShowLogModal}/>}
    </>
  );
}

export default AVLTreePanel;
