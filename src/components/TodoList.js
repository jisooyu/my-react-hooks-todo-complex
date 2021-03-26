import React, { useState, useContext } from "react";
import TodosContext from "../context/TodosContext";
import { Todo } from "./Todo";
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";

const TodosList = () => {
  const { todos, editStatus, setEditStatus } = useContext(TodosContext);

  const initialCurrentTodo = {
    title: "",
    body: "",
    inCharge: "",
    deadline: "",
  };
  const [currentTodo, setCurrentTodo] = useState(initialCurrentTodo);

  const editTodo = (todo) => {
    setEditStatus(!editStatus);
    setCurrentTodo({
      title: todo.title,
      body: todo.body,
      inCharge: todo.inCharge,
      deadline: todo.deadline,
    });
  };

  return (
    <div>
      <div className="content-container">
        <div className="header">
          <div className="header__content">
            <h3 className="header__front">Todo List</h3>
          </div>
        </div>
      </div>
      {todos.map((todo) => (
        <div key={todo.title}>
          <Todo todo={todo} editTodo={editTodo} />
        </div>
      ))}
      {editStatus ? (
        <EditTodoForm currentTodo={currentTodo} />
      ) : (
        <AddTodoForm />
      )}
    </div>
  );
};
export { TodosList as default };
