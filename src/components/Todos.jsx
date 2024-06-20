import React from "react";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <ul className="flex flex-col justify-center list-none mb-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-center items-center mb-2">
          <span
            className={`text-lg ${
              todo.completed? "line-through" : ""
            }`}
          >
            {todo.title}
          </span>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={() => toggleCompleted(todo.id)}
          >
            {todo.completed? "Uncomplete" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;