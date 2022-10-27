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
                    <Image src={model1} style={{ width: "690px", objectFit: "cover" }} />
                    <a href="/"><div className="Gallery-Pics-overlay">
                        <div className="Gallery-Pics-Items">
                            <div className="Gallery-Instagram-Icon">
                                <Image src={play} />
                            </div>
                        </div>
                    </div></a>
                    {/* <YoutubeEmbed embedId="" /> */}
                </Grid.Column>
                <Grid.Column style={{ padding: "0px 0px", backgroundColor: "pink", }}>
                    <Header style={{ fontSize: "4em", fontFamily: "Mrs Saint Delafield" }} textAlign='center' color='pink'>Stay Ahead</Header>
                    <Header style={{ fontSize: "3.5em", fontFamily: "Tenor Sans" }} textAlign='center'>With Our Designer Threads</Header>
                    <p style={{ textAlign: "center", fontSize: "2em", fontFamily: "Lato,sans-serif" }}>It all comes down to the fact that we are ahead of the game.</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid stackable>
            <Grid.Row columns='equal' style={{ margin: "0px" }}>
                <Grid.Column style={{ padding: "170px 0px", margin: "0px", backgroundColor: 'pink' }}>
                    <Header style={{ fontSize: "4em", fontFamily: "Mrs Saint Delafield" }} textAlign='center' color='pink'>Who Are We?</Header>
                    <Header style={{ fontSize: "4em", fontFamily: "Tenor Sans" }} textAlign='center'>How do we do what we do?</Header>
                    <p style={{ textAlign: "center", fontSize: "2em", fontFamily: "Lato,sans-serif" }}>It all comes down to the fact that we are ahead of the game.</p>
                </Grid.Column>
                <Grid.Column style={{ padding: "0px 0px", margin: "0px" }}>
                    <Image src={cartoon} style={{ width: "690px", height: "800px", objectFit: "cover" }} />
                    <a href="/"><div className="Gallery-Pics-overlay">
                        <div className="Gallery-Pics-Items">
                            <div className="Gallery-Instagram-Icon">
                                <Image src={play} />
                            </div>
                        </div>
                    </div></a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
)
export default Row4