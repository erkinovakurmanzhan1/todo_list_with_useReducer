import React from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { TodoContextProvider } from "./store/TodoContext";

function App() {
  return (
    <React.Fragment>
      <TodoContextProvider>
        <div className="App">
          <header>
            <h1>ToDo List</h1>
          </header>
          <Form />
          <ToDoList />
        </div>
      </TodoContextProvider>
    </React.Fragment>
  );
}

export default App;
