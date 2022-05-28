import React from 'react';
import './SubHeader.css'
import { Link } from "react-router-dom";

function SubHeader() {
        return (
                <div className="subHeader">
                        <div className="subHeader_option">
                                <span className="subHeader_line">
                                        <div className="subHeader_menuIcon">
                                                {/*Menu icon */}
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                        </div>
                                        All
                                </span>
                        </div>                        
                        <Link to="/books" className="subHeader_link">
                                <div className="subHeader_option"><p className="subHeader_active">Books</p></div>
                        </Link>
                        <div className="subHeader_option">Best Sellers</div>
                        <div className="subHeader_option">Deal Store</div>
                        <div className="subHeader_option subHeader_customer_service">Customer Service</div>
                        <div className="subHeader_option subHeader_new_release">New Releases</div>
                        <div className="subHeader_option subHeader_prime">
                                <span className="subHeader_line">
                                        Prime <span className="subHeader_dropdownIcon">▼</span> 
                                </span>
                        </div>
                        <div className="subHeader_option subHeader_fashion">Fashion</div>
                        <div className="subHeader_option subHeader_sell">Sell</div>
                        <div className="subHeader_option subHeader_electronics">Electronics</div>
                        <div className="subHeader_option subHeader_home">Home</div>
                        <div className="subHeader_option subHeader_amazon_outlet">Amazon Outlet</div>
                        <div className="subHeader_option subHeader_toys_games">Toys & Games</div>
                        <h4 className="subHeader_slogan">New deals everyday</h4>
                </div>
        )
}

export default SubHeader;
