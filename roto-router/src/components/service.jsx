import React from "react"
import {useParams} from "react-router-dom"
import Data from "./data.jsx"

export default function Service() {
        const {serviceId} = useParams()
        const foundService = Data.find(service => service._id == serviceId)

        return (
        <div className="service">
                <h1>Service</h1>
                <h2>{foundService.service}</h2>
                <p>{foundService.description}</p>
        </div>
    )

}