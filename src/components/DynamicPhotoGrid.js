import React, { Component } from "react";
import { Container, Card, Label, Icon, Button, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import bt1 from '../static/img/Boutique1.jpg'
import bt2 from '../static/img/Boutique2.jpg'
import bt3 from '../static/img/Boutique3.jpg'

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

class DynaFlex extends Component {
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
            <div>
                {/* <Grid stackable>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Image src={bt1} className="FacebookPics" />
                            <a href="/"><div className="Facebook-Pics-overlay">
                                <div className="Facebook-Pics-Items">
                                    <div className="Gallery-Facebook-Icon">
                                        <Icon name='facebook' size="huge" />
                                    </div>
                                </div>
                            </div></a>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={bt2} className="galleryPics" />
                            <a href="/"><div className="Facebook-Pics-overlay">
                                <div className="Facebook-Pics-Items">
                                    <div className="Gallery-Facebook-Icon">
                                        <Icon name='facebook' size="huge" />
                                    </div>
                                </div>
                            </div></a>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={bt3} className="galleryPics" />
                            <a href="/"><div className="Facebook-Pics-overlay">
                                <div className="Facebook-Pics-Items">
                                    <div className="Gallery-Facebook-Icon">
                                        <Icon name='facebook' size="huge" />
                                    </div>
                                </div>
                            </div></a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid> */}

                <Card.Group itemsPerRow={3}>
                    <Card height="100px">
                        <img
                            style={{ height: "100%", objectFit: "cover" }}
                            size="huge"
                            src={bt1}
                            wrapped
                            ui={false}
                        />
                        <a href="/"><div className="Gallery-Pics-overlay">
                            <div className="Gallery-Pics-Items">
                                <div className="Gallery-Instagram-Icon">
                                    <Icon name='facebook' size="huge" />
                                </div>
                            </div>
                        </div></a>
                    </Card>
                    <Card height="100px">
                        <img
                            style={{ height: "100%", objectFit: "cover" }}
                            size="huge"
                            src={bt2}
                            wrapped
                            ui={false}
                        />
                        <a href="/"><div className="Gallery-Pics-overlay">
                            <div className="Gallery-Pics-Items">
                                <div className="Gallery-Instagram-Icon">
                                    <Icon name='facebook' size="huge" />
                                </div>
                            </div>
                        </div></a>
                    </Card>
                    <Card height="100px">
                        <img
                            style={{ height: "100%", objectFit: "cover" }}
                            size="huge"
                            src={bt3}
                            wrapped
                            ui={false}
                        />
                        <a href="/"><div className="Gallery-Pics-overlay">
                            <div className="Gallery-Pics-Items">
                                <div className="Gallery-Instagram-Icon">
                                    <Icon name='facebook' size="huge" />
                                </div>
                            </div>
                        </div></a>
                    </Card>
                </Card.Group>
                <Card.Group itemsPerRow={4} doubling={true}>
                    {this.state.stockitems.map(card => (
                        <Card key={card._id} height="100px">
                            <img
                                style={{ height: "100%", objectFit: "cover" }}
                                size="huge"
                                src={card.image}
                                wrapped
                                ui={false}
                            />
                            <a href="/"><div className="Gallery-Pics-overlay">
                                <div className="Gallery-Pics-Items">
                                    <div className="Gallery-Instagram-Icon">
                                        <Icon name='instagram' size="huge" />
                                    </div>
                                </div>
                            </div></a>
                        </Card>
                    ))}
                </Card.Group>
                <Card.Group itemsPerRow={3}>
                    <Card height="100px">
                        <img
                            style={{ height: "100%", objectFit: "cover" }}
                            size="huge"
                            src={bt1}
                            wrapped
                            ui={false}
                        />
                        <a href="/"><div className="Gallery-Pics-overlay">
                            <div className="Gallery-Pics-Items">
                                <div className="Gallery-Instagram-Icon">
                                    <Icon name='facebook' size="huge" />
                                </div>
                            </div>
                        </div></a>
                    </Card>
                    <Card height="100px">
                        <img
                            style={{ height: "100%", objectFit: "cover" }}
                            size="huge"
                            src={bt2}
                            wrapped
                            ui={false}
                        />
                        <a href="/"><div className="Gallery-Pics-overlay">
                            <div className="Gallery-Pics-Items">
                                <div className="Gallery-Instagram-Icon">
                                    <Icon name='facebook' size="huge" />
                                </div>
                            </div>
                        </div></a>
                    </Card>
                    <Card height="100px">
                        <img
                            style={{ height: "100%", objectFit: "cover" }}
                            size="huge"
                            src={bt3}
                            wrapped
                            ui={false}
                        />
                        <a href="/"><div className="Gallery-Pics-overlay">
                            <div className="Gallery-Pics-Items">
                                <div className="Gallery-Instagram-Icon">
                                    <Icon name='facebook' size="huge" />
                                </div>
                            </div>
                        </div></a>
                    </Card>
                </Card.Group>
                <Card.Group itemsPerRow={4} doubling={true}>
                    {this.state.stockitems.map(card => (
                        <Card key={card._id} height="100px">
                            <img
                                style={{ height: "100%", objectFit: "cover" }}
                                size="huge"
                                src={card.image}
                                wrapped
                                ui={false}
                            />
                            <a href="/"><div className="Gallery-Pics-overlay">
                                <div className="Gallery-Pics-Items">
                                    <div className="Gallery-Instagram-Icon">
                                        <Icon name='instagram' size="huge" />
                                    </div>
                                </div>
                            </div></a>
                        </Card>
                    ))}
                </Card.Group>

            </div>

        );
    };
    render() {
        return <Container>{this.renderItems()}</Container>;
    }
}
export default DynaFlex