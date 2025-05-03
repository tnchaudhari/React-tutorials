import Item from "./Item";

function FoodItems({ items }) {

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
              <Item key={item} foodItem={item} handleOnBuyEvent={() => {
                console.log(`${item} being bought`)
              }}></Item>)}
          </ul>
      }
    </>
  );
}

export default FoodItems;