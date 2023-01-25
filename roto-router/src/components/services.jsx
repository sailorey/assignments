import React from "react"
import {useNavigate, Link} from "react-router-dom"
import Service from "./service"
import Data from "./data"
import "../css/services.css"


export default function Services() {
    const [singleService, setSingleService] = React.useState(false)
    function viewService() {
        setSingleService(true)
    }   
    
    const ServicesHtml = Data.map((service, index) => {
        
        return (
            <div key={index} className="service">
                <Link to={`/services/${service._id}`} onClick={viewService}>
                <h1>{service.service}</h1>
                <img src={service.imgUrl}></img>
                <p>{service.description}</p>
                Read More...</Link>            
            </div>
        )
    })
    
    return (
        !singleService ? 
            <div className="Services">
                <h1>Services</h1>
                <a href=""><button className="button-5" role="button">Book Online</button></a>
                {ServicesHtml}
            </div>
            :
            <Service />
            
    )
}