import React from 'react';
import './Books_Nav.css';

function Nav_Books() {
        return (
                <div className="books_nav">
                        <div className="nav_option"><strong>Books</strong></div>
                        <div className="nav_option">Advanced Search</div>
                        <div className="nav_option">Today's Deals</div>
                        <div className="nav_option">New Releases</div>
                        <div className="nav_option">Amazon Charts</div>
                        <div className="nav_option">Best Sellers & More</div>
                        <div className="nav_option">The Globe & Mail Best Sellers</div>
                        <div className="nav_option">New York Times Best Sellers</div>
                        <div className="nav_option">Best Books of the Month</div>
                        <div className="nav_option">Children's Books</div>
                        <div className="nav_option">Textbooks</div>
                        <div className="nav_option">Kindle Books</div>
                </div>
        )
}

export default Nav_Books;
