import React, { useContext } from "react";

import styles from "./styles/todosBox.module.scss";

import { todoContext } from "../context/TodoContextProvider";
import Todo from "./shared/Todo";

const TodoBox = () => {
  const { todo, dispatch } = useContext(todoContext);

  return (
    <div className={styles.container}>
      <div className={styles.infoTodo}>
      <h1>
        work to do : <span>{todo.todosCount}</span>
      </h1>

        <button>Clear</button>

      </div>
      <div>
        {todo.todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoBox;
