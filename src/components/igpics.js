import React from "react";
import red from "../static/img/ProfilePic3.jpg";
import doll from '../static/img/Person14.jpg';
import black from '../static/img/Person7.webp';
import blackdress from '../static/img/Person13.jpg';
import { Image, Icon } from "semantic-ui-react";
import green from '../static/img/Model3.jpg'
import jacket from '../static/img/ProfilePic5.jpg'

function InstaPics() {
    return (
        <div className="FooterPics">
            <a href="/">
                <Image src={red} style={{ height: "300px", width: "225px", objectFit: "cover" }} />
                <div className="FooterPics-hover"><Icon name="instagram" /></div>
            </a>



            <a href="/"><Image src={doll} style={{ height: "300px", width: "225px", objectFit: "cover" }} /></a>
            <a href="/"><Image src={black} style={{ height: "300px", width: "225px", objectFit: "cover" }} /></a>
            <a href="/"><Image src={blackdress} style={{ height: "300px", width: "225px", objectFit: "cover" }} /></a>
            <a href="/"><Image src={green} style={{ height: "300px", width: "225px", objectFit: "cover" }} /></a>
            <a href="/"><Image src={jacket} style={{ height: "300px", width: "225px", objectFit: "cover" }} /></a>
        </div>
    )
}
export default InstaPics