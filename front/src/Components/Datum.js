import React from 'react'
export default function Datum(props) {

    return (
        <section class="datum">
            <p id="nmbr">{props.data.yearsNbr}</p>
            <p id="text">{props.data.field}</p>
        </section>
    )
}
