import React, { useEffect, useReducer } from "react";
import TodosContext from "../context/TodosContext";
import todoReducers from "../reducers/todos";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const UploadTodos = () => {
  const [todos, dispatch] = useReducer(todoReducers, []);

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
    <TodosContext.Provider value={{ todos, dispatch }}>
      <TodoList />
      <AddTodoForm />
    </TodosContext.Provider>
  );
};

export { UploadTodos as default };
