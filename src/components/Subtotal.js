import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Subtotal() {
        const [{ cart }, dispatch] = useStateValue();

        return (
                <div className="subtotal">
                        <div className="checkout_message">
                                <span className="checkIcon"><CheckCircleIcon /></span>
                                <p>Your order qualifies for FREE shipping (excludes remote locations). Choose this option at checkout. Details</p>
                        </div>

                        <CurrencyFormat
                                renderText={(value) => (
                                        <div className="checkout_total">
                                                <p>
                                                        Subtotal ({cart.length} items):
                                                        <strong>{value}</strong>
                                                </p>
                                                <small className="subtotal_gift">
                                                        <input type="checkbox" /> This order contains a gift
                                                </small>
                                        </div>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                        />
                        <button>Proceed to Checkout</button>
                </div>
        )
}

export default Subtotal;
