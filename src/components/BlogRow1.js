import React from "react";
import { Image, Grid, Header, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import event8 from '../static/img/Event8.jpg'
import event7 from '../static/img/Event7.jpg'

function BRow1() {
    return (
        <div>
            <Container text>
                <Header style={{ fontSize: "4em", textAlign: "center", color: '#d05278', fontFamily: "Mrs Saint Delafield" }}>
                    Lady Boutique Blog.
                </Header>
                <Header as="h3" style={{ fontSize: "2em", textAlign: "center", fontFamily: "Tenor Sans" }}>
                    Latest Feed from the biggest Boutique in the country.
                </Header>
                <p style={{ fontSize: "1.33em", textAlign: "center", fontFamily: "Lato,sans-serif" }}>
                    Steal the show... The Lady Boutique Wayyy!!!
                </p>
            </Container>
            <br /><br /><br />
            <Grid columns="equal" style={{ padding: "0em 6em", innerHeight: "100px" }} stackable>
                <Grid.Row textAlign="center">
                    <Grid.Column >
                        <Image src={event8} />
                        <Header as="h3" style={{ fontSize: "2em", fontFamily: "Mrs Saint Delafield" }}>
                            "The big brunch"
                        </Header>
                        <p style={{ fontSize: "1.5em", fontFamily: "Tenor Sans" }}>
                            Definately had a good time with the crew
                        </p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src={event7} />
                        <Header as="h3" style={{ fontSize: "2em", fontFamily: "Mrs Saint Delafield" }}>
                            "Corporate Dinner"
                        </Header>
                        <p style={{ fontSize: "1.5em", fontFamily: "Tenor Sans" }}>
                            "Did good for our taste buds"
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}
export default BRow1