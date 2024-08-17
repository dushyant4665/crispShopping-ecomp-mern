

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const { connectToDatabase } = require('./config/db');




const app = express();
const cors = require('cors');
app.use(cors()); 



app.use(express.json());

// database
connectToDatabase();
process.env.MONGODB_URI
// Define routes here
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }


    try {
        // subscriber schema and model
        const subscriberSchema = new mongoose.Schema({
            email: { type: String, required: true },
        });

        const Subscriber = mongoose.model('Subscriber', subscriberSchema);

        // Save the email to the database
        const subscriber = new Subscriber({ email });
        await subscriber.save();

        res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT||8000 ;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
