
// require('dotenv').config();     // Load from client .env
require('dotenv').config();
 // Load from server .env

const express = require('express');
const { connectToDatabase } = require('./config/db.js');  // Updated path
const Subscriber = require('./models/subscriber.js');  // Updated path
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: '*',  // Allow all origins, or specify the domain if needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to the database
connectToDatabase();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './build')));

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const subscriber = new Subscriber({ email });
        await subscriber.save();
        res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
    console.log(`Server running on port ${8000}`);
});