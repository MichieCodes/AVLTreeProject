import React from "react";
import { NotificationProvider } from "./GlobalComponents/Notification/NotificationContext";
import { BinaryTreeProvider } from "./Context/BinaryTreeContext";

import AVLTreePanel from "./Components/AVLTreePanel";
import BinaryTreePanel from "./Components/BinaryTreePanel";

import "./App.scss";

function App() {
  const [Active, setActive] = React.useState(0);

  return (
    <div className="App">
      <nav>
        <li className={Active === 0 ? "ActiveLink" : null} onClick={() => setActive(0)} style={{marginRight: "30px"}}>
          <span>Book AVL Tree</span>
        </li>
        <li className={Active !== 0 ? "ActiveLink" : null} onClick={() => setActive(1)}>
          <span>Binary Tree Generator</span>
        </li>
      </nav>

      <NotificationProvider>
        <BinaryTreeProvider>
          {Active === 0 ? <AVLTreePanel/> : <BinaryTreePanel/>}
        </BinaryTreeProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
