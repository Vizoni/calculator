import React, { useState, useEffect } from "react";
import './style.css'

const Display = ({newInput}) => {

    const [textToDisplay, setTextToDisplay] = useState(null)
    const [result, setResult] = useState(null)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [operator, setOperator] = useState(null)


    useEffect(() => {
        // atualiza o q mostrar qndo chegar um novo input
        formatTextToDisplay(newInput)
    }, [newInput])

    const formatTextToDisplay = () => {
        if (newInput == "AC") {
            resetVariables()
        } else if (newInput == "=") {
            setTextToDisplay(result)
            setResult("")
        } else if (newInput){
            if (textToDisplay == null) {
                setTextToDisplay(`${newInput}`)
            } else {
                setTextToDisplay(`${textToDisplay}${newInput}`)
            }
            doMath(newInput)
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
        // se o novo elemento for numero
        if (isNumber(newInput)) {
            if (!operator) {
               // nao tem operator (nao tem number1): seta number1
                setNumber1(`${number1}${newInput}`)
           } else {
                // já tem operator, seta number2
                setNumber2(`${number2}${newInput}`)
                if (!number2) {
                    // number2 não existe pois é o primeiro numero digitado depois de um operator: seta number2
                    setResult(calculate(number1,operator,newInput))
                } else {
                    // number2 já existe, vai tornar number2 uma dezena/centena/milhar: concatenat novo input
                    setResult(calculate(number1,operator,`${number2}${newInput}`))
                }
           }
        } else {
            if (!operator) {
                // clicou novo sinal e NAO tem operator
                setOperator(newInput)
            } else {
                // clicou novo sinal e JÁ TINHA operator: number1 já está definido
                // MOMENTO FINAL: CALCULAR E ZERAR VARIAVEIS
                setTextToDisplay(`${calculate(number1,operator,number2)}${newInput}`)
                setResult(null)
                setNumber1(`${calculate(number1,operator,number2)}`)
                setNumber2(0)
                setOperator(newInput)
            }
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