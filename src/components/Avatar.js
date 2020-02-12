import React from "react";
import {  MDBCol, MDBIcon } from "mdbreact";
import {MDBAvatar} from 'mdbreact'
import * as d from 'mdbreact'

export default function Avatar() {
    return (

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <img
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
            />
            <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
            <p className="text-uppercase blue-text">Graphic designer</p>
            <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
            <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
            </ul>
        </MDBCol>
    );
}

