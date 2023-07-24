import React from "react";
import "./styleBook.css";

interface CategorySelectorProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className="CategorySelector">
      <label htmlFor="category">Select category: </label>
      <select id="category" value={selectedCategory} onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;