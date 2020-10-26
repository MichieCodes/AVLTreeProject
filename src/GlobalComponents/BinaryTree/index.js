import React from "react";
import Tree from "react-d3-tree";

import "./BinaryTree.scss";

function BinaryTree({TreeData, keyProperty, DisplayText, TreeNode, Size = 175, Separation = {siblings: 1.45, nonSiblings: 1.45}}) {
  const TreeWrapper = React.useRef(null);
  const [Translate, setTranslate] = React.useState({x: 0, y: 0});

  React.useEffect(() => {
    if(!TreeWrapper.current) return;

    let {width, height} = TreeWrapper.current.getBoundingClientRect();
    let {height: treeHeight} = TreeWrapper.current.querySelector(".rd3t-tree-container > svg > g")?.getBoundingClientRect() || {};

    setTranslate({x: width / 2, y: treeHeight && treeHeight <= height ? (height - treeHeight) / 2 : 15});
  }, [TreeWrapper, setTranslate]);

  return (
    <>
      {TreeData ? 
        <div ref={TreeWrapper} style={{width: "100%", height: "100%"}}>
          <Tree
            data={TreeData}
            orientation="vertical"
            collapsible={false}
            translate={Translate}
            zoom={0.50}
            separation={Separation}
            nodeSvgShape={{shape: "none"}}
            styles={{links: {strokeWidth: 4}}}
            allowForeignObjects
            nodeLabelComponent={{
              render: <TreeNode keyProperty={keyProperty}/>,
              foreignObjectWrapper: {
                width: Size,
                x: -Size/2, y: -20,
                overflow: "visible"
              }
            }}
          />
        </div>
      : <span>{DisplayText}</span>}
    </>
  );
}

export default BinaryTree;
