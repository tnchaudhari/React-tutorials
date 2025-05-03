import styles from "./Item.module.css";

const Item = ({ foodItem, handleOnBuyEvent }) => {

  // Handling event in same class

  // const handleBuyButtonClicked = (event) => {
  //   //Here is the event info.
  //   console.log(event);
  //   console.log(`${foodItem} being bought...`)
  // }


  return <li className="list-group-item">
    <span className={`${styles["kg-span"]}`}>{foodItem}</span>
    <button className={`${styles.button} btn btn-info`}
      //Calling on Click function in same class.
      // onClick={(event) => handleBuyButtonClicked(event)}

      //Calling to parent function onClick.
      onClick={handleOnBuyEvent}

    >Buy</button>
  </li>
};

export default Item;