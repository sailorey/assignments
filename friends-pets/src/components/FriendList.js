import React from "react"
import data from "../data"
import Friend from "./Friend"

export default function FriendList(){
    const userFriends = data.map(friend =>{
        return(
            <Friend key={friend.name} {...friend} /> 
            )
         }
     )
     
     return(
         <div className="flex friend-list">
            {userFriends}
         </div>
     )
    
}