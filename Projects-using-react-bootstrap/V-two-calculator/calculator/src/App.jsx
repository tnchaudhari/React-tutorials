import styles from './App.module.css'
import Display from './components/display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let newCalVal = calVal + buttonText;
      setCalVal(newCalVal);
    }
  }

  return <div className={styles.calculator}>
    <Display displayValue={calVal}></Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
  </div >
}

export default App
