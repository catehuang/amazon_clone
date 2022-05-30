import React from 'react';
import './Banner.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
        const bannerImages = [
                'https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/Zjc1NTA4OGMt/Zjc1NTA4OGMt-OTdhZGU0ZGMt-w3000._CB649606010_.jpg',
                'https://m.media-amazon.com/images/I/81OD9jQpdtL._SX3000_.jpg',
                'https://m.media-amazon.com/images/I/61cSozkWFcL._SX3000_.jpg'
        ];

        const  bannerImage = bannerImages.map((image, i) => (
                <div className="banner" key={i}>
                        <img src={image} alt="" />
                </div>
        ));

        return (
                <Carousel
                                autoPlay
                                infiniteLoop
                                showIndicators={false}
                                showStatus={false}
                                showThumbs={false}
                                interval={5000}>

                                {bannerImage}
                </Carousel>
        )
}

export default Banner;
