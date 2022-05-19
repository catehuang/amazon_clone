import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Books_Home from './components/Books_Home';
import {
        BrowserRouter as Router,
        Routes,
        Route,
} from "react-router-dom";

function App() {
        return (
                <div>
                        <Header />
                        <SubHeader />
                        <Router>
                                <div className="App">
                                        <Routes>
                                                <Route path="/checkout" element={<Checkout />}>
                                                </Route>
                                                <Route path="/books" element={<Books_Home />}>
                                                </Route>
                                                <Route path="/" element={<Home />}>
                                                </Route>
                                        </Routes>
                                </div>
                        </Router>
                </div>
        );
}

export default App;
