import React, { Component } from 'react'

import { Button, Form, Col } from 'react-bootstrap';
export default class HowItWorks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      HowItWorks: [],
      err: "",

    }

  }

  getHowItWorks = async () => {
    try {
      const response = await fetch('http://localhost:8080/howitworks')
      const result = await response.json()
      result.success ? this.setState({ HowItWorks: result.result }) : this.setState({ HowItWorksErr: "Error in fetching HowItWorks section" })
    }
    catch (err) {
      this.setState({ HowItWorksErr: err })
    }
  }

  componentDidMount() {
    this.getHowItWorks();
  }

  howitworksDelete = async (e) => {
    const id = e.target.id
    try {
      const response = await fetch(`http://localhost:8080/howitworks/${id}`, {
        method: 'delete'
      })

      const result = await response.json();
      if (result.success) {
        const HowItWorks = this.state.HowItWorks.filter(
          item => item.id != id
        );
        this.setState({ HowItWorks, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    }
    catch (err) {
      this.setState({ err })
    }
  }

  howitworksUpdate = async (e) => {
    const title = prompt("New value of title:")
    const description = prompt("New value of description:")
    const date = prompt("New value of date:")
    const id = e.target.id

    const body = new FormData();
    body.append('title', title);
    body.append('description', description);
    body.append('date', date);

    try {
      const response = await fetch(`http://localhost:8080/howitworks/${id}`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, date })
      })
      const result = await response.json();
      if (result.success) window.location.reload()
    }
    catch (err) { this.setState({ err }) }

  }

  howitworksAdd = async (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    const date = e.target.date.value
    try {
      const response = await fetch(`http://localhost:8080/howitworks`,
        {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title, description, date
          })
        })
      const result = await response.json()
      if (result.success) {
        window.location.reload()
      }
    }

    catch (err) { this.setState({ err }) }
  }
  render() {
    return (
      <div className="admin">
        <fieldset>
          <legend>How It Works</legend>
          <Form onSubmit={this.howitworksAdd}>
            <Form.Row>
              <Col>
                <Form.Control name="title" placeholder="title" />
              </Col>
              <Col>
                <Form.Control name="description" placeholder="description" />
              </Col>
              <Col>
                <Form.Control name="date" placeholder="date" />
              </Col>
            </Form.Row>
            <button>Add</button>
          </Form>
          <table>
            <tr><th>#</th><th>title</th><th>description</th> <th>date</th><th></th><th></th></tr>
            {this.state.HowItWorks.map((item, index) => {
              return <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td><Button id={item.id} onClick={this.howitworksUpdate}>Edit</Button></td>
                <td><Button id={item.id} onClick={this.howitworksDelete}>Delete</Button></td>
              </tr>
            })}
          </table>
        </fieldset>
      </div>
    )
  }
}