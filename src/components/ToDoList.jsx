import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos,dispatch,save}) => {
    return (
    <div>
      <ul>
        {todos.map((todo) => {
          return( <Todo
            dispatch={dispatch}
              todo={todo}
              text={todo.text}
              save={save}
              key={todo.id}
            />)
})}
      </ul>
    </div>
  );
};

export default ToDoList;
