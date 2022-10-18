import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'Shop', content: 'Shop', active: true },
]

const ShopBreadcrumbs = () => (
    <div style={{ paddingTop: "8%", paddingBottom: "8%" }}>
        <h1 style={{ fontFamily: "Tenor Sans", fontSize: "5em" }}>Shop</h1>
        <Breadcrumb icon='right angle' sections={sections} style={{
            display: "flex", justifyContent: "center", fontFamily: "Lato,sans-serif",
            alignItems: "center", color: "rgb(223, 16, 195)"
        }} />
    </div>
)

export default ShopBreadcrumbs
