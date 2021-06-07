import React from "react";
import './style.css'

const Display = ({textToDisplay, result}) => {

    return (
        <div className="teste" >
            <input className="ipt" value={textToDisplay}/>
            <input className="result" value={result}/>
        </div>
    )
}

export default Display