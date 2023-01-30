import React, { createContext, useEffect, useReducer, useState } from 'react';


export const TodoContext = createContext({})


 function todoReducer(state, action) {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ];
      case "complete":
        return state.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        });
      case "delete": {
        return state.filter((el) => el.id !== action.payload);
      }
      default: {
        return state;
      }
     
    }
  }
  
  

export const TodoContextProvider = (props) => {
    const [state, dispatch] = useReducer(todoReducer,
        JSON.parse(localStorage.getItem("todos")) || []
      );
      const [inputText, setInputText] = useState("")
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state));
      }, [state]);
    
    const states = {
    todoReducer,
  state,    
  dispatch,
  inputText,
  setInputText,
    }
    return (<TodoContext.Provider value={states}>{props.children}</TodoContext.Provider>)
};

