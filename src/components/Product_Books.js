import React from 'react';
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
                                key: id,
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
                <div className="mx-auto bg-white pt-3">
                        <img className="object-contain h-52 w-52 mx-auto" src={image} alt="" />
                        <div className="grid grid-rows-2 mb-3 px-3">
                                <p className="pt-4">
                                        <span className="align-top">$</span>
                                        <span className="text-xl font-bold">{price_saleInteger}</span>
                                        <span className="align-top">{price_saleFraction}</span>
                                </p>

                                <p className="line-clamp-2 h-12">{title}</p>

                                <div className="">
                                        <div className="text-amber-500 inline pr-2">
                                                {Array(Math.floor(rating_global))
                                                        .fill()
                                                        .map((_, i) => (
                                                                <span className="">&#9733;</span>
                                                        ))}
                                        </div>
                                        <span className="text-sm">{ratingNumber}</span>
                                </div>
                        </div>
                        <button className="text-center bg-amber-200 w-full py-1 rounded hover:bg-amber-300" onClick={addToCart}>Add to Cart</button>
                        
                        
                </div>
        )
}

export default Product_Books;
