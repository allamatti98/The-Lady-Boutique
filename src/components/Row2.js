import React from 'react'
import pic2 from '../static/img/Boutique1.jpg'
import { Button, Grid, Header, Image } from 'semantic-ui-react'

const Row2 = () => (
    <div>
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header as="h3" style={{ fontSize: "4em", color: '#d05278' }}>
                        Discount
                    </Header>
                    <Header as="h3" style={{ fontSize: "5em" }}>
                        Get a whooping
                    </Header>
                    <Header as="h3" style={{ fontSize: "5em", color: '#d05278' }}>
                        40% Off
                    </Header>
                    <p style={{ fontSize: "2em" }}>
                        Yes, that's right, you thought it was not real?
                    </p>
                    <p style={{ fontSize: "2em" }}>
                        Well, it is!!!
                    </p>
                </Grid.Column>
                <Grid.Column floated="right" width={8}>
                    <Image
                        bordered
                        rounded
                        size="huge"
                        src={pic2}
                    />
                </Grid.Column>
            </Grid.Row>
            
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <Button size="huge" color='pink' >Take a Look</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>

)
export default Row2