// @ts-nocheck
import React from 'react';
import './Header.css';
import amzonLogo from '../icons/amazon_ca.jpg';
import flag from '../icons/country.jpg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header({ department }) {
        const [{ cart, user }, dispatch] = useStateValue();

        const handleAuthentication = () => {
                if (user) {
                        auth.signOut();
                }
        }

        return (
                <div className='header'>
                        { /* Logo */}
                        <Link to="/" className="header_link">
                                <img className="header_logo" src={amzonLogo} alt="" />
                        </Link>

                        {/* Address */}
                        <div className="header_address">
                                <div className="header_option">
                                        <span className="header_optionLineOne">Hello, </span>
                                        <span className="header_optionLineTwo">
                                                {user ? user.email: 'Guest'}
                                        </span>
                                </div>
                        </div>

                        {/* Search bar */}
                        <div className="header_search">
                                <span className="header_search_category">
                                        {department}
                                        <ArrowDropDownTwoToneIcon className="header_dropdownIcon" />
                                </span>
                                <input className="header_searchInput" type="text" />
                                <span><SearchIcon className="header_searchIcon" /></span>
                        </div>

                        <div className="header_nav">
                                {/* country */}
                                <div className="header_optionCountry">
                                        <img className="flagIcon" src={flag} alt="" />
                                        <span className="subHeader_dropdownIcon">▼</span>
                                </div>

                                {/* account */}
                                <Link to={!user && "/login"} className="header_link" onClick={handleAuthentication}>
                                        <div className="header_option" >
                                                <span className="header_optionLineOne">{user ? 'Sign Out' : 'Sign In'}</span>
                                                <span className="header_optionLineTwo">
                                                        Account & Lists
                                                        <span className="subHeader_dropdownIcon">▼</span>
                                                </span>
                                        </div>
                                </Link>

                                {/* orders */}
                                <div className="header_option">
                                        <span className="header_optionLineOne">Return</span>
                                        <span className="header_optionLineTwo">& Orders</span>
                                </div>

                                {/* shoppingcart */}
                                <Link to="/checkout" className="header_link">
                                        <div className="header_option">
                                                <span className="header_optionLineOne header_cartCount">{cart?.length}</span>
                                                <ShoppingCartIcon className="header_optionCart" />
                                        </div>
                                </Link>
                        </div>
                </div>
        )
}

export default Header;
