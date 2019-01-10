import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import AccountInfo from './userInfo/AccountInfo';
import Checkout from './Checkout';

export default function App (props) {
    return (
        <Router>
            <div className="app">
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shopping-cart" component={Cart} />
                    <Route exact path="/account-info" component={AccountInfo} />
                    <Route exact path="/checkout" component={Checkout} />
                </main>
            </div>
        </Router>
    );
}