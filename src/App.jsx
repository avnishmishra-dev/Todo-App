import "./App.css";
import AppName from "./components/AppName";
import Add_Todo from "./components/Add_To-do";
import Todo_Items from "./components/Todo_Items";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <AppName />
        <Add_Todo />
        <WelcomeMsg></WelcomeMsg>
        <Todo_Items></Todo_Items>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
