import React, { useState } from "react";
import BookCard from "./BookCard";

interface BookListProps {
  books: any[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 40;

  const calculateBooksToDisplay = () => {
    const firstBookIndex = (currentPage - 1) * booksPerPage;
    const lastBookIndex = currentPage * booksPerPage;
    const currentBooks = books.slice(firstBookIndex, lastBookIndex);
    return currentBooks;
  };

  const currentBooks = calculateBooksToDisplay();

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };


  return (
    <div className="FlexBox">
      {currentBooks.map((book) => (
        <div key={book.id} className="book-card">
          <BookCard book={book} />
        </div>
      ))}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default BookList;