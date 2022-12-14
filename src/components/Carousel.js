import React from 'react';
import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Card, Button, Icon, Label, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    const testdata = [
        {
            _id: 1,
            image: "https://th.bing.com/th/id/OIP.dFZu7OeYvw_ffpmEb9F5dgHaLf?pid=ImgDet&rs=1",
            category: "party",
            label: "New",
            title: "White Dress",
            price: "150,000",
            oldprice: "300,000"
        },
        {
            _id: 2,
            image: "https://i.pinimg.com/736x/86/5d/3b/865d3bec1fb92e82ae87c10125f5faa8--elsa-hosk-angels.jpg",
            category: "chill",
            label: "Limited",
            title: "Off Shoulder",
            price: "90,000",
            oldprice: "300,000"
        },
        {
            _id: 3,
            image: "https://th.bing.com/th/id/R.ea87539fd43454a0b0fac68bd098527c?rik=Yh3hcJWTgvFP0g&pid=ImgRaw&r=0",
            category: "Dress",
            label: "Trending",
            title: "Red Dress",
            price: "15000",
            oldprice: "300,000"
        },
        {
            _id: 4,
            image: "https://th.bing.com/th/id/OIP.JSb8-kUrPgVdeTg6KDowuAAAAA?pid=ImgDet&w=474&h=740&rs=1",
            category: "corporate",
            label: "Limited",
            title: "Black Dress",
            price: "55,000",
            oldprice: "300,000"
        }
    ];

    return (
        <div className='content'>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}>
                        <div className='quick-browse-controls'>
                            <button onClick={sliderRef?.slickPrev}>
                                <FaChevronLeft />
                            </button>

                        </div>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Slider ref={setSliderRef} {...sliderSettings}>
                            {testdata.map((card, index) => (
                                <Card key={index} className="fluid" height="200px">
                                    <img
                                        style={{ height: "550px", width: "100%", objectFit: "cover" }}
                                        size="huge"
                                        src={card.image}
                                        wrapped
                                        ui={false}
                                    />
                                    <a href="/products"><div className="Item-cards-overlay">
                                        <div className="category-pics-overlay-title">Shop Now</div>
                                        <Icon name="long arrow alternate right" />
                                        <div className="Item-Card-Items">
                                            <div className="WishlistCardIcon">
                                            </div>
                                        </div>
                                    </div></a>

                                    {card.label ? (
                                        <Label color={
                                            card.label === "Limited"
                                                ? "red"
                                                : card.label === "Trending"
                                                    ? "blue"
                                                    : "green"
                                        }
                                            tag>
                                            {card.label}
                                        </Label>
                                    ) : (<></>)}
                                    <Card.Content textAlign="center">
                                        {/* <span className='stockCategory'>{card.category}</span> */}
                                        <b style={{ fontFamily: "Tenor Sans", fontSize: "24px" }}>{card.title}</b>
                                        <Card.Description style={{ fontFamily: "Lato,sans-serif" }}>
                                            <del>Shs.{card.oldprice}</del>
                                            <p><b>Shs.{card.price}</b></p>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            ))}

                        </Slider>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <div className='quick-browse-controls'>
                            <button onClick={sliderRef?.slickNext}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
