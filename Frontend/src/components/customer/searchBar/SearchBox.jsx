import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchSearchResults } from "../../../store/slices/customerSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        dispatch(fetchSearchResults(query));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search products"
        value={query}
        onChange={handleSearch}
        className="border border-gray-300 pl-10 pr-10 py-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 bg-white"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16" y1="16" x2="21" y2="21" />
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
