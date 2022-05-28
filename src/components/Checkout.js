import React from 'react';
import './Checkout.css';
import Checkout_Nav from './Checkout_Nav';
import Checkout_Product from './Checkout_Product'
import Subtotal from './Subtotal';
import Header from './Header';
import SubHeader from './SubHeader';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Checkout() {
        const [{ cart, user }, dispatch] = useStateValue();

        return (
                <>
                        <div className="checkout">
                                <Header department="All" />
                                <SubHeader />
                                <Checkout_Nav />
                                <div className="checkout_container">
                                        <div className="checkout_ad">
                                                <div className="checkout_ad_image">
                                                        <img src="https://images-na.ssl-images-amazon.com/images/G/15/credit/img19/CBCC/detailpage/DP-Desktop-HeaderHand_NP-Unrec._CB466933401_.png" />
                                                </div>
                                                <div className="checkout_ad_info">
                                                        <p>You can get <span className="font_color_link">5% back at Amazon.ca</span>, grocery stores, and restaurants for 6 months upon approval for the <strong>Amazon.ca Rewards Mastercard.</strong>
                                                        </p>
                                                        <p>                                                       Welcome offer on first $3,000 in eligible purchase. See terms.
                                                        </p>
                                                </div>
                                                <div className="checkout_ad_button">
                                                        <button>Learn more</button>
                                                </div>
                                        </div>

                                        {cart?.length > 0 &&
                                                <div className="checkout_area">
                                                        <div className="checkout_item">
                                                                <div className="checkout_title_header">
                                                                        <div className="column1">
                                                                                <h2>Shopping Cart</h2>
                                                                        </div>
                                                                        <div className="column2">
                                                                                <p>price</p>
                                                                        </div>
                                                                </div>

                                                                {cart.map(item => (
                                                                        <Checkout_Product
                                                                                key={item.id}
                                                                                id={item.id}
                                                                                title={item.title}
                                                                                image={item.image}
                                                                                price_sale={item.price_sale}
                                                                                rating_global={item.rating_global}
                                                                                rating={item.rating}
                                                                        />
                                                                ))}

                                                        </div>
                                                        <div className="checkout_right">
                                                                <Subtotal />
                                                        </div>
                                                </div>
                                        }

                                        {cart?.length == 0 &&
                                                <div className="checkout_empty_area">
                                                        <div className="checkout_empty_area_left">
                                                                <div className="checkout_empty_image">
                                                                        <img src="https://m.media-amazon.com/images/G/15/cart/empty/kettle-desaturated._CB424694027_.svg" alt="" />
                                                                </div>

                                                                <div className="checkout_empty_info">
                                                                        <h2>Your Amazon Cart is empty</h2>
                                                                        <h5 className="font_color_link">Shop today's deals</h5>
                                                                        {user?.email.length == null &&
                                                                                <div className="checkout_empty_buttons">
                                                                                        <Link to='/login'>
                                                                                                <div className="checkout_empty_button_sign_in">

                                                                                                        <button className="button_orange">Sign in your account</button>

                                                                                                </div>
                                                                                        </Link>
                                                                                        <Link to='/login'>
                                                                                                <div className="checkout_empty_button_sign_up">

                                                                                                        <button className="button_grey">Sign up now</button>

                                                                                                </div>
                                                                                        </Link>
                                                                                </div>
                                                                        }
                                                                </div>
                                                                <p></p>
                                                        </div>
                                                        <div className="checkout_right">
                                                                <Subtotal />
                                                        </div>
                                                </div>
                                        }
                                        <div className="checkout_announce_message">
                                                <p>The price and availability of items at Amazon.ca are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                                                </p>
                                                <p>
                                                        Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
                                                </p>
                                        </div>
                                </div>
                        </div>
                        <Footer />
                </>
        )
}

export default Checkout;
