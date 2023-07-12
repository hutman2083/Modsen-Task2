import React from "react";
import "./style.css";

interface BookCardProps {
  book: {
    id: number;
    title: string;
    image: string;
    description: string;
    categories: string[];
  };
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="book-card">
      {book.image && <img src={book.image} alt={book.title} />}
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>{book.categories.join(", ")}</p>
    </div>
  );
};

export default BookCard;