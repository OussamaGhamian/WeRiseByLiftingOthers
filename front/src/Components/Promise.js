import React from 'react'
export default function Promise(props) {
    return (
        <section class="promise">
            <h3>{props.title}</h3>
            <article>{props.description}</article>
        </section>
    )
}