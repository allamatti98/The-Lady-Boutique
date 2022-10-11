import React, { Component } from 'react'
import { Form, Header, Select, Radio, Message, Segment, Dimmer, Loader, Image } from 'semantic-ui-react'
import { stripelandingURL, addressListURL, addressCreateURL, addressUpdateURL, addressDeleteURL } from '../constants';
import { authAxios } from '../utils';


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
const payment_methods = [
  { key: 'S', text: 'Stripe', value: 'Stripe' },
  { key: 'A', text: 'Adyen', value: 'Adyen' },
  { key: 'M', text: 'Mobile Money', value: 'MobileMoney' },
]

class CheckoutFormPiece extends Component {

  state = {
    shippingstreetaddress: '', shippingapartmentadress: '', shippingalternatecontact: '', billingingstreetaddress: '', billingapartmentadress: '', billingalternatecontact: '',
    shippingcountry: '', billingcountry: '', shippingcity: '', billingcity: '', error: null, loading: false, addresses: []

  }

  componentDidMount() {
    this.handleFetchAddresses();
    // this.handleFetchCountries();
    // this.handleFetchUserID();
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, billingapartmentadress, billingalternatecontact } = this.state
    this.setState({

    })
    console.log(this.state)
  }

  handleFetchAddresses = () => {
    this.setState({ loading: true });
    const { activeItem } = this.state;
    authAxios
      .get(addressListURL(activeItem === "billingAddress" ? "B" : "S"))
      .then(res => {
        this.setState({ addresses: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  // handleChange = e => {
  //   const { formData } = this.state;
  //   const updatedFormdata = {
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   };
  //   this.setState({
  //     formData: updatedFormdata
  //   });
  // };

  handleCreateAddress = () => {
    const { userID, activeItem } = this.props;
    const { formData } = this.state;
    authAxios
      .post(addressCreateURL, {
        ...formData,
        user: userID,
        address_type: activeItem === "billingAddress" ? "B" : "S"
      })
      .then(res => {
        this.setState({
          saving: false,
          success: true,
          formData: { default: false }
        });
        this.props.callback();
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };


  render() {
    const { shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, billingapartmentadress, billingalternatecontact,
      error, loading, addresses
    } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{ padding: "5% 5%", backgroundColor: "pink", margin: "0% 5%" }}>
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
          <Form.Field
            control={Select}
            label='Payment Method *'
            name='payment_method'
            options={payment_methods}
            value={this.state.payment_method}
            onChange={this.handleChange}
            placeholder='Enter your Country'
            width={3}
          />

          <Form.Button type="submit" color="pink" size="huge" floated="right">Submit</Form.Button>

        </Form>

        <div>
          {error && (
            <Message
              error
              header="There was an error"
              content={JSON.stringify(error)}
            />
          )}
          {loading && (
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
              <Image src="/images/wireframe/short-paragraph.png" />
            </Segment>
          )}
          {addresses.map(a => {
            return <h1>{a.billingcity}</h1>;
          })}
        </div>
        {/* <strong>onChange:</strong>
        <pre>{JSON.stringify({ shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, billingapartmentadress, billingalternatecontact }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedShippingStreetAddress, submittedShippingApartmentAddress, submittedShippingAlternateContact, submittedBillingStreetAddress, submittedBillingApartmentAddress, submittedBillingAlternateContact }, null, 2)}</pre> */}
      </div>

    )
  }
}

export default CheckoutFormPiece