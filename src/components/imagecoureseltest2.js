import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";
import CustomDotGroup from "../components/CustomDotGroup";
import bt2 from '../static/img/Boutique2.jpg';
import bt3 from '../static/img/Boutique3.jpg';
import bt1 from '../static/img/Boutique1.jpg';




const ImageCarousel = () => (
    <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={3}
    >
        <Slider>
            <Slide tag="a" index={0}>
                <Image src="https://lorempixel.com/800/800/cats/0" />
            </Slide>
            <Slide tag="a" index={1}>
                <Image src="https://lorempixel.com/800/800/cats/1" />
            </Slide>
            <Slide tag="a" index={2}>
                <Image src="https://lorempixel.com/800/800/cats/2" />
            </Slide>
        </Slider>

        <Divider />
        <CustomDotGroup slides={3} />
    </CarouselProvider>
);

export default ImageCarousel;
