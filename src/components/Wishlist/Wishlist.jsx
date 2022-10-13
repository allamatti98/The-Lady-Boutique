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
                                <div key={wish.pk} className="col-md-2 col-lg-2 mt-2 mb-2">
                                    <div className="card text-center">
                                        <div className="card-body ">
                                            <button onClick={this.props.deleteFromWishList.bind(this, wish.pk)} className="btn btn-sm btn-outline-secondary d-flex">&#10006;</button>
                                            <img className="img-thumbnail img-tumbnail-clean" height="300px" src={wish.image} alt={wish.product_name} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Card.Group>
                </div>
            </div>
        )
    }

}

export default Wishlist;