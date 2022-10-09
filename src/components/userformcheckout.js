import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class CheckoutFormPiece extends Component {
  state = { name: '', email: '', shippingalternatecontact: '', submittedName: '', submittedEmail: '', submittedShippingAlternateContact: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email, shippingalternatecontact } = this.state

    this.setState({ submittedName: name, submittedEmail: email, submittedShippingAlternateContact: shippingalternatecontact })
  }

  render() {
    const { name, email, shippingalternatecontact, submittedName, submittedEmail, submittedShippingAlternateContact } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='ShippingAlternateContact'
              name='shippingalternatecontact'
              value={shippingalternatecontact}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button content='Submit' />
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, email, shippingalternatecontact }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail, submittedShippingAlternateContact }, null, 2)}</pre>
      </div>
    )
  }
}

export default CheckoutFormPiece