import React from 'react';
import './SubHeader.css'
import { Link } from "react-router-dom";

function SubHeader() {
        return (
                <div className="subHeader">
                        <div className="subHeader_option">
                                <span className="subHeader_line">
                                        <div className="subHeader_menuIcon">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                        </div>
                                        All
                                </span>
                        </div>
                        <div className="subHeader_option">Best Sellers</div>
                        <div className="subHeader_option">Deal Store</div>
                        <div className="subHeader_option">Customer Service</div>
                        <div className="subHeader_option">New Releases</div>
                        <div className="subHeader_option">
                                <span className="subHeader_line">
                                        Prime <span className="subHeader_dropdownIcon">▼</span> 
                                </span>
                        </div>
                        <div className="subHeader_option">Fashion</div>
                        <div className="subHeader_option">Sell</div>
                        <div className="subHeader_option">Electronics</div>
                        <div className="subHeader_option">Home</div>
                        <Link to="/books" className="header_link">
                                <div className="subHeader_option">Books</div>
                        </Link>
                        <div className="subHeader_option">Amazon Outlet</div>
                        <div className="subHeader_option">Toys & Games</div>
                        <h4 className="subHeader_slogan">New deals everyday</h4>
                </div>
        )
}

export default SubHeader;
