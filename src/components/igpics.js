import React from "react";
import red from "../static/img/ProfilePic3.jpg";
import doll from '../static/img/Person14.jpg';
import black from '../static/img/Person7.webp';
import blackdress from '../static/img/Person13.jpg';
import { Image, Reveal, Icon } from "semantic-ui-react";
import green from '../static/img/Model3.jpg'
import jacket from '../static/img/ProfilePic5.jpg'

function InstaPics() {
    return (
        <div className="FooterPics">
            <a href="/">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <img src={red} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <img src={doll} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                </Reveal>
            </a>
            <a href="/">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <img src={black} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <img src={doll} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                </Reveal>
            </a>
            <a href="/">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <img src={blackdress} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <img src={doll} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                </Reveal>
            </a>
            <a href="/">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <img src={green} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <img src={doll} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                </Reveal>
            </a>
            <a href="/">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <img src={jacket} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <img src={doll} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                </Reveal>
            </a>
            <a href="/">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <img src={red} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <img src={doll} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                    </Reveal.Content>
                </Reveal>
            </a>
        </div>
    )
}
export default InstaPics