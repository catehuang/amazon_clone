import React from 'react';
import './Checkout_Product.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

function Checkout_Product({ id, image, title, price_sale, rating_global, rating }) {
        const [{ cart }, dispatch] = useStateValue();

        const removeFromCart = () => {
                dispatch({
                        type: 'REMOVE_FROM_CART',
                        id: id,
                })
        }

        return (
                <div className='checkout_product'>
                        <div className="checkout_product_image"><img src={image} /></div>
                        <div className="checkout_product_info">
                                <h4>{title}</h4>
                                <h4 className="type_of_book">Hardcover</h4>
                                <p className="available font_color_link">In Stock</p>
                                <p className="shipping_info">Ship from and sold by Amazon.ca</p>
                                <div className="isGift">
                                        <input type="checkbox" /> 
                                        <p>This will be a gift</p>
                                </div>

                                <button className="button_orange" onClick={removeFromCart}>Delete</button>
                        </div>
                        <CurrencyFormat
                                renderText={(value) => (
                                        <div className="checkout_product_price">
                                                <p>
                                                        <strong>{value}</strong>
                                                </p>
                                        </div>
                                )}
                                decimalScale={2}
                                fixedDecimalScale={true}
                                value={price_sale}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                        />
                </div>
        )
}

export default Checkout_Product;
