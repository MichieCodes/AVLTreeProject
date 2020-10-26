import React from "react"; 

import "./ScrollableText.scss";

function ScrollableText(props) {
  const Text = React.useRef(null);
  const Observer = React.useRef(null);
  const [ReRender, setReRender] = React.useState(false);

  React.useEffect(() => {
    if(Text.current.offsetWidth >= Text.current.scrollWidth) {Text.current.style.setProperty("--scroll-amount", "0px"); return;}
    
    let Scrollable = Text.current;
    let Amount = Scrollable.scrollWidth - Scrollable.offsetWidth;
    
    Scrollable.style.width = `${Scrollable.offsetWidth}px`;
    Scrollable.style.setProperty("--scroll-amount", `-${Amount}px - ${props.offset || "0px"}`);

    Scrollable.onmouseover = () => {
      let Indent = parseFloat(getComputedStyle(Scrollable).textIndent);

      Scrollable.style.setProperty("--scroll-in-from", `${Indent}px`);
      Scrollable.style.animation = `Scroll-In ${(props.timeStretch || 2) * (Amount-Math.abs(Indent))/Amount}s ease-in-out forwards`;
    };
    Scrollable.onmouseout = () => {
      let Indent = parseFloat(getComputedStyle(Scrollable).textIndent);

      Scrollable.style.setProperty("--scroll-out-from", `${Indent}px`);
      Scrollable.style.animation = `Scroll-Out ${(props.timeStretch || 2) * Math.abs(Indent)/Amount}s ease-in-out`;
    };

    return () => {
      Scrollable.onmouseover = null;
      Scrollable.onmouseout = null;
      Scrollable.style.width = null;
    };
  }, [Text, ReRender, props.timeStretch, props.enabled, props.offset, props.children]);

  React.useEffect(() => {
    Observer.current = new ResizeObserver(() => setReRender((OldValue) => !OldValue));
    Observer.current.observe(Text.current.parentNode);

    return () => Observer.current.disconnect();
  }, [Text, Observer, setReRender]);

  return (
    <span className={props.className} ref={Text} style={props.style}>{props.children}</span>
  );
}

export default ScrollableText;