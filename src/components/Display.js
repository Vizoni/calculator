import React, { useState, useEffect } from "react";
import './style.css'

const Display = ({newInput}) => {

    const [textToDisplay, setTextToDisplay] = useState(null)
    const [result, setResult] = useState(null)
    const [finalResult, setFinalResult] = useState(null)
    const [lastElement, setLastElement] = useState(null)

    useEffect(() => {
        // atualiza o q mostrar qndo chegar um novo input
        formatTextToDisplay(newInput)
    }, [newInput])

    const formatTextToDisplay = () => {
        console.log("Input", newInput)
        if (newInput == "AC") {
            setTextToDisplay(null)
            setResult(null)
            setLastElement(null)
        } else if (newInput){
            if (textToDisplay == null) {
                setTextToDisplay(`${newInput}`)
            } else {
                setTextToDisplay(`${textToDisplay}${newInput}`)
            }
            doMath(newInput)
        }
    }

    const doMath = (newInput) => {
        // se o novo elemento for numero 
        if (isNumber(newInput)) {
            console.log("A - new Input", newInput)
            // se o ultimo elemento for sinal
            if (!isNumber(lastElement) && lastElement != null) {
                console.log("B - lastElement", lastElement)
                console.log("TUDO", result,lastElement,newInput)
                console.log("FINALLL MESMO:", calculate(result,lastElement,newInput))
                setResult(calculate(result,lastElement,newInput))
                // setTextToDisplay(calculate(result,lastElement,newInput))
            } else {
                // ultimo elemento é número
                if (lastElement == null) {
                    setLastElement(newInput)
                    setResult(`${newInput}`)
                } else {
                    setResult(`${lastElement}${newInput}`)
                    setLastElement(`${lastElement}${newInput}`)
                }
            }
        } else {
            setLastElement(newInput)            
            // setResult(null)
        }

    }

    const calculate = (firstDigits, signal, lastDigits) => {
        switch(signal) {
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
        <div className="teste" >
            <input className="ipt" value={textToDisplay}/>
            <input className="result" value={result}/>
        </div>
    )

}


export default Display