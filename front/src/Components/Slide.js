import React from 'react'
export default function Slide(props) {
    return (
        <div className="mySlides">
            <img src={`http://localhost:8080/${props.slide.image}`} alt="person" />
            <section>
                <h3>{props.slide.name}</h3>
                <article>{props.slide.recommendation}</article>
            </section>
        </div>
    )
}
