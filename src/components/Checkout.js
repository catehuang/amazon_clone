import React from 'react';
import './Checkout.css';
import Checkout_Nav from './Checkout_Nav';
import ad from '../icons/ad.jpg';

function Checkout() {
        return (
                <div>
                        <Checkout_Nav />
                        <div className="checkout_container">
                                <div className="ad"><img src={ad} /></div>

                        </div>
                </div>
        )
}

export default Checkout;
