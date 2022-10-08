import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

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
      <Form style={{padding:"70px 100px", backgroundColor:"pink", margin:"30px 50px"}}>
      <Form.Group widths='equal'>
      <Form.Select
            fluid
            label='Country'
            options={country_choices}
            placeholder='Select your country'
          />
          <Form.Select
            fluid
            label='City'
            options={city_choices}
            placeholder='Gender'
          />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Field>
      <label>Street Address</label>
      <input placeholder='eg 25 Gayaza Road' />
    </Form.Field>
    <Form.Field>
      <label>Apartment/Suite Address (Optional)</label>
      <input placeholder='eg B23' />
    </Form.Field>
    <Form.Field>
      <label>Alternate Contact (Optional)</label>
      <input placeholder='eg Home/ Office Number' />
    </Form.Field>
    </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label='Small'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Medium'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Large'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    )
  }
}

export default CheckoutFormPiece