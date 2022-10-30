import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import blouse from '../static/img/ProfilePic3.jpg'
import dress from '../static/img/Person7.webp'
import blackdress from '../static/img/Person13.jpg'
import { Image } from "semantic-ui-react";

const Row3 = () => (
    <div>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <Header style={{ fontSize: "4em", fontFamily: "Mrs Saint Delafield" }} color='pink'>Popular at our Stores</Header>
                    <Header style={{ fontSize: "3em", fontFamily: "Tenor Sans" }}>Top Categories</Header>
                    <p style={{ fontSize: "1.8em", fontFamily: "Lato,sans-serif" }}>Take the best care of both you and your wardrobe with our amazing categories.</p>
                    <br /><br /><br />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal'>
                <Grid.Column className="Stock-category">
                    <Image className="Category-pics" src={blouse} centered />
                    <a href="/products"><div className="CategoryPics_overlay CategoryPics_overlay_blur">
                        <div className="category-pics-overlay-title">Blouses</div>
                        <p className="category-pics-overlay-text">Browse Products</p>
                        <Icon name="long arrow alternate right" />
                    </div></a>
                </Grid.Column >
                <Grid.Column className="Stock-category">
                    <Image className="Category-pics" src={dress} centered />
                    <a href="/products"><div className="CategoryPics_overlay CategoryPics_overlay_blur">
                        <div className="category-pics-overlay-title">Dresses</div>
                        <p className="category-pics-overlay-text">Browse Products</p>
                        <Icon name="long arrow alternate right" />
                    </div></a>
                </Grid.Column >
                <Grid.Column className="Stock-category">
                    <Image className="Category-pics" src={blackdress} centered />
                    <a href="/products"><div className="CategoryPics_overlay CategoryPics_overlay_blur">
                        <div className="category-pics-overlay-title">Skirts</div>
                        <p className="category-pics-overlay-text">Browse Products</p>
                        <Icon name="long arrow alternate right" />
                    </div></a>
                </Grid.Column >
            </Grid.Row>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div >
)
export default Row3