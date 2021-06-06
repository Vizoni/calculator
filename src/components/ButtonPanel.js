import React, {useState, useEffect} from "react";
import './style.css'

const ButtonPanel = ({formatToDisplay}) => {

       const handleClick = (e) => {
        formatToDisplay(e.target.name)
    }

    return (
        <div name="component-button-panel">
        <div>
          <button className="dft" name="AC" onClick={handleClick}>AC</button>
          <button className="dft notWorking" name="+/-" onClick={handleClick} disabled>+/-</button>
          <button className="dft notWorking" name="%" onClick={handleClick} disabled>%</button>
          <button className="dft mathSignal" name="/" onClick={handleClick}>÷</button>
        </div>
        <div>
          <button className="dft" name="7" onClick={handleClick}>7</button>
          <button className="dft" name="8" onClick={handleClick}>8</button>
          <button className="dft" name="9" onClick={handleClick}>9</button>
          <button className="dft mathSignal" name="x" onClick={handleClick}>X</button>
        </div>
        <div>
          <button className="dft" name="4" onClick={handleClick}>4</button>
          <button className="dft" name="5" onClick={handleClick}>5</button>
          <button className="dft" name="6" onClick={handleClick}>6</button>
          <button className="dft mathSignal" name="-" onClick={handleClick}>-</button>
        </div>
        <div>
          <button className="dft" name="1" onClick={handleClick}>1</button>
          <button className="dft" name="2" onClick={handleClick}>2</button>
          <button className="dft" name="3" onClick={handleClick}>3</button>
          <button className="dft mathSignal" name="+" onClick={handleClick}>+</button>
        </div>
        <div>
          <button className="dft zero" name="0" onClick={handleClick}>0</button>
          <button className="dft notWorking" name="." onClick={handleClick} disabled>.</button>
          <button className="dft orange" name="=" onClick={handleClick}>=</button>
        </div>
      </div>
    )

}


export default ButtonPanel