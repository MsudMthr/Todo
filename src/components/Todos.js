import React, { useContext, useState } from "react";
import styles from "./styles/Todos.module.scss";

import { todoContext } from "../context/TodoContextProvider";
import TodoBox from "./TodoBox";

const Todos = () => {
  const { todo, dispatch } = useContext(todoContext);
  const [text, setText] = useState("");

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const dispatchHandler = () => {
    if (!/^\s+$/.test(text)) {
      dispatch({ type: "ADD_TODO", payload: { text: text } });
      setText("");
    }
  };

  const keyHandler = (event) => {
    if (event.key === "Enter") {
      dispatchHandler();
    }
  };

  

  return (
    <div className={styles.container}>
      <div className={styles.writeTodo}>
        <div className={styles.header}>
          <h1>TODO</h1>
          <div className={styles.inputBox}>
            <input
              type={"text"}
              value={text}
              onChange={changeHandler}
              onKeyPress={keyHandler}
            />
            <button
              onClick={() => {
                dispatchHandler();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.todos}>
          <TodoBox />
        </div>
      </div>
    </div>
  );
};

export default Todos;
