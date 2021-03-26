import React, { useContext } from "react";
import TodosContext from "../context/TodosContext";

export const Todo = ({ todo, editTodo }) => {
  const { dispatch } = useContext(TodosContext);

  return (
    <div className='content-container'>
          <h3>Title: {todo.title}</h3>
          <p>Body: {todo.body}</p>
          <p>Person-In-Charge: {todo.inCharge}</p>
          <p>Deadline: {todo.deadline}</p>
          <div className="button--justify">
            <button
              className="button"
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", titile: todo.title })
              }
            >
              Remove
            </button>
            <button
              className="button"
              onClick={() =>
                editTodo({
                  title: todo.title,
                  body: todo.body,
                  inCharge: todo.inCharge,
                  deadline: todo.deadline,
                })
              }
            >
              Edit
            </button>
          </div>
      </div>
  );
};
