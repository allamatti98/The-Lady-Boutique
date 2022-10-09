import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'
import { stripelandingURL } from '../constants';

const country_choices = [
  { key: 'Ug', text: 'Uganda', value: 'Uganda' },
  { key: 'Ky', text: 'Kenya', value: 'Kenya' },
  { key: 'Tz', text: 'Tanzania', value: 'Tanzania' },
]
const city_choices = [
  { key: 'Kla', text: 'Kampala', value: 'Kampala' },
  { key: 'Nrb', text: 'Nairobi', value: 'Nairobi' },
  { key: 'Dd', text: 'Dodoma', value: 'Dodoma' },
]

class CheckoutFormPiece extends Component {
  // state = {}
  // handleChange = (e, { value }) => this.setState({ value })

  constructor(props) {
    super(props)

    this.state = {
      shipping_country: '',
      shipping_city: '',
      shipping_street_address: '',
      shipping_apartment_address: '',
      shipping_alternate_contact: '',

      billing_country: '',
      billing_city: '',
      billing_street_address: '',
      billing_apartment_address: '',
      billing_alternate_contact: '',
    }
  }

  handleShippingApartmentAddressChange = event => {
    this.setState({
      shipping_country: event.target.value
    })
  }
  handleShippingStreetAddressChange = event => {
    this.setState({
      shipping_street_address: event.target.value
    })
  }

  handleShippingAlternateContactChange = event => {
    this.setState({
      shipping_alternate_contact: event.target.value
    })
  }


  render() {
    const { value } = this.state
    return (
      <div className='CheckoutForm1'>
        <Form style={{ padding: "5% 10%", backgroundColor: "pink", margin: "30px 50px" }}>
          <Header style={{ fontSize: "3em", textAlign: "center" }}>Shipping Address</Header>
          <Form.Group widths='equal'>
            <Form.Select
              fluid
              label='Country *'
              name="shipping_country"
              options={country_choices}
              placeholder='Select your country'
            />
            <Form.Select
              fluid
              label='City *'
              name="shipping_city"
              options={city_choices}
              placeholder='City'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field name="shipping_street_address">
              <label>Street Address *</label>
              <input placeholder='eg 25 Gayaza Road' value={this.state.shipping_street_address}
                onChange={this.handleShippingStreetAddressChange} />
            </Form.Field>
            <Form.Field>
              <label>Apartment Address</label>
              <input placeholder='eg B23' name="shipping_apartment_address" value={this.state.shipping_apartment_address}
                onChange={this.handleShippingApartmentAddressChange} />
            </Form.Field>
            <Form.Field>
              <label>Alternate Contact</label>
              <input placeholder='eg Home/ Office Number' name="shipping_alternate_contact" value={this.state.shipping_alternate_contact}
                onChange={this.handleShippingAlternateContactChange} />
            </Form.Field>
          </Form.Group>
          <Form.Checkbox label='Billing Address is the same as my shipping address.' />
          <Form.Checkbox label='Save as default shipping address.' />
          <Form.Checkbox label='Use default shipping address' />
          <Header style={{ fontSize: "3em", textAlign: "center" }}>Billing Address</Header>
          <Form.Group widths='equal'>
            <Form.Select
              fluid
              label='Country *'
              name="billing_country"
              options={country_choices}
              placeholder='Select your country'
            />
            <Form.Select
              fluid
              label='City *'
              name="billing_city"
              options={city_choices}
              placeholder='City'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Street Address *</label>
              <input placeholder='eg 25 Gayaza Road' name="billing_street_address" value={this.state.billing_street_address} />
            </Form.Field>
            <Form.Field>
              <label>Apartment Address</label>
              <input placeholder='eg B23' name="billing_apartment_address" value={this.state.billing_apartment_address} />
            </Form.Field>
            <Form.Field>
              <label>Alternate Contact</label>
              <input placeholder='eg Home/ Office Number' name="billing_alternate_contact" value={this.state.billing_alternate_contact} />
            </Form.Field>
          </Form.Group>
          <Form.Checkbox label='Save as default billing address.' />
          <Form.Checkbox label='Use default billing address' />

          <Header>Payment Method</Header>
          <Form.Radio
            label='Stripe'
            value='S'
            checked={value === 'S'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Adyen'
            value='A'
            checked={value === 'A'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Mobile Money'
            value='M'
            checked={value === 'M'}
            onChange={this.handleChange}
          />

          <Form.Button color="pink" size="huge" floated="right">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default CheckoutFormPiece