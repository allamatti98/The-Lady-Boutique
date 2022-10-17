import React, { useEffect, useState } from 'react'
import { authAxios } from '../utils';
import { showwishlistURL, productListURL } from '../constants';
import Wishie from '../components/Wishie';
import { Button, Icon, Card, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from 'styled-components';

class Wishlist extends React.Component {

    state = { productList: [], wishList: [], wishNumber: undefined, data: [], error: null };


    constructor(props) {
        super(props);
        this.showProductList();
        this.showWishList()
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
        return (
            <div>
                <h1> Wishlist</h1>
                {console.log(productList)}
                {console.log(wishList)}
                {wishList.map(wish => {
                    return (
                        <div key={wish.id} className="col-md-2 col-lg-2 mt-2 mb-2">
                            <div className="card text-center">
                                <div className="card-body ">
                                    {/* <button onClick={this.props.deleteFromWishList.bind(this, wish.pk)} className="btn btn-sm btn-outline-secondary d-flex">&#10006;</button> */}
                                    <img className="img-thumbnail img-tumbnail-clean" src={wish.image} alt={wish.product_name} />
                                    <p>{wish.added_date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
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