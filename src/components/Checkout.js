import React from 'react';
import './Checkout.css';
import Checkout_Nav from './Checkout_Nav';
import ad from '../icons/ad.jpg';
import Checkout_Product from './Checkout_Product'
import Subtotal from './Subtotal';
import Header from './Header';
import SubHeader from './SubHeader';
import { useStateValue } from './StateProvider';
import Footer from './Footer';

function Checkout() {
        const [{ cart, user }, dispatch] = useStateValue();

        return (
                <>
                        <div className="checkout">
                                <Header department="All" />
                                <SubHeader />
                                <Checkout_Nav />
                                <div className="checkout_container">
                                        <div className="checkout_ad"><img src={ad} /></div>

                                        <div className="checkout_area">
                                                <div className="checkout_item">
                                                        <div className="checkout_title_header">
                                                                <div className="column1"><h3>Shopping Cart</h3></div>
                                                                <div className="column2"><p>price</p></div>
                                                        </div>

                                                        {cart.map(item => (
                                                                <Checkout_Product
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
                                </div>
                        </div>
                        <Footer />
                </>
        )
}

export default Checkout;
