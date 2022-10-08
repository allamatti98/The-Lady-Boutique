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
        <div style={{display:"flex"}}>
            <div style={{ height:"30px"}}><img src={doll}/></div>
            <div style={{ height:"30px"}}><img src={doll}/></div>
            <div style={{ height:"30px"}}><img src={doll}/></div>
            <div style={{ height:"30px"}}><img src={doll}/></div>
            <div style={{ height:"30px"}}><img src={doll}/></div>
            <div style={{ height:"30px"}}><img src={doll}/></div>
        </div>
    )
}
export default InstaPics