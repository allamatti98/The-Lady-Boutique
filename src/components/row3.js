import React from "react";
import { Grid, Header } from "semantic-ui-react";
import blouse from '../static/img/ProfilePic3.jpg'
import dress from '../static/img/Person7.webp'
import blackdress from '../static/img/Person13.jpg'
import { Image } from "semantic-ui-react";

const Row3 = () => (
    <div>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <Header style={{ fontSize: "3em" }} color='pink'>Popular at our Stores</Header>
                    <Header style={{ fontSize: "3em" }}>Top Categories</Header>
                    <p>Take the best care of both you and your wardrobe with our amazing categories.</p>
                    <br /><br /><br />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal'>
                <Grid.Column>
                    <a href="/"><Image src={blouse} style={{ height: "600px" }} centered /></a>
                </Grid.Column>
                <Grid.Column>
                    <a href="/"><Image src={dress} style={{ height: "600px" }} centered /></a>
                </Grid.Column>
                <Grid.Column>
                    <a href="/"><Image src={blackdress} style={{ height: "600px" }} centered /></a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
)
export default Row3