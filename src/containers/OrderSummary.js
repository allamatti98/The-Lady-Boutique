import React from "react";
import { Container, Dimmer, Header, Icon, Image, Label, Loader, Table, Button, Message, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { authAxios } from "../utils";
import { addToCartURL, orderSummaryURL, orderItemDeleteURL, orderItemUpdateQuantityURL } from "../constants";
import NavBar from "../components/navbar";
import OrderSummaryBreadcrumbs from "../components/OrderSummarybc";

class OrderSummary extends React.Component {
  state = {
    data: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.handleFetchOrder();
  }

  handleFetchOrder = () => {
    this.setState({ loading: true });
    authAxios
      .get(orderSummaryURL)
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: "You currently do not have an order",
            loading: false
          });
        } else {
          this.setState({ error: err, loading: false });
        }
      });
  };

  renderVariations = orderItem => {
    let text = "";
    orderItem.item_variations.forEach(iv => {
      text += `${iv.variation.name}: ${iv.value}, `;
    });
    return text;
  };

  handleFormatData = itemVariations => {
    // convert [{id: 1},{id: 2}] to [1,2] - they're all variations
    return Object.keys(itemVariations).map(key => {
      return itemVariations[key].id;
    });
  };

  handleAddToCart = (slug, itemVariations) => {
    this.setState({ loading: true });
    const variations = this.handleFormatData(itemVariations);
    authAxios
      .post(addToCartURL, { slug, variations })
      .then(res => {
        this.handleFetchOrder();
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  handleRemoveQuantityFromCart = slug => {
    authAxios
      .post(orderItemUpdateQuantityURL, { slug })
      .then(res => {
        this.handleFetchOrder();
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  handleRemoveItem = itemID => {
    authAxios
      .delete(orderItemDeleteURL(itemID))
      .then(res => {
        this.handleFetchOrder();
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    const { data, error, loading } = this.state;
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div >
        <div className="page-entrance" style={{ margin: "0px" }}>
          <NavBar />
          <OrderSummaryBreadcrumbs />
        </div>
        <br /><br /><br /><br /><br /><br /><br />
        <Container>
          {error && (
            <Message
              error
              header="There was an error"
            // content={JSON.stringify(error)}
            />
          )}
          {loading && (
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>

              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Segment>
          )}
          {data && (
            <div>
              <Header style={{ fontSize: "3.5em", textAlign: "center", color: '#d05278', fontFamily: "Mrs Saint Delafield" }}>
                My Order Summary
              </Header>
              {/* backgroundColor: "rgba(252,237,234,.9)" */}
              <Table celled style={{ backgroundColor: "pink" }}>
                <Table.Header >
                  <Table.Row >
                    <Table.HeaderCell style={{ backgroundColor: "pink", fontFamily: "Tenor Sans" }}>Item Number</Table.HeaderCell>
                    <Table.HeaderCell style={{ backgroundColor: "pink", fontFamily: "Tenor Sans" }}>Item Name</Table.HeaderCell>
                    <Table.HeaderCell style={{ backgroundColor: "pink", fontFamily: "Tenor Sans" }}>Item Price</Table.HeaderCell>
                    <Table.HeaderCell style={{ backgroundColor: "pink", fontFamily: "Tenor Sans" }}>Item Quantity</Table.HeaderCell>
                    <Table.HeaderCell style={{ backgroundColor: "pink", fontFamily: "Tenor Sans" }}>Total Item Price</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body style={{ fontFamily: "Tenor Sans" }}>
                  {data.order_items.map((orderItem, i) => {
                    return (
                      <Table.Row key={orderItem.id}>
                        <Table.Cell>{i + 1}</Table.Cell>
                        <Table.Cell>
                          {orderItem.item.title} {" "}
                          {this.renderVariations(orderItem)}
                        </Table.Cell>
                        <Table.Cell>Shs.{orderItem.item.price}</Table.Cell>
                        <Table.Cell textAlign="center">
                          <Icon
                            name="minus"
                            style={{ float: "left", cursor: "pointer" }}
                            onClick={() =>
                              this.handleRemoveQuantityFromCart(orderItem.item.slug)
                            }
                          />
                          {orderItem.quantity}
                          <Icon
                            name="plus"
                            style={{ float: "right", cursor: "pointer" }}
                            onClick={() =>
                              this.handleAddToCart(
                                orderItem.item.slug,
                                orderItem.item_variations
                              )
                            }
                          />
                        </Table.Cell>
                        <Table.Cell>
                          {orderItem.item.discount_price && (
                            <Label color="green">
                              ON DISCOUNT
                            </Label>
                          )}
                          Shs.{orderItem.final_price}
                          <Icon
                            name="trash"
                            color="red"
                            style={{ float: "right", cursor: "pointer" }}
                            onClick={() => this.handleRemoveItem(orderItem.id)}
                          />
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                  <Table.Row>
                    <Table.Cell />
                    <Table.Cell />
                    <Table.Cell />
                    <Table.Cell textAlign="right" colSpan="2">
                      <h4>Order Total: Shs.{data.total}</h4>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Footer>
                  <Table.Row >
                    <Table.HeaderCell colSpan="5" style={{ backgroundColor: "pink" }}>
                      <Link to="/checkout-form">
                        <Button floated="right" color="pink">
                          Checkout
                        </Button>
                      </Link>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
              <br /><br /><br /><br /><br /><br /><br />
            </div>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(OrderSummary);
