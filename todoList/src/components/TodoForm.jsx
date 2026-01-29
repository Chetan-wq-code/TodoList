import React from "react";

const TodoForm = ({ inputValue, setInputValue, handleAddOrUpdate, editId }) => {
  return (
    <form onSubmit={handleAddOrUpdate} className="flex-col sm:flex-row mb-6">
      <input
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-6 text-right pr-25 mb-4 sm:mb-0 w-full sm:w-auto"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
      >
        {editId ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoForm;