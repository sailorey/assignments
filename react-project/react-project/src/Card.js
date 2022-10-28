import React from "react"

export default function Card(props) {
    return (
        <div className="container">
            <img src={`${props.item.imageUrl}`} className="left"/>
            <div className="right">
                <p className="p--title">{props.item.title}</p>
                <p className="p--location">{props.item.location}</p>
                <p className="p--description">{props.item.description}</p>
            </div>
        </div>
    )
}