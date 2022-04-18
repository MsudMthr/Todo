import React , {useContext} from 'react';

import styles from '../styles/todoItem.module.scss'

import { todoContext } from "../../context/TodoContextProvider";

const Todo = ({todo}) => {
    const { dispatch } = useContext(todoContext);
    return (
        <div className={styles.container}>
            <p>{todo.text}</p>  
            <button onClick={() => dispatch({type:"DELETE" , payload:todo})}>delete</button>
        </div>
    );
};

export default Todo;