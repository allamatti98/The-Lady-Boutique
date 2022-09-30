import React from 'react'
import { Button, Grid, Header, Image } from 'semantic-ui-react'

const Greeting = () => (
    <div>
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header as="h3" style={{ fontSize: "4em", color: '#d05278' }}>
                        Outstanding
                    </Header>
                    <Header as="h3" style={{ fontSize: "5em" }}>
                        Style & Fashion
                    </Header>
                    <p style={{ fontSize: "2em" }}>
                        Yes, that's right, you thought it was not real?
                    </p>
                    <p style={{ fontSize: "2em" }}>
                        Well, it is!!!
                    </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign="center">
                <br/><br/>
                    <Button size="huge" color='pink' >Take a Look</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>

)
export default Greeting