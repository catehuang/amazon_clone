import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
        const navigate = useNavigate();
        const [{ cart }, dispatch] = useStateValue();

        return (
                <div className="subtotal">
                        <div className="subtotal_message">
                                <span className="subtotal_checkIcon"><CheckCircleIcon /></span>
                                <p>Your order qualifies for FREE shipping (excludes remote locations). Choose this option at checkout. Details</p>
                        </div>

                        <CurrencyFormat
                                renderText={(value) => (
                                        <div className="subtotal_total">
                                                <div>
                                                        <p className="subtatol_item">Subtotal ({cart.length} items):</p>
                                                        <h3 className="subtatol_value">{value}</h3>
                                                </div>
                                                <p className="subtotal_gift">
                                                        <input type="checkbox" /> This order contains a gift
                                                </p>

                                                {value != '$0' &&
                                                <button className="button_orange" onClick={e => navigate('/payment')}>
                                                        Proceed to Checkout
                                                </button>
                                                }
                                                
                                                {value === '$0' &&
                                                <button className="button_disabled">
                                                        Proceed to Checkout
                                                </button>
                                                }
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
        )
}

export default Subtotal;
