import React, { Component } from 'react'
import { Form, Header, Select, Radio, Message, Segment, Dimmer, Loader, Image } from 'semantic-ui-react'
import { stripelandingURL, addressListURL, addressCreateURL, addressUpdateURL, addressDeleteURL, userIDURL } from '../constants';
import { authAxios } from '../utils';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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
  { key: 'M', text: 'Mobile Money', value: 'MobileMoney' },
]

class CheckoutFormPiece extends Component {

  state = {
    shippingstreetaddress: '', shippingapartmentadress: '', shippingalternatecontact: '', billingingstreetaddress: '', billingapartmentadress: '', billingalternatecontact: '',
    shippingcountry: '', billingcountry: '', shippingcity: '', billingcity: '', error: null, loading: false, addresses: [], formData: {}, userID: null, user: '', samebillingnshipping: false, savedefaultshipping: false,
    usedefaultshipping: false, savedefaultbilling: false, usedefaultbilling: false, dbaddresses: [], stripeSessionID: ''

  }

  componentDidMount() {
    this.handleFetchAddresses();
    this.handleFetchUserID();
  }

  handleChange = (e, { name, value }) => {
    const { formData } = this.state;
    const updatedFormdata = { ...formData, [name]: value };
    this.setState({ [name]: value, formData: updatedFormdata })
  }
  handleToggleDefaultShippingnBilling = () => {
    const { formData } = this.state;
    const updatedFormdata = {
      ...formData,
      samebillingnshipping: !formData.samebillingnshipping
    };
    this.setState({
      formData: updatedFormdata
    });
  };
  handleToggleSaveDefaultShipping = () => {
    const { formData } = this.state;
    const updatedFormdata = {
      ...formData,
      savedefaultshipping: !formData.savedefaultshipping
    };
    this.setState({
      formData: updatedFormdata
    });
  };

  handleToggleUseDefaultShipping = () => {
    const { formData } = this.state;
    const updatedFormdata = {
      ...formData,
      usedefaultshipping: !formData.usedefaultshipping
    };
    this.setState({
      formData: updatedFormdata
    });
  };

  handleToggleSaveDefaultBilling = () => {
    const { formData } = this.state;
    const updatedFormdata = {
      ...formData,
      savedefaultbilling: !formData.savedefaultbilling
    };
    this.setState({
      formData: updatedFormdata
    });
  };

  handleToggleUseDefaultBilling = () => {
    const { formData } = this.state;
    const updatedFormdata = {
      ...formData,
      usedefaultbilling: !formData.usedefaultbilling
    };
    this.setState({
      formData: updatedFormdata
    });
  };

  handleSubmit = e => {
    const { userID } = this.state;
    this.setState({ saving: true, user: userID });
    e.preventDefault();
    const { formData } = this.props;
    this.handleCreateAddress(() => {
      console.log(formData.payment_method)
    });
  };

  handleFetchAddresses = () => {
    this.setState({ loading: true });
    authAxios
      .get(addressListURL)
      .then(res => {
        this.setState({ dbaddresses: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };


  handleCreateAddress = () => {
    // const { userID } = this.props;
    const { formData, userID } = this.state;
    authAxios
      .post(addressCreateURL, {
        ...formData,
        user: userID,
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


    if (formData.payment_method === 'Stripe') {
      const stripe = window.Stripe("pk_test_51LiV4RJ7OZP0oyoLY4hg3o6Wg9JTckzBR7YQBWjPqMw4zuiRbm1iuf2wFieYB1D7GRry6DjnPQk5fxRROAwJyf6y004a5ZRmZW ");
      authAxios
        .post(stripelandingURL,
          {
            user: userID
          })
        .then(res => {
          return stripe.redirectToCheckout({ sessionId: res.data.id });
        })
    } else if (formData.payment_method === 'MobileMoney') {
      console.log("You good?");
    } else {
      console.log("Aight");
    }
  };

  handleFetchUserID = () => {
    authAxios
      .get(userIDURL)
      .then(res => {
        this.setState({ userID: res.data.userID });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    const { shippingstreetaddress, shippingapartmentadress, shippingalternatecontact, billingingstreetaddress, billingapartmentadress, billingalternatecontact,
      error, loading, addresses, dbaddresses,
    } = this.state

    const { isAuthenticated } = this.props
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        {error && (
          <Message
            error
            header="There was an error"
          // content={JSON.stringify(error)}
          />
        )}
        {loading && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        )}

        <Form onSubmit={this.handleSubmit} style={{ padding: "5% 5%", backgroundColor: "pink", margin: "0% 5% 5% 5%" }}>
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
          {/* <Form.Checkbox name='samebillingnshipping' onChange={this.handleToggleDefaultShippingnBilling} label='Billing Address is the same as my shipping address.' />
          <Form.Checkbox name='savedefaultshipping' onChange={this.handleToggleSaveDefaultShipping} label='Save as default shipping address.' />
          <Form.Checkbox name='usedefaultshipping' onChange={this.handleToggleUseDefaultShipping} label='Use default shipping address:' /> */}
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
          {/* <Form.Checkbox name='savedefaultbilling' onChange={this.handleToggleSaveDefaultBilling} label='Save as default billing address.' />
          <Form.Checkbox name='usedefaultbilling' onChange={this.handleToggleUseDefaultBilling} label='Use default billing address' /> */}
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
export default connect(mapStateToProps)(CheckoutFormPiece)