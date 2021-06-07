import './App.css';
import {ButtonPanel, Display} from './components'
import React, {useState} from "react";

function App() {

  // Idea from here: https://github.com/ahfarmer/calculator
  // https://ahfarmer.github.io/calculator/

  const buttonPressed = (buttonValue) => {
    formatTextToDisplay(buttonValue)
  }
 
  const [textToDisplay, setTextToDisplay] = useState(null)
  const [result, setResult] = useState(null)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [operator, setOperator] = useState(null)

  const formatTextToDisplay = (input) => {
      if (input == "AC") {
          resetVariables()
      } else if (input == "=") {
          setTextToDisplay(result)
          setResult("")
      } else {
        // if input is not AC either equal (=)
          if (textToDisplay == null) {
            // if there's no text being displayed
              setTextToDisplay(`${input}`)
          } else {
            // if there's a text being displayed, concatenate
              setTextToDisplay(`${textToDisplay}${input}`)
          }
          doMath(input)
      }
  }

  const resetVariables = () => {
      setNumber1(0)
      setNumber2(0)
      setTextToDisplay("")
      setResult("")
      setOperator(null)
  }

  const doMath = (newInput) => {
      // if button pressed is a number
      if (isNumber(newInput)) {
          if (!operator) {
              // there's no operator signal, that means number1 is being setting up: keep setting number1
              setNumber1(`${number1}${newInput}`)
          } else {
              // there's already an operator, that means number1 is done: go set number2
              setNumber2(`${number2}${newInput}`)
              if (!number2) {
                  // number2 isn't created yet because, keep setting it up
                  setResult(calculate(number1,operator,newInput))
              } else {
                  // number2 already has a digit so you have to keep setting it up: concatenate new input with old value
                  setResult(calculate(number1,operator,`${number2}${newInput}`))
              }
          }
      } else {
          // if input is an operator and there's no operator yet, that means number1 is still being created
          if (!operator) {
              if (newInput == ".") {
                  setNumber1(`${number1}${newInput}`)
                  // return is just to avoid setting up the "." as a math signal/operator
                  return
              }
              setOperator(newInput)
          } else  {
              // if input is an operator and we already have one, that means number1 is done, you gota set up number2
              if (newInput == ".") {
                  setNumber2(`${number2}${newInput}`)
                  // return is just to avoid setting up the "." as a math signal/operator
                  return
              }
              updateCalculationText(newInput)
          }
      }
  }

  // update the main text and reset some variables after the first calculation, getting ready for the next numbers
  const updateCalculationText = (newInput) => {
      setTextToDisplay(`${calculate(number1,operator,number2)}${newInput}`)
      setResult(null)
      setNumber1(`${calculate(number1,operator,number2)}`)
      setNumber2(0)
      setOperator(newInput)
  }

  const calculate = (firstDigits, operator, lastDigits) => {
      switch(operator) {
          case "+":
              return Number(firstDigits) + Number(lastDigits)
          case "-":
              return Number(firstDigits) - Number(lastDigits)
          case "x":
              return Number(firstDigits) * Number(lastDigits)
          case "/":
              return Number(firstDigits) / Number(lastDigits)
      }
  }

  const isNumber = (input) => {
      const numbers = [0,1,2,3,4,5,6,7,8,9]
      return numbers.includes(Number(input))
  }

  return (
    <div className="App">
      <Display textToDisplay={textToDisplay} result={result}></Display>
      <ButtonPanel buttonPressed={buttonPressed}></ButtonPanel>
    </div>
  );
}

export default App;
