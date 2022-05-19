import React from 'react';
import './SubHeader.css'
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';

function SubHeader() {
        return (
                <div className="subHeader">
                        <div className="subHeader_option">
                                <span className="subHeader_line">
                                        <MenuIcon className="subHeader_menuIcon" />
                                        All
                                </span>
                        </div>
                        <div className="subHeader_option">Best Sellers</div>
                        <div className="subHeader_option">Deal Store</div>
                        <div className="subHeader_option">Customer Service</div>
                        <div className="subHeader_option">New Releases</div>
                        <div className="subHeader_option">
                                <span className="subHeader_line">
                                        Prime
                                        <ArrowDropDownTwoToneIcon className="subHeader_dropdownIcon" />
                                </span>
                        </div>
                        <div className="subHeader_option">Fashion</div>
                        <div className="subHeader_option">Sell</div>
                        <div className="subHeader_option">Electronics</div>
                        <div className="subHeader_option">Home</div>
                        <div className="subHeader_option">Books</div>
                        <div className="subHeader_option">Amazon Outlet</div>
                        <div className="subHeader_option">Toys & Games</div>
                        <h3 className="subHeader_slogan">New deals everyday</h3>
                </div>
        )
}

export default SubHeader;
