import React, { useState, useEffect, useContext } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodosContext from "../context/TodosContext";

const EditTodoForm = () => {
  const { editTodo } = useContext(TodosContext);
  // const {currentTitle, currentBody, currentInCharge, currentDeadline} = editTodo
  const [currentTodo, setCurrentTodo] = useState(editTodo);
  const [deadline, setDeadline] = useState(new Date());
  useEffect(() => {
    setCurrentTodo(currentTodo);
  }, [currentTodo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo({
      title: currentTodo.title,
      body: currentTodo.body,
      inCharge: currentTodo.inCharge,
      deadline,
    });
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
          value={currentTodo.title}
          onChange={(e) => handleInputChange(e)}
        />
        <label>Body:</label>
        <input
          className="text-input"
          type="text"
          name="editBody"
          value={currentTodo.body}
          onChange={(e) => handleInputChange(e)}
        />
        <label>Person-in-charge:</label>
        <input
          className="text-input"
          type="text"
          name="inCharge"
          value={currentTodo.inCharge}
          onChange={(e) => handleInputChange(e)}
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

export default EditTodoForm;
