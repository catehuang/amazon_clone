// @ts-nocheck
import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

function Login() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();

        const signIn = e => {
                e.preventDefault();
                
                signInWithEmailAndPassword (auth, email, password)
                .then((userCredential) => {
                        console.log(userCredential);
                        const user = userCredential.user;

                        if (auth) {
                                navigate('/');
                        }
                })
                .catch((error) => alert(error.message))

        }

        const register = e => {
                e.preventDefault();

                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                        // it successfully created a new user with email and password
                        console.log(userCredential);
                        const user = userCredential.user;

                        if (auth) {
                                navigate('/');
                        }
                })
                .catch((error) => alert(error.message))
        }

        return (
                <div className="login">
                        <div className="login_container">
                                <Link to="/">
                                        <div className="login_amazon_logo">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" />
                                        </div>
                                </Link>
                                <form className="login_form">
                                        <h2>Sign-In</h2>

                                        <h5>E-mail address</h5>
                                        <input type="text" value={email} className="login_form_email" onChange={e => setEmail(e.target.value)} />

                                        <h5 className="login_form_password_info">Password</h5>
                                        <input type="password" value={password} className="login_form_password" onChange={e => setPassword(e.target.value)}/>

                                        <button type="submit" className="button_orange" onClick={signIn} >Login</button>

                                        <p className="login_form_agreement">By continuing, you agree to Amazon FAKE CLONE's Conditions of Use and Privacy Notice.</p>
                                        <p className="login_form_helper"><span className="login_form_triangle">▶</span>  Need help?</p>
                                </form>
                                <div className="login_for_new">
                                        <p className="login_line_break"><span>New to Amazon FAKE CLONE ?</span></p>
                                        <button className="button_grey" onClick={register}>Create your Amazon FAKE CLONE account</button>
                                </div>
                                <div className="login_footer">
                                        <div className="login_footer_link">
                                                <p>Condition of Use</p>
                                                <p>Privacy Notice</p>
                                                <p>Help</p>
                                        </div>

                                        <div className="login_footer_announcement">
                                                <p>&copy; 1996-2022, Amazon FAKE CLONE, Inc. of its affiliates</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Login;
