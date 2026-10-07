import { useContext } from "react";
import style from "./Todo_Item.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

function Todo_Item({todoName, todoDate, index}) {
  const {deleteTodoItems} = useContext(TodoItemsContext);

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className={`${style["items-container"]} col-4`}>{todoName}</div>
        <div className={`${style["items-container"]} col-3`}>{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={() => deleteTodoItems(todoName, todoDate, index)}> 
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo_Item;
