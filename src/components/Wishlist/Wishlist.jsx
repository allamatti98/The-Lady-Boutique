import React from 'react';
import './Wishlist.css';

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
                    {this.wishList.map(wish => {
                        return (
                            <div key={wish.pk} className="col-md-2 col-lg-2 mt-2 mb-2">
                                <div className="card text-center">
                                    <div className="card-body ">
                                        <button onClick={this.props.deleteFromWishList.bind(this, wish.pk)} className="btn btn-sm btn-outline-secondary d-flex">&#10006;</button>
                                        <img className="img-thumbnail img-tumbnail-clean" src={wish.image} alt={wish.product_name} />
                                    </div>
                                </div>
                                <Card.Group itemsPerRow={4} doubling={true}>
                                    {data.map(item => {
                                        return (
                                            <Card key={item._id} className="fluid" height="200px">
                                                <img
                                                    style={{ height: "75%", objectFit: "cover" }}
                                                    size="huge"
                                                    src={item.image}
                                                    wrapped
                                                    ui={false}
                                                    as='a'
                                                    alt="product"
                                                    onClick={() => this.props.history.push(`/products/${item.id}`)}
                                                />
                                                <div className="Item-cards-overlay">
                                                    <div className="category-pics-overlay-title"></div>
                                                    <Icon name="search" size='massive' onClick={() => this.props.history.push(`/products/${item.id}`)} />
                                                    <p className="Search-Icon-Text">Show Me</p>
                                                    <div className="Item-Card-Items">
                                                        <div className="WishlistCardIcon">
                                                            <Button icon onClick={this.addToWishList.bind(this, item.pk, item.stock_number)}
                                                                className="WishlistCardIcon-button" size='huge' style={{ borderRadius: "50%" }}>
                                                                <Icon name='heart outline' />
                                                            </Button>
                                                        </div>
                                                        <div className="BasketCardIcon">

                                                            <Button icon className="BasketCardIcon-button" size='huge' style={{ borderRadius: "50%", color: "white", backgroundColor: "rgb(223, 16, 195)" }}>
                                                                <Icon name='shopping basket' />
                                                            </Button>

                                                        </div>
                                                    </div>
                                                </div>
                                                {item.label ? (
                                                    <Label color={
                                                        item.label === "Limited"
                                                            ? "red"
                                                            : item.label === "Trending"
                                                                ? "blue"
                                                                : "green"
                                                    }
                                                        ribbon>
                                                        {item.label}
                                                    </Label>
                                                ) : (<></>)}


                                                <Card.Content textAlign="center">
                                                    {/* <span className='stockCategory'>{item.category}</span> */}
                                                    <Card.Header>{item.title}</Card.Header>
                                                    <Card.Description>
                                                        {item.discount_price ? (
                                                            <>
                                                                <del>Shs.{item.price}</del>
                                                                <p><b>Shs.{item.discount_price}</b></p>
                                                            </>
                                                        ) : (
                                                            <p><b>Shs.{item.price}</b></p>
                                                        )}
                                                    </Card.Description>
                                                </Card.Content>
                                            </Card>
                                        );
                                    })}

                                </Card.Group>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default Wishlist;