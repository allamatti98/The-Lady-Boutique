import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const blogsections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'Blog', content: 'Blog', active: true },
]

const BlogBreadcrumbs = () => (
    <div style={{ paddingTop: "8%", paddingBottom: "8%" }}>
        <h1 style={{ fontFamily: "Tenor Sans", fontSize: "5em", color: '#d05278' }}>Blog</h1>
        <Breadcrumb icon='right angle' sections={blogsections} style={{
            display: "flex", justifyContent: "center", fontFamily: "Lato,sans-serif",
            alignItems: "center", color: "rgb(223, 16, 195)"
        }} />
        <br />
    </div>
)

export default BlogBreadcrumbs