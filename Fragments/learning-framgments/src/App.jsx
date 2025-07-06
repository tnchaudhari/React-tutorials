import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import FoodItems from './components/FoodItems';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {

  // let foodItems = ['Dal', 'Green Vegetables', 'Salad', 'Chapati', 'Milk'];

  // let textStateArr = useState("Food name entered by User");
  // let textShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  //Short code than above
  let [textShow, setTextState] = useState("Food name entered by User");

  let [foodItems, setFoodItems] = useState([]); // Here we have empty food items.

  const onKeyDown = (event) => {
    // event.target.value will give you the user entering value in text box and using setTextState we are setting the textshow value which was entered by user and then page refreshing.
    setTextState(event.target.value);
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems, newFoodItem]; //Here we are fetching the foodItems and appending new entered value to it.
      setFoodItems(newItems);
    }
  }

  return (
    // Here we have used React.Fragment to warp up the text in one as a result we dont need extra div to warp this up. Fragements can be declared two ways <React.Fragment>...</React.Fragment> 2. <>...</>
    <>
      {/* Passing Children */}
      <Container>
        <h1 className='food-head'>Healthy Food</h1>
        {/* Defined handleOnChange in this parent class as whatever the behaviour expected we can define here when from the child input text is entered. */}
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* {textShow} */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Above mentioned food is good for your health and well being.</p>
      </Container>
    </>
  );
}

export default App
