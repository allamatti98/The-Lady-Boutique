import React from "react";
import BRow1 from "../components/BlogRow1";
import Row2 from "../components/Row2";
import NewsLetter from "../components/Row7";
import BRow2 from "../components/BlogRow2";
import Row4 from "../components/Row4";
import NavBar from "../components/navbar";
import BlogBreadcrumbs from "../components/Blogbc";


class Blog extends React.Component {
    render() {
        return (
            <>
                <div className="page-entrance" style={{ margin: "0px" }}>
                    <NavBar />
                    <BlogBreadcrumbs />
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <BRow1 />
                <Row2 />
                <BRow2 />
                < Row4 />
                <NewsLetter />
                <br /><br /><br /><br /><br />
            </>
        )
    }
}
export default Blog