import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItems from "./components/ToDoItems";
import ToDoItem from "./components/ToDoItem";
import './App.css';

function App() {
  const toDoItems = [{
    name: 'Buy Milk',
    date: '04/10/2023'
  },
  {
    name: 'Go to College',
    date: '04/10/2023'
  }]

  return <center className="todo-container">
    <AppName />
    <AddToDo />
    <ToDoItems toDoItems={toDoItems}></ToDoItems>
  </center>
}

export default App
