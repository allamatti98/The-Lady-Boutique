import React from "react";
import pinky from '../static/img/Boutiquelogo1.jpg'
import kamba from '../static/img/Kamba1.png'
import logo from '../static/img/Logo.png'
import { Grid, Image, Header } from "semantic-ui-react";

const QualityControl = () => (
    <div>
    <Grid columns = 'equal' textAlign = 'center' style={{padding:"0px 140px"}} stackable>
        <Grid.Row>
            <Grid.Column>
                <Image src={pinky} style={{height: "200px", alignItems: "center"}} centered/>
                <Header>Majesty</Header>
                <i>At Lady Bird Boutique, we believe that women are very special and must be treated with care as they are majestic.</i>
            </Grid.Column>
            <Grid.Column>
                <Image src={kamba} style={{height: "200px"}} centered/>
                <Header>Class</Header>
                <i>Class is definately one of the building blocks of our boutique. We ensure only classy clothes get in and out of our stores.</i>
            </Grid.Column>
            <Grid.Column>
                <Image src={logo} style={{height: "200px", padding: "100px,100px"}} centered/>
                <Header>Quality</Header>
                <i>There is no doubt that Quality Control is something we do on a daily basis.</i>
            </Grid.Column>
        </Grid.Row>
    </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
)
export default QualityControl