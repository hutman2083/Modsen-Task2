import React from "react";

interface BookListProps {
  books: any[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.image && <img src={book.image} alt={book.title} />}
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <p>{book.categories}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookList;