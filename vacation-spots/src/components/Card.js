import React from "react"

export default function Card(props) {

    return (
        <div className="card-info">
            <h1>{props.item.place}</h1>
            <h3>${props.item.price}</h3>
            <h4>{props.item.timeToGo}</h4>
        </div>

    
    )

    

}

