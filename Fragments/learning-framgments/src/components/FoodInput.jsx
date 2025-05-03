import styles from "./FoodInput.module.css"

const FoodInput = ({ handleKeyDown }) => {

  return <input type="text" placeholder="Enter food name here..." className={styles.FoodInput}
    onKeyDown={handleKeyDown} />
}

export default FoodInput