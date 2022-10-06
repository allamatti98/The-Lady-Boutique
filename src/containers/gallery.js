import React from "react";
import Gallery2 from "../components/PhotoGrid1";
import NavBar from "../components/navbar";


class Gallery extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Gallery2 />
            </>
        )
    }
}
export default Gallery