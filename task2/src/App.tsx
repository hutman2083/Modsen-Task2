import React, { useState } from "react";
import Search from "./components/SearchArea/Search";
import BookList from "./components/Books/BooksList";
import BookDetail from "./components/Books/BookDetail";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  const handleSearch = (books: any[]) => {
    setBooks(books);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>
            <Search onSearch={handleSearch} />
            <BookList books={books} />
            </div>} />
          <Route path="/book/:id" element={<BookDetail books={books} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
