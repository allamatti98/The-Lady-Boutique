import React from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Greeting = () => (
    <div className="Landing">
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={8} style={{ marginTop: "15%" }}>
                    <Header as="h3" style={{ fontSize: "4em", color: '#d05278', fontFamily: "Mrs Saint Delafield" }}>
                        Outstanding
                    </Header>
                    <Header as="h3" style={{ fontSize: "5em", fontFamily: "Tenor Sans" }}>
                        Style & Fashion
                    </Header>
                    <p style={{ fontSize: "2em", fontFamily: "Tenor Sans" }}>
                        Yes, that's right, you thought it was not real?
                    </p>
                    <p style={{ fontSize: "2em", fontFamily: "Tenor Sans" }}>
                        Well, it is!!!
                    </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <br /><br />
                    <Link to="/products">
                        <Button size="huge" color='pink' >Take a Look</Button>
                    </Link>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>

)
export default Greeting