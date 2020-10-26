import React from "react";

const BinaryTreeDataContext = React.createContext(); 
const BinaryTreeFunctionContext = React.createContext(); 

export function BinaryTreeProvider({children}) {
  const [AVLTreeData, setAVLTreeData] = React.useState(null); 
  const [BinaryTreeData, setBinaryTreeData] = React.useState(null); 
  const [AVLTreeLogs, setAVLTreeLogs] = React.useState([]); 
  const [BinaryTreeLogs, setBinaryTreeLogs] = React.useState([]); 

  return (
    <BinaryTreeFunctionContext.Provider value={{setAVLTreeData, setBinaryTreeData, setAVLTreeLogs, setBinaryTreeLogs}}>
      <BinaryTreeDataContext.Provider value={{AVLTreeData, BinaryTreeData, AVLTreeLogs, BinaryTreeLogs}}>
        {children}
      </BinaryTreeDataContext.Provider>
    </BinaryTreeFunctionContext.Provider>
  );
}

export const UseBinaryTreeDataContext = () => React.useContext(BinaryTreeDataContext);
export const UseBinaryTreeFunctionContext = () => React.useContext(BinaryTreeFunctionContext);