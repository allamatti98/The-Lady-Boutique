import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Button, Card, Container, Dimmer, Form, Grid, Header, Icon, Image, Item, Label, Loader, Message, Segment, Select, Divider } from "semantic-ui-react";
import { productDetailURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";

class ProductDetail extends React.Component {
  state = {
    loading: false,
    error: null,
    formVisible: false,
    data: [],
    formData: {}
  };

  componentDidMount() {
    this.handleFetchItem();
  }

  handleToggleForm = () => {
    const { formVisible } = this.state;
    this.setState({
      formVisible: !formVisible
    });
  };

  handleFetchItem = () => {
    const {
      match: { params }
    } = this.props;
    this.setState({ loading: true });
    axios
      .get(productDetailURL(params.productID))
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  handleFormatData = formData => {
    // convert {colour: 1, size: 2} to [1,2] - they're all variations
    return Object.keys(formData).map(key => {
      return formData[key];
    });
  };

  handleAddToCart = slug => {
    this.setState({ loading: true });
    const { formData } = this.state;
    const variations = this.handleFormatData(formData);
    authAxios
      .post(addToCartURL, { slug, variations })
      .then(res => {
        this.props.refreshCart();
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  handleChange = (e, { name, value }) => {
    const { formData } = this.state;
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    this.setState({ formData: updatedFormData });
  };

  render() {
    const { data, error, formData, formVisible, loading } = this.state;
    const item = data;
    return (
      <Container>
        {error && (
          <Message
            error
            header="You have to be logged in to purchase this item."
          // content={JSON.stringify(error)}
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
        <Grid columns={2} divided stackable>
          <Grid.Row>
            <Grid.Column>
              <Card
                fluid
                // image={item.image}
                meta={
                  <React.Fragment>
                    <Image src={item.image}>
                    </Image>
                    <Label as='a'
                      color={
                        item.label === "Limited"
                          ? "red"
                          : item.label === "Trending"
                            ? "blue"
                            : "green"
                      }
                      ribbon>
                      {item.label}
                    </Label>
                    {/* {item.discount_price && (
                      <Label
                        color={
                          item.label === "primary"
                            ? "blue"
                            : item.label === "secondary"
                              ? "green"
                              : "olive"
                        }
                      >
                        {item.label}
                      </Label>
                    )} */}
                  </React.Fragment>
                }
                // description={item.description}
                extra={
                  <React.Fragment>
                    <Button
                      fluid
                      color="yellow"
                      floated="right"
                      icon
                      labelPosition="right"
                      onClick={() => this.handleAddToCart(item.slug)}
                    >
                      Add to cart
                      <Icon name="cart plus" />
                    </Button>
                  </React.Fragment>
                }
              />
              {formVisible && (
                <React.Fragment>
                  <Divider />
                  {/* <Form onSubmit={() => this.handleAddToCart(item.slug)}>
                    {data.variations.map(v => {
                      const name = v.name.toLowerCase();
                      return (
                        <Form.Field key={v.id}>
                          <Select
                            name={name}
                            onChange={this.handleChange}
                            placeholder={`Select a ${name}`}
                            fluid
                            selection
                            options={v.item_variations.map(item => {
                              return {
                                key: item.id,
                                text: item.value,
                                value: item.id
                              };
                            })}
                            value={formData[name]}
                          />
                        </Form.Field>
                      );
                    })}
                    <Form.Button primary>Add</Form.Button>
                  </Form> */}
                </React.Fragment>
              )}
            </Grid.Column>
            <Grid.Column style={{ padding: "0px 0px", backgroundColor: "pink", height: "100%", textAlign: "center" }} stackable>
              <Header style={{ fontSize: "3em", marginTop: "5%" }} textAlign='center' color='pink'>{item.title}</Header>
              <Header style={{ fontSize: "2em", marginTop: "5%" }}>Category: {item.category}</Header>
              <Header style={{ fontSize: "2em" }}>Price: {item.price}</Header>
              <u><Header style={{ fontSize: "2em", marginTop: "10%" }}> Description</Header></u>
              <Header style={{ fontSize: "2em", padding: "0 10%" }}> {item.description}</Header>
              <br />
            </Grid.Column>

            {/* {data.variations &&
                data.variations.map(v => {
                  return (
                    <React.Fragment key={v.id}>
                      <Header as="h3">{v.name}</Header>
                      <Item.Group divided>
                        {v.item_variations.map(iv => {
                          return (
                            <Item key={iv.id}>
                              {iv.attachment && (
                                <Item.Image
                                  size="tiny"
                                  src={`http://127.0.0.1:8000${iv.attachment}`}
                                />
                              )}
                              <Item.Content verticalAlign="middle">
                                {iv.value}
                              </Item.Content>
                            </Item>
                          );
                        })}
                      </Item.Group>
                    </React.Fragment>
                  );
                })} */}
          </Grid.Row>
        </Grid>
        <br /><br />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ProductDetail)
);
