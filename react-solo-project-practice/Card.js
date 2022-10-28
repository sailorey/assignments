import React from "react"

export default function Card(props) {
    console.log(props.item.title)
    return (
        <div className="card">
            <p>{props.item.title} </p>
        </div>
    )
}