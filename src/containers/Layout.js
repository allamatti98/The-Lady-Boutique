import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Input,
  Icon,
  Label,
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import Logo from '../static/Logo.png';

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
        <Menu inverted>
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
        </Menu>





{/* Navbar Starts here */}
        <Menu secondary size= 'huge'>
        <Menu.Item header>
        <img alt="logo" src={Logo} />
        </Menu.Item>
        <Menu.Item
          name='home'
          color = 'pink'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />

<Dropdown text='Pages' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Categories</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='Clothing'>
            <Dropdown.Menu>
              <Dropdown.Header>Tops</Dropdown.Header>
              <Dropdown.Item>Crop Tops</Dropdown.Item>
              <Dropdown.Item>Blouses</Dropdown.Item>
              <Dropdown.Item>Jackets</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Bottoms</Dropdown.Header>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Skirts</Dropdown.Item>
              <Dropdown.Item>Leggings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Wishlist</Dropdown.Item>
        <Dropdown.Item>Contact Us</Dropdown.Item>
        <Dropdown.Item>Blog</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        <Menu.Item
          name='messages'
          color = 'pink'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          color = 'pink'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...'/>
          </Menu.Item>

          <Menu.Item
            name='logout'
            color = 'pink'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
        <Menu.Item
          name='basket'
          color = 'pink'
          active={activeItem === 'basket'}
          onClick={this.handleItemClick}
        >
          <Icon name='shopping basket' />
          <Label color='pink' size="small" centered>23</Label>
        
        </Menu.Item>

        <Menu.Item
          name='wishlist'
          color = 'pink'
          active={activeItem === 'wishlist'}
          onClick={this.handleItemClick}
        >
          <Icon name='heart outline' />
        </Menu.Item>

        <Menu.Item
          name='user'
          color = 'pink'
          active={activeItem === 'user'}
          onClick={this.handleItemClick}
        >
          <Icon name='user outline' />
        </Menu.Item>

      </Menu>




        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 1" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 2" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 3" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Footer Header" />
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size="mini" src="/logo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
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
