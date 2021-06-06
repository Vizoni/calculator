import './App.css';
import {ButtonPanel, Display} from './components'
import React, {useState, useEffect} from "react";

function App() {

  // EXMEPLO DAQUI: https://github.com/ahfarmer/calculator
  // https://ahfarmer.github.io/calculator/
  const [numberToDisplay, setNumberToDisplay] = useState()

  const formatToDisplay = (newInput) => {
    console.log("appjs doMath", newInput, typeof(newInput)) 
    setNumberToDisplay(newInput)
  }

  return (
    <div className="App">
      <Display newInput={numberToDisplay}></Display>
      <ButtonPanel formatToDisplay={formatToDisplay}></ButtonPanel>
    </div>
  );
}

export default App;
