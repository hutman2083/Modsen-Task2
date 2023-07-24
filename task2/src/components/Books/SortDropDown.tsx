import React from "react";

type SortDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select value={value} onChange={handleSortChange}>
      <option value="relevance">Relevance</option>
      <option value="newest">Newest</option>
    </select>
  );
};

export default SortDropdown;