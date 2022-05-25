import './App.css';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Books_Home from './components/Books_Home';
import {
        BrowserRouter as Router,
        Routes,
        Route,
} from "react-router-dom";
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe ('pk_test_51L2PfuDPS4dF2ifLrzPZD0G23PEWfMW4tALkMdPTcgyUl5j2bO6OmXWqoaRyMHQFEYqfoVLtIZIiE8rigU1pLvac00Hgc1joB2');

function App() {
        const [{ }, dispatch] = useStateValue();
        useEffect(() => {
                // will only run once when the app component loads
                auth.onAuthStateChanged(authUser => {
                       // console.log('The user is >>> ', authUser);

                        if (authUser) {
                                // the user just logged in / the user was logged in
                                dispatch({
                                        type: 'SET_USER',
                                        user: authUser,
                                })
                        } else {
                                // the user is logged out
                                dispatch({
                                        type: 'SET_USER',
                                        user: null,
                                })
                        }
                })
        }, [])

        return (
                <div>
                        <Router>
                                <div className="App">
                                        <Routes>
                                                <Route path="/login" element={<Login />}></Route>
                                                <Route path="/books" element={<Books_Home />}></Route>
                                                <Route path="/checkout" element={<Checkout />}></Route>
                                                <Route path="/payment" element={
                                                        <Elements stripe={promise}>
                                                                <Payment />
                                                        </Elements>}>
                                                </Route>
                                                <Route path="/orders" element={<Orders />}></Route>
                                                <Route path="/" element={<Home />}></Route>
                                        </Routes>
                                </div>
                        </Router>
                </div>
        );
}

export default App;
