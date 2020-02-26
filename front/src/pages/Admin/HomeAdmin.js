import React, { Component } from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import './Admin.css'
export default class HomeAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promises: [],
      errPromise: ""
    }
  }
  getPromises = async () => {
    try {
      const response = await fetch('http://localhost:8080/home/promise')
      const result = await response.json()
      result.success ? this.setState({ promises: result.result }) : this.setState({ promisesErr: "Error in fetching promises section" })
    }
    catch (err) {
      this.setState({ promisesErr: err })
    }
  }
  addPromise = async (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    console.log(title, description)
    try {
      const response = await fetch(`http://localhost:8080/home/promise`,
        {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title, description
          })
        })
      const result = await response.json()
      if (result.success) {
        window.location.reload()
      }
    }
    catch (err) { this.setState({ err }) }
  }
  promiseDelete = async (e) => {
    const id = e.target.id
    try {
      const response = await fetch(`http://localhost:8080/home/promise/${id}`, {
        method: 'delete'
      })

      const result = await response.json();
      if (result.success) {
        const promises = this.state.promises.filter(
          item => item.id != id
        );
        this.setState({ promises, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    }
    catch (err) {
      this.setState({ err })
    }
  }
  componentDidMount() {
    this.getPromises()
  }
  promiseUpdate = async (e) => {
    const title = prompt("New value of question:")
    const description = prompt("New value of answer:")
    const id = e.target.id
    try {
      const response = await fetch(`http://localhost:8080/home/promise/${id}`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      })
      const result = await response.json();
      if(result.success)window.location.reload()
    }
    catch (err) { this.setState({ err }) }

  }

  render() {
    return (
      <div className="admin">
        <fieldset>
          <legend>Promises</legend>
          <Form onSubmit={this.addPromise}>
            <Form.Row>
              <Col>
                <Form.Control name="title" placeholder="Title" />
              </Col>
              <Col>
                <Form.Control name="description" placeholder="Description" />
              </Col>
            </Form.Row>
            <button>Add</button>
          </Form>
          <table>
            <tr><th>#</th><th>Title</th><th>Description</th> <th></th><th></th></tr>
            {this.state.promises.map((item, index) => {
              return <tr>
                <td>{item.id}</td><td>{item.title}</td><td>{item.description}</td><td><Button id={item.id} onClick={this.promiseUpdate} >Edit</Button></td><td><Button id={item.id} onClick={this.promiseDelete} >Delete</Button></td>
              </tr>
            })}
          </table>
          <Button><a href="Admin">Back</a></Button>
        </fieldset>
      </div>
    )
  }
}
