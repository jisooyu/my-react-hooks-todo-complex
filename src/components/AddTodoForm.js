import React, { useState, useContext } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodosContext from "../context/TodosContext";

const AddTodoForm = () => {
  const { dispatch } = useContext(TodosContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [inCharge, setInCharge] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  const addTodos = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      title,
      body,
      inCharge,
      deadline,
    });
    setTitle("");
    setBody("");
    setInCharge("");
    setDeadline("");
  };

  return (
    <div className="content-container">
      <div className="header">
        <div className="header__content">
          <h3 className="header__front">AddTodoForm</h3>
        </div>
      </div>
      <form className="form" onSubmit={(e) => addTodos(e)}>
        <label>Title:</label>
        <input
          className="text-input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <input
          className="text-input"
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Person-in-charge:</label>
        <input
          className="text-input"
          type="text"
          name="inCharge"
          value={inCharge}
          onChange={(e) => setInCharge(e.target.value)}
        />
        <label>Deadline:</label>
        <Datepicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
