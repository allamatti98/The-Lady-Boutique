import React from "react";
import { Grid, Image, Header, Button } from "semantic-ui-react";
import cartoon from '../static/img/Person14.jpg'
import model1 from '../static/img/Vogue1.jpg'

const Row4 = () => (
    <Grid>
        <Grid.Row columns = 'equal'>
            <Grid.Column style = {{padding: "0px 0px"}}>
                <Image src={model1} style={{width: "690px"}}/>
            </Grid.Column>
            <Grid.Column style ={{padding: "170px 0px", backgroundColor: "pink"}}>
                <Header style={{fontSize: "4em"}} textAlign = 'center' color='pink'>Stay Ahead</Header>
                <Header style = {{fontSize: "4em"}} textAlign ='center'>With Our Designer Threads</Header>
                <p style={{textAlign: "center", fontSize: "2em"}}>It all comes down to the fact that we are ahead of the game.</p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns ='equal'>
            <Grid.Column style = {{padding: "170px 0px", margin: "0px", backgroundColor: 'pink'}}>
            <Header style={{fontSize: "4em"}} textAlign = 'center' color='pink'>Stay Ahead</Header>
                <Header style = {{fontSize: "4em"}} textAlign ='center'>With Our Designer Threads</Header>
                <p style={{textAlign: "center", fontSize: "2em"}}>It all comes down to the fact that we are ahead of the game.</p>
            </Grid.Column>
            <Grid.Column style = {{padding: "0px 0px", margin: "0px"}}>
            <Image src={cartoon} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)
export default Row4