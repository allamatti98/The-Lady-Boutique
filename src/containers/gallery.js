import React from "react";
// import Gallery2 from "../components/PhotoGrid1";
import DynaFlex from "../components/DynamicPhotoGrid";
import Gallery1 from "../components/PhotoGrid1";
import NavBar from "../components/navbar";
import GalleryBreadcrumbs from "../components/Gallerybc";
import { Image, Segment, Loader, Dimmer, Message } from "semantic-ui-react";


class Gallery extends React.Component {
    state = { error: null, loading: false }
    render() {
        const { error, loading } = this.state
        return (
            <div>
                <div className="page-entrance">
                    <NavBar />
                    <GalleryBreadcrumbs />
                </div>
                <br /><br /><br /><br />
                {error && (
                    <Message
                        error
                        header="There was some errors with your submission"
                        content={JSON.stringify(error)}
                    />
                )}
                {loading && (
                    <Segment>
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>

                        <Image src="/images/wireframe/short-paragraph.png" />
                    </Segment>
                )}
                <DynaFlex />
                <br /><br />
            </div>
        )
    }
}
export default Gallery