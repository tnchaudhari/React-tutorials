import { useState } from "react";

function AddToDo({ onNewItem }) {

  const [todoName, setToDoName] = useState();
  const [date, setDate] = useState();

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  }
  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handleAddButton = () => {
    onNewItem(todoName, date);
    setToDoName("");
    setDate("");
  }

  return <div className="row kg-row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange} />
    </div>
    <div className="col-4">
      <input type="date" value={date} onChange={handleDateChange} />
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success kg-button" onClick={(event) => handleAddButton()}>Add</button>
    </div>
  </div>
}

export default AddToDo;