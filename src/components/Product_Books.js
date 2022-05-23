import React from 'react';
import './Product_Books.css';
import { useStateValue } from './StateProvider';

function Product_Books({ id, title, price_sale, image, rating_global, rating }) {
        const price_saleInteger = Math.floor(price_sale);
        const price_saleFraction = (price_sale - Math.floor(price_sale)).toFixed(2).substring(2);
        const numberFormat = new Intl.NumberFormat('en-US');
        const ratingNumber = numberFormat.format(rating);
        const [state, dispatch ] = useStateValue();
        const addToCart = () => (
                dispatch({
                        type: 'ADD_TO_CART',
                        item: {
                                id: id,
                                title: title,
                                image: image,
                                price_sale: price_sale,
                                rating_global: rating_global,
                                rating: rating,
                        },
                })
        );
        
        return (
                <div className="product">
                        <img src={image} alt="" />
                        <div className="product_info">
                                <p className="product_price">
                                        <span className="product_priceSymbol">$</span>
                                        <strong className="product_priceSale">{price_saleInteger}</strong>
                                        <span className="product_priceFraction">{price_saleFraction}</span>
                                </p>

                                <p className="product_title">{title}</p>

                                <div className="product_rating">
                                        <div className="product_rating_stars">
                                                {Array(Math.floor(rating_global))
                                                        .fill()
                                                        .map((_, i) => (
                                                                <span className="product_stars_solid">&#9733;</span>
                                                        ))}
                                        </div>
                                        <span className="product_ratingNumber">{ratingNumber}</span>
                                </div>
                        </div>
                        <button className="button_orange" onClick={addToCart}>Add to Cart</button>
                </div>
        )
}

export default Product_Books;
