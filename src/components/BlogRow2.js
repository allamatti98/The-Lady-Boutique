import React from 'react'
import event5 from '../static/img/Event5.jpg'
import { Button, Grid, Header, Image } from 'semantic-ui-react'

const BRow2 = () => (
    <div>
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column floated="right" width={8}>
                    <Image
                        bordered
                        rounded
                        size="huge"
                        src={event5}
                    />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Header as="h3" style={{ fontSize: "3.5em", color: '#d05278', fontFamily: "Mrs Saint Delafield" }}>
                        This Weekend...
                    </Header>
                    <Header as="h3" style={{ fontSize: "5em", fontFamily: "Tenor Sans" }}>
                        Get readyyy!!!!
                    </Header>
                    <p style={{ fontSize: "2em", fontFamily: "Lato,sans-serif" }}>
                        Meet and greet, At the beach
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>

)
export default BRow2