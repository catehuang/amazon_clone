import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { signOut } from 'firebase/auth'

function Header({ department }) {
        const [{ cart, user }, dispatch] = useStateValue();

        const handleAuthentication = () => {
                if (user) {
                        signOut(auth);
                }
        }

        return (
                <div className='header'>
                        { /* Logo */}
                        <Link to="/" className="header_link">
                                <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="" />
                        </Link>

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
                                        <img className="flagIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />
                                        <span className="subHeader_dropdownIcon">▼</span>
                                </div>

                                <div className="header_address">
                                        <div className="header_option">
                                                <span className="header_optionLineOne">Hello,</span>
                                                <span className="header_optionLineTwo"> {user ? user.email : 'Guest'}</span>
                                        </div>
                                </div>

                                <Link to={!user && "/login"} className="header_link" onClick={handleAuthentication}>
                                        <div className="header_option header_accounts_lists" >
                                                <span className="header_optionLineOne">Accounts & Lists </span>
                                                <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                                        </div>
                                </Link>

                                {/* orders */}
                                <Link to='/orders'  className="header_link">
                                        <div className="header_option header_return_orders">
                                                <span className="header_optionLineOne">Return</span>
                                                <span className="header_optionLineTwo">& Orders</span>
                                        </div>
                                </Link>

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
