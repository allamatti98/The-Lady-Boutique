import React from "react";
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Input, Icon, Label, Responsive } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import Logo from '../static/img/Logo.png';
import PaymentMethodsFooter from "../components/groupedpaymentmethods";
import FooterSocials from "../components/footersocials";
import InstaPics from "../components/igpics";
import IconDropDown from "../components/icondropdown";



class CustomLayout extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { authenticated, cart, loading } = this.props;
    const { activeItem } = this.state;

    return (
      <div>
        {this.props.children}

        {/* <InstaPics /> */}
        <Segment
          inverted
          vertical
          style={{ margin: "0em 0em", padding: "5em 0em" }}
          stackable
        >
          <Container textAlign="center" stackable>
            <Grid>
              <Grid.Column width={3}>
                <Header color='pink' as="h4" content="Lets Link Up:" />
                <FooterSocials color='pink' />
              </Grid.Column>

              <Image centered src={Logo} style={{ width: '30%', height: '2%' }} />
              <Grid.Column width={3}>
                <Header color='pink' as="h4" content="Card Swipes:" />
                <PaymentMethodsFooter />
              </Grid.Column>
            </Grid>
            <Divider inverted section />
            <Grid stackable>
              <Grid.Column width={4}>
                <Header color='pink' as="h2" content="Stock" />
                <List link inverted>
                  <List.Item as="a">Dresses</List.Item>
                  <List.Item as="a">Skirts</List.Item>
                  <List.Item as="a">Blouses</List.Item>
                  <List.Item as="a">Pants</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header color='pink' as="h2" content="Site Map" />
                <List link inverted>
                  <List.Item as="a">My Profile</List.Item>
                  <List.Item as="a">Shop</List.Item>
                  <List.Item as="a">Checkout</List.Item>
                  <List.Item as="a">My Cart</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header color='pink' as="h2" content="Lady Bird" />
                <List link inverted>
                  <List.Item as="a">Careers</List.Item>
                  <List.Item as="a">Support</List.Item>
                  <List.Item as="a">Shipping Details</List.Item>
                  <List.Item as="a">Quality Control</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={4}>
                <Header color='pink' as="h2" content="Contacts" />
                <List link inverted>
                  <List.Item as="a"><Icon name='location arrow' />3 Bombo Rd. Kampala, Uganda</List.Item>
                  <List.Item as="a"><Icon name='mail' />ladybird@gmail.com</List.Item>
                  <List.Item as="a"><Icon name='whatsapp' />+256 784 123 123</List.Item>
                  <List.Item as="a"><Icon name='phone' />+256 775 123 123</List.Item>
                </List>
              </Grid.Column>
            </Grid>
            <Divider inverted section />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                FAQ
              </List.Item>
              <List.Item as="a" href="#">
                About Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
            <List inverted link size="small">
              <List.Item><Icon name='copyright outline' />Lady Bird Boutique 2022. All Rights Reserved.</List.Item>
              <List.Item>Designed by <b>Dayan Allamatti</b></List.Item>
            </List>
          </Container>
        </Segment>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
