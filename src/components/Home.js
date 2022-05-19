import React from 'react';
import './Home.css';
import Product from './Product_Books';
import Header from './Header';
import SubHeader from './SubHeader';

function Home() {
        return (
                <div className="home">
                        <div className="home_container">
                                <img className="home_image" src='https://m.media-amazon.com/images/I/61Q0SScedvL._SX3000_.jpg' alt="promotions" />
                                <div className="home_category">
                                        <div>
                                                <h2 className="home_categoryTitle">Best sellers</h2>
                                                <strong className="link_seeMore">See more</strong>
                                        </div>
                                        <div className="home_row">
                                                <Product
                                                        id="14565878"
                                                        title='It Ends with Us: A Novel (Volume 1)'
                                                        price_sale={15.09}
                                                        image='https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL._AC._SR360,460.jpg'
                                                        rating_global={4.5}
                                                        rating={72291} />
                                                <Product
                                                        id="154873666"
                                                        title='Daily Timeboxing Planner: Daily Scrum, Time Block Journal, Productivity, To-Do List, Time Management'
                                                        price_sale={8.85}
                                                        image='https://images-na.ssl-images-amazon.com/images/I/61wb-o356nS._AC._SR360,460.jpg'
                                                        rating_global={3.5}
                                                        rating={11} />
                                                <Product
                                                        id="154873154"
                                                        title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones'
                                                        price_sale={21.66}
                                                        image='https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC._SR360,460.jpg'
                                                        rating_global={4.5}
                                                        rating={71143} />
                                                <Product
                                                        id="15445654"
                                                        title='Reminders of Him: A Novel'
                                                        price_sale={12.28}
                                                        image='https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC._SR360,460.jpg'
                                                        rating_global={4.5}
                                                        rating={76078} />
                                                <Product
                                                        id="12484321"
                                                        title='Verity'
                                                        price_sale={15.50}
                                                        image='https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC._SR360,460.jpg'
                                                        rating_global={4.5}
                                                        rating={57591} />
                                        </div>
                                </div>
                                <div className="home_category">
                                        <div>
                                                <h2 className="home_categoryTitle">Top rated</h2>
                                                <strong className="link_seeMore">See more</strong>
                                        </div>
                                        <div className="home_row">
                                                <Product
                                                        id="14575454"
                                                        title='Weight Loss by Gina - Spring/Summer 2022: Posts and Guidelines)'
                                                        price_sale={22.00}
                                                        image='https://images-na.ssl-images-amazon.com/images/I/61xPsfUSHCL._AC._SR360,460.jpg'
                                                        rating_global={4.5}
                                                        rating={41} />
                                                <Product
                                                        id="11456784"
                                                        title="Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience"
                                                        price_sale={22.99}
                                                        image='https://m.media-amazon.com/images/I/91DNhLLmUOL._AC_UL320_.jpg'
                                                        rating_global={4.5}
                                                        rating={8885} />
                                                <Product
                                                        id="12345678"
                                                        title='Dr. Seuss Beginner Book Collection'
                                                        price_sale={48.69}
                                                        image='https://images-na.ssl-images-amazon.com/images/I/81FxtWFGiiL._AC._SR360,460.jpg'
                                                        rating_global={5.0}
                                                        rating={17264} />
                                                <Product
                                                        id="15465656"
                                                        title='Half Baked Harvest Every Day: Recipes for Balanced, Flexible, Feel-Good Meals: A Cookbook'
                                                        price_sale={26.52}
                                                        image='https://images-na.ssl-images-amazon.com/images/I/919VQ6lxLiL._AC._SR360,460.jpg'
                                                        rating_global={5.0}
                                                        rating={1314} />
                                                <Product
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
        )
}

export default Home;
