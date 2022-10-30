import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const blogsections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'Wishlist', content: 'Wishlist', active: true },
]

const WishListBreadcrumbs = () => (
    <div style={{ paddingTop: "25%", paddingBottom: "5%" }}>
        <h1 style={{ fontFamily: "Tenor Sans", fontSize: "5em", color: '#d05278' }}>Wishlist</h1>
        <Breadcrumb icon='right angle' sections={blogsections} style={{
            display: "flex", justifyContent: "center", fontFamily: "Lato,sans-serif",
            alignItems: "center", color: "rgb(223, 16, 195)"
        }} />
        <br />
    </div>
)

export default WishListBreadcrumbs