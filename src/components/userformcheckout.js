import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'

class CheckoutFormPiece extends Component {
  state = {
    shippingstreetaddress: '', shippingapartmentadress: '', shippingalternatecontact: '', billingingstreetaddress: '', billingapartmentadress: '',
    billingalternatecontact: '',
    submittedShippingStreetAddress: '', submittedShippingApartmentAddress: '', submittedShippingAlternateContact: '', submittedBillingStreetAddress: '',
    submittedBillingApartmentAddress: '', submittedBillingAlternateContact: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, billingapartmentadress, billingalternatecontact } = this.state

    this.setState({
      submittedShippingStreetAddress: shippingstreetaddress, submittedShippingApartmentAddress: shippingapartmentadress,
      submittedShippingAlternateContact: shippingalternatecontact, submittedBillingStreetAddress: billingingstreetaddress, submittedBillingApartmentAddress: billingapartmentadress,
      submittedBillingAlternateContact: billingalternatecontact
    })
  }

  render() {
    const { shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, billingapartmentadress, billingalternatecontact, submittedShippingStreetAddress,
      submittedShippingApartmentAddress, submittedShippingAlternateContact, submittedBillingStreetAddress, submittedBillingApartmentAddress, submittedBillingAlternateContact } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{ padding: "5% 10%", backgroundColor: "pink", margin: "30px 50px" }}>
          <Header style={{ fontSize: "3em", textAlign: "center" }}>Shipping Address</Header>
          <Form.Group widths='equal'>
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
          <Header style={{ fontSize: "3em", textAlign: "center" }}>Billing Address</Header>
          <Form.Group widths='equal'>
            <Form.Input
              label="Street Address *"
              placeholder='eg 57_Gayaza_Road'
              name='billingingstreetaddress'
              value={billingingstreetaddress}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Apartment Address"
              placeholder='eg B17'
              name='billingapartmentadress'
              value={billingapartmentadress}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Alternate Contact"
              placeholder='BillingAlternateContact'
              name='billingalternatecontact'
              value={billingalternatecontact}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button type="submit" color="pink" size="huge" floated="right">Submit</Form.Button>

        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, billingapartmentadress, billingalternatecontact }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedShippingStreetAddress, submittedShippingApartmentAddress, submittedShippingAlternateContact, submittedBillingStreetAddress, submittedBillingApartmentAddress, submittedBillingAlternateContact }, null, 2)}</pre>
      </div>
    )
  }
}

export default CheckoutFormPiece