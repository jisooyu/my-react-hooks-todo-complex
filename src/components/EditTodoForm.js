import React, { useState, useContext } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodosContext from "../context/TodosContext";

const EditTodoForm = ({ currentTodo }) => {
  const { dispatch, editStatus, setEditStatus } = useContext(TodosContext);

  const [updateTodo, setUpdateTodo] = useState(currentTodo);
  const [deadline, setDeadline] = useState(new Date(updateTodo.deadline));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateTodo({ ...updateTodo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_TODO",
      title: updateTodo.title,
      body: updateTodo.body,
      inCharge: updateTodo.inCharge,
      deadline: deadline,
    });
    setEditStatus(!editStatus);
  };

  return (
    <div className="content-container">
      <div className="header">
        <div className="header__content">
          <h3 className="header__front">EditTodoForm</h3>
        </div>
      </div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>Title:</label>
        <input
          className="text-input"
          type="text"
          name="title"
          value={updateTodo.title}
          onChange={(e) => handleInputChange(e)}
        />
        <label>Body:</label>
        <input
          className="text-input"
          type="text"
          name="body"
          value={updateTodo.body}
          onChange={(e) => handleInputChange(e)}
        />
        <label>Person-in-charge:</label>
        <input
          className="text-input"
          type="text"
          name="inCharge"
          value={updateTodo.inCharge}
          onChange={(e) => handleInputChange(e)}
        />
        <label>Deadline:</label>
        <Datepicker
          selected={deadline}
          onChange={(deadline) => setDeadline(deadline)}
        />
        <button className="button">Submit</button>
        <button className='button' onClick={()=>setEditStatus(true)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTodoForm;
