import React from "react"

// export default function Card(props) {
//     return (
//         <div className="container">
//             {/* <img src={`${props.item.imageUrl}`} className="left"/> */}
//             <div className="right">
//                 <p className="p--title">{props.title}</p>
//                 <p className="p--subTitle">{props.subTitle}</p>
//                 <p className="p--author">{props.author}</p>
//                 <p className="p--date">{props.date}</p>
//             </div>
//         </div>
//     )
// }

export default function Card(props) {
    return (
        <div className="card">
            <p className="title"> {props.title}</p>
            <p className="subTitle">{props.subTitle}</p>
            <p className="author"> Posted by {props.author} on {props.date}</p>
            <hr />
        </div>
    )
}