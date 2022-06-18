import React from "react";
import classes from "./TodoItem.module.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import { ImPencil } from "react-icons/im";

export default function TodoItem(props) {
  const { removeTodo, todo, completeTodo, editTodo, edit, highLightId } = props;

  let newclass = "";
  if (edit && todo.id == highLightId) {
    newclass = classes.highlight;
  } else {
    newclass = classes.todorow;
  }
  return (
    <div className={`${newclass} ${todo.completed && classes.complete}`}>
      {todo.text}
      <div className={classes.iconsContainer}>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          style={{ marginRight: 5 }}
        />
        <BiCheckCircle
          onClick={() => completeTodo(todo.id)}
          style={{ marginRight: 5 }}
        />
        <ImPencil onClick={() => editTodo(todo, todo.text)} />
      </div>
    </div>
  );
}
