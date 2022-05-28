import React, { useState, useEffect } from 'react';
import './Orders.css';
import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import { useStateValue } from './StateProvider';
/*
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore/dist/firestore';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
*/
import Order from './Order';

function Orders() {
        const [{ cart, user }, dispatch] = useStateValue();
        const [orders, setOrders] = useState([]);

        useEffect(() => {
                if (user) {
                        {/**/}
                        /*
                        db
                        .collection('users')
                        .doc(user?.uid)
                        .collection('orders')
                        .orderBy('created', 'desc')
                        .onSnapshot(snapshot => {
                           setOrders(snapshot.docs.map(doc => ({
                             id: doc.id,
                             data: doc.data()
                           })))
                        })
                        
                        const ref = doc(db, 'users', user?.uid, 'orders');
                        const orderedOrders = query(ref, orderBy('created', 'desc'));
                        onSnapshot(orderedOrders, snapshot => {
                                setOrders(snapshot.docs.map(doc => ({
                                        id: doc.id,
                                        data: doc.data()
                                })))
                        })*/
                } else {
                        setOrders([])
                }
        }, [user])

        return (
                <>
                        <Header department="All" />
                        <SubHeader />
                        <div className='orders'>
                                <h1>Thank you, your order has been confirmed!</h1>

                                <div className='orders__order'>
                                        {orders?.map(order => (
                                                <Order order={order} />
                                        ))}
                                </div>
                        </div>
                        <Footer />
                </>
        )
}

export default Orders;
