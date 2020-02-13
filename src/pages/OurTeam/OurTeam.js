import React from "react";
import { MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import Avatar from '../../Components/Avatar'
export default class Ourteam extends React.Component {
    render() {
        return (

            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-5">
                    Our amazing team
              </h2>
                <p className="grey-text w-responsive mx-auto mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
              </p>
                <MDBRow>
                    <Avatar /> <Avatar /> <Avatar /> <Avatar /> <Avatar /> <Avatar /><Avatar /> <Avatar />
                </MDBRow>
            </MDBCardBody>
        );
    }

}

