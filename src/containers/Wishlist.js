import React, { useEffect, useState } from 'react'
import { authAxios } from '../utils';
import { showwishlistURL, productListURL, deletewishlistitemURL } from '../constants';
import Wishie from '../components/Wishie';
import { Button, Icon, Card, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from 'styled-components';
import NavBar from "../components/navbar";
import WishListBreadcrumbs from '../components/WishListbc';


class Wishlist extends React.Component {
    state = { productList: [], wishList: [], wishNumber: undefined, data: [], error: null, wishlistPlus: [] };

    constructor(props) {
        super(props);
        this.showProductList();
        this.showWishList();
    }

    showProductList = () => {
        authAxios
            .get(productListURL)
            .then(res => {
                this.setState({ productList: res.data })
            })
            .catch(err => {
                this.setState({ error: err })
            })
    }

    showWishList = () => {
        authAxios
            .get(showwishlistURL)
            .then(res => {
                this.setState({ wishList: res.data });
            })
            .catch(err => {
                this.setState({ error: err });
            });

    }

    deleteFromWishList = (pk, id, e) => {
        e.preventDefault();
        //Delete form database
        authAxios
            .delete(deletewishlistitemURL(id), {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify({
                    'wished_item': id
                })
            })
            .then(res => {
                res.json()
            })
            .catch(err => {
                this.setState({ error: err })
            })

        //Delete form state
        const indexToDelete = this.state.wishList.findIndex((product) => {
            return product.id === id;
        })
        this.setState({
            wishList: this.state.wishList.filter((_, i) => i !== indexToDelete)
        });
    }

    wishNumberHandler = (event) => {
        authAxios
            .get(showwishlistURL + event.target.value)
            .then(res => {
                this.setState({ wishList: res.data });
            })
            .catch(err => {
                this.setState({ error: err })
            })
    }

    mergeLists = () => {
        const { wishList, productList, error, wishlistPlus } = this.State
        const mergeById = (a1, a2) =>
            a1.map(itm => ({
                ...a2.find((item) => (item.id === itm.user) && item),
                ...itm
            }));
        this.setState({ wishlistPlus: mergeById(wishList, productList) });
    }

    render() {
        const { wishList, productList, error, loading, wishlistPlus } = this.state;
        return (
            <div>
                <div className="page-entrance" style={{ margin: "0px" }}>
                    <NavBar />
                    <WishListBreadcrumbs />
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                {console.log(wishlistPlus)}
                <Header style={{ fontSize: "3.5em", textAlign: "center", color: '#d05278' }}>
                    <u> My Lady Bird Wishlist</u>
                </Header>
                <br /><br /><br />
                <Card.Group itemsPerRow={4} doubling={true}>
                    {productList.map(wish => {
                        return (
                            <Card key={wish.pk} className="fluid" height="400px">
                                <img
                                    style={{ height: "100%", objectFit: "cover", borderRadius: "10%" }}
                                    size="huge"
                                    src={wish.image}
                                    alt={wish.product_name}
                                    wrapped
                                    ui={false}
                                    as='a'
                                />
                                <div className="Wishlist-cards-overlay">
                                    <div className="Wishlist-cards-overlay-title"></div>
                                    <div className="Wishlist-Card-Items">
                                        <div className="Wishlist--BasketCardIcon">
                                            <Link to="/products">
                                                <Button icon
                                                    className="BasketCardIcon-button" size='huge'
                                                    style={{ borderRadius: "50%", color: "white", backgroundColor: "rgb(223, 16, 195)" }}>
                                                    <Icon name='shopping basket' />
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="Wishlist--Wishlist-Trash-CardIcon">
                                            <Button icon
                                                onClick={this.deleteFromWishList}
                                                className="WishlistCardIcon-button" size='huge' style={{ borderRadius: "50%" }}>
                                                <Icon name='trash alternate' />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </Card.Group>
                <br />
            </div>
        )
    }
}
export default Wishlist