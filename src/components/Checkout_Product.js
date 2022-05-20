import React from 'react';
import './Checkout_Product.css';
import { useStateValue } from './StateProvider';

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
                        <div className="checkout_product_price">$ {price_sale}</div>
                </div>
        )
}

export default Checkout_Product;
