import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ filteredTodos, toggleComplete, startEdit, deleteTodo, filter }) => {
  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            startEdit={startEdit}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      {filteredTodos.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-400 italic">No {filter.toLowerCase()} tasks found.</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;