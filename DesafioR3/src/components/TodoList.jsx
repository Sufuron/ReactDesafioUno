import React from "react";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li
          className="d-flex justify-content-center align-items-center pb-2 bg-input"
          key={todo.id}
        >
          <h5 className="text-white m-1">Nombre:</h5>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <h5 className="text-white m-1">Email:</h5>
          <input
            type="email"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
        </li>
      ))}
    </div>
  );
};
export default TodoList;
