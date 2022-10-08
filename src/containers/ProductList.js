import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Container, Dimmer, Image, Item, Label, Loader, Message, Segment, Card, Icon, Button } from "semantic-ui-react";
import { productListURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import { Link } from "react-router-dom";



// class ProductList extends React.Component {
//   state = {
//     loading: false,
//     error: null,
//     data: []
//   };

//   componentDidMount() {
//     this.setState({ loading: true });
//     axios
//       .get(productListURL)
//       .then(res => {
//         this.setState({ data: res.data, loading: false });
//       })
//       .catch(err => {
//         this.setState({ error: err, loading: false });
//       });
//   }

//   handleAddToCart = slug => {
//     this.setState({ loading: true });
//     authAxios
//       .post(addToCartURL, { slug })
//       .then(res => {
//         this.props.refreshCart();
//         this.setState({ loading: false });
//       })
//       .catch(err => {
//         this.setState({ error: err, loading: false });
//       });
//   };

//   render() {
//     const { data, error, loading } = this.state;
//     return (
//       <Container>
//         {error && (
//           <Message
//             error
//             header="There was some errors with your submission"
//             content={JSON.stringify(error)}
//           />
//         )}
//         {loading && (
//           <Segment>
//             <Dimmer active inverted>
//               <Loader inverted>Loading</Loader>
//             </Dimmer>

//             <Image src="/images/wireframe/short-paragraph.png" />
//           </Segment>
//         )}
//         <Item.Group divided>
//           {data.map(item => {
//             return (
//               <Item key={item.id}>
//                 <Item.Image src={item.image} />
//                 <Item.Content>
//                   <Item.Header
//                     as="a"
//                     onClick={() =>
//                       this.props.history.push(`/products/${item.id}`)
//                     }
//                   >
//                     {item.title}
//                   </Item.Header>
//                   <Item.Meta>
//                     <span className="cinema">{item.category}</span>
//                   </Item.Meta>
//                   <Item.Description>{item.description}</Item.Description>
//                   <Item.Extra>
//                     {/* <Button
//                       primary
//                       floated="right"
//                       icon
//                       labelPosition="right"
//                       onClick={() => this.handleAddToCart(item.slug)}
//                     >
//                       Add to cart
//                       <Icon name="cart plus" />
//                     </Button> */}
//                     {item.discount_price && (
//                       <Label
//                         color={
//                           item.label === "primary"
//                             ? "blue"
//                             : item.label === "secondary"
//                               ? "green"
//                               : "olive"
//                         }
//                       >
//                         {item.label}
//                       </Label>
//                     )}
//                   </Item.Extra>
//                 </Item.Content>
//               </Item>
//             );
//           })}
//         </Item.Group>
//       </Container>
//     );
//   }
// }




class Trending extends React.Component {
  state = {
    loading: false,
    error: null,
    data: [],
    activeItem: 'shop'
  };

  componentDidMount() {
    this.setState({ loading: true });
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
                  <a><div className="Item-cards-overlay" onClick={() => this.props.history.push(`/products/${item.id}`)}>
                    <div className="category-pics-overlay-title">Show me</div>
                    <Icon name="long arrow alternate right" />
                    <div className="Item-Card-Items">
                      <div className="WishlistCardIcon">
                        <Link to="/wishlist">
                          <Button icon className="WishlistCardIcon-button" >
                            <Icon name='heart outline' />
                          </Button>
                        </Link>
                      </div>
                      <div className="BasketCardIcon">

                        <Button icon className="BasketCardIcon-button" onClick={() => this.props.history.push(`/products/${item.id}`)}>
                          <Icon name='shopping basket' />
                        </Button>

                      </div>
                    </div>
                  </div></a>
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
                    ):(<></>)}
                    
                  
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
