import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'

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

  render() {
    const { value } = this.state
    return (
      <div className='CheckoutForm1'>
        <Form style={{ padding: "5% 15%", backgroundColor: "pink", margin: "30px 50px" }}>
          <Header style={{ fontSize: "3em", textAlign: "center" }}>Shipping Address</Header>
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

          <Form.Button color="pink" size="huge" floated="right">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default CheckoutFormPiece