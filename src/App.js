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

function App() {
        const [{}, dispatch] = useStateValue();
        useEffect(() => {
                // will only run once when the app component loads
                auth.onAuthStateChanged(authUser => {
                        console.log('The user is >>> ', authUser);

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
                                                <Route path="/checkout" element={<Checkout />}>
                                                </Route>
                                                <Route path="/books" element={<Books_Home />}>
                                                </Route>
                                                <Route path="/login" element={<Login />}></Route>                                                
                                                <Route path="/" element={<Home />}>
                                                </Route>
                                        </Routes>
                                </div>
                        </Router>
                </div>
        );
}

export default App;
