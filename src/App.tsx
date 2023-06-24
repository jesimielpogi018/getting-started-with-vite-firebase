import { useRef } from "react";
import "./App.css";
import "../services/firebase";
import { db, booksCollection } from "../services/firebase";
import { addDoc, doc, deleteDoc } from "firebase/firestore";

function App() {
  const authorRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const idRef = useRef<HTMLInputElement | null>(null);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    const author = authorRef.current?.value as string;
    const title = titleRef.current?.value as string;

    addDoc(booksCollection, { author, title })
      .then(() => {
        (authorRef.current as HTMLInputElement).value = "";
        (titleRef.current as HTMLInputElement).value = "";

        console.log("new book added!");
      })
      .catch((error) => console.log(error.message));
  }

  function handleDelete(e: React.MouseEvent) {
    e.preventDefault();
    const id = idRef.current?.value as string;
    const docRef = doc(db, "books", id);

    deleteDoc(docRef)
      .then(() => {
        (idRef.current as HTMLInputElement).value = "";

        console.log("book document deleted!");
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <>
      <form>
        <label>Author</label>
        <input type="text" ref={authorRef} />
        <label>Title</label>
        <input type="text" ref={titleRef} />
        <button onClick={(e) => handleAdd(e)}>Add</button>
      </form>

      <form>
        <label>Id</label>
        <input type="text" ref={idRef} />
        <button onClick={(e) => handleDelete(e)}>Delete</button>
      </form>
    </>
  );
}

export default App;
