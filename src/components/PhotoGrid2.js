import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import bt1 from '../static/img/Boutique1.jpg'
import bt2 from '../static/img/Boutique2.jpg'
import bt3 from '../static/img/Boutique3.jpg'
import event1 from '../static/img/Event1.jpg'
import event2 from '../static/img/Event2.jpg'
import event3 from '../static/img/Event3.webp'
import event4 from '../static/img/Event4.jpg'
import event5 from '../static/img/Event5.jpg'
import event6 from '../static/img/Event6.jpg'

const Gallery2 = () => (
    <Grid verticalAlign='middle' columns={4} centered>
        <Grid.Row>
            <Grid.Column>
                <Image src={event6} />
            </Grid.Column>
            <Grid.Column>
                <Image src={event4} />
                <br />
                <Image src={event3} />
            </Grid.Column>
            <Grid.Column>
                <Image src={event2} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default Gallery2