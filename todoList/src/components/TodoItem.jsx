import React from "react";

const TodoItem = ({ todo, toggleComplete, startEdit, deleteTodo }) => {
  return (
    <li
      className={`flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-all ${
        todo.completed ? "opacity-60" : "shadow-sm"
      }`}
    >
      <div 
        className="flex items-center gap-3 flex-1 cursor-pointer"
        onClick={() => toggleComplete(todo.id)}
      >
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          todo.completed ? "bg-green-500 border-green-500" : "border-gray-300"
        }`}>
          {todo.completed && <span className="text-white text-xs">✓</span>}
        </div>
        <span className={`text-gray-700 font-medium ${todo.completed ? "line-through text-gray-400" : ""}`}>
          {todo.text}
        </span>
      </div>

      <div className="flex gap-3 ml-4">
        <button
          onClick={() => startEdit(todo)}
          className="text-blue-500 hover:text-blue-700 text-sm font-bold uppercase tracking-wider"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 text-sm font-bold uppercase tracking-wider"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;