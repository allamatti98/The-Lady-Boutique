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
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  handleShippingCountryChange = (e, { value }) => this.setState({ shipping_country: value })
  handleShippingCityChange = (e, { value }) => this.setState({ shipping_city: value })

  handleShippingStreetAddressChange = (e, { value }) => this.setState({ shipping_street_address: value })
  handleShippingApartmentAddressChange = (e, { value }) => this.setState({ shipping_apartment_address: value })
  handleShippingAlternateContactChange = (e, { value }) => this.setState({ alternate_shipping_contact: value })

  handleSubmit = e => {
    alert(`${this.state.shipping_country} ${this.state.shipping_city} ${this.state.shipping_street_address}
          ${this.state.shipping_apartment_address} ${this.state.alternate_shipping_contact}
    `)
  }

  render() {
    const { value } = this.state
    return (
      <div className='CheckoutForm1'>
        <Form onSubmit={this.handleSubmit} style={{ padding: "5% 10%", backgroundColor: "pink", margin: "30px 50px" }}>
          <Header style={{ fontSize: "3em", textAlign: "center" }}>Shipping Address</Header>
          <Form.Group widths='equal'>
            <Form.Select
              fluid
              label='Country *'
              name='shipping_country'
              options={country_choices}
              value={this.state.shipping_country}
              onChange={this.handleShippingCountryChange}
              placeholder='Select your country'
            />
            <Form.Select
              fluid
              label='City *'
              name='shipping_city'
              options={city_choices}
              value={this.state.shipping_city}
              onChange={this.handleShippingCityChange}
              placeholder='Select your City'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Street Address *</label>
              <input name='shipping_street_address' value={this.state.shipping_street_address}
                onChange={this.handleShippingStreetAddressChange}
                placeholder='eg 25 Gayaza Road' />
            </Form.Field>
            <Form.Field>
              <label>Apartment Address</label>
              <input name='shipping_apartment_address' value={this.state.shipping_apartment_address}
                onChange={this.handleShippingApartmentAddressChange}
                placeholder='eg B23' />
            </Form.Field>
            <Form.Field>
              <label>Alternate Contact</label>
              <input name='alternate_shipping_contact' value={this.state.alternate_shipping_contact}
                onChange={this.handleShippingAlternateContactChange}
                placeholder='eg Home/ Office Number' />
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
              options={country_choices}
              placeholder='Select your country'
            />
            <Form.Select
              fluid
              label='City *'
              options={city_choices}
              placeholder='City'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Street Address *</label>
              <input placeholder='eg 25 Gayaza Road' />
            </Form.Field>
            <Form.Field>
              <label>Apartment Address</label>
              <input placeholder='eg B23' />
            </Form.Field>
            <Form.Field>
              <label>Alternate Contact</label>
              <input placeholder='eg Home/ Office Number' />
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

          <Form.Button type="submit" color="pink" size="huge" floated="right">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default CheckoutFormPiece