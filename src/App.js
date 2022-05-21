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

function App() {
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
