import React, { useState } from "react";
import Search from "./components/SearchArea/Search";
import BookList from "./components/Books/BooksList";
import { searchBooks } from "./components/APIKey/api";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  const handleSearch = (books: any[]) => {
    setBooks(books);
  };

  return (
    <div>
      <Header/>
      <Search onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default App;
