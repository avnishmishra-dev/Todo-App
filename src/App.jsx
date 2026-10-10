import "./App.css";
import AppName from "./components/AppName";
import Add_Todo from "./components/Add_To-do";
import Todo_Items from "./components/Todo_Items";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-item-store";
import { useReducer } from "react";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if(action.type === "NEW_ITEM") {
    newTodoItems = [...currTodoItems, action.payload];
  } else if(action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((_, idx) => idx !== action.payload.index);
  }
return newTodoItems;
}

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2025",
    },
    {
      name: "Go to College",
      dueDate: "04/10/2025",
    },
    {
      name: "Schedule Interview",
      dueDate: "Just Now",
    },
  ];

  const [todoList, dispatchTodoItems] = useReducer(todoItemsReducer, todoItems);

  //Logic for adding to-do items
  const addTodoItems = (listName, listDate) => {
    const newItemAction ={
      type: "NEW_ITEM",
      payload: { name: listName, dueDate: listDate },
    }
    dispatchTodoItems(newItemAction);
    console.log(`New To-do Added => '${listName}' on ${listDate}`);
  };

  //Logic for deleting to-do items
  const deleteTodoItems = (name, date, index) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { name, date, index },
    };
    dispatchTodoItems(deleteItemAction);
    console.log(`To-do '${name}' deleted on '${date}' and index is: ${index}`);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoList,
        addTodoItems,
        deleteTodoItems,
      }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <AppName />
        <Add_Todo />
        <WelcomeMsg></WelcomeMsg>
        <Todo_Items></Todo_Items>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
