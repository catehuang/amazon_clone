import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowDropDownTwoToneIcon from "@material-ui/icons/ArrowDropDownTwoTone";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Header({ department }) {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
    }
  };

  return (
    <div className="flex gap-2 bg-[#010b18] text-white px-3" >
      {/* Logo */}
      <div className="w-32 my-4 ml-2">
        <Link to="/">
                <p class="text-2xl font-extrabold font-serif text-amber-50">Amazon</p>
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
            alt="" 
          />*/}
        </Link>
      </div>

      {/* Search bar */}
      <div className="grow flex flex-row h-10 my-auto">
        <div className="py-2 border-gray-100 border-l rounded-l-xl  border-t border-b bg-gray-100 text-black">
          <span className="pl-3 pr-1">{department}</span>
          <ArrowDropDownTwoToneIcon />
        </div>
        <input className="grow p-3 border py-0 text-black" type="text" />
        <span className="py-2 px-3 border-amber-400 rounded-r-xl border-t border-r border-b bg-amber-400 text-black">
          <SearchIcon />
        </span>
      </div>

      {/* country */}
      <div className="mx-3 pt-4">
        <img
          className="object-scale-down max-w-5 max-h-5 pr-2 inline-flex"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png"
          alt=""
        />
        <ArrowDropDownTwoToneIcon />
      </div>

      <div className="mx-3 py-2 flex flex-col">
        <span>Hello,</span>
        <span> {user ? user.email : "Guest"}</span>
      </div>

      <Link to={!user && "/login"} onClick={handleAuthentication}>
        <div className="mx-3 py-2 flex flex-col active: text-white">
          <span>Accounts</span>
          <span>{user ? "Sign Out" : "Sign In"}</span>
        </div>
      </Link>

      {/* orders */}
      <Link to="/orders" className="hidden xl:inline-block">
        <div className="mx-3 py-2 flex flex-col active: text-white">
          <span>Return</span>
          <span>& Orders</span>
        </div>
      </Link>

      {/* shoppingcart */}
      <Link to="/checkout">
        <div className="ml-3 mr-5 pt-4 active: text-white">
          <ShoppingCartIcon />
          <span>{cart?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
