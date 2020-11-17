import React from 'react'

function CalcButton(props) {
    return(
        <button value={props.label} onClick={props.handler} className="calc-btn">
            {props.label}
        </button>
    )
}

export default CalcButton