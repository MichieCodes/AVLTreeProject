import React from "react";
import { gql, useMutation } from "@apollo/client";
import { UseNotificationContext } from "../../GlobalComponents/Notification/NotificationContext";

import SecondaryModal from "../../GlobalComponents/SecondaryModal";
import TextInput from "../../GlobalComponents/TextInput";
import { UseBookFunctionContext } from "../../Context/BookContext";

const UPDATE_BOOK = gql`
  mutation UpdateBook($id: Int!, $ISBN: String!, $title: String!, $author: String!) {
    UpdateBook(id: $id, ISBN: $ISBN, title: $title, author: $author) {
      id ISBN title author
    }
  }
`;
const CREATE_BOOK = gql`
  mutation CreateBook($ISBN: String!, $title: String!, $author: String!) {
    CreateBook(ISBN: $ISBN, title: $title, author: $author) {
      id ISBN title author
    }
  }
`;

function EditBookModal({Book, CloseCallback}) {
  const [Callback, setCallback] = React.useState(() => 0);
  const [ISBN, setISBN] = React.useState(Book?.ISBN || "");
  const [Title, setTitle] = React.useState(Book?.title || "");
  const [Author, setAuthor] = React.useState(Book?.author || "");
  const setBooks = UseBookFunctionContext();
  const PushNotification = UseNotificationContext();

  const Save = (cb) => {
    if(!ISBN.trim() || !Title.trim() || !Author.trim()) {
      PushNotification({title: "Empty Fields", body: "Please Fill out all Field Inputs", timeout: 4500});
      return;
    }

    setCallback(cb);

    if(Book.id)
      UpdateBook({variables: {id: Book.id, ISBN, title: Title, author: Author}});
    else
      CreateBook({variables: {ISBN, title: Title, author: Author}});
  }

  const [CreateBook] = useMutation(CREATE_BOOK, {errorPolicy: "all",  
    onCompleted: (CreateBookData) => {
        setBooks("CREATE_BOOK", CreateBookData.CreateBook);
        Callback && Callback();
        setTimeout(() => {
            PushNotification({type: "Success", title: `Book Created`, timeout: 4500});
        }, 500);
        setCallback(null);
    }, onError: () => {
        setTimeout(() => {
            PushNotification({title: "Failed To Create Book", body: "Please Try Again", timeout: 4500});
        }, 500);
        setCallback(null);
    }
  });
  const [UpdateBook] = useMutation(UPDATE_BOOK, {errorPolicy: "all",  
    onCompleted: (UpdateBookData) => {
        setBooks("UPDATE_BOOK", UpdateBookData.UpdateBook);
        Callback && Callback();
        setTimeout(() => {
            PushNotification({type: "Success", title: `Book Updated`, timeout: 4500});
        }, 500);
        setCallback(null);
    }, onError: () => {
        setTimeout(() => {
            PushNotification({title: "Failed To Update Book", body: "Please Try Again", timeout: 4500});
        }, 500);
        setCallback(null);
    }
  });

  return (
    <SecondaryModal 
      HeaderTitle={`${Book?.ISBN ? "Edit" : "Create"} Book`} CloseCallback={CloseCallback}
      LeftTitle="Cancel" 
      RightTitle="Save"
      LeftAction={(cb) => cb()}
      RightAction={Save}
    >
      <div className="PropertyInputGroup">
        <span className="InputLabel">ISBN:</span>
        <TextInput value={ISBN} onChange={(e) => setISBN(e.target.value)}/>
        <span className="InputLabel">Title:</span>
        <TextInput value={Title} onChange={(e) => setTitle(e.target.value)}/>
        <span className="InputLabel">Author:</span>
        <TextInput value={Author} onChange={(e) => setAuthor(e.target.value)}/>
      </div>
    </SecondaryModal>
  );
}

export default EditBookModal;
