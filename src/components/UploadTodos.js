import React, { useState, useEffect, useReducer } from "react";
import TodosContext from "../context/TodosContext";
import todoReducers from "../reducers/todos";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";

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

  const editTodo = (todo) => {
    if (todos) {
      dispatch({
        type: "EDIT_TODO",
        title: todo.title,
        body: todo.body,
        inCharge: todo.inCharge,
        // deadline: todo.deadline,
      });
    }
    setEditStatus(!editStatus);
  };

  return (
    <TodosContext.Provider value={{ todos, dispatch, editTodo }}>
      <TodoList />
      {editStatus ? <EditTodoForm /> : <AddTodoForm />}
    </TodosContext.Provider>
  );
};

export { UploadTodos as default };
