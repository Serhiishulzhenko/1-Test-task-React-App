import React, { useEffect, useRef } from "react";

export const Search = ({ onSearch }) => {
    const idRef = useRef(null);

  const handleSearchChange = (event) => {
    event.preventDefault();
    clearTimeout(idRef.current)
    idRef.current = setTimeout(() => onSearch(event.target.value), 300);
  };

  useEffect(() => () => clearTimeout(idRef.current), []);

  return (
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
  );
}

