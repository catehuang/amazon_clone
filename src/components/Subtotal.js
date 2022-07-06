import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
        const navigate = useNavigate();
        const [{ cart }, dispatch] = useStateValue();

        return (
                <div className="p-3 my-auto">
                        <div className="flex text-xs">
                                <span className="text-green-700"><CheckCircleIcon /></span>
                                <p className="ml-3">Your order qualifies for FREE shipping (excludes remote locations). Choose this option at checkout. Details</p>
                        </div>

                        <CurrencyFormat
                                renderText={(value) => (
                                        <div className="pt-5 text-lg">
                                                <div className="flex gap-5">
                                                        <p className="">Subtotal ({cart.length} items):</p>
                                                        <p className="font-bold">{value}</p>
                                                </div>
                                                <p className="pb-5 text-sm">
                                                        <input type="checkbox" /> This order contains a gift
                                                </p>

                                                {value !== '$0.00' &&
                                                <button className="text-sm border border-yellow-500 bg-amber-200 w-full py-1 rounded hover:bg-amber-300" onClick={e => navigate('/payment')}>
                                                        Proceed to Checkout
                                                </button>
                                                }
                                                
                                                {value === '$0.00' &&
                                                <p className="text-sm text-center border border-gray-200 bg-gray-300 w-full py-2 rounded">
                                                        Proceed to Checkout
                                                </p>
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
