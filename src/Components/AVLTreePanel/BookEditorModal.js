import React from "react";
import { useLazyQuery, useMutation, gql } from "@apollo/client";
import { UseBookFunctionContext } from "../../Context/BookContext";
import { UseNotificationContext } from "../../GlobalComponents/Notification/NotificationContext";

import PrimaryModal from "../../GlobalComponents/PrimaryModal";
import PrimaryButton from "../../GlobalComponents/PrimaryButton";
import BookTable from "./BookTable";
import EditBookModal from "./EditBookModal";
import Spinner from "../../GlobalComponents/Spinner";

const GET_BOOKS = gql`
  query GetBooks {GetBooks {id ISBN title author}}
`;
const DELETE_ALL_BOOKS = gql`
  mutation DeleteAllBooks {DeleteAllBooks}
`;
const LOAD_BOOKS_FROM_TEXT = gql`
  mutation LoadBooksFromText($text: String, $append: Boolean!) {
    LoadBooksFromText(text: $text, append: $append)
  }
`;

function BookEditorModal({CloseCallback}) {
  const [Loading, setLoading] = React.useState(true);
  const [ShowSpinner, setShowSpinner] = React.useState(true);
  const [SelectedBook, setSelectedBook] = React.useState(null);
  const setBooks = UseBookFunctionContext();
  const PushNotification = UseNotificationContext();

  const LoadFromFile = ({target}) => {
    let File = target.files ? target.files[0] : null;

    if(!window.FileReader) {
      PushNotification({title: "Can't read file", body: "Please Manully Enter Data", timeout: 4500});
      return;
    } else if(!File) {
      PushNotification({title: "No File Loaded", body: "Please Manully Enter Data", timeout: 4500});
      return;
    }

    const Reader = new FileReader();
    Reader.onload = (event) => {
      LoadBooksFromText({variables: {text: event?.target?.result, append: false}})
      target.value = "";
    }
    Reader.readAsText(File, 'UTF-8');
  }

  const [GetBooks] = useLazyQuery(GET_BOOKS, {fetchPolicy: "cache-and-network", 
    onCompleted: (GetBooksQueryData) => {
      setBooks("SET_BOOKS", GetBooksQueryData.GetBooks);

      setTimeout(() => {
          setLoading(false);
      }, 500)
    }, onError: () => {
        setTimeout(() => {
            setLoading(false);
            CloseCallback();
            PushNotification({title: "Failed To Get Books", 
                body: "Please Try Again Another Time", timeout: 4500});
        }, 500);
    }
  });
  const [DeleteAllBooks] = useMutation(DELETE_ALL_BOOKS, {errorPolicy: "all",  
    onCompleted: () => {
        setBooks("DELETE_ALL_BOOKS");
        setTimeout(() => {
            PushNotification({type: "Success", title: `All Books Deleted`, timeout: 4500});
        }, 500);
    }, onError: () => {
        setTimeout(() => {
            PushNotification({title: "Failed To Delete All Books", 
                body: "Please Try Again Another Time", timeout: 4500});
        }, 500);
    }
  });
  const [LoadBooksFromText] = useMutation(LOAD_BOOKS_FROM_TEXT, {errorPolicy: "all",  
    onCompleted: () => {
        GetBooks();
        setTimeout(() => {
            PushNotification({type: "Success", title: `Books Loaded`, timeout: 4500});
        }, 500);
    }, onError: () => {
        setTimeout(() => {
            PushNotification({title: "Failed To Load Books", 
                body: "Please Try Again Another Time", timeout: 4500});
        }, 500);
    }
  });
  
  React.useEffect(() => GetBooks(), [GetBooks]);

  return (
    <>
    {!ShowSpinner ?
      <>
        <PrimaryModal 
          HeaderTitle="Book Editor" CloseCallback={CloseCallback}
          style={{minWidth: "45vw", maxWidth: "55vw"}}
          >
          <div className="BookListButtonGroup">
            <PrimaryButton onClick={() => LoadBooksFromText({variables: {append: false}})}>Load Default</PrimaryButton>
            <PrimaryButton>
              <label>Load From File<input type="file" accept=".txt" onChange={LoadFromFile}/></label>
            </PrimaryButton>
            <PrimaryButton onClick={() => DeleteAllBooks()}>Delete All</PrimaryButton>
          </div>

          <BookTable setSelectedBook={setSelectedBook}/>
        </PrimaryModal>

        {SelectedBook && <EditBookModal Book={SelectedBook} CloseCallback={setSelectedBook}/>}
      </>
      :
      <Spinner Loading={Loading} CloseCallback={setShowSpinner}/>
    }
    </>
  );
}

export default BookEditorModal;
