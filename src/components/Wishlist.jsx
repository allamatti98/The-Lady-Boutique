import React from 'react';
import { Icon, Label, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Wishlist extends React.Component {
    render() {
        if (this.props.wishList) {
            this.wishList = this.props.wishList;
        }

        return (
            <div className="col-md-12">
                <form onSubmit={this.props.showWishList}>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="row row-border pt-2 pb-2">
                    <div className="col-md-2 col-lg-2 d-flex align-items-center">
                        <h5>My Wishlist</h5>
                    </div>
                    <Card.Group itemsPerRow={4} doubling={true}>
                        {this.wishList.map(wish => {
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
                                                    <Button icon onClick={this.props.deleteFromWishList.bind(this, wish.pk)}
                                                        className="BasketCardIcon-button" size='huge'
                                                        style={{ borderRadius: "50%", color: "white", backgroundColor: "rgb(223, 16, 195)" }}>
                                                        <Icon name='shopping basket' />
                                                    </Button>
                                                </Link>
                                            </div>
                                            <div className="Wishlist--Wishlist-Trash-CardIcon">
                                                <Button icon onClick={this.props.deleteFromWishList.bind(this, wish.pk)}
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
            </div>
        )
    }

}

export default Wishlist;