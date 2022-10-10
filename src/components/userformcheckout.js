import React, { Component } from 'react'
import { Form, Header, Select, Radio } from 'semantic-ui-react'
import { stripelandingURL } from '../constants';

const country_choices = [
  { key: 'Sd', text: 'South Sudan', value: 'South Sudan' },
  { key: 'Ug', text: 'Uganda', value: 'Uganda' },
  { key: 'Ky', text: 'Kenya', value: 'Kenya' },
  { key: 'Tz', text: 'Tanzania', value: 'Tanzania' },
]
const city_choices = [
  { key: 'Jb', text: 'Juba', value: 'Juba' },
  { key: 'Kla', text: 'Kampala', value: 'Kampala' },
  { key: 'Nrb', text: 'Nairobi', value: 'Nairobi' },
  { key: 'Dd', text: 'Dodoma', value: 'Dodoma' },
]

class CheckoutFormPiece extends Component {

  state = {
    shippingstreetaddress: '', shippingapartmentadress: '', shippingalternatecontact: '', billingingstreetaddress: '', billingapartmentadress: '', billingalternatecontact: '',
    submittedShippingStreetAddress: '', submittedShippingApartmentAddress: '', submittedShippingAlternateContact: '', submittedBillingStreetAddress: '', submittedBillingApartmentAddress: '', submittedBillingAlternateContact: '',
    shippingcountry: '', billingcountry: '', shippingcity: '', billingcity: '', paymentmethod: 'Stripe'
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  // state = {}

  handlePaymentChange = (e, { value }) => this.setState({ value })


  handleSubmit = () => {
    const { shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, billingapartmentadress, billingalternatecontact } = this.state

    this.setState({
      submittedShippingStreetAddress: shippingstreetaddress, submittedShippingApartmentAddress: shippingapartmentadress,
      submittedShippingAlternateContact: shippingalternatecontact, submittedBillingStreetAddress: billingingstreetaddress, submittedBillingApartmentAddress: billingapartmentadress,
      submittedBillingAlternateContact: billingalternatecontact
    })

    alert(`${this.state.shippingcountry} ${this.state.shippingcity} ${this.state.billingcountry} ${this.state.billingcity} ${this.state.paymentmethod} `)
  }

  render() {
    const { shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, billingapartmentadress, billingalternatecontact, submittedShippingStreetAddress,
      submittedShippingApartmentAddress, submittedShippingAlternateContact, submittedBillingStreetAddress, submittedBillingApartmentAddress, submittedBillingAlternateContact } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{ padding: "5% 10%", backgroundColor: "pink", margin: "30px 50px" }}>
          <Header style={{ fontSize: "3em", textAlign: "center" }}>Shipping Address</Header>
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              label='Country *'
              name='shippingcountry'
              options={country_choices}
              value={this.state.country}
              onChange={this.handleChange}
              placeholder='Enter your Country'
            />
            <Form.Field
              control={Select}
              label='City *'
              name='shippingcity'
              options={city_choices}
              value={this.state.city}
              onChange={this.handleChange}
              placeholder='Enter your city'
            />
          </Form.Group>
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
          <Form.Checkbox label='Billing Address is the same as my shipping address.' />
          <Form.Checkbox label='Save as default shipping address.' />
          <Form.Checkbox label='Use default shipping address' />
          <Header style={{ fontSize: "3em", textAlign: "center" }}>Billing Address</Header>
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              label='Country *'
              name='billingcountry'
              options={country_choices}
              value={this.state.country}
              onChange={this.handleChange}
              placeholder='Enter your Country'
            />
            <Form.Field
              control={Select}
              label='City *'
              name='billingcity'
              options={city_choices}
              value={this.state.city}
              onChange={this.handleChange}
              placeholder='Enter your city'
            />
          </Form.Group>
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
          <Form.Checkbox label='Save as default billing address.' />
          <Form.Checkbox label='Use default billing address' />
          <Header>Payment Method</Header>
          <Form.Field>
            <Radio
              label='Stripe'
              name='payment_method'
              value='Stripe'
              checked={this.state.value === 'Stripe'}
              onChange={this.handlePaymentChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Adyen'
              name='payment_method'
              value='Adyen'
              checked={this.state.value === 'Adyen'}
              onChange={this.handlePaymentChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Mobile Money'
              name='payment_method'
              value='MobileMoney'
              checked={this.state.value === 'MobileMoney'}
              onChange={this.handlePaymentChange}
            />
          </Form.Field>

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