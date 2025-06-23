import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === " ") return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded bg-white space-y-4">
      <h1 className="text-2xl font-bold text-center">My To-Do List</h1>

      <div className=" flex space-x-2">
        <input
          type="text"
          className="border flex-1 rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleDone(todo.id)}
            onDalete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
