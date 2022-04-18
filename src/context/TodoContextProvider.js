import React, { useReducer , createContext } from "react";

const initialState = {
    todos : [] ,
    todosCount : 0,

}

const sumTodos = item => {
    const todosCount = item.length;
    return {todosCount}
}

const reducer = (state , action) => {
    switch (action.type) {
        case "ADD_TODO" :
            if (!state.todos.find(todo => todo.text === action.payload.text)) {
                state.todos.push({...action.payload})
            }
            return {
                ...state ,
                todos: [...state.todos],
                ...sumTodos(state.todos)
            }
        case "DELETE" :
           const newTodos = state.todos.filter(todo => todo.text !== action.payload.text )
            return {
                ...state , 
                todos : [...newTodos],
                ...sumTodos(newTodos)
            }
        default :
            return state;
    }
}


export const todoContext = createContext()

const TodoContextProvider = ({children}) => {

    const [todo , dispatch] = useReducer(reducer , initialState)

    console.log(todo);

  return <todoContext.Provider value={{todo , dispatch}}>
      {children}
  </todoContext.Provider>;
};

export default TodoContextProvider;
