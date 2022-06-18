import React, { useState } from "react";

///css
import classes from "./TodoForm.module.css";

export default function TodoForm(props) {
  const [error, setError] = useState(null);
  const inputContainer = React.useRef(null);

  if (props.edit == true) {
    inputContainer.current.value = props.newTodo;
    inputContainer.current.focus();
  }

  function changeHandler(e) {
    setInput(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputContainer.current.value.trim() == 0) {
      setError(true);
    } else {
      if (props.edit == true) {
        props.onEdit(inputContainer.current.value);
      } else {
        props.addTodo(inputContainer.current.value);
      }
      setError(false);
    }
    //setInput("")
    inputContainer.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes["todo-form"]}>
      <input
        className={classes["todo-input"]}
        ref={inputContainer}
        //onChange={changeHandler}
        placeholder="Add a todo"
        //value={input}
      />
      <button type="submit" className={classes["todo-button"]}>
        {!props.edit ? "Add Todo" : "Edit Todo"}
      </button>
      <br />
      {error && <h4 className={error && classes.error}>pleace enter value</h4>}
    </form>
  );
}
