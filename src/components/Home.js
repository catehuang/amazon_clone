import React from 'react';
import './Home.css';
import Card from './Card';
import Header from './Header';
import SubHeader from './SubHeader';

function Home() {
        return (
                <>
                        <Header department="All" />
                        <SubHeader />
                        <div className="home">
                                <div className="home_container">
                                        <img className="home_image" src='https://m.media-amazon.com/images/I/61Q0SScedvL._SX3000_.jpg' alt="promotions" />
                                        <div className="home_category">
                                                <div>
                                                        <h2 className="home_categoryTitle">Best sellers</h2>
                                                        <strong className="link_seeMore">See more</strong>
                                                </div>
                                                <div className="home_row">
                                                        <Card
                                                                title='New movie: "The Contractor"'
                                                                image="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Movie/VIOA_2022_DashboardCard_379x304_POST_Final_noLocale_DOT0590._SY304_CB623347768_.jpg"
                                                                message="Watch now on Prime Video" />
                                                        <Card
                                                                title=""
                                                                image=""
                                                                message="" />
                                                        <Card
                                                                title=""
                                                                image=""
                                                                message="" />
                                                        <Card
                                                                title=""
                                                                image=""
                                                                message="" />
                                                        <Card
                                                                title=""
                                                                image=""
                                                                message="" />
                                                </div>
                                        </div>
                                        <div className="home_category">
                                                <div>
                                                        <h2 className="home_categoryTitle">Top rated</h2>
                                                        <strong className="link_seeMore">See more</strong>
                                                </div>
                                                <div className="home_row">
                                                        <Card
                                                                id="14575454"
                                                                title='Weight Loss by Gina - Spring/Summer 2022: Posts and Guidelines)'
                                                                price_sale={22.00}
                                                                image='https://images-na.ssl-images-amazon.com/images/I/61xPsfUSHCL._AC._SR360,460.jpg'
                                                                rating_global={4.5}
                                                                rating={41} />
                                                        <Card
                                                                id="11456784"
                                                                title="Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience"
                                                                price_sale={22.99}
                                                                image='https://m.media-amazon.com/images/I/91DNhLLmUOL._AC_UL320_.jpg'
                                                                rating_global={4.5}
                                                                rating={8885} />
                                                        <Card
                                                                id="12345678"
                                                                title='Dr. Seuss Beginner Book Collection'
                                                                price_sale={48.69}
                                                                image='https://images-na.ssl-images-amazon.com/images/I/81FxtWFGiiL._AC._SR360,460.jpg'
                                                                rating_global={5.0}
                                                                rating={17264} />
                                                        <Card
                                                                id="15465656"
                                                                title='Half Baked Harvest Every Day: Recipes for Balanced, Flexible, Feel-Good Meals: A Cookbook'
                                                                price_sale={26.52}
                                                                image='https://images-na.ssl-images-amazon.com/images/I/919VQ6lxLiL._AC._SR360,460.jpg'
                                                                rating_global={5.0}
                                                                rating={1314} />
                                                        <Card
                                                                id="19854254"
                                                                title='First 100 Words: A Padded Board Books'
                                                                price_sale={5.52}
                                                                image='https://images-na.ssl-images-amazon.com/images/I/71aMpgf078L._AC._SR360,460.jpg'
                                                                rating_global={4.5}
                                                                rating={30284} />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default Home;
