import React, { useContext } from "react";
import TodosContext from "../context/TodosContext";
import { Todo } from "./Todo";

const TodosList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      <div className="content-container">
        <div className="header">
          <div className="header__content">
            <h2 className="header__front">Todo List</h2>
          </div>
        </div>
      </div>
      {todos.map((todo) => (
        <div key={todo.title}>
          <Todo todo={todo} />
        </div>
      ))}
      ;
    </div>
  );
};
export { TodosList as default };
