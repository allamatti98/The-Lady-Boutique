import React, { Component } from "react";
import { Container, Card, Image, Label, Icon } from "semantic-ui-react";


const dummyData = [
  {
    _id: 1,
    image: "https://picsum.photos/id/0/5616/3744",
    title: "Image 1",
    price: "55"
  },
  {
    _id: 2,
    image: "https://picsum.photos/id/10/2500/1667",
    title: "Image 2",
    price: "32"
  },
  {
    _id: 3,
    image: "https://picsum.photos/id/1001/5616/3744",
    title: "Image 3",
    price: "15"
  },
  {
    _id: 4,
    image: "https://picsum.photos/id/0/5616/3744",
    title: "Image 1",
    price: "55"
  }
];

export default class AdsList extends Component {
  constructor(props) {
    super(props);
    this.state = { ads: [] };
  }

  componentDidMount() {
    // For Testing
    this.setState({
      ads: dummyData
    });
  }

  renderItems = () => {
    return (
      <Card.Group itemsPerRow={4} stackable={true} doubling={true}>
        {this.state.ads.map(card => (
          <Card key={card._id} className="fluid">
            <Image
              // label={{
              //   color: "green",
              //   content: `${card.price}`,
              //   icon: "dollar",
              //   ribbon: 'right',
              //   size: "medium"
              // }}
              size="medium"
              src={card.image}
              wrapped
              ui={false}
            />
            <Label as='a' color='red' ribbon>
            Overview
            </Label>
            <Card.Content>
              <Card.Header>{card.title}</Card.Header>
              <Label attached="bottom right" color="blue">
                <Icon name="dollar" /> {card.price}
              </Label>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  };
  render() {
    return <Container>{this.renderItems()}</Container>;
  }
}