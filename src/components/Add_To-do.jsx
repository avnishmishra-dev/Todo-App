import { useRef, useContext } from "react";
import style from "./Add_To-do.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

function Add_Todo() {
  const { addTodoItems } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;

    if (!todoName || !todoDate) {
      alert("Please fill in the both fields!");
      return;
    }

    addTodoItems(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form action="" onSubmit={handleAddButtonClicked}>
        <div className="row justify-content-center">
          <div className="col-4">
            <input
              className={style.input}
              type="text"
              placeholder="Enter To-Do Here"
              name="todoName"
              ref={todoNameElement}
              // value={todoName}
              // onChange={handleNameChange}
            />
          </div>
          <div className="col-3">
            <input
              className={style.input}
              type="date"
              name="todoDate"
              ref={todoDateElement}
              // value={todoDate}
              // onChange={handleDateChange}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Add_Todo;
