import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import cartoon from '../static/img/Person14.jpg'
import model1 from '../static/img/Vogue1.jpg'

const Row4 = () => (
    <Grid>
        <Grid.Row columns = 'equal'>
            <Grid.Column>
                <Image src={model1} />
            </Grid.Column>
            <Grid.Column style ={{padding: "170px"}}>
                <Header style={{fontSize: "4em"}} textAlign = 'center' color='pink'>Stay Ahead</Header>
                <Header style = {{fontSize: "4em"}} textAlign ='center'>With Our Designer Threads</Header>
                <p style={{textAlign: "center", fontSize: "2em"}}>It all comes down to the fact that we are ahead of the game.</p>

            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Image src={cartoon} />
            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
        </Grid.Row>
    </Grid>
)
export default Row4