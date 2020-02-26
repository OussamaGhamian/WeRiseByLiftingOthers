import React, { Component } from 'react'
import './CompAdmin.css';
import { Button, Form, Col } from 'react-bootstrap';
export default class admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [],
      err: ''
    };
  }

  getFaqs = async () => {
    try {
      const response = await fetch("http://localhost:8080/faqs");
      const result = await response.json();
      if (result.success) {
        this.setState({ faqs: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  componentDidMount() {
    this.getFaqs()
  }

  faqDelete = async (e) => {
    const id = e.target.id
    try {
      const response = await fetch(`http://localhost:8080/faq/${id}`, {
        method: 'delete'
      })

      const result = await response.json();
      if (result.success) {
        const faqs = this.state.faqs.filter(
          item => item.id != id
        );
        this.setState({ faqs, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    }
    catch (err) {
      this.setState({ err })
    }
  }

  faqUpdate = async (e) => {
    const question = prompt("New value of question:")
    const answer = prompt("New value of answer:")
    const id = e.target.id

    const body = new FormData();
    body.append('question', question);
    body.append('answer', answer);

    try {
      const response = await fetch(`http://localhost:8080/faq/${id}`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question, answer })
      })
      const result = await response.json();
      if(result.success)window.location.reload()
    }
    catch (err) { this.setState({ err }) }

  }

  faqAdd = async (e) => {
    e.preventDefault()
    const question = e.target.question.value
    const answer = e.target.answer.value
    try {
      const response = await fetch(`http://localhost:8080/faq`,
        {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            question, answer
          })
        })
        const result = await response.json()
        if(result.success){
          window.location.reload()
        }
    }

    catch (err) { this.setState({ err }) }
  }
  render() {
    return (
      <div className="admin">
        <fieldset>
          <legend>Freq Asked Questions</legend>
          <Form onSubmit={this.faqAdd}>
            <Form.Row>
              <Col>
                <Form.Control name="question" placeholder="Question" />
              </Col>
              <Col>
                <Form.Control name="answer" placeholder="Answer" />
              </Col>
            </Form.Row>
            <button>Add</button>
          </Form>
          <table>
            <tr><th>#</th><th>question</th><th>answer</th> <th></th><th></th></tr>
            {this.state.faqs.map((item, index) => {
              return <tr>
                <td>{item.id}</td><td>{item.question}</td><td>{item.answer}</td><td><Button id={item.id} onClick={this.faqUpdate}>Edit</Button></td><td><Button id={item.id} onClick={this.faqDelete}>Delete</Button></td>
              </tr>
            })}
          </table>
        </fieldset>
      </div>
    )
  }
}