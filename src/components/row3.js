import React from "react";
import { Grid, Header } from "semantic-ui-react";

const Row3 = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column textAlign = "center">
            <Header style = {{fontSize: "3em"}} color='pink'>Popular at our Stores</Header>
            <Header style = {{fontSize: "3em"}}>Top Categories</Header>
            <p>Take the best care of both you and your wardrobe with our amazing categories.</p>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)
export default Row3