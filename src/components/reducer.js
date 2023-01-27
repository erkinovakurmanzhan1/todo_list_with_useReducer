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

export default todoReducer;
