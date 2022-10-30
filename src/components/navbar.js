import React from "react";
import { Dropdown, Menu, Input, Icon, Label, Responsive, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import Logo from '../static/img/LadyBirdLogo3r.png';
import IconDropDown from "../components/icondropdown";
import dp from '../static/img/dp1.jpg';
import { authAxios } from "../utils";
import { usernameURL } from "../constants";


class NavBar extends React.Component {

    componentDidMount() {
        this.props.fetchCart();
        this.handleFetchUsername();
    }

    state = { activeItem: '', username: '' }



    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    handleFetchUsername = () => {
        authAxios
            .get(usernameURL)
            .then(res => {
                this.setState({ username: res.data.userName });
            })
            .catch(err => {
                this.setState({ error: err });
                setTimeout(function () {
                    if (window.location.hash != '#r') {
                        window.location.hash = 'r';
                        window.location.reload(1);
                    }
                }, 5000);
            });
    };

    render() {
        const { authenticated, cart, loading } = this.props;
        const { activeItem, username } = this.state;
        const trigger = (
            <Link to="/profile">
                <span style={{ textDecoration: "none", color: "black" }}>
                    <Image avatar src={dp} /> {username}
                </span>
            </Link>
        )

        const options = [
            { key: 'account', text: 'My Account', icon: 'user' },
        ]

        return (
            <div className="NavBar1" >
                <Menu secondary size='huge' className="NavBar2" fixed="top"
                    style={{ margin: "0em 2em 0em 0em", padding: "1em 2em 1em 0em", display: "flex", fontFamily: "Lato,sans-serif", backgroundColor: "rgba(252,237,234,.8)" }}
                >
                    <Menu.Item header>
                        <img alt="logo" src={Logo} style={{ width: "100px", maxHeight: "40px" }} />
                    </Menu.Item>
                    <Link to="/">
                        <Responsive as={Menu.Item} minWidth={790}
                            name='home'
                            color='pink'
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
                                <Link to="/faq">
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
                                        <Label color='pink' size="small" centered style={{ marginLeft: "0px" }}>{`${cart !== null ? cart.order_items.length : 0}`}</Label>

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
                                <Dropdown
                                    trigger={trigger}
                                    options={options}
                                    pointing='top right'
                                    icon={null}
                                />
                            </Menu.Menu>
                        </React.Fragment>
                    ) : (
                        <Menu.Menu position="right">
                            <Link to="/faq">
                                <Responsive as={Menu.Item} minWidth={1050}>
                                    <Icon name="search" />
                                </Responsive>
                            </Link>

                            <Link to="/whatsapp">
                                <Responsive as={Menu.Item} minWidth={1050}>
                                    <Icon name="whatsapp" />
                                </Responsive>
                            </Link>

                            <Link to="/instagram">
                                <Responsive as={Menu.Item} minWidth={1050}>
                                    <Icon name="instagram" />
                                </Responsive>
                            </Link>

                            <Link to="/mail">
                                <Responsive as={Menu.Item} minWidth={1050}>
                                    <Icon name="mail outline" />
                                </Responsive>
                            </Link>
                            <IconDropDown />
                        </Menu.Menu>
                    )}
                    <Responsive as={Menu.Menu} maxWidth={789} position='right'>
                        <Dropdown
                            item
                            icon='bars'
                        >
                            <Dropdown.Menu>
                                <Link to="/"><Dropdown.Item text='Home' /></Link>
                                <Link to="/products"><Dropdown.Item text='Shop' /></Link>
                                <Link to="/gallery"><Dropdown.Item text='Gallery' /></Link>
                                <Link to="/blog"><Dropdown.Item text='Blog' /></Link>
                                <Link to="/contact-us"><Dropdown.Item text='Contact Us' /></Link>
                                <Link to="/profile"><Dropdown.Item text='My Profile' /></Link>
                                {authenticated ?
                                    (
                                        <>
                                            <Link to="/order-summary"><Dropdown.Item text='My Cart' /></Link>
                                            <Link to="/wishlist"><Dropdown.Item text='My Wishlist' /></Link>
                                        </>

                                    ) : (
                                        <>
                                            <Link to="/login"><Dropdown.Item text="Login" /></Link>
                                            <Link to="signup"><Dropdown.Item text='Sign Up' /></Link>
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