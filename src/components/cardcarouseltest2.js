import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";
import CustomCardSlide from "./cardslidetest2";
import CustomDotGroup from "./dotgrouptest2";
import bt2 from '../static/img/Boutique2.jpg';
import bt3 from '../static/img/Boutique3.jpg';
import bt1 from '../static/img/Boutique1.jpg';

const CardCarousel = () => (
    <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1.25}
        totalSlides={3}
        style={{ width: "300px", height: "400px" }}
    >
        <Slider>
            <CustomCardSlide
                image={bt2}
                index={0}
                header="Matthew House"
                meta="Friend"
            />
            <CustomCardSlide
                header="Elliot Baker"
                image={bt3}
                index={1}
                meta="Friend"
            />
            <CustomCardSlide
                header="Steve Sanders"
                image={bt1}
                index={2}
                meta="Friend"
            />
        </Slider>

        <CustomDotGroup slides={3} />
    </CarouselProvider>
);

export default CardCarousel;
