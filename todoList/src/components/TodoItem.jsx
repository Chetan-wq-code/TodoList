import React from "react";

const TodoItem = ({ todo, toggleComplete, startEdit, deleteTodo }) => {
  return (
    <li className={`flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 ${todo.completed ? "opacity-60" : "shadow-sm"}`}>
      <div className="flex items-center gap-3 flex-1 cursor-pointer" onClick={() => toggleComplete(todo.id)}>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${todo.completed ? "bg-green-500 border-green-500" : "border-gray-300"}`}>
          {todo.completed && <span className="text-white text-[10px]">✓</span>}
        </div>
        <div className="flex flex-col">
          <span className={`text-gray-700 font-medium ${todo.completed ? "line-through text-gray-400" : ""}`}>
            {todo.text}
          </span>
          {/* Timestamp added here */}
          <span className="text-[10px] text-gray-400 mt-1 uppercase font-semibold tracking-wider">
            Added: {todo.date}
          </span>
        </div>
      </div>
      <div className="flex gap-3 ml-4">
        <button onClick={() => startEdit(todo)} className="text-blue-500 hover:text-blue-700 text-xs font-bold uppercase">Edit</button>
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700 text-xs font-bold uppercase">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;