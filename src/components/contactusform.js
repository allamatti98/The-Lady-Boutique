import React from "react";
import { Grid, Header } from "semantic-ui-react";

const ContactUsForm = () => {
    return(
        <div>
            <Grid style={{padding:"2%"}} stackable>
                <Grid.Row column ="equal">
                    <Grid.Column width={8}></Grid.Column>
                    <Grid.Column width={8} style={{paddingRight:"100px"}}>
                    <Header style={{ fontSize: "2em" }} textAlign='left' color='pink'>Talk to us...</Header>
                    <Header style={{ fontSize: "5em" }} textAlign=''>Leave A Message</Header>
                    <p style={{fontSize: "2em" }}>It all comes down to the fact that we are ahead of the game.</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default ContactUsForm