import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ onSubmit, book }) {
  const { handleEditBookById } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    handleEditBookById(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          autoFocus
          value={title}
          onChange={handleChange}
        ></input>
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
