import React from "react";
//styles
import styles from "./App.module.scss";
import TodoContextProvider from "./context/TodoContextProvider";
//components
import Todos from "./components/Todos";
function App() {
  return (
    <TodoContextProvider>
      <div className={styles.App}>
        <Todos />
      </div>
    </TodoContextProvider>
  );
}

export default App;
