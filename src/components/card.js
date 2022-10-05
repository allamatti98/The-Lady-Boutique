import React, { Component } from "react";
import { Container, Card, Label } from "semantic-ui-react";


const testdata = [
    {
        _id: 1,
        image: "https://th.bing.com/th/id/R.642fb938541dfe069bdf141d6897960d?rik=s4lM4VepYvTovw&riu=http%3a%2f%2fpapers.co%2fwallpaper%2fpapers.co-hf71-victoria-secret-show-model-sexy-art-flare-34-iphone6-plus-wallpaper.jpg&ehk=rksvihGmxV8y1MZvOITXWdcKTZyDiwdhRdg8uBrG0%2bg%3d&risl=&pid=ImgRaw&r=0",
        category: "party",
        title: "White Dress",
        price: "150,000",
        oldprice: "300,000"
    },
    {
        _id: 2,
        image: "https://i.pinimg.com/736x/86/5d/3b/865d3bec1fb92e82ae87c10125f5faa8--elsa-hosk-angels.jpg",
        category: "chill",
        title: "Blouse",
        price: "90,000",
        oldprice: "300,000"
    },
    {
        _id: 3,
        image: "https://th.bing.com/th/id/R.ea87539fd43454a0b0fac68bd098527c?rik=Yh3hcJWTgvFP0g&pid=ImgRaw&r=0",
        category: "Dress",
        title: "Red Dress",
        price: "15000",
        oldprice: "300,000"
    },
    {
        _id: 4,
        image: "https://th.bing.com/th/id/OIP.JSb8-kUrPgVdeTg6KDowuAAAAA?pid=ImgDet&w=474&h=740&rs=1",
        category: "corporate",
        title: "Black Dress",
        price: "55,000",
        oldprice: "300,000"
    }
];

class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = { stockitems: [] };
    }

    componentDidMount() {
        // For Testing
        this.setState({
            stockitems: testdata
        });
    }

    renderItems = () => {
        return (
            <Card.Group itemsPerRow={4} stackable={true} doubling={true}>
                {this.state.stockitems.map(card => (
                    <Card key={card._id} className="fluid" height="200px">
                        <img
                            style={{ height: "75%", objectFit: "cover" }}
                            size="huge"
                            src={card.image}
                            wrapped
                            ui={false}
                        />
                        <Label as='a' color='red' ribbon>
                            Trending
                        </Label>
                        <Card.Content textAlign="center">
                            <span className='stockCategory'>{card.category}</span>
                            <Card.Header>{card.title}</Card.Header>
                            <Card.Description>
                                <del>Shs.{card.oldprice}</del>
                                <p><b>Shs.{card.price}</b></p>
                            </Card.Description>
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
export default Trending