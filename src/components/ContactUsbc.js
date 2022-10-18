import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const contactsections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'ContactUs', content: 'ContactUs', active: true },
]

const ContactUsBreadcrumbs = () => (
    <div style={{ paddingTop: "8%", paddingBottom: "8%" }}>
        <h1 style={{ fontFamily: "Tenor Sans", fontSize: "5em", color: '#d05278' }}>Contact Us</h1>
        <Breadcrumb icon='right angle' sections={contactsections} style={{
            display: "flex", justifyContent: "center", fontFamily: "Lato,sans-serif",
            alignItems: "center", color: "rgb(223, 16, 195)"
        }} />
        <br />
    </div>
)

export default ContactUsBreadcrumbs