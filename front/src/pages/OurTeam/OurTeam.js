import React from "react";
import { MDBRow, MDBCardBody } from "mdbreact";
import Avatar from '../../Components/Avatar'
import "./OurTeam.css"
import { Spring } from 'react-spring/renderprops'
export default class Ourteam extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            err: "",
        }
    }
    getMembers = async () => {
        try {
            const response = await fetch('http://localhost:8080/ourTeam')
            const result = await response.json()
            console.log(result.message)
            result.success ? this.setState({ members: result.result }) : this.setState({ err: result.message })
        }
        catch (err) {
            this.setState({ err })
        }
    }
    componentDidMount() {
        this.getMembers()
    }

    render() {
        return (
            <Spring
                from={{ opacity: 0, marginTop: -1000 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ duration: 1000 }}
            >
                {
                    props =>
                        <div style={props}>
                            <MDBCardBody >
                                <h2 className="h1-responsive font-weight-bold my-5">
                                    Our amazing team
              </h2>
                                <p className="grey-text w-responsive mx-auto mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                    error amet numquam iure provident voluptate esse quasi, veritatis
                                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
              </p>
                                <MDBRow>

                                    {this.state.members.map((member, index) => {
                                        return <Avatar
                                            name={member.name}
                                            position={member.position}
                                            description={member.description}
                                            image={member.image} />
                                    })}
                                </MDBRow>
                            </MDBCardBody>
                        </div>
                }
            </Spring>

        );
    }

}

