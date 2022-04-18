import React, { useReducer, createContext } from "react";

const initialState = {
  todos: [],
  todosCount: 0,
};

const sumTodos = (item) => {
  const avalibleTodos = item.filter((todo) => todo.checked === false);
  const todosCount = avalibleTodos.length;
  return { todosCount };
};


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!state.todos.find((todo) => todo.text === action.payload.text)) {
        state.todos.push({
          ...action.payload,
          checked: false,
        });
      }
      return {
        ...state,
        todos: [...state.todos],
        ...sumTodos(state.todos),
      };
    case "DELETE":
      const newTodos = state.todos.filter(
        (todo) => todo.text !== action.payload.text
      );
      return {
        ...state,
        todos: [...newTodos],
        ...sumTodos(newTodos),
      };
    case "CLEAR":
      return {
        todos: [],
        todosCount: 0,
      };
    case "CHECKED":
      const indexC = state.todos.findIndex(
        (todo) => todo.text === action.payload.text
      );
      state.todos[indexC].checked = true;
      return {
        ...state,
        ...sumTodos(state.todos),
      };
    case "UNCHECKED":
      const indexU = state.todos.findIndex(
        (todo) => todo.text === action.payload.text
      );
      state.todos[indexU].checked = false;
      return {
        ...state,
        ...sumTodos(state.todos),
      };
    default:
      return state;
  }
};

export const todoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todo, dispatch] = useReducer(reducer, initialState);


  return (
    <todoContext.Provider value={{ todo, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
