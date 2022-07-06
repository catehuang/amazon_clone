import React from "react";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function Checkout_Product({
        id,
        image,
        title,
        price_sale,
        rating_global,
        rating,
        hideButton,
}) {
        const [{ cart }, dispatch] = useStateValue();

        const removeFromCart = () => {
                dispatch({
                        type: "REMOVE_FROM_CART",
                        id: id,
                });
        };

        return (
                <div>
                        <hr className="pb-5" />
                <div className="flex gap-5 pb-5 pl-10 pr-16">
                        <img className="h-40" src={image} />
                        <div className="grow flex flex-col justify-between">
                                <p className="font-bold">{title}</p>
                                <p className="">Hardcover</p>
                                <p className="text-xs text-cyan-700">In Stock</p>
                                <p className="text-xs">Ship from and sold by Amazon.ca</p>
                                <div className="flex">
                                        <input className="my-auto text-xs" type="checkbox" />
                                        <p className="pl-2 text-xs">This will be a gift</p>
                                </div>

                                {!hideButton && (
                                        <button
                                                className="text-sm border border-yellow-500 bg-amber-200 rounded hover:bg-amber-300 w-24 h-6"
                                                onClick={removeFromCart}
                                        >
                                                Delete
                                        </button>
                                )}
                        </div>
                        <CurrencyFormat
                                renderText={(value) => <p className="font-bold">{value}</p>}
                                decimalScale={2}
                                fixedDecimalScale={true}
                                value={price_sale}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                        />
                </div>
                </div>
        );
}

export default Checkout_Product;
