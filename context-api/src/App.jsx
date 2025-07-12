import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import './App.css';
import { ToDoItemsContextProvider } from "./store/todo-items-store"


function App() {
  return <center className="todo-container">
    <ToDoItemsContextProvider>
      <AppName />
      <AddToDo />
      <WelcomeMessage></WelcomeMessage>
      <ToDoItems></ToDoItems>
    </ToDoItemsContextProvider>
  </center >
}

export default App
