import React, { useState, useEffect, useReducer } from "react";
import TodosContext from "../context/TodosContext";
import todoReducers from "../reducers/todos";
import TodoList from "./TodoList";


const UploadTodos = () => {
  const [todos, dispatch] = useReducer(todoReducers, []);
  const [editStatus, setEditStatus] = useState(false);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      dispatch({ type: "POPULATE_TODOS", todos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, dispatch, editStatus, setEditStatus }}>
      <TodoList />
    </TodosContext.Provider>
  );
};

export { UploadTodos as default };
