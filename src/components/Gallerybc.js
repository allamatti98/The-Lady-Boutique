import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const gallerysections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'Gallery', content: 'Gallery', active: true },
]

const GalleryBreadcrumbs = () => (
    <div style={{ paddingTop: "25%", paddingBottom: "5%" }}>
        <h1 style={{ fontFamily: "Tenor Sans", fontSize: "5em", color: '#d05278' }}>Gallery</h1>
        <Breadcrumb icon='right angle' sections={gallerysections} style={{
            display: "flex", justifyContent: "center", fontFamily: "Lato,sans-serif",
            alignItems: "center", color: "rgb(223, 16, 195)"
        }} />
        <br />
    </div>
)

export default GalleryBreadcrumbs