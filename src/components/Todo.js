import React, { useContext } from "react";
import TodosContext from "../context/TodosContext";

export const Todo = ({ todo }) => {
  const { title, body, inCharge, deadline } = todo;
  const { dispatch } = useContext(TodosContext);
  return (
    <div className="content-body">
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{inCharge}</p>
      <p>{deadline}</p>
      <div className="button--direction">
        <button
          className="button"
          onClick={() => dispatch({ type: "REMOVE_TODO", titile: title })}
        >
          Remove
        </button>
        <button
          className="button"
          onClick={() =>
            dispatch({
              type: "EDIT_TODO",
              title: title,
              body: title,
              inCharge: title,
              deadline: deadline,
            })
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
};
