import React from "react"
import Pets from "./Pets"


export default function Friend(props){
    const pets = props.pets.map((userPetInfo) => {
        return(
             
        <Pets key={userPetInfo.name}
          pets={userPetInfo}
         />
    )
    })
    return(
        <div className="friend-card">
                <h2>{props.name}</h2>
                <span className="friend-card--age">{props.age}</span>
                <div className="flex pet-lists">
                  {pets}
                </div>
        </div>
    )
}