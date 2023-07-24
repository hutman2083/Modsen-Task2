import React, { useState } from "react";
import { searchBooks } from "../APIKey/api";
import "./style.css";
import BookLoader from "../Books/LoadingIndicator";
import CategorySelector from "../Books/CategorySelector";
import SortDropdown from "../Books/SortDropDown";

interface SearchProps {
  onSearch: (books: any[], count: number, query: string, category: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState(query.trim() !== '' ? 'relevance' : 'newest');

const handleSortChange = (value: string) => {
  setSort(value);
};

const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (query.trim() === "") {
    return;
  }
  setLoading(true);
  try {
    const books = await searchBooks(query, selectedCategory, sort);
    setCount(books.length);
    onSearch(books, books.length, query, selectedCategory);
    setError("");
  } catch (error) {
    console.error(error);
    setError("Error searching books. Please try again later.");
  } finally {
    setLoading(false);
  }
};
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
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
        <button disabled={loading} type="submit">
          Search
        </button>
      </div>
      <CategorySelector
        categories={["all", "art", "biography", "computers", "history", "medical", "poetry"]}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <SortDropdown value={sort} onChange={handleSortChange} />
      <div className="count-container">{count} results found</div>
      {error && <div className="error-container">{error}</div>}
      {loading && <BookLoader />}
    </form>
  );
};

export default Search;