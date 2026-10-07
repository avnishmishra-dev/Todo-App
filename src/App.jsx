import "./App.css";
import AppName from "./components/AppName";
import Add_Todo from "./components/Add_To-do";
import Todo_Items from "./components/Todo_Items";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-item-store";
import { useState } from "react";

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

  const [todoList, setTodoList] = useState(todoItems);

  //Logic for adding to-do
  const addTodoItems = (listName, listDate) => {
    setTodoList(console.log(`New To-do Added => '${listName}' on ${listDate}`));

    //Item passed using spread operator only
    const newTodoItems = [...todoList, { name: listName, dueDate: listDate }];
    setTodoList(newTodoItems);

    //Item passed using spread operator with method
    // setTodoList((currValue) => [
    //   ...currValue,
    //   { name: listName, dueDate: listDate },
    // ]);
  };

  //Logic for deleting to-do
  const deleteTodoItems = (name, date, index) => {
    const newList = todoList.filter((_, idx) => idx !== index);
    setTodoList(newList);
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
