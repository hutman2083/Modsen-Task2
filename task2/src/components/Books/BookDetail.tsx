import React from "react";
import { useParams } from "react-router-dom";

interface BookDetailProps {
  books: any[];
}

const BookDetail: React.FC<BookDetailProps> = ({ books }) => {
  const { id } = useParams<{ id: string }>();
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Книга не найдена</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      {book.image && (
        <img src={book.image} alt={book.title} style={{ width: "200px" }} />
      )}
      <div>{book.author}</div>
      <div>{book.categories}</div>
      <div>{book.description}</div>
    </div>
  );
};

export default BookDetail;