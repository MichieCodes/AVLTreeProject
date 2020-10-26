import React from "react";

import ScrollableText from "../../GlobalComponents/ScrollableText";

const Properties = [
  {title: "ISBN", displayName: "ISBN"},
  {title: "title", displayName: "Title"},
  {title: "author", displayName: "Author"}
]

function AVLTreeNode({nodeData, keyProperty = "ISBN"}) {
  const TimeoutRef = React.useRef(null)
  const [ShowToolTip, setShowToolTip] = React.useState(null);
  const PropertyValue = nodeData?.attributes ? nodeData.attributes[keyProperty] : null;

  const onMouseEnter = () => {
      TimeoutRef.current = setTimeout(() => {setShowToolTip(true)}, 1000);
  }

  const onMouseOut = () => {
      clearTimeout(TimeoutRef.current);
      TimeoutRef.current = null;
      setShowToolTip((OldShowValue) => OldShowValue ? false : null);
  }

  React.useEffect(() => {
    if(nodeData && !nodeData.attributes) {
      let Edge = document.querySelector(`[data-target-id*="${nodeData.id}"]`);

      Edge && Edge.classList.add("EmptyTreeNode");
    } else return;
  });

  return (
    <div className={`TreeNode ${!PropertyValue ? "EmptyTreeNode" : ""}`}>
      <span 
        onMouseOver={PropertyValue ? onMouseEnter : null}
        onMouseLeave={PropertyValue ? onMouseOut : null}
      >
        <ScrollableText timeStretch={0.95} offset="6px">{PropertyValue}</ScrollableText>
      </span>

      
      <div className="ToolTip" style={{
        animation: ShowToolTip ? 
        "ToolTipScaleIn 0.3s ease-in-out forwards" : null
      }}>
        {Properties.map((Property, p) => Property.title !== keyProperty ? 
          <span key={p}>
            <b>{Property.displayName}: </b>{PropertyValue && nodeData.attributes[Property.title]}
          </span> : null
        )}
      </div>
    </div>
  );
}

export default AVLTreeNode;
