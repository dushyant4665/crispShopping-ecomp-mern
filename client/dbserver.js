

const express = require('express');
const { connectToDatabase } = require('./config/db');
const bodyParser = require('body-parser');
const Subscriber = require('./models/subscriber');
require('dotenv').config();
const cors = require('cors');

// Load environment variables
const PORT = 6001 ;
const uri = process.env.MONGODB_URI; 

uri;

// Initialize the Express application
const app = express();


// Middleware 
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Connect to the database and start the server
connectToDatabase().then(() => {
    app.listen(5000, () => {
        console.log(`Server is running on port ${5000}`);
    });
});

// Subscription endpoint
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const subscriber = new Subscriber({ email });
        await subscriber.save();
        res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
        console.error('Error subscribing:', error);
        res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
});