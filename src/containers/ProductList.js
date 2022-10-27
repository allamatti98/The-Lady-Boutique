import React, { Component } from "react";
import { Link } from "react-router-dom";
import { authAxios } from "../utils";
import { connect } from "react-redux";
import { Header, Menu, Container, Dimmer, Image, Item, Label, Loader, Message, Segment, Card, Icon, Button, Tab } from "semantic-ui-react";
import { productListURL, addToCartURL, wishlistURL, showwishlistURL, userIDURL, deletewishlistitemURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import Wishlist from '../components/Wishlist.jsx';
import Navbar from "../components/navbar";
import ShopBreadcrumbs from "../components/Shopbc";
import CatalogFilter from "../components/Catalog Filter";
import axios from "axios";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


class Trending extends React.Component {
  state = {
    loading: false, error: null, data: [], activeItem: 'shop', productList: [], wishList: [],
    wishNumber: undefined, userID: null, activePaneItem: '', filteredCatalog: []
  };

  handlePaneItemClick = (e, { name }) => {
    const { data, filteredCatalog } = this.state
    const filtered = data.filter((curdata) => {
      return curdata.category === name;
    })
    this.setState({ activePaneItem: name, filteredCatalog: filtered })
  }



  componentDidMount() {
    this.setState({ loading: true });
    this.handleFetchUserID();
    this.showWishList();
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
            productList: data, filteredCatalog: data
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

  addToWishList = (pk, stock_number, id, image_url, e) => {
    e.preventDefault();
    const { userID, wishList } = this.state
    const found = wishList.some(item => item.wished_item === id);
    if (!found) {
      authAxios
        .post(wishlistURL, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          method: "POST",
          user: userID,
          wished_item: id,
          image_url: image_url,
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
      alert("Product added to your wishlist. :D")
    } else {
      alert("Product is already in your Wishlist :)")
    }
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
    const { data, error, loading, productList, activePaneItem, filteredCatalog } = this.state;
    return (
      <div>
        <div className="page-entrance">
          <Navbar />
          <ShopBreadcrumbs />
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
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
          <div>
            <Container text>
              <Header as="h3" style={{ fontSize: "2.5em", textAlign: "center", fontFamily: "Tenor Sans", color: "#d05278" }}>
                Shop by mood
              </Header>
              <br />
            </Container>
            <Menu size='massive' secondary style={{ justifyContent: "center" }}>
              <Menu.Menu>
                <Menu.Item
                  name='Chill'
                  active={activePaneItem === 'Chill'}
                  onClick={this.handlePaneItemClick}
                  color='pink'
                />
                <Menu.Item
                  name='Corporate'
                  active={activePaneItem === 'Corporate'}
                  onClick={this.handlePaneItemClick}
                  color='pink'
                />
                <Menu.Item
                  name='Dinner'
                  active={activePaneItem === 'Dinner'}
                  onClick={this.handlePaneItemClick}
                  color='pink'
                />
                <Menu.Item
                  name='Party'
                  active={activePaneItem === 'Party'}
                  onClick={this.handlePaneItemClick}
                  color='pink'
                />
                <Menu.Item
                  name='Weather'
                  active={activePaneItem === 'Weather'}
                  onClick={this.handlePaneItemClick}
                  color='pink'
                />
                <Menu.Item
                  name='Accessories'
                  active={activePaneItem === 'Accessories'}
                  onClick={this.handlePaneItemClick}
                  color='pink'
                />
              </Menu.Menu>
            </Menu>
            <br /><br />
          </div>
          <Card.Group itemsPerRow={4} doubling={true}>
            {filteredCatalog.map(item => {
              return (
                <Card key={item.id} className="Product-List-Pics" height="200px">
                  <img
                    style={{ height: "75%", objectFit: "cover" }}
                    size="huge"
                    src={item.image_url}
                    wrapped
                    ui={false}
                    as='a'
                    alt="product"
                    onClick={() => this.props.history.push(`/products/${item.id}`)}
                  />
                  <div className="Product-List-cards-overlay">
                    <div className="Product-List-cards-overlay-title"></div>
                    <Icon name="search" size='massive' onClick={() => this.props.history.push(`/products/${item.id}`)} />
                    <p className="Product-List-Search-Icon-Text">Show Me</p>
                    <div className="Product-List-Item-Card-Items">
                      <div className="Product-List-WishlistCardIcon">
                        <Button icon onClick={this.addToWishList.bind(this, item.pk, item.stock_number, item.id, item.image_url)}
                          className="WishlistCardIcon-button" size='huge' style={{ borderRadius: "50%" }}>
                          <Icon name='heart outline' />
                        </Button>
                      </div>
                      <div className="Product-List-BasketCardIcon">
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
                    <Card.Header style={{ fontFamily: "Tenor Sans", fontSize: "24px" }}>{item.title}</Card.Header>
                    <Card.Description style={{ fontFamily: "Lato,sans-serif" }}>
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
        </Container>
        <br /><br /><br />
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
