import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class CheckoutFormPiece extends Component {
  state = { name: '', shippingstreetaddress: '', shippingapartmentadress: '', shippingalternatecontact: '', submittedName: '', submittedShippingStreetAddress: '', submittedShippingApartmentAddress: '', submittedShippingAlternateContact: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, shippingstreetaddress, shippingapartmentadress, shippingalternatecontact } = this.state

    this.setState({ submittedName: name, submittedShippingStreetAddress: shippingstreetaddress, submittedShippingApartmentAddress: shippingapartmentadress, submittedShippingAlternateContact: shippingalternatecontact })
  }

  render() {
    const { name, shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, submittedName, submittedShippingStreetAddress, submittedShippingApartmentAddress, submittedShippingAlternateContact } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="Street Address *"
              placeholder='eg 57_Gayaza_Road'
              name='shippingstreetaddress'
              value={shippingstreetaddress}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Apartment Address"
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
        <pre>{JSON.stringify({ name, shippingstreetaddress, shippingapartmentadress, shippingalternatecontact }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedShippingStreetAddress, submittedShippingApartmentAddress, submittedShippingAlternateContact }, null, 2)}</pre>
      </div>
    )
  }
}

export default CheckoutFormPiece