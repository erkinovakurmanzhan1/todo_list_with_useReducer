import React, { useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import Todo from "./Todo";

const ToDoList = () => {
  const { state } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {state.map((todo) => {
          return (
            <Todo todo={todo} text={todo.text}  key={todo.id} />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
