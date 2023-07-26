import React, { useState } from "react";
import { searchBooks } from "../APIKey/api";
import "./style.css";
import BookLoader from "../Books/LoadingIndicator";

interface SearchProps {
  onSearch: (books: any[], count: number) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    searchBooks(query, category)
      .then((books) => {
        setCount(books.length);
        onSearch(books, books.length);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError("Error searching books. Please try again later.");
      });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="search-container">
        <input
          placeholder="Write the name of the book"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">All categories</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </select>
        <button type="submit">{loading ? "Loading..." : "Search"}</button>
      </div>
      <p>Количество книг в списке: {count}</p>
      {error && <div className="error">{error}</div>}
      {loading && <BookLoader />}
    </form>
  );
};

export default Search;