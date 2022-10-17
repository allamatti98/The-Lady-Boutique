import React from 'react'
import pic2 from '../static/img/Boutique1.jpg'
import { Button, Grid, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Row2 = () => (
    <div>
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header as="h3" style={{ fontSize: "4em", color: '#d05278', fontFamily: "Mrs Saint Delafield" }}>
                        Discount
                    </Header>
                    <Header as="h3" style={{ fontSize: "5em", fontFamily: "Tenor Sans" }}>
                        Get a whooping
                    </Header>
                    <Header as="h3" style={{ fontSize: "5em", color: '#d05278', fontFamily: "Tenor Sans" }}>
                        40% Off
                    </Header>
                    <p style={{ fontSize: "2em", fontFamily: "Lato,sans-serif" }}>
                        Yes, that's right, you thought it was not real?
                    </p>
                    <p style={{ fontSize: "2em", fontFamily: "Lato,sans-serif" }}>
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
                    <br /><br />
                    <Link to="/products">
                        <Button size="huge" color='pink' >Take a Look</Button>
                    </Link>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>

)
export default Row2