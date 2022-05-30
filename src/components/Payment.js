import React, { useState, useEffect } from 'react';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import Checkout_Product from './Checkout_Product';
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from './axios';
import { db } from './firebase';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

function Payment() {
        const [{ cart, user }, dispatch] = useStateValue();

        const stripe = useStripe();
        const elements = useElements();
        const navigate = useNavigate();

        const [succeeded, setSucceeded] = useState(false);
        const [processing, setProcessing] = useState("");
        const [error, setError] = useState(null);
        const [disabled, setDisabled] = useState(true);
        const [clientSecretNotString, setClientSecret] = useState("");

        const clientSecret = clientSecretNotString.toString();
        const shippingFee = 6.99;
        const tax = 0.05;
        const totalAmountOfItems = (Math.round(getCartTotal(cart) * 100)) / 100;

        useEffect(() => {
                const getClientSecret = async () => {
                        const response = await axios({
                                method: 'post',
                                // Stripe expects the total in a currencies subunits
                                // 10 USD => 1000 cents
                                //url: `/payments/create?total=${Math.round(getCartTotal(cart) * 100)}`
                                url: `/payments/create?total=${Math.round((totalAmountOfItems + shippingFee) * (1 + tax) * 100)}`
                        })
                        setClientSecret(response.data.clientSecret);
                        console.log(`URL = /payments/create?total=${Math.round((totalAmountOfItems + shippingFee) * (1 + tax) * 100)}`);
                }

                getClientSecret();
        }, [cart]);

        // console.log('THE SECRET IS >>>', clientSecret);
        
        const handleSubmit = async (event) => {
                event.preventDefault();
                setProcessing(true);

                const payload = await stripe.confirmCardPayment(clientSecret, {
                        payment_method: {
                                card: elements.getElement(CardElement)
                        }
                }).then(({ paymentIntent }) => {
/*   
                        //const orderCollection = collection(db, 'users', user?.uid, 'orders');
                        const orderRef = collection(db, 'users', user?.uid, 'orders');
                        
                        addDoc(orderRef, {
                                order_id: paymentIntent.id,
                                cart: cart,
                                amount: paymentIntent.amount,
                                created: paymentIntent.created
                        });


                        addDoc(orderCollection, {
                                payment_id: paymentIntent.id,
                                cart: cart,
                                amount: paymentIntent.amount,
                                created: paymentIntent.created
                        });
*/
                        setSucceeded(true);
                        setError(null);
                        setProcessing(false);

                        dispatch({
                                type: 'EMPTY_CART'
                        })

                        navigate('/orders', { replace: true });
                });
        }

        const handleChange = event => {
                setDisabled(event.empty);
                setError(event.error ? event.error.message : "");
        }

        return (
                <div className="payment">
                        <div className="payment_amazon_logo">
                                <Link to="/">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" />
                                </Link>
                                <Link to="/checkout">
                                        <h2 className="payment_checkout_message">Checkout ({cart?.length}) items</h2>
                                </Link>
                        </div>

                        <div className="payment_container">
                                <div className="payment_content">
                                        <div className="payment_address">
                                                <div className="payment_title">
                                                        <h3>Shipping address</h3>
                                                </div>
                                                <div className="payment_address">
                                                        <p>{user?.email}</p>
                                                        <p>123 Eau Claire Ave SW,</p>
                                                        <p>Calgary, AB T2P 5N4</p>
                                                </div>
                                        </div>
                                        <div className="payment_review_items">
                                                <div className="payment_title">
                                                        <h3>Review Items and Shipping</h3>
                                                </div>
                                                <div className="payment_items">
                                                        {cart.map(item => (
                                                                <Checkout_Product
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
                                        <div className="payment_method">
                                                <h3 className="payment_title" id="payment_method_area">Choose a payment method</h3>
                                                <form onSubmit={handleSubmit}>
                                                        <div className="payment_cardElement">
                                                                <CardElement onChange={handleChange} />
                                                        </div>

                                                        <div className="payment_priceContainer">
                                                                <CurrencyFormat
                                                                        renderText={(value) => (
                                                                                <h3 className="font_color_red">Order Total: ${Math.round((totalAmountOfItems + shippingFee) * (1 + tax) * 100) / 100}</h3>
                                                                        )}
                                                                        decimalScale={2}
                                                                        fixedDecimalScale={true}
                                                                        value={getCartTotal(cart)}
                                                                        displayType={"text"}
                                                                        thousandSeparator={true}
                                                                        prefix={"$"}
                                                                />
                                                                <button className="button_orange" disabled={processing || disabled || succeeded}>
                                                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                                                </button>
                                                        </div>
                                                        {error && <div>{error}</div>}
                                                </form>
                                        </div>
                                </div>
                                <div className="payment_order_summary">
                                        <div className="payment_order_summary_upper">
                                                <p className="button_orange button_buy_now">
                                                        <a href="#payment_method_area">Choose a payment method</a>
                                                </p>

                                                <p className="payment_order_summary_payment_info">Choose a payment method to continue checking out. You'll still have a chace to review your order before it's final.</p>
                                                <h3>Order Summary</h3>
                                                <div className="payment_order_summary_content">
                                                        <div className="payment_order_summary_item">
                                                                <p>Items:</p>
                                                                <p>Shipping & Handling:</p>
                                                                <p>Total before tax:</p>
                                                                <p>Estimated GST/HST:</p>
                                                                <p>Estimated PST/RST/QST:</p>
                                                        </div>
                                                        <CurrencyFormat
                                                                renderText={(value) => (
                                                                        <div className="payment_order_summary_fee">
                                                                                <p>${totalAmountOfItems}</p>
                                                                                <p>${shippingFee}</p>
                                                                                <p>${Math.round((totalAmountOfItems + shippingFee) * 100) / 100}</p>
                                                                                <p>${Math.round((totalAmountOfItems + shippingFee) * tax * 100) / 100}</p>
                                                                                <p>0.00</p>
                                                                        </div>
                                                                )}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                value={getCartTotal(cart)}
                                                                displayType={"text"}
                                                                thousandSeparator={true}
                                                                prefix={"$"}
                                                        />
                                                </div>
                                                <div className="payment_order_summary_total">
                                                        <h3 className="payment_order_summary_total_tile font_color_red">Order Total</h3>
                                                        <h3 className="payment_order_summary_total_fee font_color_red">${Math.round((totalAmountOfItems + shippingFee) * (1 + tax) * 100) / 100}</h3>
                                                </div>

                                        </div>
                                        <div className="payment_order_summary_bottom">
                                                <div>
                                                        <h5 className="payment_order_summary_shipping_info font_color_link">How are shipping costs calculated?</h5>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Payment;
