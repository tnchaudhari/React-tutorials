import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ToDoItemsContext } from "../store/todo-items-store";

function ToDoItem({ name, date }) {
  const { deleteItem } = useContext(ToDoItemsContext);
  return <div className="row kg-row">
    <div className="col-6">
      {name}
    </div>
    <div className="col-4">
      {date}
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-danger kg-button" onClick={() => deleteItem(name)}><AiFillDelete /></button>
    </div>
  </div>
}

export default ToDoItem;