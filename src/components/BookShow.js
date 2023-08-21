function BookShow({ book }) {
  return (
    <div className="book-show">
      <div>{book.id}</div>
      <div>{book.title}</div>
    </div>
  );
}

export default BookShow;
