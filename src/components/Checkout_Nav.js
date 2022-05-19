import React from 'react';
import './Checkout_Nav.css';

function Checkout_Nav() {
        return (
                <div className="checkout_nav">
                        <div className="nav_option"><strong>Today's Deal</strong></div>
                        <div className="nav_option">Watched Deals</div>
                        <div className="nav_option">Outlet Deals</div>
                        <div className="nav_option">Warehouse Deals</div>
                        <div className="nav_option">Coupons</div>
                        <div className="nav_option">eBook Deals</div>
                        <div className="nav_option">Subscribe & Save</div>
                </div>
        )
}

export default Checkout_Nav;
