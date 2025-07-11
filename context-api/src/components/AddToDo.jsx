import { useContext, useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { ToDoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  const { addNewItem } = useContext(ToDoItemsContext);

  const todoNameElement = useRef();
  const dateElement = useRef();

  const handleAddButton = () => {
    const todoName = todoNameElement.current.value;
    const date = dateElement.current.value;
    todoNameElement.current.value = "";
    dateElement.current.value = "";
    addNewItem(todoName, date);
  }

  return <div className="row kg-row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here" ref={todoNameElement} />
    </div>
    <div className="col-4">
      <input type="date" ref={dateElement} />
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success kg-button" onClick={(event) => handleAddButton()}><BiMessageAdd /></button>
    </div>
  </div>
}

export default AddToDo;