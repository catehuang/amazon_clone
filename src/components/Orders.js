import React from 'react';
import './Orders.css';
import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';

function Orders() {
        return (
                <>
                        <Header department="All" />
                        <SubHeader />
                        <div className="orders">
                                <h1>Your order</h1>
                        </div>
                        <Footer />
                </>
        )
}

export default Orders;
