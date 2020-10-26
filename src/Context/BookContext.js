import React from "react";
import UseBooksReducer from "../Reducers/BookReducer";

const BookDataContext = React.createContext(); 
const BookFunctionContext = React.createContext(); 

export function BookProvider({children}) {
  const [Books, setBooks] = UseBooksReducer();

  return (
    <BookFunctionContext.Provider value={setBooks}>
      <BookDataContext.Provider value={Books}>
        {children}
      </BookDataContext.Provider>
    </BookFunctionContext.Provider>
  );
}

export const UseBookDataContext = () => React.useContext(BookDataContext);
export const UseBookFunctionContext = () => React.useContext(BookFunctionContext);