import React from "react"
export default function Section(props) {
    return (
        <li>
            <div className="content">
                <h3>{props.data.title}</h3>
                <p>{props.data.description}</p>
            </div>
            <div className="time">
                <h4>{props.data.date}</h4>
            </div>
        </li>
    )
}
