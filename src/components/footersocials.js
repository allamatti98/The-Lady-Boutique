import React from "react";
import { Image } from "semantic-ui-react";
import insta from '../static/img/Instagram.png';
import whatsapp from '../static/img/WhatsApp.png';
import twitter from '../static/img/Twitter.png';
import facebook from '../static/img/Facebook3.png';

function FooterSocials() {
    return (
        <div style={{ border: "0px", margin: "0px", padding: '0px' }}>
            <Image.Group size='mini'>
                <a href="/whatsapp"><Image src={whatsapp} /></a>
                <a href="/instagram"><Image src={insta} /></a>
                <a href="/twitter"><Image src={twitter} /></a>
                <a href="/facebook"><Image src={facebook} /></a>
            </Image.Group>
        </div>
    )
}
export default FooterSocials