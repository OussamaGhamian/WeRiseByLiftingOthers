import React, { Component } from "react";
import "./ContactUs.css";
import { Spring } from "react-spring/renderprops";
export default class contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: ""
    };
  }

  createContact = async e => {
    // e.preventDefault()
    const form = e.target;
    const fname = form.firstname.value;
    const lname = form.lastname.value;
    const msg = form.msg.value;
    console.log(fname, lname, msg)
    try {
      if (!fname || !lname || !msg) {
        throw new Error(`you need all properties to create a contact`);
      }
      const response = await fetch(
        `http://localhost:8080/ContactUs`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify({
          fname, lname, message: msg
        })

      }
      );

      const result = await response.json();
      console.log(result);
      if (result.success) {
        const contact = { fname, lname, msg };
        const contacts = [...this.state.contacts, contact];
        this.setState({ contacts, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -600 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div className="ContactUs">
              <div className="Container1">
                <div className="name">
                  <h2>Contact Us</h2>
                </div>
                <div className="three">
                  <div className="fak">
                    <i className="material-icons">add_location</i>
                    <p className="mb-4">
                      <span className="add_location"></span>
                      <span>
                      Postal Address:
                      PIGIER Bulding
                      Gemmayzeh Street‬
                      Lebanon Beirut.{" "}
                      </span>
                    </p>
                  </div>

                  <div className="num">
                    <i className="material-icons">call</i>
                    <p className="mb-4">
                      <span className="call"></span>
                      <a href="#">+phone: +961 87654389</a>
                    </p>
                  </div>
                  <div className="email">
                    <i className="material-icons">contact_mail</i>
                    <p className="mb-0">
                      <span className="contact_mail"></span>
                      <a href="mailto:youremail@domain.com">
                        We_RBL_Others@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="form">
                  <form className="ff" onSubmit={this.createContact}>
                    <h4>Contact Form</h4>
                    <div className="fn">
                      <label for="fname">First Name</label>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                      />

                      <label for="lname">Last Name</label>
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Your last name.."
                      />

                      <label for="subject"> Subject </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="your subject.."
                      />

                      <label for="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="your email.."
                      />

                      <label for="msg">Message</label>
                      <textarea
                        id="msg"
                        name="msg"
                        placeholder="Write something.."
                        style={{ height: "200px" }}
                      ></textarea>

                      <input type="submit" value="send message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
