const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const STRIPE_API_KEY=`${process.env.REACT_APP_STRIPE_SECRET_KEY}`;
const stripe = require('stripe')(STRIPE_API_KEY);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
        const total = request.query.total;

        //console.log(' Payment Request Recieved BOOM!! for this amount >>> ', total);

        const paymentIntent = await stripe.paymentIntents.create({
                amount: total, // subunit of the currency
                currency: "cad",
        });

        // OK - created
        response.status(201).send({
                clientSecret: paymentIntent.client_secret,
        });
});

// Listen command
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-7d302/us-central1/api