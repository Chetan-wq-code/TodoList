import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import bg_image from "./Images/bg_image.png"

const App = () => {
  // Load data immediately when state is created
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("my_todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);

  // Sync logic: useEffect is needed to save changes
  useEffect(() => {
    localStorage.setItem("my_todos", JSON.stringify(todos));
  }, [todos]);

  // CRUD Functions
const handleAddOrUpdate = (e) => {
  e.preventDefault();
  if (!inputValue.trim()) return;

  if (editId) {
    setTodos(todos.map(t => t.id === editId ? { ...t, text: inputValue } : t));
    setEditId(null);
  } else {
    // task structure with date
    const newTodo = { 
      id: Date.now(), 
      text: inputValue, 
      completed: false,
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setTodos([...todos, newTodo]);
  }
  setInputValue("");
};


  const deleteTodo = (id) => setTodos(todos.filter(t => t.id !== id));
  const toggleComplete = (id) => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const startEdit = (todo) => { 
    setInputValue(todo.text); 
    setEditId(todo.id); 
  };


const filteredTodos = todos
  .filter(t => {
    if (filter === "Completed") return t.completed;
    if (filter === "Pending") return !t.completed;
    return true;
  })
  // Sort by ID (Date.now()) in descending order (Newest first)
  .sort((a, b) => b.id - a.id); 

return (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-gray-800 bg-[url('./Images/bg_image.png')] bg-cover">
    <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2 text-center pb-10">My Tasks</h1>
      
      <TodoForm 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        handleAddOrUpdate={handleAddOrUpdate} 
        editId={editId} 
      />

      <FilterButtons filter={filter} setFilter={setFilter} />

      {/* The sorted list is passed here */}
      <TodoList 
        filteredTodos={filteredTodos} 
        toggleComplete={toggleComplete} 
        startEdit={startEdit} 
        deleteTodo={deleteTodo}
        filter={filter}
      />
    </div>
  </div>
);
};

export default App;