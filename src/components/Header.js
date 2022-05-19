import React from 'react';
import './Header.css';
import amzonLogo from '../icons/amazon_ca.jpg';
import flag from '../icons/country.jpg';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';

function Header() {
        return (
                <div className='header'>
                        { /* Logo */}
                        <img className="header_logo" src={amzonLogo} />

                        {/* Address */}
                        <div className="header_address">
                                <div className="header_option">
                                        <span className="header_optionLineOne header_emptySpace">Hello</span>
                                        <span className="header_optionLineTwo">
                                                <LocationOnOutlinedIcon className="header_locationIcon" />
                                                Select your address
                                        </span>
                                </div>
                        </div>

                        {/* Search bar */}
                        <div className="header_search">
                                <span className="header_search_category">
                                        Books
                                        <ArrowDropDownTwoToneIcon className="header_dropdownIcon" />
                                </span>
                                <input className="header_searchInput" type="text" />
                                <span><SearchIcon className="header_searchIcon" /></span>
                        </div>

                        <div className="header_nav">
                                {/* country */}
                                <div className="header_optionCountry">
                                        <img className="flagIcon" src={flag} />
                                        <ArrowDropDownTwoToneIcon className="header_dropdownIcon" />
                                </div>

                                {/* account */}
                                <div className="header_option">
                                        <span className="header_optionLineOne">Hello, Sign in</span>
                                        <span className="header_optionLineTwo">
                                                Account & Lists
                                                <ArrowDropDownTwoToneIcon className="header_dropdownIcon" />
                                        </span>
                                </div>

                                {/* orders */}
                                <div className="header_option">
                                        <span className="header_optionLineOne">Return</span>
                                        <span className="header_optionLineTwo">& Orders</span>
                                </div>

                                {/* shoppingcart */}
                                <div className="header_option">
                                        <span className="header_optionLineOne header_cartCount">0</span>
                                        <ShoppingCartIcon className="header_optionCart" />
                                </div>
                        </div>
                </div>
        )
}

export default Header;
