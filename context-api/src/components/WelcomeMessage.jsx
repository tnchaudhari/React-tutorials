import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  const toDoItems = useContext(ToDoItemsContext).toDoItems;
  return toDoItems.length === 0 && <p className={styles.welcome}>Enjoy your day!</p>
}

export default WelcomeMessage;