import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import style from "./WelcomeMsg.module.css";

const WelcomeMsg = () => {
  const {todoList} = useContext(TodoItemsContext);
  
  return (
    todoList.length === 0 && <h2 className={style.welcome}>Enjoy Your Day!</h2>
  );
};

export default WelcomeMsg;
