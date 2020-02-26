import React, { Component } from 'react'
import './CompAdmin.css';
import { Button } from 'react-bootstrap';
export default class Contactadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      err: ''
    };
  }

  getContacts = async () => {
    try {
      const response = await fetch("http://localhost:8080/ContactUs");
      const result = await response.json();
      if (result.success) {
        this.setState({ contacts: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  componentDidMount() {
    this.getContacts()
  }

  deleteContacts= async (e) => {
    const id = e.target.id
    try {
      const response = await fetch(`http://localhost:8080/contactUs/${id}`, {
        method: 'delete'
      })

      const result = await response.json();
      if (result.success) {
        const contacts = this.state.contacts.filter(
          item => item.id != id
        );
        this.setState({ contacts, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    }
    catch (err) {
      this.setState({ err })
    }
  }

  
 
  render() {
    return (
      <div className="admin">
           <fieldset>
          <legend>Contact Us</legend>
          <table>
            <tr><th>#</th><th>First Name</th><th>Last Name</th> <th>Message</th><th></th><th></th></tr>
            {this.state.contacts.map((item, index) => {
              return <tr>
                <td>{item.id}</td><td>{item.fname}</td><td>{item.lname}</td><td>{item.message}</td><td></td><td><Button id={item.id} onClick={this.deleteContacts}>Delete</Button></td>
              </tr>
            })}
          </table>
          <Button><a href="Admin">Back</a></Button>
          </fieldset>
      
      
      </div>
    )
  }
}