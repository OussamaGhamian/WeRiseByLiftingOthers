import React, { Component } from 'react'
import Datum from './Datum'
export default function Noc(props) {
    return (
        <section class="not_other" id="lastse">
            {props.noc.map((item, index) => {
                return <>
                    <img src={`http://localhost:8080/${item.image}`} alt="sideImage" />
                    <section>
                        <h3>{item.title}</h3>
                        <article>{item.description}</article>
                        <p>{item.miniHeader}</p>
                        {props.exp.map((item, index) => {
                            return <Datum data={item} />
                        })}
                    </section>
                </>
            })}
        </section>
    )
}
