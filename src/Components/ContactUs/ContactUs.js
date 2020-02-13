import React, { Component } from 'react';
import './ContactUs.css'


export default class contactus extends Component{
    render() {
        return (

            <div className="ContactUs" >
                <div className="Container1">
                    <div className="name">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="three">
                        <div className="fak"><i className="material-icons">add_location</i>
                            <p className="mb-4">
                                <span className="add_location"></span>
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae omnis, beatae qui quis ut ipsam,
                        ratione animi exercitationem perspiciatis hic iusto harum maiores iure labore atque sapiente laboriosam ad
            libero. </span>
                            </p>
                        </div>

                        <div className="num"><i className="material-icons">call</i>
                            <p className="mb-4">
                                <span className="call"></span>
                                <a href="#">+phone: +1 232 3235 324</a>
                            </p>
                        </div>
                        <div className="email"><i className="material-icons">contact_mail</i>
                            <p className="mb-0">
                                <span className="contact_mail"></span>
                                <a href="mailto:youremail@domain.com">youremail@domain.com</a>
                            </p>
                        </div>
                    </div>


                    <div className="form">
                        <form className="ff" />
                        <h4>Contact Form</h4>
                        <div className="fn">


                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                            <label for="subject"> Subject </label>
                            <input type="text" id="subject" name="subject" placeholder="your subject.." />

                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="your email.." />

                            <label for="msg">Message</label>
                            <textarea id="msg" name="msg" placeholder="Write something.." style={{ height: '200px' }}></textarea>

                            <input type="submit" value="send message" />

                        </div>
                    </div>

                </div>

                </div>

        );
    }
}
