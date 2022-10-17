import React from "react";
import { Dropdown, Menu, Input, Icon, Label, Responsive } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import Logo from '../static/img/Logo.png';
import LoggedInUserDropdown from "../components/loggedindropwown";
import IconDropDown from "../components/icondropdown";


class NavBar extends React.Component {
    componentDidMount() {
        this.props.fetchCart();
    }
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { authenticated, cart, loading } = this.props;
        const { activeItem } = this.state;

        return (
            <div className="NavBar1" >
                {/* Navbar Starts here */}
                <Menu secondary size='huge' className="NavBar2"
                    style={{ margin: "0em 2em 0em 0em", padding: "1em 0em", display: "flex", fontFamily: "Lato,sans-serif" }}
                // backgroundColor: "rgba(252,237,234,.9)"
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
                    <Link to="/gallery">
                        <Responsive as={Menu.Item} minWidth={790}
                            name='Gallery'
                            color='pink'
                            active={activeItem === 'Gallery'}
                            onClick={this.handleItemClick}
                        /></Link>
                    <Link to="/blog">
                        <Responsive as={Menu.Item} minWidth={790}
                            name='Blog'
                            color='pink'
                            active={activeItem === 'Blog'}
                            onClick={this.handleItemClick}
                        /></Link>
                    <Link to="/contact-us">
                        <Responsive as={Menu.Item} minWidth={790}
                            name='Contact Us'
                            color='pink'
                            active={activeItem === 'Contact Us'}
                            onClick={this.handleItemClick}
                        /></Link>

                    {authenticated ? (
                        <React.Fragment>
                            <Menu.Menu position="right">
                                <Link to="/wishlist">
                                    <Responsive as={Menu.Item} minWidth={1050}
                                        name='search'
                                        color='pink'
                                        active={activeItem === 'search'}
                                        onClick={this.handleItemClick}
                                    >
                                        <Icon name='search' />
                                    </Responsive>
                                </Link>


                                <Link to="/order-summary">
                                    <Responsive as={Menu.Item} minWidth={1050}
                                        name='basket'
                                        color='pink'
                                        active={activeItem === 'basket'}
                                        onClick={this.handleItemClick}
                                    >
                                        <Icon name='shopping basket' />
                                        <Label color='pink' size="small" centered>{`${cart !== null ? cart.order_items.length : 0}`}</Label>

                                    </Responsive>
                                </Link>

                                <Link to="/wishlist">
                                    <Responsive as={Menu.Item} minWidth={1050}
                                        name='wishlist'
                                        color='pink'
                                        active={activeItem === 'wishlist'}
                                        onClick={this.handleItemClick}
                                    >
                                        <Icon name='heart outline' />
                                    </Responsive>
                                </Link>
                                <LoggedInUserDropdown />
                            </Menu.Menu>
                        </React.Fragment>
                    ) : (
                        <Menu.Menu position="right">
                            <Link>
                                <Responsive as={Menu.Item} minWidth={1050}>
                                    <Icon name="search" />
                                </Responsive>
                            </Link>

                            <Link>
                                <Responsive as={Menu.Item} minWidth={1050}>
                                    <Icon name="whatsapp" />
                                </Responsive>
                            </Link>

                            <Link>
                                <Responsive as={Menu.Item} minWidth={1050}>
                                    <Icon name="instagram" />
                                </Responsive>
                            </Link>

                            <Link>
                                <Responsive as={Menu.Item} minWidth={1050}>
                                    <Icon name="mail outline" />
                                </Responsive>
                            </Link>


                            {/* User Icon */}
                            <IconDropDown />
                        </Menu.Menu>
                    )}
                    <Responsive as={Menu.Menu} maxWidth={789} position='right'>
                        <Dropdown
                            item
                            icon='bars'
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item text='Home' />
                                <Dropdown.Item text='Shop' />
                                <Dropdown.Item text='Gallery' />
                                <Dropdown.Item text='Blog' />
                                <Dropdown.Item text='Contact Us' />
                                {authenticated ?
                                    (
                                        <>
                                            <Dropdown.Item text='Mobile/Tablet Item 1' />
                                            <Dropdown.Item text='Mobile/Tablet Item 2' />
                                        </>

                                    ) : (
                                        <>
                                            <Dropdown.Item text="Login" />
                                            <Dropdown.Item text='Sign Up' />
                                        </>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Responsive>
                </Menu>
            </div>
        )
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
    )(NavBar)
);