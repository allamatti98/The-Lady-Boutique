import React, { Component } from "react";
import { Link } from "react-router-dom";
import { authAxios } from "../utils";
import { connect } from "react-redux";
import { Container, Dimmer, Image, Item, Label, Loader, Message, Segment, Card, Icon, Button } from "semantic-ui-react";
import { productListURL, addToCartURL, wishlistURL, showwishlistURL, userIDURL, deletewishlistitemURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import Wishlist from '../components/Wishlist.jsx';
import axios from "axios";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


class Trending extends React.Component {
  state = {
    loading: false, error: null, data: [], activeItem: 'shop', productList: [], wishList: [],
    wishNumber: undefined, userID: null
  };


  componentDidMount() {
    this.setState({ loading: true });
    this.handleFetchUserID();
    axios
      .get(productListURL)
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  }

  handleAddToCart = slug => {
    this.setState({ loading: true });
    authAxios
      .post(addToCartURL, { slug })
      .then(res => {
        this.props.refreshCart();
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };
  handleFetchUserID = () => {
    authAxios
      .get(userIDURL)
      .then(res => {
        this.setState({ userID: res.data.userID });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

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
        }
      )
      .then(err => {
        this.setState({ error: err })
      })
  }

  showWishList = () => {
    authAxios
      .get(showwishlistURL)
      .then(
        response => {
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

  addToWishList = (pk, stock_number, id, e) => {
    e.preventDefault();
    const { userID } = this.state
    authAxios
      .post(wishlistURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: "POST",
        user: userID,
        wished_item: id,
        body: JSON.stringify({
          'name': pk,
        }),
      })
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          console.log(data)
        }
      )

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

  render() {
    const { data, error, loading } = this.state;
    return (
      <div>
        <Container>
          {error && (
            <Message
              error
              header="There was some errors with your submission"
              content={JSON.stringify(error)}
            />
          )}
          {loading && (
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>

              <Image src="/images/wireframe/short-paragraph.png" />
            </Segment>
          )}

          <Card.Group itemsPerRow={4} doubling={true}>
            {data.map(item => {
              return (
                <Card key={item.id} className="fluid" height="200px">
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
                        <Button icon onClick={this.addToWishList.bind(this, item.pk, item.stock_number, item.id)}
                          className="WishlistCardIcon-button" size='huge' style={{ borderRadius: "50%" }}>
                          <Icon name='heart outline' />
                        </Button>
                      </div>
                      <div className="BasketCardIcon">

                        <Button icon onClick={() => this.props.history.push(`/products/${item.id}`)} className="BasketCardIcon-button" size='huge' style={{ borderRadius: "50%", color: "white", backgroundColor: "rgb(223, 16, 195)" }}>
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

          <Wishlist
            wishList={this.state.wishList}
            deleteFromWishList={this.deleteFromWishList}
            wishNumber={this.state.wishNumber}
          />
        </Container>
      </div>
    );
  }
}

// render() {
//   return <Container>{this.renderItems()}</Container>;
// }


const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};


export default connect(
  null,
  mapDispatchToProps
)(Trending);
