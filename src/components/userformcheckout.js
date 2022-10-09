import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class CheckoutFormPiece extends Component {
  state = {
    shippingstreetaddress: '', shippingapartmentadress: '', shippingalternatecontact: '', billingingstreetaddress: '', submittedShippingStreetAddress: '',
    submittedShippingApartmentAddress: '', submittedShippingAlternateContact: '', submittedBillingStreetAddress: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress } = this.state

    this.setState({
      submittedShippingStreetAddress: shippingstreetaddress, submittedShippingApartmentAddress: shippingapartmentadress,
      submittedShippingAlternateContact: shippingalternatecontact, submittedBillingStreetAddress: billingingstreetaddress
    })
  }

  render() {
    const { shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, submittedShippingStreetAddress,
      submittedShippingApartmentAddress, submittedShippingAlternateContact, submittedBillingStreetAddress } = this.state

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
          <Form.Input
            label="Street Address *"
            placeholder='eg 57_Gayaza_Road'
            name='billingingstreetaddress'
            value={billingingstreetaddress}
            onChange={this.handleChange}
          />
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedShippingStreetAddress, submittedShippingApartmentAddress, submittedShippingAlternateContact, submittedBillingStreetAddress }, null, 2)}</pre>
      </div>
    )
  }
}

export default CheckoutFormPiece