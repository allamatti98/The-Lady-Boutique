import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const shopsections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'Shop', content: 'Shop', active: true },
]

const ShopBreadcrumbs = () => (
    <div style={{ paddingTop: "25%", paddingBottom: "5%" }}>
        <h1 style={{ fontFamily: "Tenor Sans", fontSize: "5em", color: '#d05278' }}>Shop</h1>
        <Breadcrumb icon='right angle' sections={shopsections} style={{
            display: "flex", justifyContent: "center", fontFamily: "Lato,sans-serif",
            alignItems: "center", color: "rgb(223, 16, 195)"
        }} />
    </div>
)
export default ShopBreadcrumbs