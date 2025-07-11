import { useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddToDo({ onNewItem }) {
  // State Management using useState
  // const [todoName, setToDoName] = useState('');
  // const [date, setDate] = useState('');

  // const handleNameChange = (event) => {
  //   setToDoName(event.target.value);
  // }
  // const handleDateChange = (event) => {
  //   setDate(event.target.value);
  // }

  //State Management using useRef

  const todoNameElement = useRef();
  const dateElement = useRef();

  const handleAddButton = () => {
    const todoName = todoNameElement.current.value;
    const date = dateElement.current.value;
    todoNameElement.current.value = "";
    dateElement.current.value = "";
    onNewItem(todoName, date);
    // setToDoName("");
    // setDate("");
  }

  return <div className="row kg-row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here" /*value={todoName} onChange={handleNameChange}*/ ref={todoNameElement} />
    </div>
    <div className="col-4">
      <input type="date" /* value={date} onChange={handleDateChange} */ ref={dateElement} />
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success kg-button" onClick={(event) => handleAddButton()}><BiMessageAdd /></button>
    </div>
  </div>
}

export default AddToDo;