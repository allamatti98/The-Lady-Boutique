import React from "react";
import { Grid, Image, Header, Icon } from "semantic-ui-react";
import cartoon from '../static/img/Person14.jpg'
import model1 from '../static/img/Vogue1.jpg'
import play from '../static/img/playImage.png'
import YoutubeEmbed from "./Youtube1";

const Row4 = () => (
    <div>
        <Grid stackable>
            <Grid.Row columns='equal' style={{ margin: "0px" }}>
                <Grid.Column style={{ padding: "0px 0px" }}>
                    <YoutubeEmbed embedId="S3QH-ZriX7E" />
                </Grid.Column>
                <Grid.Column style={{ padding: "0px 0px", backgroundColor: "pink", }}>
                    <Header style={{ fontSize: "4em", fontFamily: "Mrs Saint Delafield" }} textAlign='center' color='pink'>Stay Ahead</Header>
                    <p style={{ textAlign: "center", fontSize: "2em", fontFamily: "Lato,sans-serif" }}>It all comes down to the fact that we are ahead of the game.</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid stackable>
            <Grid.Row columns='equal' style={{ margin: "0px" }}>
                <Grid.Column style={{ padding: "0px", margin: "0px", backgroundColor: 'pink' }}>
                    <Header style={{ fontSize: "4em", fontFamily: "Mrs Saint Delafield" }} textAlign='center' color='pink'>Who Are We?</Header>
                    <p style={{ textAlign: "center", fontSize: "2em", fontFamily: "Lato,sans-serif" }}>It all comes down to the fact that we are ahead of the game.</p>
                </Grid.Column>
                <Grid.Column style={{ padding: "0px 0px", margin: "0px" }}>
                    <YoutubeEmbed embedId="wafe6kDBb6c" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
)
export default Row4