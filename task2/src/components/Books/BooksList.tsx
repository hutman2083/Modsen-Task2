import React from "react";
import BookCard from "./BookCard";
import "./styleBook.css"

interface BookListProps {
  books: any[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="FlexBox">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;