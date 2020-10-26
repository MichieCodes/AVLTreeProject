import React from "react";
import { gql, useMutation } from "@apollo/client";
import { UseBookDataContext, UseBookFunctionContext } from "../../Context/BookContext";
import { UseNotificationContext } from "../../GlobalComponents/Notification/NotificationContext";

import PrimaryButton from "../../GlobalComponents/PrimaryButton";
import ScrollableText from "../../GlobalComponents/ScrollableText";

const DELETE_BOOK = gql`
  mutation DeleteBook($id: Int!) {DeleteBook(id: $id)}
`;

function BookTable({setSelectedBook}) {
  const Books = UseBookDataContext();
  const setBooks = UseBookFunctionContext();
  const PushNotification = UseNotificationContext();
  
  const [DeleteBook] = useMutation(DELETE_BOOK, {errorPolicy: "all",  
    onCompleted: (DeleteBookMutationData) => {
        if(DeleteBookMutationData.DeleteBook >= 0) setBooks("DELETE_BOOK", DeleteBookMutationData.DeleteBook);
        setTimeout(() => {
            PushNotification({type: "Success", title: `Book Deleted`, timeout: 4500});
        }, 500);
    }, onError: () => {
        setTimeout(() => {
            PushNotification({title: "Failed To Delete Book", 
                body: "Please Try Again Another Time", timeout: 4500});
        }, 500);
    }
  });

  return (
    <>
      <div className="BookTable">
        {Books.length > 0 &&
          <div style={{overflow: "auto", maxHeight: "45vh"}}>
            <table>
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {
                  Books.map((Book, b) => 
                    <tr key={b}>
                      <td className="BookProperty">
                        <ScrollableText>{Book.ISBN}</ScrollableText>
                      </td>
                      <td className="BookProperty">
                        <ScrollableText style={{maxWidth: "15rem"}}>{Book.title}</ScrollableText>
                      </td>
                      <td className="BookProperty">
                        <ScrollableText style={{maxWidth: "10rem"}}>{Book.author}</ScrollableText>
                      </td>
                      <td className="BookActionButtonGroup">
                        <button onClick={() => setSelectedBook(Book)}>Edit</button>
                        <button onClick={() => DeleteBook({variables: {id: Book.id}})}>Delete</button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        }

        <PrimaryButton style={!Books.length ? {marginTop: "0"} : null} onClick={() => setSelectedBook({})}>Create New Book</PrimaryButton>
      </div>
    </>
  );
}

export default BookTable;
