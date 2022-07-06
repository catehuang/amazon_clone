import React from "react";
import Checkout_Nav from "./Checkout_Nav";
import Checkout_Product from "./Checkout_Product";
import Subtotal from "./Subtotal";
import Header from "./Header";
import SubHeader from "./SubHeader";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Checkout() {
        const [{ cart, user }, dispatch] = useStateValue();

        return (
                <>
                        <div className="bg-gray-200">
                                <Header department="All" />
                                <SubHeader />
                                <Checkout_Nav />
                                <div className="mx-10 mt-10">
                                        {/* Ad */}
                                        <div className="py-5 px-16 flex justify-between bg-white rounded">
                                                <img
                                                        className="w-24"
                                                        src="https://images-na.ssl-images-amazon.com/images/G/15/credit/img19/CBCC/detailpage/DP-Desktop-HeaderHand_NP-Unrec._CB466933401_.png"
                                                />

                                                <div className="my-auto">
                                                        <p>
                                                                You can get{" "}
                                                                <span className="text-cyan-700">5% back at Amazon.ca</span>,
                                                                grocery stores, and restaurants for 6 months upon approval for
                                                                the{" "}
                                                                <span className="font-bold">Amazon.ca Rewards Mastercard.</span>
                                                        </p>
                                                        <p>
                                                                Welcome offer on first $3,000 in eligible purchase. See terms.
                                                        </p>
                                                </div>
                                                <div className="my-auto">
                                                        <p className="px-5 py-1 border border-gray-300 bg-gray-200 w-full rounded text-sm">
                                                                Learn more
                                                        </p>
                                                </div>
                                        </div>

                                        {/* shopping list and subtotal : if shoppong cart is not empty */}
                                        <div className="flex gap-10">
                                                {cart?.length > 0 && (
                                                        <div className="grow bg-white mt-10 rounded p-5">
                                                                <div className="">
                                                                        <div className="pl-10 pr-16 flex justify-between pb-2">
                                                                                <p className="text-2xl font-bold">Shopping Cart</p>
                                                                                <p>price</p>
                                                                        </div>

                                                                        <div className="">
                                                                                {cart.map((item) => (
                                                                                        <Checkout_Product
                                                                                                key={item.id}
                                                                                                id={item.id}
                                                                                                title={item.title}
                                                                                                image={item.image}
                                                                                                price_sale={item.price_sale}
                                                                                                rating_global={item.rating_global}
                                                                                                rating={item.rating}
                                                                                        />
                                                                                ))}
                                                                        </div>
                                                                </div>
                                                        </div>
                                                )}

                                                {/* shopping list and subtotal : if shoppong cart is empty*/}
                                                {cart?.length == 0 && (
                                                        <div className="grow bg-white mt-10 rounded p-5">
                                                                <div className="flex flex-row">
                                                                        <img
                                                                                className="h-72"
                                                                                src="https://m.media-amazon.com/images/G/15/cart/empty/kettle-desaturated._CB424694027_.svg"
                                                                                alt=""
                                                                        />

                                                                        <div className="my-auto mx-auto">
                                                                                <p className="text-2xl font-bold">
                                                                                        Your Amazon Cart is empty
                                                                                </p>
                                                                                <Link to="/">
                                                                                        <p className="text-cyan-600 mt-2 mb-5">
                                                                                                Shop today's deals
                                                                                        </p>
                                                                                </Link>
                                                                                {user?.email.length == null && (
                                                                                        <div className="flex justify-around mx-auto">
                                                                                                <Link to="/login">
                                                                                                        <button className="border border-yellow-500 bg-amber-200 w-full rounded hover:bg-amber-300 py-1 px-4">
                                                                                                                Sign in your account
                                                                                                        </button>
                                                                                                </Link>
                                                                                                <Link to="/login">
                                                                                                        <button className="border border-gray-300 bg-white w-full rounded hover:bg-amber-300 py-1 px-4">
                                                                                                                Sign up now
                                                                                                        </button>
                                                                                                </Link>
                                                                                        </div>
                                                                                )}
                                                                        </div>
                                                                        <p></p>
                                                                </div>
                                                        </div>
                                                )}
                                                <div className="bg-white mt-10 rounded p-5 w-80 my-auto">
                                                        <Subtotal />
                                                </div>
                                        </div>

                                        <div className="pb-10 pt-5 text-sm">
                                                <p>
                                                        The price and availability of items at Amazon.ca are subject to
                                                        change. The shopping cart is a temporary place to store a list of
                                                        your items and reflects each item's most recent price.
                                                </p>
                                                <p>
                                                        Do you have a gift card or promotional code? We'll ask you to
                                                        enter your claim code when it's time to pay.
                                                </p>
                                        </div>
                                </div>
                        </div>
                        <Footer />
                </>
        );
}

export default Checkout;
