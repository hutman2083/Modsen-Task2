import React, { useState } from "react";
import axios from "axios";
import { searchBooks } from "../APIKey/api";

interface SearchProps {
  onSearch: (books: any[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchBooks(query)
      .then((books) => {
        console.log(books)
        onSearch(books);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;