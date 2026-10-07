import Todo_Item from "./Todo_Item";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const Todo_Items = (/*{ onDeleteTodo }*/) => {
  const {todoList} = useContext(TodoItemsContext);

  return (
    <>
      {todoList.map((item, index) => (
        <Todo_Item
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          index={index}
          // onDeleteTodo={onDeleteTodo}
        ></Todo_Item>
      ))}
    </>
  );
};

export default Todo_Items;
