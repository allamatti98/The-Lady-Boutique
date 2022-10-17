import React, { useEffect, useState } from 'react'
import { authAxios } from '../utils';
import { showwishlistURL, productListURL } from '../constants';
import Wishie from '../components/Wishie';

class Wishlist extends React.Component {

    state = { productList: [], wishList: [], wishNumber: undefined, data: [], error: null };

    constructor(props) {
        super(props);
        this.showProductList();
        this.showWishList()
    }


    showProductList = () => {
        fetch(productListURL)
            .then(
                (response) => {
                    return response.json()
                })
            .then(
                (data) => {
                    this.setState({
                        productList: data
                    })
                    console.log(data)
                }
            )
            .catch(err => {
                this.setState({ error: err })
            })
    }

    showWishList = () => {
        authAxios
            .get(showwishlistURL)
            .then(
                (response) => {
                    return response.json()
                })
            .then(
                (data) => {
                    const wishListNew = data;
                    this.setState({
                        wishList: wishListNew
                    })
                    console.log(data)
                }
            )
            .catch(err => {
                this.setState({ error: err });
            });
    }



    wishNumberHandler = (event) => {
        authAxios
            .get(showwishlistURL + event.target.value)

            .then(
                (response) => {
                    return response.json()
                })
            .then(
                (data) => {
                    const wishListNew = data;
                    this.setState({
                        wishList: wishListNew
                    })
                }
            )
            .catch(err => {
                this.setState({ error: err })
            })

    }


    render() {
        return (
            <>
                <h1>Man...</h1>
                {/* <Wishie
                    wishList={this.state.wishList}
                    deleteFromWishList={this.deleteFromWishList}
                    wishNumber={this.state.wishNumber}
                /> */}
            </>
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