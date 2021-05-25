import './App.css';
import {ButtonPanel, Display} from './components'
import React, {useState, useEffect} from "react";

function App() {

  const [numberToDisplay, setNumberToDisplay] = useState()

  const doMath = (param) => {
    console.log("appjs doMath", param)
    // fazer switch pra pegar o valor do botao
  }

  return (
    <div className="App">
      <Display number={numberToDisplay}></Display>
      <ButtonPanel doMath={doMath}></ButtonPanel>
    </div>
  );
}

export default App;
