import React from "react";
import { MDBCol } from "mdbreact";


export default function Avatar(props) {
    return (

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <img
                tag="img"
                src={`http://localhost:8080/${props.image}`}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
            />
            <h5 className="font-weight-bold mt-4 mb-3">{props.name}</h5>
    <p className="text-uppercase blue-text">{props.position}</p>
            <p className="grey-text">
               {props.description}
              </p>
            {/* <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
            </ul> */}
        </MDBCol>
    );
}

