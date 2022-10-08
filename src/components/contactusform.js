import React from "react";
import { Grid, Header, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ContactUsForm = () => {
    return (
        <div className="ContactUsMain">
            <Grid style={{ padding: "2%", margin:"0 0 3% 0" }} stackable>
                <Grid.Row column="equal">
                    <Grid.Column width={8}></Grid.Column>
                    <Grid.Column width={8} style={{ paddingRight: "100px" }}>
                        <Header style={{ fontSize: "2.5em", color:"white" }} textAlign='left'>Talk to us...</Header>
                        <Header style={{ fontSize: "5em" }} textAlign=''>Leave A Message</Header>
                        <p style={{ fontSize: "2em" }}>Tell us something, how our service is, maybe a suggestion to serve you better. Your opinion is our number priority.</p>
                        <Form >

                            <Form.Input placeholder='Enter your email address...' />
                            <Form.Input placeholder='Enter your contact' />
                            <Form.TextArea placeholder='Enter your message...' />
                            <Link to="/products">
                                <Button size="huge" color='pink' >Submit</Button>
                            </Link>


                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default ContactUsForm