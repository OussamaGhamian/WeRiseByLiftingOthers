import React, { Component } from 'react'
export default function Datum(props) {

    return (
        <sections class="datum">
            <p id="nmbr">{props.data.yearsNbr}</p>
            <p>{props.data.field}</p>
        </sections>
    )
}
