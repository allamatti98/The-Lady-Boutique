import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const faqsections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'OrderSummary', content: 'Order Summary', active: true },
]

const ProfilePageBreadCrumbs = () => (
    <div style={{ paddingTop: "8%", paddingBottom: "8%" }}>
        <h1 style={{ fontFamily: "Tenor Sans", fontSize: "5em", color: '#d05278' }}>My Profile</h1>
        <Breadcrumb icon='right angle' sections={faqsections} style={{
            display: "flex", justifyContent: "center", fontFamily: "Lato,sans-serif",
            alignItems: "center", color: "rgb(223, 16, 195)"
        }} />
        <br />
    </div>
)

export default ProfilePageBreadCrumbs