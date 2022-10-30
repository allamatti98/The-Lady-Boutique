import React from "react";
import { Grid, Header, Form, Button, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ContactUsForm = () => {
    return (
        <div className="ContactUsMain">
            <Grid style={{ padding: "2%", margin: "0 0 3% 0" }} stackable>
                <Grid.Row column="equal">
                    <Grid.Column width={8}></Grid.Column>
                    <Grid.Column width={8} style={{ paddingRight: "100px" }}>
                        <Responsive minWidth={500}>
                            <Header style={{ fontSize: "2.5em", color: "white", fontFamily: "Lato,sans-serif" }} textAlign='left'>Talk to us...</Header></Responsive>
                        <Responsive minWidth={650}>
                            <Header style={{ fontSize: "5em", fontFamily: "Tenor Sans" }} textAlign=''>Leave A Message</Header>
                        </Responsive>
                        <Responsive minWidth={1100}>
                            <p
                                style={{ fontSize: "2em", fontFamily: "Lato,sans-serif" }}>Tell us something, how our service is, maybe a suggestion to serve you better. Your opinion is our number priority.</p>
                        </Responsive>

                        <Form >
                            <Form.Input placeholder='Enter your email address...' />
                            <Responsive minWidth={500}><Form.Input placeholder='Enter your contact' /></Responsive>
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