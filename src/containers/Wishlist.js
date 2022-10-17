import React, { useEffect, useState } from 'react'
import { authAxios } from '../utils';
import { showwishlistURL, productListURL } from '../constants';
import Wishie from '../components/Wishie';
import { Button, Icon, Card, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from 'styled-components';

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

    render() {
        const { wishList, productList, error, loading } = this.state;
        if (this.props.wishList) {
            this.wishList = this.props.wishList;
        }
        return (
            <div>
                <h1> Wishlist</h1>
                {console.log(productList)}
                {console.log(wishList)}

                <Card.Group itemsPerRow={4} doubling={true}>
                    {productList.map(wish => {
                        return (
                            <Card key={wish.pk} className="fluid" height="400px">
                                <img
                                    style={{ height: "90%", objectFit: "cover", borderRadius: "10%" }}
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
                                                // onClick={this.props.deleteFromWishList.bind(this, wish.pk, wish.id)}
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
            </div>
        )
    }
}
export default Wishlist

















// function Wishlist() {
//     // const [wishListItems, setWishlistItems] = useState([]);
//     // const [error, setError] = useState([null]);
//     useEffect(() => {
//         showWishList()
//     }, [])


//     const showWishList = () => {
//         authAxios
//             .get(showwishlistURL)
//             .then(
//                 response => {
//                     return response.json()
//                 })
//             .then(
//                 (data) => {
//                     console.log(data)
//                 }
//             )
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     // console.log(wishListItems)
//     return (
//         <div>Wishlist

//         </div>
//     )
// }

// export default Wishlist