import Item from "./Item";
import { useState } from "react";

function FoodItems({ items }) {

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  }
  return (
    <>
      {/* Ternery operator */}
      {
        items.length === 0 ?
          <div>No Food items available</div> :
          <ul className="list-group">
            {/* Using Map return */}
            {items.map((item) =>
              // Passing item to function Item and function (handleOnBuyEvent) that should trigger when in child class the But button is clicked.
              <Item key={item} foodItem={item} bought={activeItems.includes(item)}
                handleOnBuyEvent={(event) => onBuyButton(item, event)}></Item>)}
          </ul>
      }
    </>
  );
}

export default FoodItems;