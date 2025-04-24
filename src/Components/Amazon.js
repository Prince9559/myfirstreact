import React from "react";

const Amazon = () => {
  return (
    <div className="search-bar-container flex items-center border-2 border-orange-400 rounded overflow-hidden w-full max-w-xl">
      <div className="dropdown bg-gray-200 text-sm px-2 py-1 border-r border-gray-300">
        <select className="dropdown-select bg-gray-200 outline-none">
          <option value="all">All</option>
        </select>
      </div>
      <input
        type="text"
        className="search-input flex-grow px-3 py-2 outline-none"
        placeholder="Search Amazon.in"
      />
      <button className="search-button bg-orange-400 px-4 py-2">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Amazon;
