import React from "react";

function TodoItem(todo) {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return "line-through";
    } else {
      return "none";
    }
  };

  return (
    <div className="flex items-center p-4 border border-gray-300 rounded-md">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-indigo-600 mr-4"
        onChange={() => todo.toggleCompleted(todo.id)}
      />
      <p className={`text-xl ${getTodoTitleStyle()}`}>{todo.title}</p>
      <button className="bg-red-500 text-white py-2 px-4 rounded-full ml-4" onClick={() => todo.deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
}

export default TodoItem;