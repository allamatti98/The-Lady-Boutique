import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class CheckoutFormPiece extends Component {
  state = { name: '', shippingapartmentadress: '', shippingalternatecontact: '', submittedName: '', submittedShippingApartmentAddress: '', submittedShippingAlternateContact: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, shippingapartmentadress, shippingalternatecontact } = this.state

    this.setState({ submittedName: name, submittedShippingApartmentAddress: shippingapartmentadress, submittedShippingAlternateContact: shippingalternatecontact })
  }

  render() {
    const { name, shippingapartmentadress, shippingalternatecontact, submittedName, submittedShippingApartmentAddress, submittedShippingAlternateContact } = this.state

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
              LABEL="Apartment Address"
              placeholder='eg B17'
              name='shippingapartmentadress'
              value={shippingapartmentadress}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Alternate Contact"
              placeholder='ShippingAlternateContact'
              name='shippingalternatecontact'
              value={shippingalternatecontact}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button content='Submit' />
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, shippingapartmentadress, shippingalternatecontact }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedShippingApartmentAddress, submittedShippingAlternateContact }, null, 2)}</pre>
      </div>
    )
  }
}

export default CheckoutFormPiece