import React from "react";

function Number(props) {
    return (
        <div className="number">
            <p style={{fontSize:"18px"}}>{props.number}</p>
        </div>
    )
}

export default Number;