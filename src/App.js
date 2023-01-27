import { useState, useReducer, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import reducer from "./components/reducer";

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos"))
  );
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        state={state}
        dispatch={dispatch}
        setInputText={setInputText}
      />
      <ToDoList dispatch={dispatch} todos={state} save={setInputText}/>
    </div>
  );
}

export default App;
