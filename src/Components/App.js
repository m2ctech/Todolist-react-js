import React, { useState } from "react";
import TodoForm from "./TodoForm";

///csss
import classes from "./App.module.css";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [highLightId, setHighLightId] = useState("");

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //EDITING
  function editTodo(todo, text) {
    console.log(todo);

    const todoIndex = todos.indexOf(todo);
    setEdit(true);
    setNewTodo(text);
    setIndex(todoIndex);
    setHighLightId(todo.id);
  }

  function onEdit(data) {
    todos[index].text = data;
    setEdit(false);
  }

  return (
    <div className={classes["todo-app"]}>
      <h1 className={classes.heading}>Todo List</h1>
      <TodoForm
        addTodo={addTodo}
        edit={edit}
        onEdit={onEdit}
        newTodo={newTodo}
      />
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
            editTodo={editTodo}
            edit={edit}
            highLightId={highLightId}
          />
        );
      })}
    </div>
  );
}
