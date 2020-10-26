import React from "react";

function BinaryTreeNode({nodeData}) {
  React.useEffect(() => {
    if(nodeData && !nodeData.name) {
      let Edge = document.querySelector(`[data-target-id*="${nodeData.id}"]`);

      Edge && Edge.classList.add("EmptyTreeNode");
    } else return;
  });

  return (
    <div className={`TreeNode BinaryTreeNode ${!nodeData?.name ? "EmptyTreeNode" : ""}`}>
      <span><span>{nodeData?.name}</span></span>
    </div>
  );
}

export default BinaryTreeNode;
