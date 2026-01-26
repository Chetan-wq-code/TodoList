import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  const categories = ["All", "Completed", "Pending"];

  return (
    <div className="flex justify-center gap-2 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            filter === cat
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;