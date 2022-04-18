import React, { useContext, useRef } from "react";
//styles
import styles from "../styles/todoItem.module.scss";
//context
import { todoContext } from "../../context/TodoContextProvider";


const Todo = ({ todo }) => {
  const { dispatch } = useContext(todoContext);

  const checkedHandler = () => {
    if (todo.checked){
        dispatch({ type: "UNCHECKED", payload: todo });
    }else {
        dispatch({ type: "CHECKED", payload: todo });

    }
      
    todoRef.current.classList.toggle(styles.checked)
  };
  
  const todoRef = useRef(null)

  console.log(todoRef);

  return (
    <div ref={todoRef} className={styles.container}>
      <p>{todo.text}</p>
      <div className={styles.buttons}>
        <button onClick={() => dispatch({ type: "DELETE", payload: todo })}>
          delete
        </button>
        {todo.checked ? <button onClick={checkedHandler}>UnChecked</button> : <button onClick={checkedHandler}>Checked</button>}
      </div>
    </div>
  );
};

export default Todo;
