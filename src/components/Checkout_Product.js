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
                        <div className="checkout_product_image"><img  src={image} /></div>
                        <div className="checkout_product_info">
                                <p className="checkout_product_title">{title}</p>
                                <p className="type_of_book">Hardcover</p>
                                <p className="available">In Stock</p>
                                <p className="shipping_info">Ship from and sold by Amazon.ca</p>
                                <p className="isGift"><input type="checkbox" /> This will be a gift</p>
                                <button onClick={removeFromCart}>Delete</button>        
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
                                value={price_sale}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                        />
                </div>
        )
}

export default Checkout_Product;
