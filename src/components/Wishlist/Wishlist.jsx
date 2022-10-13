import React from 'react';
import './Wishlist.css';
import { Icon, Label, Card, Button } from 'semantic-ui-react';

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
                                <Card key={wish.pk} className="fluid" height="200px">
                                    <img
                                        style={{ height: "75%", objectFit: "cover" }}
                                        size="huge"
                                        src={wish.image}
                                        alt={wish.product_name}
                                        wrapped
                                        ui={false}
                                        as='a'
                                    />
                                    <div className="Item-cards-overlay">
                                        <div className="category-pics-overlay-title"></div>
                                        <Icon name="search" size='massive' />
                                        <p className="Search-Icon-Text">Show Me</p>
                                        <div className="Item-Card-Items">
                                            <div className="BasketCardIcon">
                                                <Button icon onClick={this.props.deleteFromWishList.bind(this, wish.pk)} className="BasketCardIcon-button" size='huge' style={{ borderRadius: "50%", color: "white", backgroundColor: "rgb(223, 16, 195)" }}>
                                                    <Icon name='shopping basket' />
                                                </Button>
                                            </div>
                                            <div className="WishlistCardIcon">
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