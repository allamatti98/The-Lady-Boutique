import React from 'react';
import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Card, Button, Icon, Label } from 'semantic-ui-react';
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
            image: "https://th.bing.com/th/id/R.642fb938541dfe069bdf141d6897960d?rik=s4lM4VepYvTovw&riu=http%3a%2f%2fpapers.co%2fwallpaper%2fpapers.co-hf71-victoria-secret-show-model-sexy-art-flare-34-iphone6-plus-wallpaper.jpg&ehk=rksvihGmxV8y1MZvOITXWdcKTZyDiwdhRdg8uBrG0%2bg%3d&risl=&pid=ImgRaw&r=0",
            category: "party",
            title: "White Dress",
            price: "150,000",
            oldprice: "300,000"
        },
        {
            _id: 2,
            image: "https://i.pinimg.com/736x/86/5d/3b/865d3bec1fb92e82ae87c10125f5faa8--elsa-hosk-angels.jpg",
            category: "chill",
            title: "Blouse",
            price: "90,000",
            oldprice: "300,000"
        },
        {
            _id: 3,
            image: "https://th.bing.com/th/id/R.ea87539fd43454a0b0fac68bd098527c?rik=Yh3hcJWTgvFP0g&pid=ImgRaw&r=0",
            category: "Dress",
            title: "Red Dress",
            price: "15000",
            oldprice: "300,000"
        },
        {
            _id: 4,
            image: "https://th.bing.com/th/id/OIP.JSb8-kUrPgVdeTg6KDowuAAAAA?pid=ImgDet&w=474&h=740&rs=1",
            category: "corporate",
            title: "Black Dress",
            price: "55,000",
            oldprice: "300,000"
        }
    ];

    return (
        <div className='content'>
            <div className='controls'>
                <button onClick={sliderRef?.slickPrev}>
                    <FaChevronLeft />
                </button>
                <button onClick={sliderRef?.slickNext}>
                    <FaChevronRight />
                </button>
            </div>
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
                        <a href="/"><div className="Item-cards-overlay">
                            <div className="category-pics-overlay-title">Show me</div>
                            <Icon name="long arrow alternate right" />
                            <div className="Item-Card-Items">
                                <div className="WishlistCardIcon">
                                    <Link to="/wishlist">
                                        {/*Not on Wishlist -> style={{ borderRadius: "50%" }} */}
                                        {/* On Wishlist style={{ borderRadius: "50%", color: "white", backgroundColor: "rgb(223, 16, 195)" }} */}
                                        {/* { wishlist === false ? (
                                         <Button icon className="WishlistCardIcon-button" size='huge'
                                         style={{ borderRadius: "50%", color: "white", backgroundColor: "rgb(223, 16, 195)" }}>
                                         <Icon name='heart outline' />
                                     </Button>
                                    ):(
                                        <Button icon className="WishlistCardIcon-button" size='huge' style={{ borderRadius: "50%" }}>
                                            <Icon name='heart outline' />
                                        </Button>
                                    )} */}


                                        <Button onClick={() => this.props.history.push(`/products/${card.id}`)} icon className="WishlistCardIcon-button" size='huge' style={{ borderRadius: "50%" }}>
                                            <Icon name='heart outline' />
                                        </Button>


                                    </Link>
                                </div>
                                <div className="BasketCardIcon">
                                    <Link to="/shop">
                                        <Button icon className="BasketCardIcon-button" size='huge' style={{ borderRadius: "50%", color: "white", backgroundColor: "rgb(223, 16, 195)" }}>
                                            <Icon name='shopping basket' />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div></a>

                        <Label as='a' color='red' ribbon>
                            Trending
                        </Label>
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
        </div>
    )
}
