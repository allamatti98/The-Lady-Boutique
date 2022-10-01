import React from "react";
import {Container,Divider,Dropdown,Grid,Header,Image,List,Menu,Segment,Input,Icon,Label,Responsive} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import Logo from '../static/img/Logo.png';
import IconDropDown from "../components/icondropdown";
import CompactIcons from "../components/compactsocialmedia";
import PaymentMethodsFooter from "../components/groupedpaymentmethods";
import Greeting from "../components/LandingGreeting";


class CustomLayout extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { authenticated, cart } = this.props;
    const { activeItem } = this.state;

    return (
      <div>
        {/* <Menu inverted>
          <Container>
            <Link to="/">
              <Menu.Item header>Home</Menu.Item>
            </Link>
            <Link to="/products">
              <Menu.Item header>Products</Menu.Item>
            </Link>
            {authenticated ? (
              <React.Fragment>
                <Menu.Menu position="right">
                  <Link to="/profile">
                    <Menu.Item>Profile</Menu.Item>
                  </Link>
                  <Dropdown
                    icon="cart"
                    loading={loading}
                    text={`${cart !== null ? cart.order_items.length : 0}`}
                    pointing
                    className="link item"
                  >
                    <Dropdown.Menu>
                      {cart !== null ? (
                        <React.Fragment>
                          {cart.order_items.map(order_item => {
                            return (
                              <Dropdown.Item key={order_item.id}>
                                {order_item.quantity} x {order_item.item.title}
                              </Dropdown.Item>
                            );
                          })}
                          {cart.order_items.length < 1 ? (
                            <Dropdown.Item>No items in your cart</Dropdown.Item>
                          ) : null}
                          <Dropdown.Divider />

                          <Dropdown.Item
                            icon="arrow right"
                            text="Checkout"
                            onClick={() =>
                              this.props.history.push("/order-summary")
                            }
                          />
                        </React.Fragment>
                      ) : (
                        <Dropdown.Item>No items in your cart</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item header onClick={() => this.props.logout()}>
                    Logout
                  </Menu.Item>
                </Menu.Menu>
              </React.Fragment>
            ) : (
              <Menu.Menu position="right">
                <Link to="/login">
                  <Menu.Item header>Login</Menu.Item>
                </Link>
                <Link to="/signup">
                  <Menu.Item header>Signup</Menu.Item>
                </Link>
              </Menu.Menu>
            )}
          </Container>
        </Menu> */}

        <div className="Landing">
        {/* Navbar Starts here */}
        <Menu secondary size='huge' className="NavBar" collapse 
          style={{ margin: "0em 2em 0em 0em", padding: "1em 0em",display:"flex" }}
        >
          <Menu.Item header>
            <img alt="logo" src={Logo} style={{ width: "100px", maxHeight: "30px" }} />
          </Menu.Item>
          <Link to="/">
            <Responsive as={Menu.Item} minWidth={790}
              name='home'
              color='pink'
              className="NavItem"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/products">
          <Responsive as={Menu.Item} minWidth={790}
              name='shop'
              color='pink'
              active={activeItem === 'shop'}
              onClick={this.handleItemClick}
            /></Link>
          <Link to="/">
          <Responsive as={Menu.Item} minWidth={790}
              name='Gallery'
              color='pink'
              active={activeItem === 'Gallery'}
              onClick={this.handleItemClick}
            /></Link>
          <Link to="/">
          <Responsive as={Menu.Item} minWidth={790}
              name='Blog'
              color='pink'
              active={activeItem === 'Blog'}
              onClick={this.handleItemClick}
            /></Link>
          <Link to="/">
          <Responsive as={Menu.Item} minWidth={790}
              name='Contact Us'
              color='pink'
              active={activeItem === 'Contact Us'}
              onClick={this.handleItemClick}
            /></Link>

          {authenticated ? (
            <React.Fragment>
              <Menu.Menu position="right">                
                <Link to ="/">
                <Responsive as={Menu.Item} minWidth={1234}>
                    <Input icon='search' placeholder='Search...' />
                </Responsive>
                </Link>


                <Link to="/">
                  <Menu.Item
                    name='basket'
                    color='pink'
                    active={activeItem === 'basket'}
                    onClick={this.handleItemClick}
                  >
                    <Icon name='shopping basket' />
                    <Label color='pink' size="small" centered>{`${cart !== null ? cart.order_items.length : 0}`}</Label>

                  </Menu.Item></Link>

                <Link to="/">
                  <Menu.Item
                    name='wishlist'
                    color='pink'
                    active={activeItem === 'wishlist'}
                    onClick={this.handleItemClick}
                  >
                    <Icon name='heart outline' />
                  </Menu.Item></Link>
                <div>
    <Menu attached='top'>
        
      <Dropdown item icon='user outline' simple>
        <Dropdown.Menu>
        <Link to= "/profile">
          <Dropdown.Item>Profile</Dropdown.Item>
        </Link>
        <Link to= "/login">
          <Dropdown.Item>Wishlist</Dropdown.Item>
        </Link>
        
          <Dropdown.Item onClick={() => this.props.logout()}>Log Out</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  </div>
              </Menu.Menu>
            </React.Fragment>
          ) : (
            <Menu.Menu position="right">
              <Link>
              <Responsive as={Menu.Item} minWidth={1234}>
                  <Input icon='search' placeholder='Search...' />
              </Responsive>
              </Link>

              <Link>
              <Responsive as={Menu.Item} minWidth={1000}>
                  <Icon name= "whatsapp"/>
                  </Responsive>
              </Link>

              <Link>
              <Responsive as={Menu.Item} minWidth={1000}>
                  <Icon name= "instagram"/>
              </Responsive>
              </Link>

              <Link>
              <Responsive as={Menu.Item} minWidth={1000}>
                  <Icon name= "mail outline"/>
                </Responsive>
              </Link>
       
                {/* User Icon */}
                <Responsive as={Menu.Item} minWidth={790}>
              <IconDropDown/>
              </Responsive>
            </Menu.Menu>
          )}
          <Responsive as ={Menu.Menu} maxWidth={789}  position='right'>
                    <Dropdown
                        item
                        icon ='bars'
                        >
                        <Dropdown.Menu>
                        <Dropdown.Item text='Home'/>
                        <Dropdown.Item text='Shop'/>
                        <Dropdown.Item text='Gallery'/>
                        <Dropdown.Item text='Blog'/>
                        <Dropdown.Item text='Contact Us'/>
                            { authenticated ?
                                (
                                <>
                                  <Dropdown.Item text='Mobile/Tablet Item 1'/>
                                  <Dropdown.Item text='Mobile/Tablet Item 2'/>
                                </>

                                ):(
                                  <>
                                    <Dropdown.Item text="Login"/>
                                    <Dropdown.Item text='Sign Up'/>
                                  </>
                                )
                          }
                        </Dropdown.Menu>
                    </Dropdown>
                </Responsive>
        </Menu>
        <Greeting/>



        {/* Responsive Menu */}
        <div>
            <Menu pointing secondary>
                <Responsive as={Menu.Item} minWidth={790}
                    name='Laptop Item'
                    active={activeItem === 'Laptop Item'}
                    // onClick={() => setActiveItem('Test Item')}
                />
                <Responsive as={Menu.Item} minWidth={790}
                    name='Laptop Item 2'
                    active={activeItem === 'Laptop Item 2'}
                    // onClick={() => setActiveItem('Test Item 2')}
                />
                <Responsive as={Menu.Item} minWidth={790}
                    name='Laptop Item 3'
                    active={activeItem === 'Laptop Item 3'}
                    // onClick={() => setActiveItem('Test Item 3')}
                />
                <Menu.Menu position = 'right'>
                    <Responsive as ={Menu.Item} minWidth={790}
                        name = "Sign Out"
                        // onClick={() => setShowModal(true)}
                    />
                </Menu.Menu>
                <Responsive as ={Menu.Menu} maxWidth={789}  position='right'>
                    <Dropdown
                        item
                        icon ='bars'
                        >
                        <Dropdown.Menu>
                            <Dropdown.Item text='Mobile/Tablet Item 1'/>
                            <Dropdown.Item text='Mobile/Tablet Item 2'/>
                            <Dropdown.Item text='Mobile/Tablet Item 3'/>
                            <Dropdown.Item text='Sign Out'/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Responsive>
            </Menu>
        </div>


        </div>
        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid>
            <Grid.Column width={3}>
              <Header color='pink' as="h4" content="Lets Link Up:" />
                <CompactIcons color = 'pink'/>
            </Grid.Column>
              <Image centered src={Logo} style={{ width: '250px', height: '100px'}}/>


              <Grid.Column width={3}>
                <Header color='pink' as="h4" content="Card Swipes Supported:" />
                <PaymentMethodsFooter/>
              </Grid.Column>
            </Grid>
            <Divider inverted section/>

            <Grid>
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
                  <List.Item as="a"><Icon name='location arrow'/>3 Bombo Rd. Kampala, Uganda</List.Item>
                  <List.Item as="a"><Icon name= 'phone'/>+256 775 123 123</List.Item>
                  <List.Item as="a"><Icon name= 'whatsapp'/>+256 784 123 123</List.Item>
                  <List.Item as="a"><Icon name='mail'/>Email</List.Item>
                </List>
            </Grid.Column>

            </Grid>
            <Divider inverted section/>
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
              <List.Item><Icon name='copyright outline'/>Lady Bird Boutique 2022. All Rights Reserved.</List.Item>
              <List.Item>Designed by <b>Dayan Allamatti</b></List.Item>
            </List>
          </Container>
        </Segment>
      </div>
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
