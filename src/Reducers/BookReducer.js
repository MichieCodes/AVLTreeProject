import React from "react";

const BooksReducer = (Books, Action) => {
	switch(Action.type) {
		case "SET_BOOKS":
      return Action.payload;
		case "UPDATE_BOOK":
      return Books.map((Book) => Book.id === Action.payload.id ? Action.payload : Book);
		case "CREATE_BOOK":
      return [...Books, Action.payload];
		case "DELETE_BOOK":
      return Books.filter((Book) => Book.id !== Action.payload);
		case "DELETE_ALL_BOOKS":
      return [];
		default:
			return Books;
	}
}

export default function UseBooksReducer() {
	const [Books, BooksReducerDispatch] = React.useReducer(BooksReducer, []);

	const setBooks = React.useCallback((type, payload) => 
    BooksReducerDispatch({type, payload}), []);

	return [Books, setBooks];
}