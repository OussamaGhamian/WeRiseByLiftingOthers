import React from 'react'
export default function Service(props) {
    return (
        <div className="service" >
            <img src={`http://localhost:8080/${props.image}`} alt="serivceImage" />
            <h3>{props.title}</h3>
            <article>{props.description}</article>
        </div>
    )
}
