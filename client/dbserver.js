
require('dotenv').config(); //This Load environment variables

const express = require('express');
const { connectToDatabase } = require('./config/db.js');
const Subscriber = require('./models/Subscriber');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

connectToDatabase();

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // That Save email to the database using the existing Subscriber model
        const subscriber = new Subscriber({ email });
        await subscriber.save();

        res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
