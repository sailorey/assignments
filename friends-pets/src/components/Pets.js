import React from "react"

export default function Pets(props){
    
    return(
        <div className="pet-info">
            <ul>
            <li>Name: {props.pets.name}</li>
            <li>Breed: {props.pets.breed}</li>
            </ul>
        </div>
    )
}