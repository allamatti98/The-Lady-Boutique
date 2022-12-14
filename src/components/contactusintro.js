import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import insta from '../static/img/Instagram.png';
import whatsapp from '../static/img/WhatsApp.png';
import twitter from '../static/img/Twitter.png';
import facebook from '../static/img/Facebook3.png';


function ContactUsIntro() {
    return (
        <Grid style={{ padding: "8%", background: "pink", margin: "0 0 3% 0" }} stackable>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Header as="h3" style={{ fontSize: "2em", fontFamily: "Mrs Saint Delafield" }}>
                        We would love to hear from you.
                    </Header>
                    <p style={{ fontSize: "1em", fontFamily: "Lato,sans-serif" }}>
                        It's always a pleasure working with our clients and we would like to keep you up-to-date with new stock arrivals,
                        new trends and most of all, new ways to stay ahead of the rest.It's always a pleasure working with our clients and we would like to keep you up-to-date with new stock arrivals,
                        new trends and most of all, new ways to stay ahead of the rest.It's always a pleasure working with our clients and we would like to keep you up-to-date with new stock arrivals,
                        new trends and most of all, new ways to stay ahead of the rest.
                    </p>
                </Grid.Column >
                <Grid.Column width={4}>
                    <Header style={{ fontSize: "1.4em", fontFamily: "Mrs Saint Delafield" }}>We are just one click away...</Header>
                    <Image.Group size='mini'>
                        <a href="/whatsapp"><Image src={whatsapp} /></a>
                        <a href="/instagram"><Image src={insta} /></a>
                        <a href="/twitter"><Image src={twitter} /></a>
                        <a href="/facebook"><Image src={facebook} /></a>
                    </Image.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default ContactUsIntro