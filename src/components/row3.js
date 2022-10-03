import React from "react";
import { Grid, Header, Reveal } from "semantic-ui-react";
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
                    <a href="/">
                        <Reveal animated='small fade'>
                            <Reveal.Content visible>
                                <img src={blouse} style={{ height: "600px" }} centered />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <img src={dress} style={{ height: "600px" }} centered />
                            </Reveal.Content>
                        </Reveal>
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href="/">
                        <Reveal animated='small fade'>
                            <Reveal.Content visible>
                                <img src={dress} style={{ height: "600px" }} centered />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <img src={blouse} style={{ height: "600px" }} centered />
                            </Reveal.Content>
                        </Reveal>
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href="/">
                        <Reveal animated='small fade'>
                            <Reveal.Content visible>
                                <img src={blackdress} style={{ height: "600px" }} centered />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <img src={dress} style={{ height: "600px" }} centered />
                            </Reveal.Content>
                        </Reveal>
                    </a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
)
export default Row3