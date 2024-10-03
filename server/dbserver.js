

const express = require('express');
const { connectToDatabase } = require('./config/db.js'); 
const Subscriber = require('./models/subscriber.js');  
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());


const cors = require('cors');
app.use(cors({
    origin: 'https://crispshopping-mern-project-dushyant.vercel.app',
    methods: ['POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


connectToDatabase();


app.use(express.static(path.join(__dirname, '../client/build')));


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
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


