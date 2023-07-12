import React, { useState } from "react";
import { searchBooks } from "../APIKey/api";
import "./style.css"

interface SearchProps {
  onSearch: (books: any[], count:number) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [count, setCount] =useState(0);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchBooks(query)
      .then((books) => {
        console.log(books)
        setCount(books.length)
        onSearch(books,books.length);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        placeholder="Write the name of the book"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit"></button>
      <p>Количество книг в списке:{count}</p>
    </form>
  );
};

export default Search;