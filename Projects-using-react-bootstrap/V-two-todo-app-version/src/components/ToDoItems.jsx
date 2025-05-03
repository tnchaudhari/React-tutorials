import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css"

function ToDoItems({ toDoItems }) {
  return (
    <div className={styles.itemsContainer}>
      {toDoItems.map((item) => <ToDoItem name={item.name} date={item.date} key={item.name}></ToDoItem>)}
    </div>
  );
}

export default ToDoItems;