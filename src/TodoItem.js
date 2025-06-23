import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center border-b py-1">
      <span
        oncliclk={onToggle}
        className={` flex-1 cursor-pointer${
          todo.done ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onclick={onDelete}
        className="text-red-500 hover:txt-red-700 text-sm"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
